// Thin wrapper around Pyodide (Python compiled to WebAssembly, running
// entirely in the visitor's browser — nothing is sent to a server).
//
// Loaded from a CDN below. Pyodide releases new versions over time; if the
// pinned version stops loading, check https://pyodide.org for the current
// one and update PYODIDE_VERSION.
const PYODIDE_VERSION = "0.26.4";
const PYODIDE_CDN_BASE = `https://cdn.jsdelivr.net/pyodide/v${PYODIDE_VERSION}/full/`;

let _pyodideLoaderScriptPromise = null;
let _pyodideInstancePromise = null;

function _loadPyodideScriptTag() {
  if (_pyodideLoaderScriptPromise) return _pyodideLoaderScriptPromise;
  _pyodideLoaderScriptPromise = new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = PYODIDE_CDN_BASE + "pyodide.js";
    script.onload = resolve;
    script.onerror = () => reject(new Error("Could not load Pyodide from the CDN. Check your internet connection."));
    document.head.appendChild(script);
  });
  return _pyodideLoaderScriptPromise;
}

async function getPyodide() {
  if (!_pyodideInstancePromise) {
    _pyodideInstancePromise = (async () => {
      await _loadPyodideScriptTag();
      // eslint-disable-next-line no-undef
      const pyodide = await loadPyodide({ indexURL: PYODIDE_CDN_BASE });
      return pyodide;
    })();
  }
  return _pyodideInstancePromise;
}

/**
 * Runs Python source code and returns captured stdout/stderr plus any
 * top-level exception message. Every call gets a fresh globals dict so
 * runs don't leak state into each other.
 */
async function runPython(code) {
  const pyodide = await getPyodide();
  let output = "";
  pyodide.setStdout({ batched: (s) => { output += s + "\n"; } });
  pyodide.setStderr({ batched: (s) => { output += s + "\n"; } });

  let errorMessage = null;
  try {
    const globals = pyodide.globals.get("dict")();
    await pyodide.runPythonAsync(code, { globals });
    globals.destroy();
  } catch (e) {
    errorMessage = (e && e.message) ? e.message : String(e);
  }
  return { output: output.replace(/\n$/, ""), errorMessage };
}

/**
 * Runs student code followed by a hidden check, isolated inside a
 * function so indentation/scoping mistakes in either block can't collide.
 * Returns { passed, output, errorMessage }.
 */
async function runPythonWithCheck(studentCode, checkCode) {
  const indent = (s) => s.split("\n").map((line) => "    " + line).join("\n");
  const wrapped = [
    "def __run_student():",
    indent(studentCode || "pass"),
    indent(checkCode || "pass"),
    "",
    "try:",
    "    __run_student()",
    "    print('__CHECK_PASSED__')",
    "except Exception as __e:",
    "    print('__CHECK_FAILED__:' + str(__e))"
  ].join("\n");

  const { output, errorMessage } = await runPython(wrapped);
  if (errorMessage) {
    return { passed: false, output, errorMessage };
  }
  const passed = output.includes("__CHECK_PASSED__");
  const visibleOutput = output
    .split("\n")
    .filter((line) => !line.startsWith("__CHECK_PASSED__") && !line.startsWith("__CHECK_FAILED__"))
    .join("\n");
  let failReason = null;
  const failLine = output.split("\n").find((line) => line.startsWith("__CHECK_FAILED__:"));
  if (failLine) failReason = failLine.replace("__CHECK_FAILED__:", "");
  return { passed, output: visibleOutput, errorMessage: failReason };
}

/**
 * Runs student code and checks its printed output against an expected
 * string (trimmed, exact match). Used for the simple print()-based
 * exercises in early stages, where "did it print the right thing" is
 * really all we're testing.
 */
async function runPythonAndCompareOutput(studentCode, expectedOutput) {
  const { output, errorMessage } = await runPython(studentCode);
  if (errorMessage) {
    return { passed: false, output, errorMessage };
  }
  const passed = output.trim() === expectedOutput.trim();
  return { passed, output, errorMessage: null };
}
