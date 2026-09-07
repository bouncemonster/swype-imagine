# Check Chrome GPU status and blocklist
Write-Host "=== Chrome GPU Blocklist Status ==="
$chromeLocalState = "$env:LOCALAPPDATA\Google\Chrome\User Data\Local State"
$content = Get-Content $chromeLocalState -Raw

# Check ANGLE backend
if ($content -match '"use-angle@(\w+)"') {
    Write-Host "ANGLE backend: $($matches[1])"
}

# Check GPU blocklist
if ($content -match '"gpu_blocklist"') {
    Write-Host "GPU blocklist: PRESENT"
} else {
    Write-Host "GPU blocklist: not found"
}

# Check GPU preferences
if ($content -match '"gpu_preference":\s*(\d+)') {
    Write-Host "GPU preference: $($matches[1])"
}

# Check enabled labs experiments
if ($content -match '"enabled_labs_experiments":\s*\[(.*?)\]') {
    Write-Host "Labs experiments: $($matches[1])"
}

Write-Host "`n=== Chrome GPU Info Page Data ==="
# Check if there's a GPU preferences file
$gpuPrefsPath = "$env:LOCALAPPDATA\Google\Chrome\User Data\GPU Preferences"
if (Test-Path $gpuPrefsPath) {
    Write-Host "GPU Preferences file exists"
    Get-ChildItem $gpuPrefsPath -Name
}

Write-Host "`n=== Check Chrome command line flags ==="
$chromeShortcuts = @(
    "$env:APPDATA\Microsoft\Windows\Start Menu\Programs\Google Chrome.lnk",
    "$env:PUBLIC\Desktop\Google Chrome.lnk",
    "$env:USERPROFILE\Desktop\Google Chrome.lnk"
)
foreach ($sc in $chromeShortcuts) {
    if (Test-Path $sc) {
        $shell = New-Object -ComObject WScript.Shell
        $shortcut = $shell.CreateShortcut($sc)
        Write-Host "Shortcut: $sc -> Target: $($shortcut.TargetPath) Args: $($shortcut.Arguments)"
    }
}

Write-Host "`n=== NVIDIA Driver Details ==="
nvidia-smi --query-gpu=name,driver_version,pci.bus_id --format=csv,noheader 2>&1

Write-Host "`n=== Check if Chrome GPU process is running ==="
Get-Process chrome -ErrorAction SilentlyContinue | ForEach-Object {
    $memMB = [math]::Round($_.WorkingSet64 / 1MB, 1)
    Write-Host "  Chrome PID $($_.Id): ${memMB}MB"
}

Write-Host "`n=== DirectX Diagnostic ==="
dxdiag /t "$env:TEMP\dxdiag.txt" 2>&1
Start-Sleep -Seconds 3
if (Test-Path "$env:TEMP\dxdiag.txt") {
    Get-Content "$env:TEMP\dxdiag.txt" | Select-String "Card name|Driver Version|Driver Date|Display Memory|Current Mode" | ForEach-Object {
        Write-Host $_.Line.Trim()
    }
}
