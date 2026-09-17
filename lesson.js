const STORAGE_KEY = "python-roadmap-progress-v1"; // must match app.js exactly

function loadProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch (e) {
    return {};
  }
}

function saveProgress(progress) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch (e) {
    // ignore — e.g. private browsing
  }
}

function topicKey(stageId, topicIndex) {
  return `${stageId}::${topicIndex}`;
}

function getStageIdFromUrl() {
  const params = new URLSearchParams(window.location.search);
  return params.get("stage") || "stage-1";
}

function loadLessonScript(stageId) {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = `lessons/${stageId}.js`;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("no-lesson"));
    document.head.appendChild(script);
  });
}

function renderMissingLesson(stageId) {
  document.getElementById("lesson-title").textContent = "Lesson not available yet";
  document.getElementById("lesson-intro").textContent = "";
  document.getElementById("lesson-container").innerHTML = `
    <div class="empty-state">
      <p>There's no interactive lesson for <strong>${stageId}</strong> yet — Stage 1 is currently the only one built out as the full template (lessons, runnable code, exercises, and a quiz).</p>
      <p>You can still track that stage's topics as a checklist from the <a href="index.html">roadmap page</a>.</p>
    </div>
  `;
}

function renderExercise(stage, topicIndex, exercise) {
  const key = topicKey(stage.id, topicIndex);
  const wrap = document.createElement("div");
  wrap.className = "exercise-block";
  wrap.innerHTML = `
    <h4>Try it</h4>
    <p class="exercise-prompt">${exercise.prompt}</p>
    <textarea class="code-editor" spellcheck="false" rows="6">${exercise.starter || ""}</textarea>
    <div class="exercise-actions">
      <button class="run-btn">▶ Run</button>
      <button class="check-btn">✓ Check</button>
      <span class="run-status" aria-live="polite"></span>
    </div>
    <pre class="code-output" hidden></pre>
  `;

  const textarea = wrap.querySelector(".code-editor");
  const runBtn = wrap.querySelector(".run-btn");
  const checkBtn = wrap.querySelector(".check-btn");
  const status = wrap.querySelector(".run-status");
  const outputEl = wrap.querySelector(".code-output");

  function showOutput(text) {
    outputEl.hidden = false;
    outputEl.textContent = text || "(no output)";
  }

  runBtn.addEventListener("click", async () => {
    runBtn.disabled = true;
    status.textContent = "Running…";
    try {
      const { output, errorMessage } = await runPython(textarea.value);
      showOutput(errorMessage ? `Error: ${errorMessage}` : output);
      status.textContent = "";
    } catch (e) {
      status.textContent = "Couldn't start the Python runtime — check your connection and try again.";
    }
    runBtn.disabled = false;
  });

  checkBtn.addEventListener("click", async () => {
    checkBtn.disabled = true;
    status.textContent = "Checking…";
    try {
      const { passed, output, errorMessage } = await runPythonAndCompareOutput(
        textarea.value,
        exercise.expectedOutput
      );
      showOutput(output || (errorMessage ? `Error: ${errorMessage}` : ""));
      if (passed) {
        status.textContent = "✅ Correct!";
        status.className = "run-status status-pass";
        const progress = loadProgress();
        progress[key] = true;
        saveProgress(progress);
      } else {
        status.textContent = errorMessage ? `❌ Error: ${errorMessage}` : "❌ Not quite — check the expected output above.";
        status.className = "run-status status-fail";
      }
    } catch (e) {
      status.textContent = "Couldn't start the Python runtime — check your connection and try again.";
    }
    checkBtn.disabled = false;
  });

  return wrap;
}

function renderTopic(stage, topic, index) {
  const key = topicKey(stage.id, index);
  const progress = loadProgress();
  const section = document.createElement("section");
  section.className = "topic-section";
  section.id = `topic-${index}`;

  const header = document.createElement("div");
  header.className = "topic-section-header";
  header.innerHTML = `
    <h3>${index + 1}. ${topic.title}</h3>
    <label class="mark-done">
      <input type="checkbox" class="mark-done-checkbox" ${progress[key] ? "checked" : ""}>
      Mark done
    </label>
  `;
  section.appendChild(header);

  const explanation = document.createElement("div");
  explanation.className = "topic-explanation";
  explanation.innerHTML = topic.explanation;
  section.appendChild(explanation);

  if (topic.example) {
    const exampleWrap = document.createElement("div");
    exampleWrap.className = "example-block";
    exampleWrap.innerHTML = `<h4>Example</h4><pre class="code-block">${escapeHtml(topic.example)}</pre>`;
    section.appendChild(exampleWrap);
  }

  if (topic.exercise) {
    section.appendChild(renderExercise(stage, index, topic.exercise));
  }

  const checkbox = header.querySelector(".mark-done-checkbox");
  checkbox.addEventListener("change", () => {
    const p = loadProgress();
    p[key] = checkbox.checked;
    saveProgress(p);
  });

  return section;
}

function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

function renderQuiz(stage, quiz) {
  const section = document.createElement("section");
  section.className = "quiz-section";
  section.innerHTML = `<h3>Quick check — Stage quiz</h3><p class="quiz-instructions">Answer all questions, then click "Check quiz" to see your score.</p>`;

  const form = document.createElement("form");
  form.className = "quiz-form";

  quiz.forEach((q, qIndex) => {
    const qWrap = document.createElement("div");
    qWrap.className = "quiz-question";
    qWrap.innerHTML = `<p class="quiz-question-text">${qIndex + 1}. ${q.question}</p>`;
    q.choices.forEach((choice, cIndex) => {
      const id = `q${qIndex}-c${cIndex}`;
      const label = document.createElement("label");
      label.className = "quiz-choice";
      label.innerHTML = `
        <input type="radio" name="q${qIndex}" value="${cIndex}" id="${id}">
        <span>${choice}</span>
      `;
      qWrap.appendChild(label);
    });
    const feedback = document.createElement("p");
    feedback.className = "quiz-feedback";
    feedback.hidden = true;
    qWrap.appendChild(feedback);
    form.appendChild(qWrap);
  });

  const submitBtn = document.createElement("button");
  submitBtn.type = "button";
  submitBtn.className = "quiz-submit-btn";
  submitBtn.textContent = "Check quiz";

  const scoreEl = document.createElement("p");
  scoreEl.className = "quiz-score";

  submitBtn.addEventListener("click", () => {
    let correct = 0;
    quiz.forEach((q, qIndex) => {
      const qWrap = form.children[qIndex];
      const selected = form.querySelector(`input[name="q${qIndex}"]:checked`);
      const feedback = qWrap.querySelector(".quiz-feedback");
      feedback.hidden = false;
      if (selected && parseInt(selected.value, 10) === q.correctIndex) {
        correct++;
        feedback.textContent = `✅ Correct — ${q.explanation}`;
        feedback.className = "quiz-feedback status-pass";
      } else {
        feedback.textContent = `❌ ${selected ? "Not quite" : "No answer selected"} — ${q.explanation}`;
        feedback.className = "quiz-feedback status-fail";
      }
    });
    scoreEl.textContent = `Score: ${correct} / ${quiz.length}`;
  });

  form.appendChild(submitBtn);
  form.appendChild(scoreEl);
  section.appendChild(form);
  return section;
}

async function init() {
  const stageId = getStageIdFromUrl();
  try {
    await loadLessonScript(stageId);
  } catch (e) {
    renderMissingLesson(stageId);
    return;
  }

  // STAGE_LESSON is defined by the dynamically loaded lessons/<id>.js file
  const stage = window.STAGE_LESSON;
  if (!stage) {
    renderMissingLesson(stageId);
    return;
  }

  document.title = `${stage.title} — Python Learning Roadmap`;
  document.getElementById("lesson-title").textContent = stage.title;
  document.getElementById("lesson-intro").textContent = stage.intro || "";

  const container = document.getElementById("lesson-container");
  container.innerHTML = "";

  stage.topics.forEach((topic, index) => {
    container.appendChild(renderTopic(stage, topic, index));
  });

  if (stage.quiz && stage.quiz.length) {
    container.appendChild(renderQuiz(stage, stage.quiz));
  }
}

init();
