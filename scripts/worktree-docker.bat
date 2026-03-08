@echo off
setlocal enabledelayedexpansion

:: Get current branch name (slashes → dashes, lowercase)
for /f "tokens=*" %%b in ('git branch --show-current') do set BRANCH=%%b
set BRANCH=%BRANCH:/=-%
:: Convert to lowercase via PowerShell
for /f "tokens=*" %%L in ('powershell -Command "\"%BRANCH%\".ToLower()"') do set BRANCH=%%L

:: Fallback to directory name if branch is empty
if "%BRANCH%"=="" (
    for %%d in ("%cd%") do set BRANCH=%%~nxd
)

:: Use branch name as Docker Compose project name
set COMPOSE_PROJECT_NAME=%BRANCH%

:: Assign a stable port by hashing the project name (range 3000-3999)
:: Uses PowerShell to compute a simple hash
for /f "tokens=*" %%p in ('powershell -Command "$h = 0; '%BRANCH%'.ToCharArray() | ForEach-Object { $h = ($h * 31 + [int]$_) -band 0x7FFFFFFF }; 3000 + ($h %% 1000)"') do set PORT=%%p

:: Derive worktree name from current directory
for %%d in ("%cd%") do set WORKTREE=%%~nxd

echo Worktree:  %WORKTREE%
echo Branch:    %BRANCH%
echo Project:   %COMPOSE_PROJECT_NAME%
echo Port:      %PORT%  -^>  http://localhost:%PORT%

:: Pass all arguments to docker compose
docker compose %*

endlocal
