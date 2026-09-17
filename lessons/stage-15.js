window.STAGE_LESSON = {
  id: "stage-15",
  title: "Stage 15 — Deployment & Career Path",
  intro: "The final stretch: getting your code running somewhere other than your own machine, and figuring out where to go from here.",
  topics: [
    {
      title: "Deploying a script or app (cloud platform of choice)",
      explanation: `
        <p><strong>Deploying</strong> means putting your code somewhere it runs continuously and is reachable outside your own machine. Common options include a VPS (a rented server you manage yourself), a platform-as-a-service (which handles more of the infrastructure for you), or serverless functions (which run your code on demand, without you managing a server at all). I can't verify which specific platforms or pricing are current as you're reading this — check each provider's own documentation before committing to one.</p>
        <p>This is an infrastructure topic rather than something to demo in-browser, so there's no runnable exercise here.</p>
      `
    },
    {
      title: "Environment variables and configuration for production",
      explanation: `
        <p><strong>Environment variables</strong> keep secrets and configuration (API keys, database URLs) out of your source code. In Python, you read them via <code>os.environ</code>. Unlike some of the earlier deployment topics, this one is ordinary Python and actually runs here.</p>
      `,
      example: `import os\nos.environ["APP_MODE"] = "production"\nprint(os.environ.get("APP_MODE"))`,
      exercise: {
        prompt: "Set an environment variable named \"DEBUG\" to \"False\" using os.environ, then print its value.",
        starter: `import os\n# Your code here\n`,
        expectedOutput: "False"
      }
    },
    {
      title: "Basic CI/CD concepts",
      explanation: `
        <p><strong>CI</strong> (Continuous Integration) automatically runs your tests and checks whenever you push code. <strong>CD</strong> (Continuous Deployment/Delivery) automatically deploys code that passes those checks. You've actually already been using a form of CD on this very site — the GitHub Actions workflow that rebuilds and republishes it on every push.</p>
        <p>This is an infrastructure/workflow concept, not something to demo with a code exercise.</p>
      `
    },
    {
      title: "Building a portfolio on GitHub",
      explanation: `
        <p>Pin your best repositories, write clear READMEs explaining what each project does and why you built it, and keep your commit history reasonably readable. This is often the first thing a hiring manager or interviewer actually looks at.</p>
        <p>This is career guidance rather than syntax, so there's no exercise here.</p>
      `
    },
    {
      title: "Choosing a specialization: data, backend, automation, etc.",
      explanation: `
        <p>By this point you've touched several tracks — data/ML in Stage 13, web/backend in Stage 14, automation in Stage 11. Most people don't go deep on all of them at once. Picking one to specialize in, based on what you actually enjoyed most while working through this roadmap, is a reasonable next step.</p>
        <p>This is reflective/career guidance, so there's no exercise here — but there is one last quiz below to close out the roadmap.</p>
      `
    }
  ],
  quiz: [
    {
      question: "What's the purpose of an environment variable in a deployed app?",
      choices: ["To make the code run faster", "To keep configuration and secrets out of the source code", "To format terminal output", "It's only used for testing"],
      correctIndex: 1,
      explanation: "Environment variables let the same code run with different configuration (and different secrets) in different environments, without editing the code itself."
    },
    {
      question: "What does \"CI\" stand for in CI/CD?",
      choices: ["Code Injection", "Continuous Integration", "Central Interface", "Compiled Instructions"],
      correctIndex: 1,
      explanation: "Continuous Integration means automatically building/testing code every time changes are pushed."
    },
    {
      question: "What's usually the first thing people look at on your GitHub profile?",
      choices: ["Your follower count", "Your pinned repositories and their READMEs", "Your email address", "The time of day you commit"],
      correctIndex: 1,
      explanation: "Pinned repos with clear READMEs are typically what a visitor sees first and judges a profile by."
    },
    {
      question: "After finishing a broad roadmap like this one, a reasonable next step is:",
      choices: ["Try to master every specialization simultaneously", "Pick one track (e.g. backend, data, automation) to go deeper on", "Stop writing code entirely", "Only read about Python without practicing"],
      correctIndex: 1,
      explanation: "Depth in one area tends to be more valuable — and more achievable — than shallow familiarity spread across everything."
    }
  ]
};
