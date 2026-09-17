window.STAGE_LESSON = {
  id: "stage-12",
  title: "Stage 12 — Build Real-World Projects",
  intro: "This stage is less about new syntax and more about the practices that turn a script into a real, shareable project.",
  topics: [
    {
      title: "Planning a project: scope, requirements, structure",
      explanation: `
        <p>Before writing code, it helps to write down: what should this project actually do (scope), what does it need in order to work (requirements — libraries, data, credentials), and a rough sketch of how the files/folders will be organized.</p>
        <p>This is a planning exercise, not a coding one, so there's no runnable code here.</p>
      `
    },
    {
      title: "Version control fundamentals with Git and GitHub",
      explanation: `
        <p><strong>Git</strong> tracks changes to your code over time on your own machine. Core commands: <code>git init</code> (start tracking a folder), <code>git add</code> (stage changes), <code>git commit</code> (save a snapshot with a message). <strong>GitHub</strong> hosts your repository remotely, enabling backup, sharing, and collaboration via pull requests — you've actually already been using this workflow for this very site.</p>
        <p>Git itself isn't something to run inside a Python script, so there's no code exercise here.</p>
      `
    },
    {
      title: "Writing basic tests (unittest / pytest)",
      explanation: `
        <p>Automated tests check that your code behaves as expected, and catch regressions when you later change something. Python's built-in <code>unittest</code> module is one way to write them; the third-party <code>pytest</code> is a popular, more concise alternative. At their core, both build on the same idea as a plain <code>assert</code> statement — checking that something is true and raising an error if it isn't.</p>
      `,
      example: `def add(a, b):\n    return a + b\n\nassert add(2, 3) == 5\nprint("Test passed")`,
      exercise: {
        prompt: "Write a function multiply(a, b) that returns a * b. Then write an assert statement checking multiply(3, 4) == 12, and print \"Tests passed\" if it doesn't raise.",
        starter: `def multiply(a, b):\n    # Your code here\n    pass\n\n# assert multiply(3, 4) == 12, then print "Tests passed"\n`,
        expectedOutput: "Tests passed"
      }
    },
    {
      title: "Packaging a project so others can run it",
      explanation: `
        <p>A <code>requirements.txt</code> (or a <code>pyproject.toml</code>) lists a project's dependencies so someone else can <code>pip install</code> them in one step. A clear README explains what the project does and how to run it. For distributable, installable packages, tools like <code>setuptools</code> or <code>hatch</code> build the actual package.</p>
        <p>This is a project-structure/tooling topic, not runnable code, so there's no exercise here.</p>
      `
    },
    {
      title: "Example projects: CLI tool, small automation script, simple app",
      explanation: `
        <p>A simple command-line tool often works by mapping a command name to a function that handles it — essentially a small dictionary of "routes." This same dispatch pattern shows up again in Stage 14 when building web APIs.</p>
      `,
      example: `commands = {\n    "hello": lambda: print("Hi there!"),\n    "bye": lambda: print("Goodbye!")\n}\ncommands["hello"]()`,
      exercise: {
        prompt: "Given the commands dict above, call the function mapped to \"hello\".",
        starter: `commands = {"hello": lambda: print("Hi there!"), "bye": lambda: print("Goodbye!")}\n# Your code here\n`,
        expectedOutput: "Hi there!"
      }
    }
  ],
  quiz: [
    {
      question: "What's a sensible first step before writing code for a new project?",
      choices: ["Immediately start coding", "Planning its scope and requirements", "Deploying it", "Writing the README last, after everything else"],
      correctIndex: 1,
      explanation: "A little upfront planning avoids building the wrong thing or hitting missing-requirement surprises midway through."
    },
    {
      question: "What does git commit do?",
      choices: ["Uploads your code straight to GitHub", "Saves a snapshot of your staged changes to the local repository history", "Deletes old code permanently", "Creates a brand-new repository"],
      correctIndex: 1,
      explanation: "Committing is a local action — pushing (a separate step) is what sends commits to a remote like GitHub."
    },
    {
      question: "Why write automated tests?",
      choices: ["To slow down development on purpose", "To catch regressions and confirm code behaves as expected", "They're required by Python's syntax", "To replace documentation entirely"],
      correctIndex: 1,
      explanation: "Tests give you confidence that a change hasn't silently broken something that used to work."
    },
    {
      question: "What's a requirements.txt file used for?",
      choices: ["Storing passwords", "Listing a project's dependencies so others can install them", "Writing project documentation", "Running tests"],
      correctIndex: 1,
      explanation: "It's a plain list of package names (often with versions) that pip install -r reads and installs."
    },
    {
      question: "What does git push do?",
      choices: ["Deletes a branch", "Uploads your local commits to a remote repository like GitHub", "Downloads someone else's code", "Undoes your last commit"],
      correctIndex: 1,
      explanation: "push sends your local commit history to the remote so others (and GitHub Pages, in this project's case) can see it."
    }
  ]
};
