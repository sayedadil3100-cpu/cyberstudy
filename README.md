# CyberStudy 2.0

A cybersecurity learning space by Adil Shah.

- 12 chapters, 36 topic summaries and seven role-based career roadmaps
- Four-question sessions with Learn and Quiz modes, explanations and exam points
- Wrong-answer review, session history and chapter completion
- Eleven role-filtered certification and learning resources linked to official providers
- Six safe mini-labs with feedback, portfolio prompts and local completion records
- A rule-based “Next Best Step” recommendation using real learner progress
- Responsive Obsidian Green design with Dark, Light and System appearance
- Dark default, early theme initialization and reduced-motion support

## Run locally
Serve this directory with any static HTTP server. No framework, installation or build is required.

## Checks
With Node.js installed, run `node check-all.cjs` from this directory. See DEVELOPMENT.md for scope, verification limits, source references and the remaining roadmap.

## Data compatibility
Study progress remains in `cyberstudy-v1`. Appearance uses the separate `cyberstudy-theme-v1` key. Question and chapter ordering is preserved. Progress is local to the browser and origin; clearing browser data removes it. The redesign does not migrate data from another website address.

Difficulty advances after three and six completed sessions. At the final level, the twelve advanced questions rotate in groups of four. Reviews never change original session scores.

## Deployment
GitHub Pages publishes the main branch from the repository root. Keep `.nojekyll` and relative asset paths. Live site: https://sayedadil3100-cpu.github.io/cyberstudy/

Load order: theme.js before CSS; app.js, chapters.js, roadmap.js, dashboard.js, features.js, curriculum.js after the page shell. These additions wrap the existing renderers without replacing the scoring engine.

Accounts, cloud synchronization, browser-based virtual machines, AI tutoring and community features are future phases, not part of this release.

GitHub: https://github.com/sayedadil3100-cpu
LinkedIn: https://www.linkedin.com/in/syed-adil-4a05133a6/
