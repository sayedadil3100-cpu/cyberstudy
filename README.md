# CyberStudy 2.0

A cybersecurity learning space by Adil Shah.

- 12 chapters, 36 topic summaries and seven interactive career roles
- Four-question sessions with Learn and Quiz modes, explanations and exam points
- Wrong-answer review, session history and chapter completion
- Responsive Obsidian Green design with Dark, Light and System appearance
- Dark default, early theme initialization and reduced-motion support
- Three safe guided SOC labs with evidence-based feedback
- SOC Analyst milestones and a role-based certification guide with official links

## Run locally
Serve this directory with any static HTTP server. No framework, installation or build is required.

## Checks
With Node.js installed, run `node check.cjs`, `node check-chapters.cjs`, `node check-roadmap.cjs`, `node check-v2.cjs` and `node check-features.cjs` from this directory. Checks cover scoring, rotation, chapters, content fingerprints, saved-session compatibility, theme preferences, certification data and guided labs.

## Data compatibility
Study progress remains in `cyberstudy-v1`. Appearance uses the separate `cyberstudy-theme-v1` key. Question and chapter ordering is preserved. Progress is local to the browser and origin; clearing browser data removes it. The redesign does not migrate data from another website address.

Difficulty advances after three and six completed sessions. At the final level, the twelve advanced questions rotate in groups of four. Reviews never change original session scores.

## Deployment
GitHub Pages publishes the main branch from the repository root. Keep `.nojekyll` and relative asset paths. Live site: https://sayedadil3100-cpu.github.io/cyberstudy/

Load order: theme.js before CSS; app.js, chapters.js, roadmap.js, dashboard.js after the page shell. Dashboard presentation wraps the existing study renderer without replacing the scoring engine.

Accounts, cloud synchronization and installable offline support are future phases, not part of this increment. See `ROADMAP_AUDIT.md` for completed and deferred roadmap work.

GitHub: https://github.com/sayedadil3100-cpu
LinkedIn: https://www.linkedin.com/in/syed-adil-4a05133a6/

