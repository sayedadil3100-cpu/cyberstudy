# CyberStudy development handoff — 6 November 2026

## Baseline and preservation

Repository: https://github.com/sayedadil3100-cpu/cyberstudy
Baseline commit: 3b3da4f (main at clone time). Original files remain in Git history and the delivered baseline ZIP. The newer merged release 14fba22 is the deployment parent.

The deployed dashboard and roadmap were inspected in Chrome. The live site has 12 chapters, 36 topic summaries, 36 quiz questions and seven role descriptions. Its content is a concise undergraduate introduction, not a complete professional training programme. The existing code tests cover quiz rotation, scoring, chapter completion, wrong-answer review, theme settings and saved-session compatibility.

Original question IDs, chapter ordering, original lesson text, career role data and scoring functions are unchanged. Expanded role pages retain the original role description, duties, example and chapter links. Browser progress remains in `cyberstudy-v1`; optional `labResults` and `labNotes` fields are additive. Users on a different origin do not automatically get their existing live-site progress.

## Release 2.1.1

- Seven role guides with milestones, practice targets, project ideas and readiness prompts.
- Eleven certification and learning entries with role filtering, provider links, preparation advice and cost caveats. Four provider pages were checked; CompTIA pages were inaccessible and their cards explicitly require re-verification; existing resources from the newer GitHub release were retained.
- Six guided scenarios, fictional evidence worksheets, feedback and automatically saved investigation notes. Notes are escaped before HTML rendering. A correct multiple-choice answer records scenario completion; written notes are not assessed or verified.
- Twelve additional chapter workshops, each with an objective, exercise and expected reasoning. These supplement the existing summaries; they do not constitute a full curriculum rewrite.
- A deterministic next-step recommendation based on reading progress, missed questions and lab completion. It is not an AI tutor or a validated skills assessment.
- Responsive additions using the existing theme palette; the mobile navigation scrolls horizontally to accommodate new destinations.

## Verification and release gate

Run `node check-all.cjs`. It exits on the first failed suite. Existing fingerprint tests ensure the original question bank, chapters and career data remain unchanged. Feature tests check filtering, correct/incorrect scenario completion, notes escaping, legacy completion objects, draft preservation during grading, storage failure notices and the additive workshop/role renderers.

These are Node tests with a small document mock, not a browser emulator. The new screens have not passed visual browser QA: localhost navigation timed out in both available browser routes. Before release, test at 360px, 768px and desktop widths in dark/light/system themes; verify keyboard navigation, horizontal overflow, all seven nav destinations, role filters, lab feedback, saving/reloading notes and resuming a legacy quiz. Also test disabled/full browser storage. No new dependency, account or paid service is required.

The user explicitly authorised GitHub Pages deployment on 6 November 2026. This release is built on the newer main commit 14fba2275cd99786cdeeb1e367e018da50dd77ef, retaining its three SOC labs, their result formats, seven resources and SOC milestones. Local preview connections remain unavailable; deployment is proceeding with passing automated tests and live verification to follow. CompTIA verification remains clearly labelled as incomplete. No accounts, cloud sync or AI features are claimed.

## Sequential remaining roadmap

1. Complete browser QA and resolve any observed layout, interaction or accessibility failures.
2. Verify both CompTIA cards from official current pages; review regional costs, maintenance obligations and renewal rules across all credentials. Add evaluated free learning alternatives and clearly distinguish completion certificates from certifications.
3. Expand every topic from a summary into a reviewed lesson with worked examples, prerequisites, citations and assessments. Existing workshops are a first increment.
4. Develop multi-step SOC exercises with richer downloadable datasets, rubrics, hints and assessed written findings. Current scenarios are introductory decisions only.
5. Improve storage validation, failure reporting across all screens, progress export/import and recovery from malformed saved data. Existing legacy parsing remains a known limitation.
6. Add explicit role selection and evidence-based skill-gap reporting. Current next-step rules use reading counts and scenario completion, not a validated competence score.
7. Plan accounts and cloud progress with a chosen backend, access-control rules, privacy decisions and migration tests; obtain approval before provisioning or deployment.
8. Consider offline/PWA support after testing cache upgrades and data recovery. No offline support was added here.
9. Add portfolio sharing after deciding what is public and how claims are verified.
10. Consider AI tutoring and community only after the learning content is reviewed; these need budgets, operations and moderation decisions.

The prior chat described a 23-row spreadsheet, but its attachment was not available through the recovered chat. This list is an evidence-based implementation sequence, not a claim to reproduce every original row.

## Learn while building

`app.js` owns the original state and quiz logic. `chapters.js` and `roadmap.js` provide the original content. `dashboard.js` supplies the existing dashboard. `features.js` adds role guidance, certification filtering, scenarios and recommendation rules. `curriculum.js` adds workshops and evidence notes. Load order matters because these scripts extend existing functions.

A wrapper stores a reference to a function, calls it, then appends more output. That preserves existing behaviour but becomes difficult to maintain as the app grows. A later refactor should introduce explicit page renderers and data modules, with the compatibility tests kept throughout.

Try this small exercise: add a fourth fictional scenario to `miniLabs` and its evidence to `labEvidence`, then run the checks and inspect it in a browser. Explain why correct-answer feedback is different from proving practical competence. Never insert a learner's raw text into HTML; `escapeStudyText` converts special characters into text-safe entities.

## Official sources consulted

- ISC2 CC: https://www.isc2.org/certifications/cc and its current exam outline.
- Cisco CCNA: https://www.cisco.com/site/us/en/learn/training-certifications/certifications/enterprise/ccna/index.html
- OffSec PEN-200: https://www.offsec.com/courses/pen-200/
- Centri BTL1 (redirected from Security Blue Team): https://www.centri.org/certifications/blue-team-level-1
- CompTIA Security+ and CySA+ URLs are included in cards, but retrieval failed; detailed current requirements are not verified.

Role mappings and preparation advice are CyberStudy editorial recommendations, not endorsements by these providers or guarantees of employment.
