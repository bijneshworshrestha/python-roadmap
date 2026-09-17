// Full lesson content for Stage 1 — Python Fundamentals.
// This is the template stage: every other stage should follow this same
// shape (topics[] with explanation/example/exercise, plus a quiz[]).
window.STAGE_LESSON = {
  id: "stage-1",
  title: "Stage 1 — Python Fundamentals",
  intro: "Before writing real programs, you need the absolute basics: how to run code, how to store a value, and how to show output. This stage covers exactly that — nothing more.",
  topics: [
    {
      title: "Installing Python and setting up an editor",
      explanation: `
        <p>Python needs to be installed on your machine before anything else works. Two common editors people use are <strong>VS Code</strong> (free, lightweight, huge extension ecosystem) and <strong>PyCharm</strong> (more full-featured, built specifically for Python).</p>
        <p>This lesson page itself runs Python <em>in your browser</em> (via a project called Pyodide), so you can practice right here without installing anything yet — but for real projects later you'll want Python installed locally.</p>
        <p><strong>I don't have a way to verify which Python/VS Code versions are current as you're reading this</strong> — check <a href="https://www.python.org/downloads/" target="_blank" rel="noopener">python.org/downloads</a> for the current stable release before installing.</p>
      `,
      example: `print("Hello, world!")`,
      exercise: {
        prompt: "Write code that prints exactly: Hello, Python!",
        starter: `# Your code here\n`,
        expectedOutput: "Hello, Python!"
      }
    },
    {
      title: "Running scripts vs. using the interactive REPL",
      explanation: `
        <p>You can run Python two main ways: saving code in a <code>.py</code> file and running it (<code>python my_script.py</code>), or typing statements one at a time into the <strong>REPL</strong> (Read-Eval-Print Loop) — the interactive prompt you get from just typing <code>python</code> in a terminal.</p>
        <p>The REPL is great for quick experiments; scripts are how real programs are written and shared.</p>
      `,
      example: `x = 5\ny = 10\nprint(x + y)`,
      exercise: {
        prompt: "Create two variables, a = 7 and b = 3, and print their sum.",
        starter: `# Your code here\n`,
        expectedOutput: "10"
      }
    },
    {
      title: "Variables, assignment, and naming conventions",
      explanation: `
        <p>A variable is a name bound to a value with <code>=</code>. Python variable names conventionally use <strong>snake_case</strong> (lowercase words separated by underscores) — e.g. <code>user_age</code>, not <code>UserAge</code> or <code>userAge</code> (those styles are used in other contexts in Python, like class names, but not for ordinary variables).</p>
        <p>Names must start with a letter or underscore, can't contain spaces, and can't be a reserved keyword like <code>for</code> or <code>class</code>.</p>
      `,
      example: `first_name = "Ada"\nage = 30\nprint(first_name, age)`,
      exercise: {
        prompt: "Create a variable named city and set it to \"Berlin\", then print it.",
        starter: `# Your code here\n`,
        expectedOutput: "Berlin"
      }
    },
    {
      title: "Basic data types: int, float, str, bool",
      explanation: `
        <p>Python's core built-in types at this stage:</p>
        <ul>
          <li><code>int</code> — whole numbers: <code>5</code>, <code>-12</code></li>
          <li><code>float</code> — decimal numbers: <code>3.14</code>, <code>-0.5</code></li>
          <li><code>str</code> — text, in quotes: <code>"hello"</code> or <code>'hello'</code></li>
          <li><code>bool</code> — <code>True</code> or <code>False</code></li>
        </ul>
        <p>Use the built-in <code>type()</code> function to check a value's type.</p>
      `,
      example: `print(type(5))\nprint(type(3.14))\nprint(type("hi"))\nprint(type(True))`,
      exercise: {
        prompt: "Print the type of the value 9.5",
        starter: `# Your code here\n`,
        expectedOutput: "<class 'float'>"
      }
    },
    {
      title: "print() and input(), basic string formatting (f-strings)",
      explanation: `
        <p><code>print()</code> writes text to output. <code>input()</code> reads a line of text typed by the user (returned as a string) — note that in this browser-based runner, <code>input()</code> isn't interactive, so exercises here avoid it.</p>
        <p>An <strong>f-string</strong> (formatted string literal) lets you embed variables directly inside a string by prefixing it with <code>f</code> and wrapping the variable in curly braces:</p>
      `,
      example: `name = "Sam"\nscore = 95\nprint(f"{name} scored {score} points")`,
      exercise: {
        prompt: "Using an f-string, print: My favorite number is 7 (build it from a variable called favorite_number set to 7).",
        starter: `favorite_number = 7\n# Your code here\n`,
        expectedOutput: "My favorite number is 7"
      }
    },
    {
      title: "Comments and code readability (PEP 8 basics)",
      explanation: `
        <p>A <code>#</code> starts a comment — everything after it on that line is ignored by Python. Comments explain <em>why</em> code does something, not just what it does (the code itself already shows the "what").</p>
        <p><strong>PEP 8</strong> is Python's official style guide. A few of its most common conventions: use 4 spaces per indentation level (never tabs), keep lines under ~79–99 characters, and use snake_case for variables and functions.</p>
        <p>I'm not certain every detail of PEP 8 is unchanged since my training data — if you want the authoritative, current version, check <a href="https://peps.python.org/pep-0008/" target="_blank" rel="noopener">peps.python.org/pep-0008</a> directly.</p>
      `,
      example: `# This calculates the area of a circle\nradius = 4\narea = 3.14159 * radius ** 2\nprint(area)`,
      exercise: {
        prompt: "Add a comment above this line explaining what it does, then print the result unchanged.",
        starter: `total = 5 * 3\nprint(total)\n`,
        expectedOutput: "15"
      }
    }
  ],
  quiz: [
    {
      question: "What does print(type(4.0)) output?",
      choices: ["<class 'int'>", "<class 'float'>", "<class 'str'>", "4.0"],
      correctIndex: 1,
      explanation: "4.0 has a decimal point, so Python treats it as a float, even though it's a whole number value."
    },
    {
      question: "Which of these is idiomatic Python variable naming (PEP 8)?",
      choices: ["userAge", "UserAge", "user_age", "USER-AGE"],
      correctIndex: 2,
      explanation: "PEP 8 recommends snake_case for ordinary variable names."
    },
    {
      question: "What will this print? name = \"Lee\"; print(f\"Hi {name}\")",
      choices: ["Hi {name}", "Hi name", "Hi Lee", "An error"],
      correctIndex: 2,
      explanation: "f-strings substitute the variable's value into the string at the point where it's referenced in braces."
    },
    {
      question: "What does input() return?",
      choices: ["An integer", "A string", "A boolean", "Whatever type the user typed"],
      correctIndex: 1,
      explanation: "input() always returns a string — you have to convert it yourself (e.g. with int()) if you need a number."
    },
    {
      question: "What starts a comment in Python?",
      choices: ["//", "/* */", "#", "--"],
      correctIndex: 2,
      explanation: "Python uses # for single-line comments; there's no separate multi-line comment syntax (triple-quoted strings are sometimes used for that, but they're not technically comments)."
    }
  ]
};
