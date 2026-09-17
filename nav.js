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

const NAV_COLLAPSE_STORAGE_KEY = "site-nav-collapsed";

function getStoredNavCollapsed() {
  try {
    const stored = localStorage.getItem(NAV_COLLAPSE_STORAGE_KEY);
    if (stored === "true") return true;
    if (stored === "false") return false;
  } catch (e) {
    // localStorage unavailable — fall through to the viewport-based default
  }
  return window.innerWidth < 880;
}

function setNavCollapsed(collapsed) {
  document.body.classList.toggle("nav-collapsed", collapsed);
  const toggle = document.getElementById("nav-toggle");
  if (toggle) toggle.textContent = collapsed ? "☰" : "✕";
  try {
    localStorage.setItem(NAV_COLLAPSE_STORAGE_KEY, String(collapsed));
  } catch (e) {
    // ignore — e.g. private browsing
  }
}

function initSiteNavToggle() {
  const toggle = document.getElementById("nav-toggle");
  const nav = document.getElementById("site-nav");
  if (!toggle || !nav) return;

  // Persisted across pages, so the panel stays open or closed as you
  // navigate the site rather than resetting on every page load.
  setNavCollapsed(getStoredNavCollapsed());

  toggle.addEventListener("click", () => {
    setNavCollapsed(!document.body.classList.contains("nav-collapsed"));
  });

  // On narrow screens the sidebar overlays the page, so close it
  // automatically after picking a link rather than leaving it open
  // over the next page's content.
  nav.addEventListener("click", (e) => {
    if (e.target.closest("a") && window.innerWidth < 880) {
      setNavCollapsed(true);
    }
  });
}

renderSiteNav();
initSiteNavToggle();
