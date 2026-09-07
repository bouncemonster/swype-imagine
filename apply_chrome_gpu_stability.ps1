# Chrome GPU Stability - Run as Administrator
$ErrorActionPreference = 'SilentlyContinue'

Write-Host "=== Chrome GPU Stability Setup ===" -ForegroundColor Cyan

# 1. TDR Settings - prevent GPU timeout crashes
Write-Host "[1] Setting TDR delay to 60 seconds..." -ForegroundColor Yellow
$tdrPath = "HKLM:\SYSTEM\CurrentControlSet\Control\GraphicsDrivers"
Set-ItemProperty -Path $tdrPath -Name "TdrDelay" -Value 60 -Type DWord -Force
Set-ItemProperty -Path $tdrPath -Name "TdrDdiDelay" -Value 60 -Type DWord -Force
Set-ItemProperty -Path $tdrPath -Name "TdrLimitTime" -Value 120 -Type DWord -Force
Set-ItemProperty -Path $tdrPath -Name "TdrLimitCount" -Value 10 -Type DWord -Force
Write-Host "  Done!" -ForegroundColor Green

# 2. Chrome Policy - force hardware acceleration
Write-Host "[2] Setting Chrome GPU policy..." -ForegroundColor Yellow
$policyPath = "HKLM:\SOFTWARE\Policies\Google\Chrome"
if (-not (Test-Path $policyPath)) { New-Item -Path $policyPath -Force | Out-Null }
Set-ItemProperty -Path $policyPath -Name "HardwareAccelerationModeEnabled" -Value 1 -Type DWord -Force
Write-Host "  Done!" -ForegroundColor Green

# 3. Desktop shortcut with ALL flags
Write-Host "[3] Creating desktop shortcut..." -ForegroundColor Yellow
$shell = New-Object -ComObject WScript.Shell
$lnk = $shell.CreateShortcut("$env:USERPROFILE\Desktop\Chrome GPU Fractal.lnk")
$lnk.TargetPath = "C:\Program Files\Google\Chrome\Application\chrome.exe"
$lnk.Arguments = "--ignore-gpu-blocklist --use-angle=gl --enable-webgl --enable-gpu-compositing --enable-gpu-rasterization --enable-unsafe-webgpu --force-high-performance-gpu --enable-parallel-rasterization --disable-gpu-sandbox --disable-background-timer-throttling http://localhost:5173"
$lnk.Save()
Write-Host "  Done!" -ForegroundColor Green

Write-Host "`n=== COMPLETE ===" -ForegroundColor Cyan
Write-Host "REBOOT required for TDR settings!" -ForegroundColor Red
Write-Host "Use 'Chrome GPU Fractal' shortcut on Desktop." -ForegroundColor Yellow
