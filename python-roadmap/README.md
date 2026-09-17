# Python Learning Roadmap

A small static learning-platform site: a 15-stage Python curriculum (fundamentals → deployment) with checkboxes per topic and progress tracked in the browser (localStorage). No backend, no build step — plain HTML/CSS/JS.

## Deploy it on GitHub Pages

1. Create a new repository on GitHub (public, so Pages can serve it on the free tier).
2. Push this folder to it:
   ```bash
   git remote add origin https://github.com/<your-username>/<your-repo>.git
   git branch -M main
   git push -u origin main
   ```
3. In the repo on GitHub: **Settings → Pages → Build and deployment → Source → GitHub Actions**.
4. Push (or re-run the included workflow under the **Actions** tab). The included `.github/workflows/deploy.yml` builds and publishes the site automatically on every push to `main`.
5. Your site will be live at `https://<your-username>.github.io/<your-repo>/`.

No further setup needed — it's static files, so there's no server, database, or environment variables to configure.

## Editing the content

- **`data.js`** — the roadmap content itself (stages and topics). Edit this to add/remove/reorder topics; the rest of the app adapts automatically.
- **`style.css`** — colors, spacing, layout.
- **`app.js`** — behavior (rendering, checkbox state, progress bar). Shouldn't need changes for content edits.

## Notes / limitations

- Progress is stored per-browser via `localStorage` — it is **not** synced across devices or accounts. If you want real user accounts and shared progress, you'd need to add a backend (e.g. a small API + database) — this repo doesn't include one.
- The stage/topic content is a general, commonly-used curriculum structure, not sourced from a specific named course — treat it as a customizable starting outline rather than a definitive syllabus.
