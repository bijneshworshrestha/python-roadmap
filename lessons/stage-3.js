window.STAGE_LESSON = {
  id: "stage-3",
  title: "Stage 3 — Logic, Conditions & Loops",
  intro: "This is where static code starts making decisions and repeating itself — the two ingredients behind almost every real program.",
  topics: [
    {
      title: "if / elif / else statements",
      explanation: `
        <p><code>if</code> runs a block only when its condition is true. <code>elif</code> (else-if) checks another condition if the first was false, and <code>else</code> catches everything else. Python uses indentation (not braces) to mark what's inside each block.</p>
      `,
      example: `age = 20\nif age < 13:\n    print("child")\nelif age < 20:\n    print("teen")\nelse:\n    print("adult")`,
      exercise: {
        prompt: "Given score = 85, print \"Pass\" if score is 60 or higher, otherwise print \"Fail\".",
        starter: `score = 85\n# Your code here\n`,
        expectedOutput: "Pass"
      }
    },
    {
      title: "Boolean logic and truthy/falsy values",
      explanation: `
        <p><code>and</code>, <code>or</code>, and <code>not</code> combine or invert boolean conditions. But Python also treats plenty of non-boolean values as "truthy" or "falsy" in an <code>if</code>: <code>0</code>, <code>0.0</code>, <code>""</code>, <code>[]</code>, <code>{}</code>, and <code>None</code> are all falsy; pretty much everything else is truthy.</p>
      `,
      example: `values = [0, "", "hi", [], [1], None]\nfor v in values:\n    print(bool(v))`,
      exercise: {
        prompt: "Given username = \"\", print True if it's falsy (empty), without writing an if statement — use bool() or not.",
        starter: `username = ""\n# Your code here\n`,
        expectedOutput: "True"
      }
    },
    {
      title: "for loops and while loops",
      explanation: `
        <p>A <code>for</code> loop iterates over a sequence (like <code>range()</code>, a list, or a string). A <code>while</code> loop repeats as long as a condition stays true — useful when you don't know the number of iterations ahead of time.</p>
      `,
      example: `for i in range(3):\n    print(i)\n\nn = 3\nwhile n > 0:\n    print(n)\n    n -= 1`,
      exercise: {
        prompt: "Using a for loop and range(), print the numbers 1 through 5, one per line.",
        starter: `# Your code here\n`,
        expectedOutput: "1\n2\n3\n4\n5"
      }
    },
    {
      title: "break, continue, and else on loops",
      explanation: `
        <p><code>break</code> exits a loop immediately. <code>continue</code> skips the rest of the current iteration and moves to the next one. Less commonly known: a loop can have an <code>else</code> clause that runs only if the loop finished normally — i.e. it was <em>not</em> stopped by <code>break</code>.</p>
      `,
      example: `for i in range(5):\n    if i == 3:\n        break\n    print(i)`,
      exercise: {
        prompt: "Print the numbers 1 through 10, but skip printing the number 5 (use continue).",
        starter: `# Your code here\n`,
        expectedOutput: "1\n2\n3\n4\n6\n7\n8\n9\n10"
      }
    },
    {
      title: "Nested loops and simple algorithms (e.g. FizzBuzz)",
      explanation: `
        <p>Loops can be nested inside one another — the inner loop runs to completion for every single iteration of the outer loop. A classic beginner exercise that combines loops and conditionals is <strong>FizzBuzz</strong>: for numbers 1 to N, print "Fizz" for multiples of 3, "Buzz" for multiples of 5, "FizzBuzz" for multiples of both, and the number itself otherwise.</p>
      `,
      example: `for i in range(1, 6):\n    for j in range(1, 3):\n        print(i, j)`,
      exercise: {
        prompt: "Write FizzBuzz for the numbers 1 through 15.",
        starter: `# Your code here\n`,
        expectedOutput: "1\n2\nFizz\n4\nBuzz\nFizz\n7\n8\nFizz\nBuzz\n11\nFizz\n13\n14\nFizzBuzz"
      }
    }
  ],
  quiz: [
    {
      question: "What does `if 0:` do in Python?",
      choices: ["Always executes the block", "Never executes the block, since 0 is falsy", "Raises an error", "Behaves the same as `if True:`"],
      correctIndex: 1,
      explanation: "0 is one of Python's falsy values, so the if block is skipped."
    },
    {
      question: "Which keyword skips the rest of the current loop iteration and moves to the next one?",
      choices: ["break", "continue", "pass", "return"],
      correctIndex: 1,
      explanation: "continue jumps straight to the next iteration; break would stop the loop entirely instead."
    },
    {
      question: "What values does range(1, 5) produce?",
      choices: ["1, 2, 3, 4, 5", "1, 2, 3, 4", "0, 1, 2, 3", "2, 3, 4"],
      correctIndex: 1,
      explanation: "range's stop value is exclusive, so range(1, 5) yields 1, 2, 3, 4."
    },
    {
      question: "In a for loop, when does the loop's else clause run?",
      choices: ["Every time, right after the loop", "Only if the loop finished without hitting break", "Only if break was hit", "Never — for loops can't have an else"],
      correctIndex: 1,
      explanation: "The else on a loop runs only when the loop completes normally, not when it's exited early via break."
    },
    {
      question: "Which of these values is falsy?",
      choices: ["\"0\" (a non-empty string)", "0 (the integer)", "[1]", "\"False\" (a non-empty string)"],
      correctIndex: 1,
      explanation: "The integer 0 is falsy. Non-empty strings are truthy no matter what text they contain — so \"0\" and \"False\" are both truthy."
    }
  ]
};
