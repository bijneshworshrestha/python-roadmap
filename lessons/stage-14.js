window.STAGE_LESSON = {
  id: "stage-14",
  title: "Stage 14 — Web Development & Backend",
  intro: "Same note as Stage 13: this is generally a separate specialization from data science, not a required next step after it. A real web server can't run inside this static in-browser sandbox, so the runnable exercises here simulate the underlying logic (routing, JSON responses) with plain Python instead of a live server.",
  topics: [
    {
      title: "Web framework basics (Flask or Django)",
      explanation: `
        <p><strong>Flask</strong> is a small, flexible "microframework" — you add only what you need. <strong>Django</strong> is larger and more batteries-included, with a built-in admin panel, ORM, and more structure out of the box. Both ultimately handle the same core job: routing incoming requests to the right code and returning a response.</p>
      `,
      example: `# Illustrative Flask usage — a real server can't run in this sandbox\nfrom flask import Flask\napp = Flask(__name__)\n\n@app.route("/")\ndef home():\n    return "Hello, web!"`
    },
    {
      title: "Routing, templates, and request handling",
      explanation: `
        <p><strong>Routing</strong> maps a URL path to the function that handles it. <strong>Templates</strong> (like Jinja2 in Flask) generate HTML dynamically from Python data. <strong>Request handling</strong> reads incoming data — query parameters, form fields, or a JSON body. The exercise below strips this down to its essence: a dict mapping paths to handler functions, which is really what routing is under the hood.</p>
      `,
      example: `routes = {\n    "/": lambda: "Home page",\n    "/about": lambda: "About page"\n}\nprint(routes["/"]())`,
      exercise: {
        prompt: "Given the routes dict above, call the handler for \"/about\" and print its result.",
        starter: `routes = {"/": lambda: "Home page", "/about": lambda: "About page"}\n# Your code here\n`,
        expectedOutput: "About page"
      }
    },
    {
      title: "Building a simple REST API",
      explanation: `
        <p>A REST API exposes endpoints that return data — usually JSON — rather than full HTML pages, following the HTTP method conventions from Stage 9 (GET to read, POST to create, and so on).</p>
      `,
      example: `# Illustrative Flask usage — not run here\n@app.route("/users/<int:user_id>")\ndef get_user(user_id):\n    return jsonify({"id": user_id, "name": users_db[user_id]})`,
      exercise: {
        prompt: "Given users_db = {1: \"Ana\", 2: \"Leo\"}, write get_user(user_id) to return json.dumps({\"id\": user_id, \"name\": users_db[user_id]}), then print get_user(2).",
        starter: `import json\nusers_db = {1: "Ana", 2: "Leo"}\n\ndef get_user(user_id):\n    # Your code here\n    pass\n\nprint(get_user(2))\n`,
        expectedOutput: "{\"id\": 2, \"name\": \"Leo\"}"
      }
    },
    {
      title: "Working with a database from a web app",
      explanation: `
        <p>A typical web app stores its data in a database (Stage 10) rather than in memory, so data persists across requests and survives server restarts. An ORM (also Stage 10) often bridges the web framework and the database, letting route handlers work with plain Python objects.</p>
        <p>This connects two heavy topics conceptually rather than introducing new runnable syntax, so there's no separate exercise here.</p>
      `
    },
    {
      title: "Note: this is typically a separate track from data science, not a strict continuation",
      explanation: `
        <p>As mentioned in the intro and in Stage 13 — pick the track that matches what you actually enjoyed building during this roadmap, rather than assuming you need both.</p>
      `
    }
  ],
  quiz: [
    {
      question: "What is Flask often described as, compared to Django?",
      choices: ["A database", "A small, flexible \"microframework\"", "A JavaScript framework", "An operating system"],
      correctIndex: 1,
      explanation: "Flask gives you routing and request handling with minimal built-in structure, letting you add pieces as needed."
    },
    {
      question: "What does \"routing\" mean in a web framework?",
      choices: ["Encrypting network traffic", "Mapping a URL path to the code that handles it", "Formatting HTML", "Compiling Python to machine code"],
      correctIndex: 1,
      explanation: "A router looks at the incoming request's path and decides which function should handle it."
    },
    {
      question: "What does a REST API typically return to a client?",
      choices: ["A full HTML page every time", "Data, usually formatted as JSON", "Only images", "Nothing — it's purely internal"],
      correctIndex: 1,
      explanation: "REST APIs are built for programmatic consumption, so JSON (not rendered HTML) is the typical response format."
    },
    {
      question: "Why would a web app typically use a database instead of just storing data in memory?",
      choices: ["In-memory storage is more secure", "So data persists across requests and survives server restarts", "Databases are always faster than memory", "It's required by the HTTP protocol"],
      correctIndex: 1,
      explanation: "Data held only in memory is lost the moment the server process restarts or crashes."
    }
  ]
};
