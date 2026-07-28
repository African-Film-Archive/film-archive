# Project: African Film Archive
Living discovery layer for African cinema — 1895 to present, centered on African-directed work from 1955 onward.

## Stack
- SSG: Eleventy v3
- Hosting: Netlify (repo: African-Film-Archive/film-archive) — NOT YET CONNECTED
- DNS: Cloudflare (DNS-only — NEVER orange-cloud Netlify records) — NOT YET CONFIGURED
- CMS: Sveltia CMS at /admin — NOT YET BUILT
- Video: Instagram Reels embeds (Path C — YouTube optional secondary) — NOT YET BUILT
- Newsletter: MailerLite — NOT YET WIRED UP
- Payments: Stripe (activation Aug 1+) — placeholder button in place
- Email: Cloudflare Email Routing → Zoho — NOT YET CONFIGURED

## Commands
- npm run dev — local dev (eleventy --serve)
- npm run build — produces _site/
- npm run clean — clear cache and _site/

## Architecture
- /src/_data/films.json — 80 film records with provenance (10 per era across 8 eras)
- /src/_data/eras.js — 8-era taxonomy
- /src/_data/news.json — news feed, 4 seed items
- /src/_includes/ — Nunjucks layouts (base, home, era, film, membership)
- /src/eras/*.md — 8 era landing pages
- /src/films.njk — paginated template generating one page per film
- /src/assets/ — CSS (site.css); fonts loaded from Google Fonts CDN, no local font files yet
- /src/admin/ — NOT YET CREATED (Sveltia CMS config)

## Editorial rules (IMPORTANT)
- Every film has ONE fact-checked sentence, independently written
- Never paraphrase Black Film Archive prose
- Multi-source verification: BFI, Arsenal, FESPACO, Criterion, national archives, festival sites
- Record sources_consulted per film
- Preserve uncertainty — don't silently resolve disputes (see des-fusils-pour-banta-1970, living-in-bondage-1992 for examples of recorded disputes)
- Country is an array, not a string
- Never download poster images — link out only (poster_url points to source pages, never rehosted images)

## Constraints (SAFETY)
- Never orange-cloud any DNS record pointing to Netlify
- Never use Cloudflare Flexible SSL
- Never commit .env
- Ask before DNS changes, force-pushes, or deletions
- This repo has NOT been connected to the real GitHub remote, Netlify, or Cloudflare yet — those steps require the .env file at C:\Users\<username>\film-archive-project\.env, which was not accessible in the Cowork session that built this scaffold

## Working style
- Careful collaborator, not autonomous
- Small reviewable commits
- Ask before destructive actions
- Write to docs/handoff.md at session end
