window.STAGE_LESSON = {
  id: "stage-11",
  title: "Stage 11 — Automation & Web Scraping",
  intro: "This stage is about using Python to do repetitive digital tasks for you — cleaning up files, pulling data off web pages, or running on a schedule without you touching a keyboard.",
  topics: [
    {
      title: "Automating repetitive tasks with scripts",
      explanation: `
        <p>Any repetitive manual task — renaming files, reformatting data, sending routine messages — is a candidate for a small script. Start by writing the steps as ordinary code; once it works reliably, consider scheduling it (covered later in this stage).</p>
      `,
      example: `filenames = ["report.PDF", "invoice.PDF"]\nfor name in filenames:\n    print(name.lower())`,
      exercise: {
        prompt: "Given filenames = [\"img1.JPG\", \"img2.JPG\", \"img3.JPG\"], print each one converted to lowercase.",
        starter: `filenames = ["img1.JPG", "img2.JPG", "img3.JPG"]\n# Your code here\n`,
        expectedOutput: "img1.jpg\nimg2.jpg\nimg3.jpg"
      }
    },
    {
      title: "Parsing HTML with BeautifulSoup",
      explanation: `
        <p><strong>BeautifulSoup</strong> (the <code>bs4</code> package) is the standard third-party library for parsing HTML/XML, installed via <code>pip install beautifulsoup4</code>. It isn't preloaded in this lightweight browser demo, so the exercise below uses plain string operations instead, to show the same underlying idea — pulling text out from between tags — without needing an extra install.</p>
      `,
      example: `# Illustrative BeautifulSoup usage — not run here\nfrom bs4 import BeautifulSoup\nsoup = BeautifulSoup(html, "html.parser")\nprint(soup.find("h1").text)`,
      exercise: {
        prompt: "Given page = \"<h1>Welcome</h1>\", extract and print just the text \"Welcome\" (hint: try page.split('>')[1].split('<')[0]).",
        starter: `page = "<h1>Welcome</h1>"\n# Your code here\n`,
        expectedOutput: "Welcome"
      }
    },
    {
      title: "Scraping responsibly (robots.txt, rate limits)",
      explanation: `
        <p>Before scraping a site, check its <code>robots.txt</code> file (e.g. <code>example.com/robots.txt</code>), which states what automated crawlers are and aren't allowed to access. Add delays between requests rather than hammering a server rapidly, respect the site's terms of service, and prefer an official API when one exists.</p>
        <p>This is an etiquette/legal topic rather than syntax, so there's no code exercise for it.</p>
      `
    },
    {
      title: "Scheduling scripts (cron, task scheduler)",
      explanation: `
        <p><strong>cron</strong> (Linux/macOS) and <strong>Task Scheduler</strong> (Windows) run a script automatically on a schedule — say, every night at 2am — without you needing to trigger it by hand each time.</p>
        <p>This is an operating-system feature, not something runnable inside a Python script in this sandbox.</p>
      `
    },
    {
      title: "Working with spreadsheets and PDFs programmatically",
      explanation: `
        <p>For spreadsheet-like data, the built-in <code>csv</code> module handles plain CSV text with zero extra installs (real <code>.xlsx</code> files need a third-party library like <code>openpyxl</code> or <code>pandas</code>). For PDFs, third-party libraries like <code>pypdf</code> or <code>pdfplumber</code> extract text and tables.</p>
      `,
      example: `import csv, io\ntext = "name,age\\nAna,28\\nLeo,22"\nreader = csv.DictReader(io.StringIO(text))\nfor row in reader:\n    print(row["name"])`,
      exercise: {
        prompt: "Using the csv module and io.StringIO on the CSV text below, print the age of \"Leo\".",
        starter: `import csv, io\ntext = "name,age\\nAna,28\\nLeo,22"\n# Your code here\n`,
        expectedOutput: "22"
      }
    }
  ],
  quiz: [
    {
      question: "What is robots.txt used for?",
      choices: ["Blocking all automated access to a site, always", "A file websites use to indicate what crawlers are/aren't allowed to access", "A Python module for scraping", "A type of database"],
      correctIndex: 1,
      explanation: "It's a convention (not a hard technical barrier) that responsible scrapers are expected to check and respect."
    },
    {
      question: "What's the standard third-party library most people use for parsing HTML in Python (outside this lightweight demo)?",
      choices: ["csv", "BeautifulSoup", "sqlite3", "requests"],
      correctIndex: 1,
      explanation: "BeautifulSoup (bs4) is the go-to library for navigating and searching parsed HTML/XML in Python."
    },
    {
      question: "Why add delays between scraping requests to the same site?",
      choices: ["It's required by Python's syntax", "To avoid overloading the server and to scrape responsibly", "It makes your code run faster", "It's not actually necessary"],
      correctIndex: 1,
      explanation: "Rapid-fire requests can degrade a site's performance for other users, or get your access blocked."
    },
    {
      question: "What does cron (or Windows Task Scheduler) let you do?",
      choices: ["Encrypt files", "Run a script automatically on a schedule", "Connect to a database", "Parse JSON"],
      correctIndex: 1,
      explanation: "Both are OS-level tools for triggering programs at set times without manual intervention."
    },
    {
      question: "Which built-in Python module can read/write CSV data without installing anything extra?",
      choices: ["csv", "openpyxl", "pandas", "bs4"],
      correctIndex: 0,
      explanation: "csv ships with Python's standard library; the others are third-party packages you'd need to install."
    }
  ]
};
