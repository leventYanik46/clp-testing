<!--
This file guides AI coding agents that work on this repository. Keep it concise
and focused on repo-specific patterns, workflows and examples so an agent can
be immediately productive.
-->

# Copilot instructions — clp-hosting (AstroWind fork)

## Summary
- This site is an Astro (v5.x) static site based on the AstroWind template.
- Output: `static` (see `astro.config.ts`), deployed to Netlify (`netlify.toml`).
- Config lives in `src/config.yaml`. The theme integration is in `vendor/integration`.

## Key files
- `package.json`: Scripts for dev/build/preview/check/fix and Netlify CLI.
- `astro.config.ts`: Integrations (Tailwind, MDX, sitemap, Netlify adapter, image domains, markdown plugins). Example: `astrowind({ config: './src/config.yaml' })`.
- `netlify.toml`: Deployment settings, redirects, headers, and `dist` publish dir.
- `src/config.yaml`: Site metadata and app toggles (blog enabled, permalinks, theme). Edit this to change site-wide behavior.
- `src/components/`: UI components. `widgets/Header.astro` shows common patterns (props, `Astro.props`, `class:list`, internal `utils` usage).

## Architecture / Big picture
- Static site with prerendered blog pages. The `vendor/integration` (AstroWind) reads `src/config.yaml` and injects features such as blog routing and templates.
- Pages: `src/pages/` exposes routes; `src/content/post/` (gitignored) contains blog content managed by Decap CMS. Images from the CMS may be remote URLs — note README's `ignore-blog-posts.sh` after pulls.
- Design: Tailwind CSS via `@astrojs/tailwind` integration. Components are lightweight Astro components (no framework) and use `class:list` for conditional classes.

## Developer workflows (commands)
- Install: `npm install`
- Local dev: `npm run dev` (runs `astro dev`, default port 3000)
- Build: `npm run build` (produces `dist/` — Netlify publishes this)
- Preview built site locally: `npm run preview`
- Lint & checks: `npm run check` (runs Astro check, ESLint, Prettier)
- Format/fix: `npm run fix`
- Deploy (manual Netlify using CLI): `npm run deploy` (runs `netlify build && netlify deploy --prod`)

## Repository-specific conventions & patterns
- **Config-first**: `src/config.yaml` controls high-level features (enable/disable blog, taxonomy routes, posts per page). Prefer updating config over changing code for site behavior.
- **Permalinks & utilities**: Use `~/utils/permalinks` helpers such as `getHomePermalink()` and `trimSlash()` when building links (see `src/components/widgets/Header.astro`).
- **Components**: Prefer small, composable `.astro` components under `src/components/`. Examples: `Logo.astro`, `CustomStyles.astro`, `ui/Button.astro`.
- **Styling**: Tailwind classes in templates; `class:list` is used frequently to toggle classes based on props/state (see `Header.astro`). Keep classes small and use `max-w-7xl` / container utilities for layout consistency.
- **i18n**: Config `i18n.language` + `textDirection`. Not a full i18n system — edit `src/pages` and `src/config.yaml` when adding translations.

## Integration points & external dependencies
- **Netlify**: `netlify.toml` (build/publish). Serverless functions under `netlify/functions` (package.json `functions` path).
- **Decap CMS**: `admin/` folder and `decap-cms-app` dependency; `src/content/post/` is often gitignored since CMS-managed content and images live off-repo.
- **Google APIs & Analytics**: `googleapis` and analytics integrations exist — set keys in environment during deploy. `src/config.yaml` holds `analytics.vendors.googleAnalytics.id`.
- **Image domains**: Listed in `astro.config.ts` (`image.domains`) — add remote hosts here to enable Astro image optimization.

## Examples (copyable patterns)
- **Conditional classes in `.astro` components (Header example)**:
  ```astro
  const isSticky = Astro.props.isSticky
  <header class:list={[ { sticky: isSticky }, 'top-0 z-40' ]}>
  ```
- **Using `Astro.props` with TypeScript interface in `.astro` frontmatter**:
  ```astro
  interface Props { links?: Array<MenuLink> }
  const { links = [] } = Astro.props
  ```
- **Getting site URL / current path**:
  ```astro
  const currentPath = `/${trimSlash(new URL(Astro.url).pathname)}`
  ```

## What to avoid / gotchas
- After pulling, run `./ignore-blog-posts.sh` (README note) — local dev can fail if Decap/Netlify CMS images are present and Astro cannot infer sizes.
- Do not assume SSR-only: project is configured as `output: 'static'` and many blog pages expect `prerender = true`. Changing `output` may break blog.
- Large image domains or unknown remote image hosts must be added to `astro.config.ts` `image.domains` to avoid runtime errors with image imports.

## When you need more context
- Look at `vendor/integration` for how `src/config.yaml` is consumed.
- Check `src/pages/[...blog]/` for routing of blog pages and example frontmatter.
- Open `netlify.toml` for redirects rules — many legacy routes are rewritten there.

---

If any section is unclear or you'd like deeper examples (component lifecycle, plugin hooks, or CMS sync), tell me which area to expand.
