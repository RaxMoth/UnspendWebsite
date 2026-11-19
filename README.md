# Unspend — Website

The website for [Unspend](../BackYourTime), the app blocker for iPhone: what
the app does, support, privacy policy and terms.

React + TypeScript + Vite + Tailwind. No backend, no cookies, no analytics,
no third-party requests — fonts and icons are local.

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # type-check, then build to dist/
npm test          # vitest
npm run lint
```

## It follows the app's design system

The site looks like the app because it is built from the same tokens and
the same kind of components (`BackYourTime/docs/DESIGN_SYSTEM.md`). Pages
contain no colours, sizes or text styles of their own.

| In the app | Here |
|---|---|
| `lib/core/theme/app_colors.dart` — four palettes | CSS variables in `src/index.css`: light, dark, and both with increased contrast (`prefers-contrast`) |
| Profile colours, `colors.readable` / `colors.filled` | `.tone-*` classes in `src/index.css` (values computed with the app's algorithm) |
| Type, spacing, radius, motion tokens | `tailwind.config.js` (`text-heading`, `rounded-card`, `duration-medium`, …) |
| `lib/core/widgets/` | `src/components/UI/` (`AppCard`, `IconBadge`, `Button`, `Chip`, `Switch`, `SectionLabel`, `Reveal`) |
| Material "rounded" icons | `src/components/icons.ts`, drawn by `Icon` |
| Theme: System / Light / Dark | `src/hooks/useTheme.ts`, the button in the header |

The phone on the home page (`src/components/demo/PhoneDemo.tsx`) is the
dashboard rebuilt from these components, with the app's wording.

## Where the content lives

| What | Where |
|---|---|
| Name, support address, App Store link, languages | `src/config/site.ts` |
| The four block rules | `src/content/rules.ts` |
| Support questions | `src/content/faq.ts` |
| Privacy policy | `src/pages/PrivacyPolicy.tsx` — same text as `BackYourTime/store/privacy-policy.html`; change both together |
| Terms | `src/pages/TermsOfService.tsx` |

**When the app is live**, set `appStoreUrl` in `src/config/site.ts`. The
"Coming soon" labels become download buttons.

## Deploying

A static site: build and serve `dist/`. `vercel.json` sends every path to
`index.html` so the routes (`/features`, `/about`, `/support`, `/privacy`,
`/terms`) work on reload. `/privacy` and `/support` are the URLs App Store
Connect asks for.
