# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

SocialGrow (socialgrow.com.mx) is a single-page marketing site for a social-media growth service (followers/likes/comments for TikTok, Instagram, etc.). It's a Create React App frontend (`src/`) backed by a small set of static-data PHP endpoints (`api/`). There is no real backend/database — the "API" just returns hardcoded arrays as JSON.

## Commands

- `npm start` — run the dev server (CRA, http://localhost:3000)
- `npm run build` — production build (runs with `CI=false` so build warnings don't fail the build)
- `npm test` — run CRA/Jest tests in watch mode (only `src/App.test.js` exists, using the default CRA boilerplate test)
- `npm run eject` — irreversible CRA eject; do not run unless explicitly asked

There is no lint script; ESLint runs implicitly via `react-scripts` (config extends `react-app`/`react-app/jest` in `package.json`).

## Architecture

### Frontend (`src/`)
- `src/index.js` → `src/App.js` → `src/Pages/Home.js`. This is effectively a one-page app; `App.js` only adds the Google Tag Manager snippet via `src/utils/setHeadersGoogle.js` (production only, gated on `REACT_APP_GOOGLE_KEY`).
- `src/Pages/Home.js` is the entire page: hero section, services grid, plans/packages grid, testimonials, and footer, all as anchor-linked `<section>`s (`#services`, `#plans`, `#testimonies`) navigated to from `src/components/Menu.js`.
- Data (services, packages/plans, testimonies) is fetched client-side from the PHP API via `axios` directly inside `Home.js`/`Menu.js` `useEffect` hooks — there's no shared API client or data layer.
- **The API base URL is hardcoded to the sandbox host** (`https://sandbox.colxsoft.com/socialgrow-com-mx/api/...`) directly in `Home.js` and `Menu.js`, regardless of build environment (PROD/QA). Keep this in mind if data appears stale/wrong after a PROD deploy.
- Prices are quoted in USD in the API data and converted to MXN client-side via `src/utils/dolar.js` (`getExchangeRate`, calling the public AwesomeAPI economia endpoint live, with no fallback rate if it fails — `priceCovertion` can stay `undefined`).
- `src/utils/detectorNav.js` exports `useIsSafari()`, used in `Home.js` to render a non-animated text variant for Safari (the animated version uses a CSS class-per-word delay scheme that doesn't render reliably in Safari).
- Styling is plain CSS per component (`home.css`, `components/style.css`, `index.css`), no CSS modules/Tailwind/styled-components.

### Backend (`api/`)
- Plain PHP files, no framework, no database. Each endpoint file (`services_.php`, `packages_.php`, `testimonies_.php`, `contact_.php`) returns a hardcoded array as `{ status, message, data }` JSON.
- `api/config.php` is included by every endpoint; it sets CORS headers and defines shared constants (e.g. the WhatsApp contact number `$tel`).
- `api/.htaccess` rewrites clean URLs (`/services`, `/packages`, `/testimonies`, `/contacto`) to the corresponding `_.php` files.
- To add/change a service, package, or testimony, edit the hardcoded `$data` array in the relevant `*_.php` file directly.

### Legacy/unused files
- Root-level `index.html`, `script.js`, `styles.css`, and `assets/js/*.js` are leftovers from a pre-React static version of the site. They are not part of the CRA build (`public/index.html` + `src/`). `public/index.html` previously `<link>`-ed the root `styles.css` and an external third-party stylesheet from a personal GitHub Pages CDN directly into the live production `<head>` — both have been removed; don't re-add links to root-level legacy files from `public/index.html`.
- `Copia de README.md` is a duplicate/backup of the default CRA-generated `README.md`.

## Environments and deployment

- Three env files: `.env-PROD`, `.env-QA`, and the active `.env` (gitignored, copied from one of the above at build time). Both define `REACT_APP_HOMEPAGE`; PROD additionally defines `REACT_APP_GOOGLE_KEY`.
- Deployment is via GitHub Actions FTP deploy, not manual:
  - `.github/workflows/deployment_prod.yml` — triggers on push to `main`, copies `.env-PROD` → `.env`, builds, and FTP-deploys `build/` + `api/` to the PROD FTP target.
  - `.github/workflows/deployment_sandbox.yml` — triggers on push to `QA` branch, copies `.env-QA` → `.env`, builds, and FTP-deploys to the QA/sandbox FTP target.
- Both workflows merge the built frontend and the `api/` PHP files into one `deploy_folder` before syncing — so changes to either `src/` or `api/` ship together on the next push to `main`/`QA`.
- Given the FTP/branch-push deploy model, treat pushes to `main` and `QA` as production-affecting actions.
