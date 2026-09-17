window.STAGE_LESSON = {
  id: "stage-10",
  title: "Stage 10 — Databases & SQL",
  intro: "Most real applications need to persist data somewhere durable. A note on this stage: I haven't been able to verify from this sandbox whether Pyodide's browser build includes a working sqlite3 module, so rather than risk an exercise that silently fails, the runnable exercises here use plain Python data structures to mirror what the SQL/database code would do — treat the SQL and sqlite3 examples as accurate syntax to try in a real Python install.",
  topics: [
    {
      title: "Relational database basics and SQL fundamentals",
      explanation: `
        <p>A relational database organizes data into <strong>tables</strong> of rows and columns, typically with a <strong>primary key</strong> uniquely identifying each row. Core SQL commands: <code>SELECT</code> (read), <code>INSERT</code> (create), <code>UPDATE</code> (modify), <code>DELETE</code> (remove), usually filtered with a <code>WHERE</code> clause.</p>
      `,
      example: `-- SQL, not Python — illustrative only\nSELECT name, age FROM users WHERE age > 18;`,
      exercise: {
        prompt: "Given the list of user dicts below, print the names of users older than 18 — this mirrors exactly what the SQL WHERE clause above would filter for.",
        starter: `users = [{"name": "Ana", "age": 17}, {"name": "Leo", "age": 22}, {"name": "Kim", "age": 19}]\n# Your code here\n`,
        expectedOutput: "Leo\nKim"
      }
    },
    {
      title: "Connecting to SQLite/PostgreSQL from Python",
      explanation: `
        <p><code>sqlite3</code> is in Python's standard library and needs no separate server — great for small or local projects. PostgreSQL is a full client/server database, requiring a running server process and a driver library (like <code>psycopg2</code>) to connect from Python.</p>
      `,
      example: `import sqlite3\nconn = sqlite3.connect("app.db")\ncursor = conn.cursor()\ncursor.execute("SELECT * FROM users")\nprint(cursor.fetchall())`
    },
    {
      title: "CRUD operations with a database driver",
      explanation: `
        <p><strong>CRUD</strong> — Create, Read, Update, Delete — names the four basic data operations every database-backed app needs, matching SQL's <code>INSERT</code>, <code>SELECT</code>, <code>UPDATE</code>, <code>DELETE</code>.</p>
      `,
      example: `inventory = []\ninventory.append({"item": "Pen", "qty": 10})  # Create\nprint(inventory)  # Read`,
      exercise: {
        prompt: "Given inventory = [], \"create\" one item {\"item\": \"Pen\", \"qty\": 10} by appending it, then print the list.",
        starter: `inventory = []\n# Your code here\n`,
        expectedOutput: "[{'item': 'Pen', 'qty': 10}]"
      }
    },
    {
      title: "Using an ORM (e.g. SQLAlchemy) at a basic level",
      explanation: `
        <p>An <strong>ORM</strong> (Object-Relational Mapper) lets you work with database rows as Python objects/classes instead of writing raw SQL by hand. SQLAlchemy is the most widely used ORM in the Python ecosystem.</p>
      `,
      example: `# Illustrative SQLAlchemy-style code, not run here\nclass User(Base):\n    __tablename__ = "users"\n    id = Column(Integer, primary_key=True)\n    name = Column(String)\n\nuser = session.query(User).filter_by(name="Ana").first()`
    },
    {
      title: "Designing simple normalized schemas",
      explanation: `
        <p><strong>Normalization</strong> means organizing tables to reduce duplicated data. For example, instead of repeating a customer's name on every one of their orders, you'd store customers in their own table and reference them from the orders table by ID (a "foreign key"). This keeps the data consistent — update the customer's name once, everywhere sees the change.</p>
        <p>This is a design topic rather than a syntax rule, so there's no runnable exercise here.</p>
      `
    }
  ],
  quiz: [
    {
      question: "What does CRUD stand for?",
      choices: ["Create, Read, Update, Delete", "Copy, Run, Undo, Debug", "Connect, Retrieve, Upload, Download", "Create, Rename, Use, Discard"],
      correctIndex: 0,
      explanation: "CRUD names the four fundamental operations any data-backed system needs to support."
    },
    {
      question: "Which Python standard-library module provides a simple file-based database with no separate server needed?",
      choices: ["postgres", "sqlite3", "mysql", "orm"],
      correctIndex: 1,
      explanation: "sqlite3 ships with Python and stores its entire database in a single file — no server process required."
    },
    {
      question: "What's an ORM primarily used for?",
      choices: ["Formatting code", "Mapping database rows to Python objects, so you write less raw SQL", "Running unit tests", "Sending emails"],
      correctIndex: 1,
      explanation: "An ORM's whole purpose is bridging the gap between relational tables and your programming language's objects."
    },
    {
      question: "In SQL, which clause filters rows based on a condition?",
      choices: ["SELECT", "FROM", "WHERE", "ORDER BY"],
      correctIndex: 2,
      explanation: "WHERE is the clause that filters which rows a query returns."
    },
    {
      question: "Why normalize a database schema?",
      choices: ["To make queries slower on purpose", "To reduce duplicated data and keep it consistent", "To avoid using primary keys", "It's required by Python"],
      correctIndex: 1,
      explanation: "Normalization avoids the same fact being stored (and potentially going out of sync) in multiple places."
    }
  ]
};
