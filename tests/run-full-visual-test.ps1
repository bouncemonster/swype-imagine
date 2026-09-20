# Launch the full 294-combo visual step test detached (survives tool-terminal timeouts).
# Usage: pwsh -NoProfile -File tests/run-full-visual-test.ps1
$env:FRACTALS = ''
$env:STYLES = ''
$root = Split-Path -Parent $PSScriptRoot
Set-Location $root
# Invoke tsx CLI directly via node: `npx tsx` fails in detached shells on Node 24
# (ERR_INPUT_TYPE_NOT_ALLOWED from the npx shim).
node node_modules/tsx/dist/cli.mjs tests/visual-step-test.ts *>&1 | Out-File -Encoding utf8 tests/results/full-294.log
