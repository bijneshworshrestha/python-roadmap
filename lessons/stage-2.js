// Full lesson content for Stage 2 — Core Python Concepts.
// Same shape as lessons/stage-1.js — see that file if you're extending
// this pattern to another stage.
window.STAGE_LESSON = {
  id: "stage-2",
  title: "Stage 2 — Core Python Concepts",
  intro: "With the basics down, this stage fills in details you'll rely on constantly: converting between types, the full set of operators, and going deeper on strings and numbers.",
  topics: [
    {
      title: "Type conversion and casting",
      explanation: `
        <p>Python lets you explicitly convert a value from one type to another using built-in functions: <code>int()</code>, <code>float()</code>, <code>str()</code>, <code>bool()</code>. This is called <strong>casting</strong>.</p>
        <p>This matters constantly with <code>input()</code>, which always returns a string — if you want a number, you have to convert it yourself: <code>age = int(input("Age: "))</code>.</p>
        <p>Not every conversion is valid — <code>int("hello")</code> raises a <code>ValueError</code>, because "hello" isn't a number.</p>
      `,
      example: `age_text = "25"\nage_number = int(age_text)\nprint(age_number + 5)`,
      exercise: {
        prompt: "Convert the string \"12\" to an integer, add 8 to it, and print the result.",
        starter: `value = "12"\n# Your code here\n`,
        expectedOutput: "20"
      }
    },
    {
      title: "Operators: arithmetic, comparison, logical, assignment",
      explanation: `
        <p>Four operator families you'll use constantly:</p>
        <ul>
          <li><strong>Arithmetic:</strong> <code>+ - * / // % **</code> (note: <code>/</code> always gives a float, <code>//</code> is floor division, <code>%</code> is remainder, <code>**</code> is exponent)</li>
          <li><strong>Comparison:</strong> <code>== != &lt; &gt; &lt;= &gt;=</code> — these produce a <code>bool</code></li>
          <li><strong>Logical:</strong> <code>and</code>, <code>or</code>, <code>not</code></li>
          <li><strong>Assignment:</strong> <code>=</code>, plus shortcuts like <code>+=</code>, <code>-=</code>, <code>*=</code></li>
        </ul>
      `,
      example: `print(17 // 5)\nprint(17 % 5)\nprint(17 ** 2)\nprint(3 > 2 and 5 < 10)`,
      exercise: {
        prompt: "Print the result of 29 divided by 4 using floor division, followed on the same run by the remainder of 29 divided by 4 — each on its own print() call.",
        starter: `# Your code here\n`,
        expectedOutput: "7\n1"
      }
    },
    {
      title: "Strings in depth: slicing, methods, immutability",
      explanation: `
        <p>Strings are <strong>immutable</strong> — once created, a string's characters can't be changed in place; string methods return a <em>new</em> string rather than modifying the original.</p>
        <p><strong>Slicing</strong> extracts a substring using <code>[start:stop:step]</code> (stop is exclusive). Useful methods: <code>.upper()</code>, <code>.lower()</code>, <code>.strip()</code>, <code>.replace(old, new)</code>, <code>.split(sep)</code>.</p>
      `,
      example: `word = "Python"\nprint(word[0:3])\nprint(word[-3:])\nprint(word.upper())\nprint(word.replace("P", "J"))`,
      exercise: {
        prompt: "Given the variable text = \"  hello world  \", print it with leading/trailing whitespace removed AND converted to uppercase: HELLO WORLD",
        starter: `text = "  hello world  "\n# Your code here\n`,
        expectedOutput: "HELLO WORLD"
      }
    },
    {
      title: "Working with numbers: integer vs float division, rounding",
      explanation: `
        <p><code>/</code> always produces a <code>float</code>, even when the numbers divide evenly (<code>10 / 2</code> is <code>5.0</code>, not <code>5</code>). Use <code>//</code> for integer (floor) division when you specifically want a whole number result.</p>
        <p><code>round(x, n)</code> rounds <code>x</code> to <code>n</code> decimal places. Note: due to how floats are stored, rounding can occasionally look surprising (e.g. <code>round(2.5)</code> gives <code>2</code> in Python 3, not <code>3</code> — it uses "round half to even"). I'm flagging this because it trips people up; if exact decimal precision matters for your use case, look into the <code>decimal</code> module rather than relying on floats.</p>
      `,
      example: `print(10 / 3)\nprint(round(10 / 3, 2))\nprint(10 // 3)`,
      exercise: {
        prompt: "Print 22 divided by 7, rounded to 3 decimal places.",
        starter: `# Your code here\n`,
        expectedOutput: "3.143"
      }
    },
    {
      title: "The Python data model basics (everything is an object)",
      explanation: `
        <p>In Python, every value — numbers, strings, functions, even classes themselves — is an <strong>object</strong>, with a type and an identity. The built-in <code>id()</code> function returns a value's memory identity, and <code>type()</code> its class.</p>
        <p>This is why methods like <code>.upper()</code> work directly on a string literal, and why you'll later be able to attach custom behavior to your own objects (covered in Stage 7 — Object-Oriented Python).</p>
      `,
      example: `x = 42\nprint(type(x))\nprint(isinstance(x, int))`,
      exercise: {
        prompt: "Print whether the value 3.5 is an instance of float (should print True).",
        starter: `value = 3.5\n# Your code here\n`,
        expectedOutput: "True"
      }
    }
  ],
  quiz: [
    {
      question: "What does int(\"7\") + 3 evaluate to?",
      choices: ["\"73\"", "10", "An error", "7.3"],
      correctIndex: 1,
      explanation: "int(\"7\") converts the string to the integer 7, then 7 + 3 is ordinary addition, giving 10."
    },
    {
      question: "What is 9 // 2 in Python?",
      choices: ["4.5", "4", "5", "1"],
      correctIndex: 1,
      explanation: "// is floor division — it divides and rounds down to the nearest whole number, discarding the remainder."
    },
    {
      question: "Why can't you do my_string[0] = \"X\" to change the first character of a string?",
      choices: [
        "Strings don't support indexing",
        "Strings are immutable in Python",
        "You need to use .replace() syntax instead",
        "It's a syntax error unrelated to immutability"
      ],
      correctIndex: 1,
      explanation: "Strings are immutable — you can read a character by index, but you can't assign to one. You'd build a new string instead."
    },
    {
      question: "What type does 10 / 2 return?",
      choices: ["int", "float", "str", "bool"],
      correctIndex: 1,
      explanation: "The / operator always returns a float in Python 3, regardless of whether the division is even."
    },
    {
      question: "What does type(True) return?",
      choices: ["<class 'int'>", "<class 'bool'>", "<class 'str'>", "<class 'object'>"],
      correctIndex: 1,
      explanation: "True and False are of type bool (which is technically a subclass of int, but type() reports bool)."
    }
  ]
};
