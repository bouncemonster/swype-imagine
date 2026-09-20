# Revert ANGLE to D3D11 and check Chrome GPU status
$localStatePath = "$env:LOCALAPPDATA\Google\Chrome\User Data\Local State"
$content = Get-Content $localStatePath -Raw

# Revert D3D12 back to D3D11
$newContent = $content -replace '"use-angle@d3d12"', '"use-angle@1"'
[System.IO.File]::WriteAllText($localStatePath, $newContent, [System.Text.Encoding]::UTF8)
Write-Host "ANGLE reverted to D3D11 (use-angle@1)"

# Verify
$verify = Get-Content $localStatePath -Raw
if ($verify -match '"use-angle@(\w+)"') {
    Write-Host "Verified: $($matches[1])"
}

Write-Host "`n=== Chrome needs FULL restart for ANGLE change to take effect ==="
Write-Host "Close ALL Chrome windows and tabs, then reopen."
