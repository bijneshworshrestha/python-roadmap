const STORAGE_KEY = "python-roadmap-progress-v1";

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
    // localStorage unavailable (private browsing etc.) — fail silently
  }
}

let progress = loadProgress();

function topicKey(stageId, topicIndex) {
  return `${stageId}::${topicIndex}`;
}

function countStageComplete(stage) {
  return stage.topics.filter((_, i) => progress[topicKey(stage.id, i)]).length;
}

function renderStages() {
  const container = document.getElementById("stages-container");
  container.innerHTML = "";

  ROADMAP.forEach((stage) => {
    const card = document.createElement("div");
    card.className = "stage-card";
    card.id = `card-${stage.id}`;

    const completeCount = countStageComplete(stage);
    const isStageComplete = completeCount === stage.topics.length;

    const header = document.createElement("div");
    header.className = "stage-header";
    header.innerHTML = `
      <div class="stage-title-row">
        <div class="stage-check-icon ${isStageComplete ? "complete" : ""}">${isStageComplete ? "✓" : ""}</div>
        <div>
          <div class="stage-title">${stage.title}</div>
          <div class="stage-meta">${completeCount} / ${stage.topics.length} topics</div>
        </div>
      </div>
      <div class="stage-caret">▶</div>
    `;
    header.addEventListener("click", () => {
      card.classList.toggle("open");
    });

    const topicsWrap = document.createElement("div");
    topicsWrap.className = "stage-topics";

    stage.topics.forEach((topic, i) => {
      const key = topicKey(stage.id, i);
      const row = document.createElement("div");
      row.className = "topic-row" + (progress[key] ? " checked" : "");

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.id = `chk-${key}`;
      checkbox.checked = !!progress[key];
      checkbox.addEventListener("change", () => {
        progress[key] = checkbox.checked;
        saveProgress(progress);
        row.classList.toggle("checked", checkbox.checked);
        updateStageHeader(stage, header);
        updateOverallProgress();
      });

      const label = document.createElement("label");
      label.setAttribute("for", `chk-${key}`);
      label.textContent = topic;

      row.appendChild(checkbox);
      row.appendChild(label);
      topicsWrap.appendChild(row);
    });

    card.appendChild(header);
    card.appendChild(topicsWrap);
    container.appendChild(card);
  });

  updateOverallProgress();
}

function updateStageHeader(stage, headerEl) {
  const completeCount = countStageComplete(stage);
  const isStageComplete = completeCount === stage.topics.length;
  const icon = headerEl.querySelector(".stage-check-icon");
  const meta = headerEl.querySelector(".stage-meta");
  icon.className = "stage-check-icon" + (isStageComplete ? " complete" : "");
  icon.textContent = isStageComplete ? "✓" : "";
  meta.textContent = `${completeCount} / ${stage.topics.length} topics`;
}

function updateOverallProgress() {
  let total = 0;
  let done = 0;
  ROADMAP.forEach((stage) => {
    total += stage.topics.length;
    done += countStageComplete(stage);
  });
  const pct = total === 0 ? 0 : Math.round((done / total) * 100);
  document.getElementById("overall-fill").style.width = pct + "%";
  document.getElementById("overall-label").textContent = `${done} / ${total} topics complete`;
}

document.getElementById("reset-btn").addEventListener("click", () => {
  if (confirm("Reset all progress? This cannot be undone.")) {
    progress = {};
    saveProgress(progress);
    renderStages();
  }
});

renderStages();
