window.STAGE_LESSON = {
  id: "stage-4",
  title: "Stage 4 — Data Structures",
  intro: "Almost every real program is really about organizing data. This stage covers Python's core built-in containers and when to reach for each one.",
  topics: [
    {
      title: "Lists: indexing, slicing, common methods",
      explanation: `
        <p>A <strong>list</strong> is an ordered, mutable collection: <code>[3, 1, 4]</code>. Index from 0 (<code>my_list[0]</code>), use negative indices to count from the end (<code>my_list[-1]</code>), and slice with <code>[start:stop]</code>. Common methods: <code>.append()</code>, <code>.insert()</code>, <code>.remove()</code>, <code>.pop()</code>, <code>.sort()</code>.</p>
      `,
      example: `nums = [3, 1, 4, 1, 5]\nnums.append(9)\nnums.sort()\nprint(nums)`,
      exercise: {
        prompt: "Given fruits = [\"apple\", \"banana\", \"cherry\"], append \"date\" to it and print the full list.",
        starter: `fruits = ["apple", "banana", "cherry"]\n# Your code here\n`,
        expectedOutput: "['apple', 'banana', 'cherry', 'date']"
      }
    },
    {
      title: "Tuples and immutability",
      explanation: `
        <p>A <strong>tuple</strong> is like a list but <em>immutable</em> — once created, it can't be changed. Tuples are often used for fixed collections of related values, and they support convenient "unpacking" into separate variables.</p>
      `,
      example: `point = (3, 4)\nx, y = point\nprint(x, y)`,
      exercise: {
        prompt: "Given coords = (10, 20, 30), print the second element (20).",
        starter: `coords = (10, 20, 30)\n# Your code here\n`,
        expectedOutput: "20"
      }
    },
    {
      title: "Dictionaries: keys, values, iteration",
      explanation: `
        <p>A <strong>dictionary</strong> maps keys to values: <code>{"name": "Ana", "age": 28}</code>. Access a value with <code>d[key]</code>, or safely with <code>d.get(key)</code> (returns <code>None</code> instead of raising an error if the key is missing). Iterate over both keys and values at once with <code>.items()</code>.</p>
      `,
      example: `person = {"name": "Ana", "age": 28}\nfor key, value in person.items():\n    print(key, value)`,
      exercise: {
        prompt: "Given prices = {\"apple\": 1.5, \"banana\": 0.5}, print the price of \"banana\".",
        starter: `prices = {"apple": 1.5, "banana": 0.5}\n# Your code here\n`,
        expectedOutput: "0.5"
      }
    },
    {
      title: "Sets and set operations",
      explanation: `
        <p>A <strong>set</strong> is an unordered collection of unique items — duplicates are automatically dropped. Sets support mathematical operations: <code>&</code> (intersection), <code>|</code> (union), <code>-</code> (difference).</p>
      `,
      example: `a = {1, 2, 3}\nb = {2, 3, 4}\nprint(a & b)\nprint(a | b)`,
      exercise: {
        prompt: "Given a = {1, 2, 3} and b = {3, 4, 5}, print their intersection.",
        starter: `a = {1, 2, 3}\nb = {3, 4, 5}\n# Your code here\n`,
        expectedOutput: "{3}"
      }
    },
    {
      title: "Choosing the right structure for a problem",
      explanation: `
        <p>A rough rule of thumb: need order and duplicates allowed? Use a <strong>list</strong>. Need a fixed collection that shouldn't change? Use a <strong>tuple</strong>. Need fast lookup by a name/key? Use a <strong>dict</strong>. Need uniqueness or fast membership tests ("is this already in here?")? Use a <strong>set</strong>.</p>
        <p>There's no exercise for this one — it's a design judgment call, not a syntax rule, and it'll get more intuitive the more code you write.</p>
      `
    },
    {
      title: "List, dict, and set comprehensions",
      explanation: `
        <p>A <strong>comprehension</strong> builds a new collection in one concise line: <code>[expression for item in iterable if condition]</code>. It's equivalent to a for loop that appends to a new list, just more compact.</p>
      `,
      example: `squares = [x**2 for x in range(5)]\nprint(squares)`,
      exercise: {
        prompt: "Using a list comprehension, build and print a list of even numbers from 0 to 10 inclusive.",
        starter: `# Your code here\n`,
        expectedOutput: "[0, 2, 4, 6, 8, 10]"
      }
    }
  ],
  quiz: [
    {
      question: "Which of these allows duplicate values?",
      choices: ["A list", "A set", "Both a list and a set", "Neither"],
      correctIndex: 0,
      explanation: "Lists preserve every element, including duplicates. Sets automatically drop duplicates."
    },
    {
      question: "Why would you use a tuple instead of a list?",
      choices: ["Tuples are always faster to search", "Tuples are immutable, signaling the data shouldn't change", "Tuples support .append()", "Lists can't hold numbers"],
      correctIndex: 1,
      explanation: "The main reason to reach for a tuple is to signal — and enforce — that the collection shouldn't be modified after creation."
    },
    {
      question: "What does the set literal {1, 2, 2, 3} evaluate to?",
      choices: ["{1, 2, 2, 3}", "{1, 2, 3}", "[1, 2, 3]", "It raises an error"],
      correctIndex: 1,
      explanation: "Sets automatically deduplicate — the repeated 2 is just dropped."
    },
    {
      question: "How do you safely get a dictionary value without an error if the key might be missing?",
      choices: ["d[key]", "d.get(key)", "d.value(key)", "d.find(key)"],
      correctIndex: 1,
      explanation: "d.get(key) returns None (or a default you specify) instead of raising a KeyError."
    },
    {
      question: "What does [x for x in range(3)] produce?",
      choices: ["(0, 1, 2)", "[0, 1, 2]", "{0, 1, 2}", "0 1 2"],
      correctIndex: 1,
      explanation: "Square brackets in a comprehension build a list."
    }
  ]
};
