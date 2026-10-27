# Quality Inspection Tracker - Todo

Plan: Express + TypeScript + SQLite backend with JWT auth; React 19 + Vite + shadcn/ui mobile-first frontend.

## Setup
- [x] tasks-docs: Create `tasks/todo.md` and `tasks/lessons.md` (git init deferred to delivery phase)

## Backend (`task-backend`)
- [x] be-scaffold: Lean Express + TS + better-sqlite3 scaffold (env, app factory, errors, response helper, validate/errorHandler middleware)
- [x] be-db: SQLite connection, migrations (users, inspections + CHECK constraints + indexes), seed demo supervisor and sample data
- [x] be-auth: Login (bcrypt + JWT), `/me`, `requireAuth` middleware
- [x] be-inspections: Repository/service/controller/routes for list (filter + sort), create, get, resolve, summary
- [x] be-tests: Vitest + Supertest integration tests for all endpoints and status codes (65 passing)

Backend notes for delivery:
- `better-sqlite3` v13 ships prebuilt N-API binaries (win32/linux/linuxmusl/darwin); its implicit `node-gyp rebuild` is denied via `allowScripts` in package.json (npm >= 11.18). With older npm (e.g. in Docker), install with `npm ci --ignore-scripts`.
- Server auto-runs migrations and seeds when `users` is empty; SQLite file at `DB_PATH` (mount `data/` as a volume).

## Frontend (`task-frontend`)
- [x] fe-shadcn: Tailwind v4 + shadcn/ui, aliases to `shared/components/ui`, theme tokens, remove old CSS/Button/Input
- [x] fe-core: httpClient, QueryClient provider, Toaster, real AuthContext/login, AppLayout with mobile bottom nav, routes cleanup
- [x] fe-inspections: Constants, schemas, api, query hooks, URL filter hook, form wrappers, list/card/filters/sort, resolve dialog, badges, summary grid, 3 pages
- [x] fe-tests: Unit tests (filters hook, form validation, resolve dialog); tsc, oxlint, build pass

## Delivery
- [x] delivery: Dockerfiles, root docker-compose.yml with nginx `/api` proxy, `.env.example` files, root README, git init
- [x] verify: `docker compose up` and browser-verify full flow at 390px; record review section below

## Review

Verified on 2026-10-27 with `docker compose up --build` from this folder. Backend image is Node 22 (`npm ci --ignore-scripts`, then `node dist/server.js`). Frontend is nginx on http://localhost:8080, proxying `/api` to the backend. Migrations and the demo seed ran on first start. `GET /api/health` through nginx returned `{ success: true, data: { status: "ok" } }`. `/inspections` returned the SPA shell.

Browser check at 390×844 (`window.innerWidth` 390, side nav `display: none`, bottom tab bar visible):

- Signed in as `supervisor@arvind.com` / `Password@123`. Landed on Inspections with 8 seeded records.
- Logged LOOM-12, Hole/Tear, Critical, dated 27 Oct 2026. List became 9 records, newest first, with the new card on top.
- Filtered to Critical (`?severity=Critical`): “3 records matching filters” (LOOM-12, LOOM-01, LOOM-07).
- Sorted “Inspection date: oldest” (`order=asc`): order became LOOM-07, LOOM-12, LOOM-01.
- Resolved LOOM-12 with the note “Cut out the torn selvedge and re-inspected the roll.” Toast: “LOOM-12 marked as resolved.” The card showed Resolved and that note.
- Summary counts: Total 9, Open 5, Resolved 4. Critical moved to Open 1 / Resolved 2 / Total 3. Major and Minor stayed Open 2 / Resolved 1 / Total 3.

Tests re-run after delivery (no application-logic changes): backend 65 passed (3 files), frontend 25 passed (5 files).

Leftover risk: `docker-compose.yml` contains a labeled local-dev `JWT_SECRET`. Replace it before any shared environment. The compose volume now holds this verification’s LOOM-12 row; `docker compose down -v` reseeds. During the mobile resolve, the drawer still covered the tab bar for a few seconds after the success toast, then unmounted. Summary was reachable after that. Not changed in code; the unit test already expects `onOpenChange(false)` on success.
