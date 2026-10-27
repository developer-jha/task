# Quality Inspection Tracker - Todo

Plan: Express + TypeScript + SQLite backend with JWT auth; React 19 + Vite + shadcn/ui mobile-first frontend.

## Setup
- [x] tasks-docs: Create `tasks/todo.md` and `tasks/lessons.md` (git init deferred to delivery phase)

## Backend (`task-backend`)
- [ ] be-scaffold: Lean Express + TS + better-sqlite3 scaffold (env, app factory, errors, response helper, validate/errorHandler middleware)
- [ ] be-db: SQLite connection, migrations (users, inspections + CHECK constraints + indexes), seed demo supervisor and sample data
- [ ] be-auth: Login (bcrypt + JWT), `/me`, `requireAuth` middleware
- [ ] be-inspections: Repository/service/controller/routes for list (filter + sort), create, get, resolve, summary
- [ ] be-tests: Vitest + Supertest integration tests for all endpoints and status codes

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
