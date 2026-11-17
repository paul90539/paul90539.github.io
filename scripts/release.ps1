[CmdletBinding(SupportsShouldProcess = $true)]
param(
    [Parameter(Mandatory = $true)]
    [ValidatePattern('^(0|[1-9][0-9]*)\.(0|[1-9][0-9]*)\.(0|[1-9][0-9]*)$')]
    [string]$Version,

    [Parameter(Mandatory = $true)]
    [ValidateNotNullOrEmpty()]
    [string]$Summary
)

$ErrorActionPreference = 'Stop'
$repoPath = Split-Path -Parent $PSScriptRoot
Push-Location -LiteralPath $repoPath
try {
    $branch = & git symbolic-ref --quiet --short HEAD
    if ($LASTEXITCODE -ne 0) { throw 'A branch must be checked out before releasing.' }

    & git diff --quiet --
    if ($LASTEXITCODE -ne 0) { throw 'Stage or save all unstaged changes before releasing.' }
    $untrackedFiles = @(& git ls-files --others --exclude-standard)
    if ($LASTEXITCODE -ne 0) { throw 'Could not inspect untracked files.' }
    if ($untrackedFiles.Count -gt 0) { throw 'Stage or ignore all untracked files before releasing.' }

    foreach ($key in @('user.name', 'user.email')) {
        $identity = & git config --get $key
        if ($LASTEXITCODE -ne 0 -or [string]::IsNullOrWhiteSpace($identity)) {
            throw "Configure Git $key before releasing."
        }
    }

    $versionPath = Join-Path $repoPath 'VERSION'
    $changelogPath = Join-Path $repoPath 'CHANGELOG.md'
    $currentVersion = [System.IO.File]::ReadAllText($versionPath).Trim()
    if ([version]$Version -le [version]$currentVersion) {
        throw "New version $Version must be greater than $currentVersion."
    }
    $tag = "v$Version"
    & git show-ref --verify --quiet "refs/tags/$tag"
    if ($LASTEXITCODE -eq 0) { throw "Tag $tag already exists; tags are never overwritten." }
    if ($LASTEXITCODE -ne 1) { throw 'Could not inspect Git tags.' }

    $logText = [System.IO.File]::ReadAllText($changelogPath)
    $firstNewline = $logText.IndexOf("`n")
    if ($firstNewline -lt 0) { throw 'CHANGELOG.md must have a heading followed by a newline.' }
    if (-not $PSCmdlet.ShouldProcess($repoPath, "Commit staged changes and create $tag on $branch")) { return }

    $date = [DateTime]::UtcNow.ToString('yyyy-MM-dd')
    $entry = "`n## $tag - $date`n`n- $Summary`n"
    $newLog = $logText.Substring(0, $firstNewline + 1) + $entry + $logText.Substring($firstNewline + 1)
    $utf8 = New-Object System.Text.UTF8Encoding($false)
    [System.IO.File]::WriteAllText($versionPath, "$Version`n", $utf8)
    [System.IO.File]::WriteAllText($changelogPath, $newLog, $utf8)

    & git add -- VERSION CHANGELOG.md
    if ($LASTEXITCODE -ne 0) { throw 'Could not stage version files.' }
    & git commit -m "release: $tag - $Summary"
    if ($LASTEXITCODE -ne 0) { throw 'Release commit failed; no tag was created.' }
    & git tag -a $tag -m "$tag - $Summary"
    if ($LASTEXITCODE -ne 0) { throw "Commit succeeded, but creating $tag failed. Inspect Git before retrying." }
    Write-Output "Created $tag locally. Nothing was pushed."
}
finally {
    Pop-Location
}
