#!/usr/bin/env bash
set -e

# Derive unique name from current branch (slashes → dashes, lowercase)
BRANCH=$(git branch --show-current | tr '/' '-' | tr '[:upper:]' '[:lower:]')
WORKTREE=$(basename "$(pwd)")

# Use branch name as project name (namespaces all Docker resources)
export COMPOSE_PROJECT_NAME="${BRANCH:-$WORKTREE}"

# Assign a stable port by hashing the project name (range 3000–3999)
PORT=$(( 3000 + $(echo -n "$COMPOSE_PROJECT_NAME" | cksum | cut -d' ' -f1) % 1000 ))
export PORT

echo "Worktree:  $WORKTREE"
echo "Branch:    $BRANCH"
echo "Project:   $COMPOSE_PROJECT_NAME"
echo "Port:      $PORT  →  http://localhost:$PORT"

docker compose "$@"
