# adellevis.github.com

Marketing site for Adelle Marcero — live event painter. Deployed at **www.adelle.ink** via GitHub Pages.

## Stack

- **Eleventy (11ty)** — static site generator. Config in `.eleventy.js`.
- **Sass** — compiled via the `sass` CLI.
- **Bootstrap 5.0.2** — Sass sources live in `sass/`; JS bundle loaded from CDN.
- **jQuery 2.1.3** and **FontAwesome** — both from CDN.
- **Google Fonts** — EB Garamond.

## Layout

```
index.html, contact.html, faq.md  → page sources (front-matter on top)
_includes/basic-page.html         → shared layout (nav, footer, script tags)
sass/                             → Sass sources; style.scss is the entry
src/                              → static assets (img, fonts, video, js) — passthrough-copied by 11ty
docs/                             → BUILD OUTPUT — what GitHub Pages serves
docs/CNAME                        → custom domain (www.adelle.ink)
```

GitHub Pages is configured to serve from `docs/`, so the build output is committed.

## Scripts

```bash
npm start          # 11ty --serve + sass --watch in parallel (dev)
npm run serve      # 11ty --serve only
npm run watch:sass # sass --watch only
npm run build      # one-shot 11ty build + sass compile → docs/
```

## Custom JS

In `src/js/` (also passthrough-copied to `docs/src/js/`):

- `autohide.js` — hides/shows the navbar on scroll.
- `stats.js` — page analytics/stats.
- `lazy-ry.js`, `macy-masonry.js` — image lazy-loading and masonry grid.
- `bootstrap.bundle.*` — vendored Bootstrap JS (the layout currently loads it from CDN).

## Deploy

Commit the regenerated `docs/` directory. GitHub Pages picks it up from `main`.
