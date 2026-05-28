# Punch list — post-SEO pass (2026-05-28)

These were left over after the SEO/UX/analytics commit on `main`. None block the redesign work — pick them up when convenient.

## Analytics

- [ ] **Verify GA4 is firing in production.** Open https://adelle.ink, click any "Check My Availability" button, watch GA4 → Realtime for the `cta_click` event with `location` parameter. If nothing shows up in 60s, debug (likely ad blocker on localhost, browser cache, or GTM/gtag misconfig).
- [ ] **Mark `cta_click` as a Key Event** in GA4. GA4 → Admin → Events. The event has to appear in the list first, which takes ~24h after the first real event lands.
- [ ] **Set up internal-traffic filter** in GA4 so your own dev/localhost hits don't inflate stats. GA4 → Admin → Data Streams → web stream → Configure tag settings → Define internal traffic.

## SEO

- [ ] **Submit sitemap to Google Search Console.** URL: `https://adelle.ink/sitemap.xml`. One-click in GSC once the domain property is verified.
- [ ] **Swap gallery alt text from generic to venue-specific** once Adelle confirms which photo is which venue. Format: `Live wedding painting of [moment] at [venue name], [city], [state]`. Files: `index.html` gallery section. Real image-search upside (long-tail "wedding painter at [venue]" queries).

## Domain

- [ ] **301 redirect from `adelle.ink` → `adellemarcero.com`** when ready. Configured on Hover (the registrar), not in code. Out of scope per the original SEO doc but flagged here so it isn't forgotten. After redirect lands, re-resubmit sitemap from the new domain in GSC.

## Stats (waiting on Adelle)

- [ ] Confirm the "3,408 paintings created" and "50+ venues worked with" numbers are accurate. Years-of-experience auto-updates via `data-years-since="2013"`.
