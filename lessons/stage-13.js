window.STAGE_LESSON = {
  id: "stage-13",
  title: "Stage 13 — Data Science & Machine Learning",
  intro: "As the roadmap image itself noted, this is typically a separate specialization from web development, not something you do strictly after it — most working Python developers pick one track or the other. This stage stays lightweight (no NumPy/pandas/matplotlib download), so runnable exercises use Python's built-in tools where the underlying idea carries over.",
  topics: [
    {
      title: "NumPy fundamentals",
      explanation: `
        <p><strong>NumPy</strong> provides fast, memory-efficient arrays and vectorized math — operations on whole arrays at once, without writing an explicit loop — much faster than plain Python lists for numeric work. It's a separate install (<code>pip install numpy</code>) and isn't loaded on this page to keep it fast; the exercise below uses the built-in <code>statistics</code> module instead, which covers similar ground (basic numeric summaries) with no install needed.</p>
      `,
      example: `# Illustrative NumPy usage — not run here\nimport numpy as np\narr = np.array([1, 2, 3, 4])\nprint(arr.mean())`,
      exercise: {
        prompt: "Using the statistics module, print the mean of [4, 8, 15, 16, 23, 42].",
        starter: `import statistics\nvalues = [4, 8, 15, 16, 23, 42]\n# Your code here\n`,
        expectedOutput: "18"
      }
    },
    {
      title: "Data manipulation with pandas",
      explanation: `
        <p><strong>pandas</strong> is the standard library for working with tabular data (like a spreadsheet) in Python — filtering rows, grouping, joining datasets. It's a heavier dependency, so it's not loaded here either; the exercise below mirrors the same filtering idea using a plain list of dicts.</p>
      `,
      example: `# Illustrative pandas usage — not run here\nimport pandas as pd\ndf = pd.DataFrame({"name": ["Ana", "Leo"], "age": [28, 22]})\nprint(df[df["age"] > 25])`,
      exercise: {
        prompt: "Given rows = [{\"name\": \"Ana\", \"age\": 28}, {\"name\": \"Leo\", \"age\": 22}], print the names of people older than 25.",
        starter: `rows = [{"name": "Ana", "age": 28}, {"name": "Leo", "age": 22}]\n# Your code here\n`,
        expectedOutput: "Ana"
      }
    },
    {
      title: "Data visualization (matplotlib / seaborn)",
      explanation: `
        <p><strong>matplotlib</strong> (and the higher-level <strong>seaborn</strong>, built on top of it) are the standard Python libraries for plotting charts — line graphs, bar charts, histograms, scatter plots. There's no runnable exercise here: rendering and verifying an actual chart isn't something this text-output-based lesson format can check, and loading a full plotting library would work against keeping this page lightweight.</p>
      `,
      example: `# Illustrative matplotlib usage — not run here\nimport matplotlib.pyplot as plt\nplt.plot([1, 2, 3], [4, 5, 6])\nplt.show()`
    },
    {
      title: "Intro to machine learning concepts and scikit-learn",
      explanation: `
        <p>At a high level, machine learning means letting a model learn patterns from <strong>training data</strong> (examples with known outcomes), so it can make predictions on new, unseen data. <strong>scikit-learn</strong> is the standard library for classical ML algorithms in Python (as opposed to deep learning, which typically uses PyTorch or TensorFlow instead).</p>
        <p>This is conceptual and depends on a heavy library, so there's no runnable exercise here.</p>
      `
    },
    {
      title: "Note: this is typically a separate track from web development, not a strict continuation",
      explanation: `
        <p>Worth repeating from the intro: very few working developers deeply master both data science and web development. Most people pick a primary track based on what they enjoyed most, and treat the other as background knowledge rather than a specialty. There's no exercise for this — it's guidance, not syntax.</p>
      `
    }
  ],
  quiz: [
    {
      question: "What is NumPy primarily used for?",
      choices: ["Running web servers", "Fast numerical arrays and vectorized math", "Sending emails", "Parsing HTML"],
      correctIndex: 1,
      explanation: "NumPy's core strength is doing numeric computation on whole arrays efficiently, without explicit Python loops."
    },
    {
      question: "What is pandas primarily used for?",
      choices: ["Machine learning training loops", "Working with tabular data (like spreadsheets) in Python", "Rendering 3D graphics", "Sending HTTP requests"],
      correctIndex: 1,
      explanation: "pandas' DataFrame is essentially a spreadsheet-like structure with powerful filtering, grouping, and joining built in."
    },
    {
      question: "In machine learning, \"training data\" is best described as:",
      choices: ["Data used only to test a finished model", "Data with known outcomes, used to let a model learn patterns before predicting on new data", "Any random collection of text", "A type of database"],
      correctIndex: 1,
      explanation: "A model learns its patterns from training data before being evaluated on data it hasn't seen."
    },
    {
      question: "True or false: data science/ML and web development are usually the same career track, mastered strictly in sequence.",
      choices: ["True — always sequential", "False — they're usually separate specializations people choose between"],
      correctIndex: 1,
      explanation: "In practice, most developers specialize in one track rather than mastering both to the same depth."
    }
  ]
};
