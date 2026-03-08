FROM node:20-alpine AS base
WORKDIR /app
COPY package*.json ./
RUN npm ci

# ── Development server ──────────────────────────────────────────────────────
FROM base AS dev
COPY . .
# PORT is injected by docker-compose so Vite listens on the same port
# that is exposed to the host — console output will show the correct address.
CMD ["sh", "-c", "npx vite --host 0.0.0.0 --port ${PORT:-5173}"]

# ── Test runner ─────────────────────────────────────────────────────────────
FROM base AS test
COPY . .
CMD ["npx", "vitest", "run", "--reporter=verbose"]

# ── Production build ─────────────────────────────────────────────────────────
FROM base AS build
COPY . .
RUN npm run build
