# CyberStudy 2.0 roadmap audit

Baseline audited: `main` at `3b3da4f78c962904b110e12152dec09a52929418`.

## Existing features preserved

- Static GitHub Pages application with no build step.
- 12 chapters containing 36 lesson summaries, practice activities and self-checks.
- 36 rotating questions across three difficulty levels.
- Learn and Quiz modes, explanations, exam points and wrong-answer review.
- Browser-local session history, chapter completion and theme preference.
- Seven role overviews and chapter links.
- Responsive Obsidian Green dark, light and system themes.
- Four passing regression scripts covering content fingerprints, storage compatibility, scoring, navigation and themes.

## Gaps found against the roadmap

- Career paths were overviews, not milestone-and-evidence roadmaps.
- No curated certification guide or explicit distinction between certifications and course-completion certificates.
- No guided hands-on investigation labs.
- Assessment feedback existed for quiz questions, but did not cover practical SOC evidence.
- No accounts, database, cloud synchronization or local-to-cloud migration.
- No PWA manifest or service worker.
- No rule-based next-step engine, skill-gap dashboard or portfolio.
- No automated browser accessibility, authorization, XSS or performance suite.
- Student pilot, AI tutor, community and paid-value tests require later validation and product work.

## Content review notes

- The chapter sequence moves from computing and networking foundations through defensive and applied topics.
- Each chapter already includes an explanation, example or exam point, a safe practice activity and a self-check, satisfying the intended lesson shape at summary depth.
- Existing question and chapter ordering is compatibility-sensitive and is protected by fingerprint tests.
- Certification prices and policies are changeable. The application therefore links to official sources and tells learners to confirm current details.
- Labs use fictional or reserved example data and do not instruct learners to probe real systems.

## Increment implemented on the feature branch

- Added a three-stage SOC Analyst milestone path with concrete learning evidence.
- Added seven role-linked certification and learning options with official sources and tradeoffs.
- Added three safe SOC mini-labs: Linux authentication logs, web access logs and phishing triage.
- Added answer-specific investigation feedback and local completion persistence.
- Added regression coverage for new pages and preserved navigation.

## Deferred dependencies

Accounts and cloud sync need a selected backend, project credentials and data-policy decisions. They should be developed in a preview environment before production publication. PWA caching should follow cloud-migration design so it does not create conflicting offline data. Real-student validation cannot be marked complete without conducting the pilot.

