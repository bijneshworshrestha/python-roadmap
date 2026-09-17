window.STAGE_LESSON = {
  id: "stage-6",
  title: "Stage 6 — Files, Errors & Exceptions",
  intro: "Real programs deal with the outside world — files that might not exist, data that might be malformed, operations that might fail. This stage is about handling that gracefully.",
  topics: [
    {
      title: "Reading and writing text files",
      explanation: `
        <p>Open a file with <code>open(path, mode)</code> — <code>"r"</code> to read, <code>"w"</code> to write (overwriting), <code>"a"</code> to append. Prefer the <code>with</code> statement (covered later in this stage) so the file is always closed properly.</p>
        <p>Note: this lesson runs in an in-browser Python sandbox with its own private virtual filesystem — files you create here exist only for that one run, not on your actual computer.</p>
      `,
      example: `with open("notes.txt", "w") as f:\n    f.write("Hello file!")\n\nwith open("notes.txt") as f:\n    print(f.read())`,
      exercise: {
        prompt: "Write \"Data saved\" to a file called log.txt, then read it back and print its contents.",
        starter: `# Your code here\n`,
        expectedOutput: "Data saved"
      }
    },
    {
      title: "Working with CSV and JSON files",
      explanation: `
        <p><code>json.dumps()</code> converts a Python object to a JSON string; <code>json.loads()</code> parses one back into Python. The <code>csv</code> module reads and writes tabular text data — you can even use <code>io.StringIO</code> to treat a string as if it were a file, without touching the disk.</p>
      `,
      example: `import json\ndata = {"name": "Ana", "age": 28}\ntext = json.dumps(data)\nprint(text)\nparsed = json.loads(text)\nprint(parsed["name"])`,
      exercise: {
        prompt: "Given the JSON string data = '{\"city\": \"Berlin\", \"population\": 3700000}', parse it and print the value of \"city\".",
        starter: `import json\ndata = '{"city": "Berlin", "population": 3700000}'\n# Your code here\n`,
        expectedOutput: "Berlin"
      }
    },
    {
      title: "try / except / else / finally",
      explanation: `
        <p><code>try</code> wraps code that might fail. <code>except</code> catches a specific error type. <code>else</code> runs only if no exception occurred. <code>finally</code> always runs — exception or not — making it the right place for cleanup.</p>
      `,
      example: `try:\n    result = 10 / 0\nexcept ZeroDivisionError:\n    print("Can't divide by zero")\nfinally:\n    print("Done")`,
      exercise: {
        prompt: "Try to convert the string \"abc\" to an integer inside a try/except block. If it raises a ValueError, print \"Invalid number\".",
        starter: `value = "abc"\n# Your code here\n`,
        expectedOutput: "Invalid number"
      }
    },
    {
      title: "Raising custom exceptions",
      explanation: `
        <p>Use <code>raise</code> to signal that something has gone wrong. You can also define your own exception types by subclassing <code>Exception</code>, which makes error handling more specific and readable in larger programs.</p>
      `,
      example: `class NegativeValueError(Exception):\n    pass\n\ndef check(n):\n    if n < 0:\n        raise NegativeValueError("Value can't be negative")\n    return n\n\ntry:\n    check(-5)\nexcept NegativeValueError as e:\n    print(e)`,
      exercise: {
        prompt: "Write a function check_age(age) that raises a ValueError with the message \"Age can't be negative\" if age is negative. Call check_age(-1) inside a try/except and print the error message.",
        starter: `def check_age(age):\n    # raise a ValueError here if age is negative\n    pass\n\n# call check_age(-1) inside try/except and print the message\n`,
        expectedOutput: "Age can't be negative"
      }
    },
    {
      title: "Context managers and the 'with' statement",
      explanation: `
        <p>The <code>with</code> statement guarantees setup/cleanup happens automatically — even if an error occurs partway through. Opening a file with <code>with open(...)</code> ensures it always gets closed, without needing an explicit <code>finally</code>.</p>
      `,
      example: `with open("data.txt", "w") as f:\n    f.write("saved")\nwith open("data.txt") as f:\n    print(f.read())`,
      exercise: {
        prompt: "Using a with block, write \"safe\" to a file called temp.txt. Then, using another with block, read it back and print its contents.",
        starter: `# Your code here\n`,
        expectedOutput: "safe"
      }
    }
  ],
  quiz: [
    {
      question: "What does the finally block do?",
      choices: ["Only runs if there's no exception", "Always runs, whether or not an exception occurred", "Only runs if there is an exception", "Skips the rest of the program"],
      correctIndex: 1,
      explanation: "finally is guaranteed to run regardless of what happened in the try block — it's meant for cleanup."
    },
    {
      question: "Which function converts a Python object into a JSON string?",
      choices: ["json.loads", "json.dumps", "json.parse", "json.stringify"],
      correctIndex: 1,
      explanation: "json.dumps() serializes a Python object to a JSON-formatted string; json.loads() does the reverse."
    },
    {
      question: "What's the safer way to open a file so it's automatically closed, even if an error happens partway through?",
      choices: ["Using open() and manually calling .close()", "Using a with statement", "Using try/except only", "Files close themselves automatically no matter what"],
      correctIndex: 1,
      explanation: "with guarantees cleanup runs, even if an exception is raised inside the block."
    },
    {
      question: "What kind of exception does int(\"abc\") raise?",
      choices: ["TypeError", "ValueError", "KeyError", "SyntaxError"],
      correctIndex: 1,
      explanation: "Trying to convert a non-numeric string to an int raises a ValueError."
    },
    {
      question: "How do you define a custom exception type?",
      choices: ["You can't — Python doesn't support it", "By subclassing Exception", "By using a keyword called customerror", "By importing it from an 'exceptions' module"],
      correctIndex: 1,
      explanation: "Any class that inherits from Exception (directly or indirectly) can be raised and caught like a built-in exception."
    }
  ]
};
