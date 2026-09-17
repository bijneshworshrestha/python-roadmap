window.STAGE_LESSON = {
  id: "stage-5",
  title: "Stage 5 — Functions & Modular Programming",
  intro: "Functions let you name a piece of logic and reuse it. This stage covers defining them well, and organizing bigger programs across files.",
  topics: [
    {
      title: "Defining functions, parameters, and return values",
      explanation: `
        <p>A function is defined with <code>def</code>, takes zero or more parameters, and optionally sends a value back with <code>return</code>. A function with no <code>return</code> statement implicitly returns <code>None</code>.</p>
      `,
      example: `def add(a, b):\n    return a + b\n\nprint(add(3, 4))`,
      exercise: {
        prompt: "Write a function square(n) that returns n squared, then print square(6).",
        starter: `# Your code here\n\nprint(square(6))\n`,
        expectedOutput: "36"
      }
    },
    {
      title: "Default, keyword, and variadic arguments (*args, **kwargs)",
      explanation: `
        <p>Parameters can have default values (<code>def greet(name, greeting="Hello")</code>), and can be passed by keyword in any order at the call site. <code>*args</code> collects any extra positional arguments into a tuple; <code>**kwargs</code> collects extra keyword arguments into a dict.</p>
      `,
      example: `def greet(name, greeting="Hello"):\n    print(f"{greeting}, {name}!")\n\ngreet("Sam")\ngreet("Sam", greeting="Hi")`,
      exercise: {
        prompt: "Write a function total(*numbers) that returns the sum of all arguments passed to it, then print total(1, 2, 3, 4).",
        starter: `# Your code here\n\nprint(total(1, 2, 3, 4))\n`,
        expectedOutput: "10"
      }
    },
    {
      title: "Scope: local vs global variables",
      explanation: `
        <p>A variable created inside a function is <strong>local</strong> to it — it doesn't exist outside. To modify a variable defined outside the function from within it, you need the <code>global</code> keyword — though relying on this heavily is generally discouraged, since it makes a function's behavior depend on hidden outside state.</p>
      `,
      example: `count = 0\ndef increment():\n    global count\n    count += 1\n\nincrement()\nprint(count)`,
      exercise: {
        prompt: "Using the increment() function shown in the example, call it twice, then print count (which starts at 0).",
        starter: `count = 0\ndef increment():\n    global count\n    count += 1\n\n# call increment() twice, then print count\n`,
        expectedOutput: "2"
      }
    },
    {
      title: "Lambda functions",
      explanation: `
        <p>A <strong>lambda</strong> is a small, anonymous, single-expression function: <code>lambda args: expression</code>. They're most useful as short, throwaway functions — e.g. as the sort key passed to <code>sorted()</code> — not as a replacement for regular functions with real logic.</p>
      `,
      example: `square = lambda x: x ** 2\nprint(square(5))`,
      exercise: {
        prompt: "Use a lambda assigned to a variable named cube that returns its argument cubed, then print cube(3).",
        starter: `# Your code here\n`,
        expectedOutput: "27"
      }
    },
    {
      title: "Organizing code into modules and packages",
      explanation: `
        <p>A <strong>module</strong> is just a single <code>.py</code> file. A <strong>package</strong> is a folder of modules (traditionally marked with an <code>__init__.py</code> file, though modern Python doesn't strictly require it). You bring a module's code into another file with <code>import module_name</code> or <code>from module_name import thing</code>.</p>
        <p>This isn't demonstrated as a runnable exercise here, since it inherently needs multiple files — something this single-file browser sandbox can't represent. Try creating two <code>.py</code> files locally and importing one from the other.</p>
      `,
      example: `# In math_utils.py:\ndef double(n):\n    return n * 2\n\n# In main.py:\nfrom math_utils import double\nprint(double(5))`
    },
    {
      title: "Writing and importing your own modules",
      explanation: `
        <p>Once your code outgrows one file, split related functions into their own modules and import them where needed. This keeps files focused and makes code easier to reuse across projects.</p>
        <p>Same as above — this needs multiple real files, so there's no runnable exercise for it in this browser-based lesson.</p>
      `
    }
  ],
  quiz: [
    {
      question: "What does a function return if it has no explicit return statement?",
      choices: ["0", "None", "An empty string", "It raises an error"],
      correctIndex: 1,
      explanation: "Every Python function returns something — if you don't specify a value, it's None."
    },
    {
      question: "What does *args let a function accept?",
      choices: ["Only keyword arguments", "Any number of extra positional arguments, collected as a tuple", "Exactly two arguments", "A dictionary of arguments"],
      correctIndex: 1,
      explanation: "*args collects any extra positional arguments beyond the named parameters into a tuple."
    },
    {
      question: "Why is relying on the global keyword generally discouraged?",
      choices: ["It's slower to execute", "It makes code harder to reason about, since functions can silently change outside state", "Python doesn't actually support it", "It only works with numbers"],
      correctIndex: 1,
      explanation: "Functions that quietly mutate global state are harder to test and reason about in isolation."
    },
    {
      question: "A lambda function is best suited for:",
      choices: ["Long, complex logic", "Small, throwaway one-line functions", "Defining classes", "Replacing all regular functions"],
      correctIndex: 1,
      explanation: "Lambdas are meant for short, simple expressions — anything more complex should be a regular named function."
    },
    {
      question: "What's the difference between a module and a package?",
      choices: ["There's no difference", "A module is a single .py file; a package is a folder of modules", "A package always runs faster", "A module can only contain one function"],
      correctIndex: 1,
      explanation: "A module is one file; a package groups multiple modules together under one folder/namespace."
    }
  ]
};
