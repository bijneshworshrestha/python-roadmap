window.STAGE_LESSON = {
  id: "stage-9",
  title: "Stage 9 — APIs & Web Requests",
  intro: "Most real applications talk to other services over the internet. A quick note on this stage: this lesson runs in a browser sandbox that can't make real outbound network calls, so exercises here use simulated data standing in for a real API response — the underlying Python (parsing JSON, extracting fields) is identical either way.",
  topics: [
    {
      title: "HTTP basics: methods, status codes, headers",
      explanation: `
        <p>The main HTTP methods: <strong>GET</strong> (read data), <strong>POST</strong> (create something new), <strong>PUT</strong>/<strong>PATCH</strong> (update), <strong>DELETE</strong> (remove). Status codes tell you the outcome: 2xx means success (200 OK), 4xx means a client-side error (404 Not Found), 5xx means a server-side error (500). Headers carry metadata about the request or response, like <code>Content-Type</code>.</p>
      `,
      example: `status_meanings = {200: "OK", 404: "Not Found", 500: "Server Error"}\nprint(status_meanings[200])`,
      exercise: {
        prompt: "Given status_meanings = {200: \"OK\", 404: \"Not Found\", 500: \"Server Error\"}, print the meaning of code 404.",
        starter: `status_meanings = {200: "OK", 404: "Not Found", 500: "Server Error"}\n# Your code here\n`,
        expectedOutput: "Not Found"
      }
    },
    {
      title: "Making requests with the requests library",
      explanation: `
        <p>Outside a browser sandbox, the third-party <code>requests</code> library is the standard way to call an API from Python: <code>requests.get(url)</code> makes the call, and <code>.json()</code> parses a JSON response body into a Python object. The example below is illustrative — it isn't executed here, since a real network call needs an environment outside this page.</p>
      `,
      example: `import requests\nresponse = requests.get("https://api.example.com/data")\nprint(response.status_code)\nprint(response.json())`,
      exercise: {
        prompt: "Pretend fake_response below is what response.json() gave you back. Print the temperature value from inside it.",
        starter: `fake_response = {"status": 200, "data": {"temperature": 21}}\n# Your code here\n`,
        expectedOutput: "21"
      }
    },
    {
      title: "Working with JSON responses",
      explanation: `
        <p>API responses are usually JSON text. <code>json.loads()</code> turns that text into native Python objects (dicts and lists), including nested structures — a JSON object inside another JSON object becomes a dict inside a dict.</p>
      `,
      example: `import json\njson_text = '{"user": {"name": "Lee", "active": true}}'\nparsed = json.loads(json_text)\nprint(parsed["user"]["name"])`,
      exercise: {
        prompt: "Given json_text = '{\"user\": {\"name\": \"Lee\", \"active\": true}}', parse it with json.loads and print the user's name.",
        starter: `import json\njson_text = '{"user": {"name": "Lee", "active": true}}'\n# Your code here\n`,
        expectedOutput: "Lee"
      }
    },
    {
      title: "Authentication basics (API keys, tokens)",
      explanation: `
        <p>Many APIs require an API key or bearer token, usually sent in an <code>Authorization</code> header (e.g. <code>Authorization: Bearer &lt;token&gt;</code>). Never commit real API keys or secrets into a public repository — the standard practice is to load them from environment variables instead (more on this in Stage 15).</p>
        <p>This is a security practice, not something to demo with code here.</p>
      `
    },
    {
      title: "Calling and consuming a public REST API",
      explanation: `
        <p>Putting it together: you'd call <code>requests.get()</code> on a public API's URL, check <code>response.status_code</code> for success, then call <code>.json()</code> and pull out the fields you need — exactly the pattern from the topics above.</p>
        <p>I can't demonstrate a live call to a real public API from this page — browser security restrictions (CORS) and the lack of real networking in this sandbox both block it. To actually try this, run Python locally with the <code>requests</code> library installed.</p>
      `
    }
  ],
  quiz: [
    {
      question: "Which HTTP method is conventionally used to retrieve data without changing anything on the server?",
      choices: ["POST", "GET", "DELETE", "PUT"],
      correctIndex: 1,
      explanation: "GET is meant to be a safe, read-only operation by convention."
    },
    {
      question: "What does a 404 status code mean?",
      choices: ["Server error", "Success", "Resource not found", "Redirect"],
      correctIndex: 2,
      explanation: "404 is a client-side error meaning the requested resource couldn't be found."
    },
    {
      question: "What does response.json() typically do, in the requests library?",
      choices: ["Sends a JSON-formatted request", "Parses the response body as JSON into a Python object", "Deletes the response", "Converts JSON into XML"],
      correctIndex: 1,
      explanation: "It's a convenience method that parses the response text as JSON and gives you back a Python dict/list."
    },
    {
      question: "Where should a secret API key generally be stored, rather than hardcoded into your source code?",
      choices: ["In a public GitHub repo", "In an environment variable", "In the HTML <title> tag", "It doesn't matter where"],
      correctIndex: 1,
      explanation: "Environment variables keep secrets out of source code and version control history."
    },
    {
      question: "What best describes JSON?",
      choices: ["A Python-only binary format", "A lightweight, language-independent text format for structured data", "A type of database", "A compiled file format"],
      correctIndex: 1,
      explanation: "JSON is a plain-text format used across virtually every programming language, not something Python-specific."
    }
  ]
};
