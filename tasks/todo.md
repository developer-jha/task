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
- [ ] fe-shadcn: Tailwind v4 + shadcn/ui, aliases to `shared/components/ui`, theme tokens, remove old CSS/Button/Input
- [ ] fe-core: httpClient, QueryClient provider, Toaster, real AuthContext/login, AppLayout with mobile bottom nav, routes cleanup
- [ ] fe-inspections: Constants, schemas, api, query hooks, URL filter hook, form wrappers, list/card/filters/sort, resolve dialog, badges, summary grid, 3 pages
- [ ] fe-tests: Unit tests (filters hook, form validation, resolve dialog); tsc, oxlint, build pass

## Delivery
- [ ] delivery: Dockerfiles, root docker-compose.yml with nginx `/api` proxy, `.env.example` files, root README, git init
- [ ] verify: `docker compose up` and browser-verify full flow at 390px; record review section below

## Review
_To be filled in after verification._
