window.STAGE_LESSON = {
  id: "stage-8",
  title: "Stage 8 — Advanced Python",
  intro: "This stage covers a grab-bag of features that come up constantly in real codebases once you're past the fundamentals: lazy iteration, wrapping functions, and text pattern matching.",
  topics: [
    {
      title: "Iterators and generators (yield)",
      explanation: `
        <p>A <strong>generator</strong> function uses <code>yield</code> instead of <code>return</code> to produce a sequence of values lazily — one at a time, on demand — rather than building the entire list in memory up front. This matters a lot for large or unbounded sequences.</p>
      `,
      example: `def countdown(n):\n    while n > 0:\n        yield n\n        n -= 1\n\nfor i in countdown(3):\n    print(i)`,
      exercise: {
        prompt: "Write a generator function evens(limit) that yields even numbers from 0 up to and including limit. Print each value from evens(6).",
        starter: `# Your code here\n\nfor v in evens(6):\n    print(v)\n`,
        expectedOutput: "0\n2\n4\n6"
      }
    },
    {
      title: "Decorators",
      explanation: `
        <p>A <strong>decorator</strong> wraps a function to add behavior without changing the function's own code. It's written as <code>@decorator_name</code> directly above a function definition.</p>
      `,
      example: `def shout(func):\n    def wrapper():\n        return func().upper()\n    return wrapper\n\n@shout\ndef greet():\n    return "hello"\n\nprint(greet())`,
      exercise: {
        prompt: "Write a decorator called loud that makes a wrapped function's return value uppercase. Apply it to a function message() that returns \"done\", then print message().",
        starter: `# Your code here\n\nprint(message())\n`,
        expectedOutput: "DONE"
      }
    },
    {
      title: "Context managers (custom, via contextlib)",
      explanation: `
        <p><code>@contextmanager</code> from the <code>contextlib</code> module lets you write a <code>with</code>-compatible context manager as a generator function with a single <code>yield</code> — code before the yield is setup, code after it is teardown.</p>
      `,
      example: `from contextlib import contextmanager\n\n@contextmanager\ndef timer_block():\n    print("start")\n    yield\n    print("end")\n\nwith timer_block():\n    print("working")`,
      exercise: {
        prompt: "Using @contextmanager, write a context manager named loud_block that prints \"BEGIN\" before, and \"FINISH\" after, whatever runs inside its with block. Use it around a single print(\"middle\").",
        starter: `from contextlib import contextmanager\n\n# Your code here\n`,
        expectedOutput: "BEGIN\nmiddle\nFINISH"
      }
    },
    {
      title: "Working with dates and times",
      explanation: `
        <p>The <code>datetime</code> module handles dates and times. <code>date</code> and <code>datetime</code> represent points in time; <code>timedelta</code> represents a duration, and can be added to or subtracted from a date to do date math.</p>
      `,
      example: `from datetime import date, timedelta\ntoday = date(2026, 1, 1)\nprint(today + timedelta(days=10))`,
      exercise: {
        prompt: "Using datetime.date, create the date January 1, 2026, and print the date 30 days later.",
        starter: `from datetime import date, timedelta\n# Your code here\n`,
        expectedOutput: "2026-01-31"
      }
    },
    {
      title: "Regular expressions (re module)",
      explanation: `
        <p>The <code>re</code> module matches text patterns. <code>re.search()</code> finds a match anywhere in a string, <code>re.findall()</code> returns every match as a list, and <code>re.match()</code> checks only from the start of the string.</p>
      `,
      example: `import re\ntext = "Call me at 555-1234"\nmatch = re.search(r"\\d{3}-\\d{4}", text)\nprint(match.group())`,
      exercise: {
        prompt: "Using re.findall(r\"\\d+\", text), find all the digit sequences in \"Room 42, Floor 7\" and print the resulting list.",
        starter: `import re\ntext = "Room 42, Floor 7"\n# Your code here\n`,
        expectedOutput: "['42', '7']"
      }
    },
    {
      title: "Virtual environments and dependency management (venv, pip)",
      explanation: `
        <p>A <strong>virtual environment</strong> isolates a project's installed packages from other projects and from your system-wide Python — created with <code>python -m venv env_name</code>, then activated per your OS. Once active, <code>pip install -r requirements.txt</code> installs a project's pinned dependencies.</p>
        <p>This can't be demonstrated as a runnable exercise here — it's a terminal/shell workflow, not something that runs inside a Python script.</p>
      `
    }
  ],
  quiz: [
    {
      question: "What keyword turns a regular function into a generator?",
      choices: ["return", "yield", "async", "gen"],
      correctIndex: 1,
      explanation: "Using yield anywhere in a function's body makes it a generator function."
    },
    {
      question: "A decorator is best described as:",
      choices: ["A type of loop", "A function that wraps another function to add behavior", "A built-in data type", "Something that only works on classes"],
      correctIndex: 1,
      explanation: "A decorator takes a function, wraps it with extra behavior, and returns the wrapped version."
    },
    {
      question: "What does @contextmanager help you avoid writing?",
      choices: ["A full class with separate __enter__ and __exit__ methods", "Any import statements", "Loops", "Functions entirely"],
      correctIndex: 0,
      explanation: "It lets a single generator function (with one yield) do what would otherwise require a whole context-manager class."
    },
    {
      question: "Which module handles regular expressions in Python?",
      choices: ["regex", "re", "pattern", "string"],
      correctIndex: 1,
      explanation: "Python's standard library regex module is simply called re."
    },
    {
      question: "What's the main purpose of a virtual environment?",
      choices: ["To make code run faster", "To isolate a project's dependencies from other projects and the system Python", "To encrypt your code", "To connect your code to the internet"],
      correctIndex: 1,
      explanation: "Without isolation, different projects' dependency versions can conflict with each other on the same machine."
    }
  ]
};
