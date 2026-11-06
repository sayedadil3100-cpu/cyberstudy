# CyberStudy 2.0 implementation status

Status date: 2026-11-06

| Step | Roadmap item | Status | Evidence or blocker |
| --- | --- | --- | --- |
| 1 | Inspect live site, repository and code | Done | Repository, source layout, storage model and regression checks audited. |
| 2 | Back up code and document features | Done | Complete local backup, Git bundle, recovered roadmap and restore note verified. |
| 3 | Audit chapters and topics | Done | 12 chapters, 36 summaries and 36 questions reviewed; compatibility-sensitive ordering documented. |
| 4 | Rewrite and complete core lessons | Substantially complete | Existing lessons already include explanations, examples, practice and self-checks. A deeper external editorial review remains useful. |
| 5 | Audit role roadmaps | Done | Seven role overviews inspected; milestone and evidence gaps documented. |
| 6 | Polish SOC Analyst roadmap | Done for this increment | Three stages now connect foundations, defensive practice and job evidence. |
| 7 | Refine other role roadmaps | Remaining | Other roles still need milestone-level essential and optional skill separation. |
| 8 | Research certifications and alternatives | Done for initial guide | Seven options use official source links, learner level, role relevance and tradeoffs. Fees must always be rechecked. |
| 9 | Build role-based certification guide | Done for initial guide | New Certs page distinguishes certifications from course-completion learning. |
| 10 | Create safe guided mini-labs | Done for SOC starter scope | Three fictional evidence-based labs cover Linux authentication, web access and phishing triage. |
| 11 | Add assessments and feedback | Done for starter labs | Each lab records a choice locally and gives investigation feedback. Full cross-skill assessment remains later. |
| 12 | Obsidian Green redesign | Already complete at baseline | Responsive dark, light and system themes were present and remain protected by tests. |
| 13 | Accounts and secure profiles | Remaining | Requires backend selection, credentials, privacy decisions and row-level access tests. |
| 14 | Cloud sync and migration | Remaining | Depends on Step 13 and a tested local-to-cloud conflict policy. |
| 15 | Next Best Step recommendations | Remaining | Must depend on validated roadmap, assessment and synced progress data. |
| 16 | Skill-gap dashboard | Remaining | Needs broader assessments and cloud progress model. |
| 17 | Public skill portfolio | Remaining | Needs accounts, privacy controls and visibility rules. |
| 18 | PWA and offline basics | Remaining | Should follow the cloud/offline data design to avoid progress conflicts. |
| 19 | Security, accessibility and performance testing | In progress | Five automated regression checks pass. Browser visual, accessibility, authorization and performance suites remain. |
| 20 | Pilot with 10–20 students | Remaining | Requires a deployable preview and real participants. |
| 21 | AI tutor prototype | Deferred | Depends on reliable content and pilot evidence; needs safety evaluations and usage limits. |
| 22 | Moderated community | Deferred | Depends on accounts, moderation and anti-spam design. |
| 23 | Paid-value test | Deferred | Must follow pilot evidence and transparent pricing research. |

## Current test result

All five local regression scripts pass. They cover scoring and question rotation, chapter completion, role navigation, legacy progress compatibility, theme behavior, certification data, guided labs, lab feedback and saved lab results.

## Publication state

The changes are prepared on `feature/cyberstudy-2-roadmap-foundations`. They should be reviewed in a pull request before merging to `main`, because GitHub Pages currently publishes `main` from the repository root.

