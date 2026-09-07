# Comprehensive system check
Write-Host "=== Windows Event Log: GPU/Display Errors (last 24h) ==="
$startTime = (Get-Date).AddHours(-24)
Get-WinEvent -FilterHashtable @{LogName='System'; StartTime=$startTime} -MaxEvents 50 -ErrorAction SilentlyContinue | Where-Object {
    $_.ProviderName -match 'Display|dxg|nvlddmkm|WDDM|GPU|D3D|WHEA' -or
    $_.Message -match 'display driver|stopped responding|nvlddmkm|TDR|GPU|graphics'
} | ForEach-Object {
    Write-Host "[$($_.TimeCreated)] $($_.ProviderName) ID=$($_.Id): $($_.Message)" -ForegroundColor Red
}

Write-Host "`n=== Windows Event Log: Application Errors (last 24h) ==="
Get-WinEvent -FilterHashtable @{LogName='Application'; Level=2; StartTime=$startTime} -MaxEvents 20 -ErrorAction SilentlyContinue | ForEach-Object {
    Write-Host "[$($_.TimeCreated)] $($_.ProviderName): $($_.Message)" -ForegroundColor Yellow
}

Write-Host "`n=== NVIDIA GPU Status ==="
nvidia-smi --query-gpu=name,driver_version,temperature.gpu,utilization.gpu,memory.used,memory.total --format=csv,noheader 2>&1

Write-Host "`n=== Chrome GPU Info ==="
$chromeLocalState = "$env:LOCALAPPDATA\Google\Chrome\User Data\Local State"
if (Test-Path $chromeLocalState) {
    $content = Get-Content $chromeLocalState -Raw
    if ($content -match 'use-angle@(\w+)') {
        Write-Host "ANGLE backend: $($matches[1])"
    }
    if ($content -match 'enabled_labs_experiments') {
        Write-Host "Chrome flags: present"
    }
}

Write-Host "`n=== GPU Registry Preference ==="
$gpuReg = Get-ItemProperty "HKCU:\Software\Microsoft\DirectX\UserGpuPreferences" -ErrorAction SilentlyContinue
if ($gpuReg) {
    Write-Host "GPU preferences set"
} else {
    Write-Host "No GPU preferences in registry"
}
