# React + TypeScript — Advanced, Scalable Starter (Vite)

A modern project scaffold with an opinionated but flexible structure:

- Vite + React 18 + TypeScript
- React Router v6 (lazy-loaded routes)
- TanStack Query (server state)
- Zustand (UI/local state)
- Axios with interceptors (API layer)
- Tailwind CSS (utility-first styling + ready-made Button/Card/Input)
- ESLint + Prettier + strict TS
- Vitest + Testing Library (example test)

## 1) Install

```bash
# using npm
npm i

# or with pnpm
# pnpm i

# or with yarn
# yarn
```

## 2) Run dev server

```bash
npm run dev
```

Open the printed URL (default: http://localhost:5173).

## 3) Build & preview

```bash
npm run build
npm run preview
```

## 4) Environment

Create `.env` at the project root to override the API base URL if needed:

```env
VITE_API_BASE_URL=https://jsonplaceholder.typicode.com
```

## 5) Project layout

```
src/
  app/
    config.ts           # app-wide config
    store.ts            # Zustand store (UI state)
    providers/          # React Query + Router provider
  components/
    common/             # Loader, ErrorBoundary
    ui/                 # Button, Card, Input, Navbar, Sidebar, ThemeToggle
  features/
    todos/              # Example feature: API, hooks, components
  hooks/                # Reusable hooks
  layouts/              # RootLayout
  lib/                  # axios instance + helpers
  pages/                # Route components (Home/About/NotFound)
  styles/               # Tailwind entry
  test/                 # Vitest example
```

## 6) Create a new feature (step-by-step)

1. **Create types**: `src/features/featureX/types.ts`
2. **API layer**: `src/features/featureX/api.ts` using `http` from `src/lib/axios.ts`
3. **React Query hooks**: `src/features/featureX/hooks.ts`
4. **UI components**: `src/features/featureX/YourComponent.tsx`
5. **Add to a page**: import and use it in a route (e.g. `src/pages/Home.tsx`)

This pattern keeps concerns local to the feature while sharing primitives via `components/ui`, `lib`, and `hooks`.

## 7) Testing

```bash
npm run test
```

## 8) Lint & format

```bash
npm run lint
npm run format
```

---

Happy shipping!
