// Roadmap content. Edit this file to change stages/topics — app.js and style.css
// don't need to change unless you alter the structure.
const ROADMAP = [
  {
    id: "stage-1",
    title: "Stage 1 — Python Fundamentals",
    hasLesson: true,
    topics: [
      "Installing Python and setting up an editor (VS Code / PyCharm)",
      "Running scripts vs. using the interactive REPL",
      "Variables, assignment, and naming conventions",
      "Basic data types: int, float, str, bool",
      "print() and input(), basic string formatting (f-strings)",
      "Comments and code readability (PEP 8 basics)"
    ]
  },
  {
    id: "stage-2",
    title: "Stage 2 — Core Python Concepts",
    hasLesson: true,
    topics: [
      "Type conversion and casting",
      "Operators: arithmetic, comparison, logical, assignment",
      "Strings in depth: slicing, methods, immutability",
      "Working with numbers: integer vs float division, rounding",
      "The Python data model basics (everything is an object)"
    ]
  },
  {
    id: "stage-3",
    title: "Stage 3 — Logic, Conditions & Loops",
    topics: [
      "if / elif / else statements",
      "Boolean logic and truthy/falsy values",
      "for loops and while loops",
      "break, continue, and else on loops",
      "Nested loops and simple algorithms (e.g. FizzBuzz)"
    ]
  },
  {
    id: "stage-4",
    title: "Stage 4 — Data Structures",
    topics: [
      "Lists: indexing, slicing, common methods",
      "Tuples and immutability",
      "Dictionaries: keys, values, iteration",
      "Sets and set operations",
      "Choosing the right structure for a problem",
      "List, dict, and set comprehensions"
    ]
  },
  {
    id: "stage-5",
    title: "Stage 5 — Functions & Modular Programming",
    topics: [
      "Defining functions, parameters, and return values",
      "Default, keyword, and variadic arguments (*args, **kwargs)",
      "Scope: local vs global variables",
      "Lambda functions",
      "Organizing code into modules and packages",
      "Writing and importing your own modules"
    ]
  },
  {
    id: "stage-6",
    title: "Stage 6 — Files, Errors & Exceptions",
    topics: [
      "Reading and writing text files",
      "Working with CSV and JSON files",
      "try / except / else / finally",
      "Raising custom exceptions",
      "Context managers and the 'with' statement"
    ]
  },
  {
    id: "stage-7",
    title: "Stage 7 — Object-Oriented Python",
    topics: [
      "Classes, objects, attributes, and methods",
      "__init__ and instance vs class attributes",
      "Inheritance and method overriding",
      "Encapsulation and property decorators",
      "Dunder (magic) methods: __str__, __repr__, __eq__",
      "Composition vs inheritance"
    ]
  },
  {
    id: "stage-8",
    title: "Stage 8 — Advanced Python",
    topics: [
      "Iterators and generators (yield)",
      "Decorators",
      "Context managers (custom, via contextlib)",
      "Working with dates and times",
      "Regular expressions (re module)",
      "Virtual environments and dependency management (venv, pip)"
    ]
  },
  {
    id: "stage-9",
    title: "Stage 9 — APIs & Web Requests",
    topics: [
      "HTTP basics: methods, status codes, headers",
      "Making requests with the requests library",
      "Working with JSON responses",
      "Authentication basics (API keys, tokens)",
      "Calling and consuming a public REST API"
    ]
  },
  {
    id: "stage-10",
    title: "Stage 10 — Databases & SQL",
    topics: [
      "Relational database basics and SQL fundamentals",
      "Connecting to SQLite/PostgreSQL from Python",
      "CRUD operations with a database driver",
      "Using an ORM (e.g. SQLAlchemy) at a basic level",
      "Designing simple normalized schemas"
    ]
  },
  {
    id: "stage-11",
    title: "Stage 11 — Automation & Web Scraping",
    topics: [
      "Automating repetitive tasks with scripts",
      "Parsing HTML with BeautifulSoup",
      "Scraping responsibly (robots.txt, rate limits)",
      "Scheduling scripts (cron, task scheduler)",
      "Working with spreadsheets and PDFs programmatically"
    ]
  },
  {
    id: "stage-12",
    title: "Stage 12 — Build Real-World Projects",
    topics: [
      "Planning a project: scope, requirements, structure",
      "Version control fundamentals with Git and GitHub",
      "Writing basic tests (unittest / pytest)",
      "Packaging a project so others can run it",
      "Example projects: CLI tool, small automation script, simple app"
    ]
  },
  {
    id: "stage-13",
    title: "Stage 13 — Data Science & Machine Learning",
    topics: [
      "NumPy fundamentals",
      "Data manipulation with pandas",
      "Data visualization (matplotlib / seaborn)",
      "Intro to machine learning concepts and scikit-learn",
      "Note: this is typically a separate track from web development, not a strict continuation"
    ]
  },
  {
    id: "stage-14",
    title: "Stage 14 — Web Development & Backend",
    topics: [
      "Web framework basics (Flask or Django)",
      "Routing, templates, and request handling",
      "Building a simple REST API",
      "Working with a database from a web app",
      "Note: this is typically a separate track from data science, not a strict continuation"
    ]
  },
  {
    id: "stage-15",
    title: "Stage 15 — Deployment & Career Path",
    topics: [
      "Deploying a script or app (cloud platform of choice)",
      "Environment variables and configuration for production",
      "Basic CI/CD concepts",
      "Building a portfolio on GitHub",
      "Choosing a specialization: data, backend, automation, etc."
    ]
  }
];
