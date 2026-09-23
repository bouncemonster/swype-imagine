<!--
Thanks for opening a PR. Fill the sections below; the CI gate + reviewer
will use them to accept/reject quickly.
-->

## Summary
- One or two sentences on **what** changed and **why**.
- Links: Closes #___ / Related to #___

## Affected layers
Shader / Engine / Data / UI / Personalization / Build / Docs (delete non-applicable).

## Evidence
- [ ] `npx tsc --noEmit` → 0 errors
- [ ] `npm run build` → succeeds, note any chunk size deltas
- [ ] `npm run test:unit` → green
- [ ] `npm run test` (1875-assertion integration autotest) → green
- [ ] `npm run test:mobile -- http://127.0.0.1:4173` → PASS on 3 viewports
- [ ] Manual smoke on https://fractal.simundis.com/ preview deploy (paste URL)

## Screenshots / captures
Before / after for any visual or HUD change. Delete this section if purely
internal (types, math, config).

## Performance
If boot / render / memory touched, list before/after KB or ms. Reference
`docs/PERF_AUDIT-2026-09-23.md` for methodology.

## Risk & rollback
- Blast radius (which fractal indices / render styles / viewports)?
- Revert plan if it lands and misbehaves?

## Docs
- [ ] `README.md` / `docs/*` / `DESIGN.md` / `ARCHITECTURE.md` updated if user-facing behavior changed.
- [ ] `docs/CHANGELOG.md` entry added under `## [Unreleased]`.
