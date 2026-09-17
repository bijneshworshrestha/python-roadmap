// Site-wide navigation sidebar. Lightweight by design: no framework, just
// reads ROADMAP (from data.js, which must be loaded before this file) and
// renders plain links. Include this + nav.css on every page.

function siteNavCurrentStageId() {
  const params = new URLSearchParams(window.location.search);
  return params.get("stage");
}

function renderSiteNav() {
  const nav = document.getElementById("site-nav");
  if (!nav || typeof ROADMAP === "undefined") return;

  const activeStageId = siteNavCurrentStageId();
  const isRoadmapPage = /index\.html?$/.test(window.location.pathname) || window.location.pathname.endsWith("/");

  const links = ROADMAP.map((stage) => {
    const isActive = stage.id === activeStageId;
    const shortTitle = stage.title.replace(/^Stage \d+ — /, "");
    const num = stage.title.match(/^Stage (\d+)/);
    const href = stage.hasLesson ? `lesson.html?stage=${stage.id}` : `index.html`;
    return `<a class="site-nav-link${isActive ? " active" : ""}" href="${href}">
      <span class="site-nav-num">${num ? num[1] : ""}</span>
      <span class="site-nav-label">${shortTitle}</span>
    </a>`;
  }).join("");

  nav.innerHTML = `
    <div class="site-nav-header">
      <a href="index.html" class="site-nav-brand">🐍 Python Roadmap</a>
    </div>
    <a class="site-nav-link site-nav-roadmap-link${isRoadmapPage ? " active" : ""}" href="index.html">
      <span class="site-nav-num">☰</span>
      <span class="site-nav-label">All stages (checklist)</span>
    </a>
    <div class="site-nav-section-label">Lessons</div>
    <div class="site-nav-links">${links}</div>
  `;
}

function initSiteNavToggle() {
  const toggle = document.getElementById("nav-toggle");
  const nav = document.getElementById("site-nav");
  if (!toggle || !nav) return;
  toggle.addEventListener("click", () => {
    nav.classList.toggle("nav-open");
  });
  // Close the mobile nav after clicking a link, so it doesn't stay open
  // across the page navigation on small screens.
  nav.addEventListener("click", (e) => {
    if (e.target.closest("a")) nav.classList.remove("nav-open");
  });
}

renderSiteNav();
initSiteNavToggle();
