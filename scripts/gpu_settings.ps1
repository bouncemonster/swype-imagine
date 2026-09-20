# Check Windows Graphics Settings for Chrome
Write-Host "=== Windows Graphics Settings for Chrome ==="
$chromeExe = "C:\Program Files\Google\Chrome\Application\chrome.exe"
if (Test-Path $chromeExe) {
    $hash = (Get-FileHash $chromeExe -Algorithm MD5).Hash.ToLower().Substring(0, 8)
    $regPath = "HKCU:\Software\Microsoft\DirectX\UserGpuPreferences"
    $val = (Get-ItemProperty $regPath -ErrorAction SilentlyContinue).$chromeExe
    if ($val) {
        Write-Host "Chrome GPU preference: $val"
    } else {
        Write-Host "No specific GPU preference for Chrome"
    }
}

Write-Host "`n=== Force Chrome to use High Performance GPU ==="
$regPath = "HKCU:\Software\Microsoft\DirectX\UserGpuPreferences"
if (-not (Test-Path $regPath)) {
    New-Item -Path $regPath -Force | Out-Null
}
$chromeExe = "C:\Program Files\Google\Chrome\Application\chrome.exe"
if (Test-Path $chromeExe) {
    Set-ItemProperty -Path $regPath -Name $chromeExe -Value "GpuPreference=2;" -Force
    Write-Host "Set Chrome to High Performance GPU (GpuPreference=2)"
}

Write-Host "`n=== Check if NVIDIA Control Panel has Chrome set ==="
$nvidiaReg = "HKCU:\Software\NVIDIA Corporation\Global\NVTweak\Values"
if (Test-Path $nvidiaReg) {
    Write-Host "NVIDIA settings found"
}

Write-Host "`n=== System Uptime ==="
$bootTime = (Get-CimInstance Win32_OperatingSystem).LastBootUpTime
$uptime = (Get-Date) - $bootTime
Write-Host "Last boot: $bootTime"
Write-Host "Uptime: $([math]::Floor($uptime.TotalHours))h $([math]::Floor($uptime.Minutes))m"

Write-Host "`n=== Chrome Version ==="
$chromeVersion = (Get-Item "$chromeExe").VersionInfo.ProductVersion
Write-Host "Chrome: $chromeVersion"
