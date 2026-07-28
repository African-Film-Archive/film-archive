# Decisions Log (append-only ADRs)

## 2026-07-28 — Stack chosen
- Eleventy v3 + Sveltia CMS + Netlify + Cloudflare DNS
- Alternative considered: Astro + Decap. Chose Eleventy for lowest-churn maintainability.

## 2026-07-28 — Video via Instagram embeds
- Path C from research: YouTube optional, Instagram primary (matches existing @african_film_archive)
- Migrate to Bunny Stream if brand-neutral embeds become important

## 2026-07-28 — BFA methodology adopted for film data
- Facts + independent sentences + multi-source verification + provenance
- BFA as discovery seed only; contact Maya Cade later after archive proven

## 2026-07-28 — Payment: Stripe deferred
- Membership page ships with placeholder tonight
- Stripe integration post-launch (Aug 1+)

## 2026-07-28 — Domain: .win kept
- Considered .org for credibility; owner will add later if needed

## 2026-07-28 — RSS plugin disabled at scaffold time
- @11ty/eleventy-plugin-rss v3's export didn't load via require() under this project's CJS .eleventy.js
- Deferred rather than debugged to keep the build unblocked; no RSS feed template exists yet
- Revisit with dynamic import() when a feed is actually needed

## 2026-07-29 — Fact-check pass applied to films.json
- Owner ran an independent fact-check against festival archives, cinematheques, FIPRESCI, and other institutional sources
- Corrected: Les Statues meurent aussi director credit (Resnais/Marker, Cloquet as cinematographer), Bataille sur le grand fleuve year (1951->1952), Contras' City year (1969->1968), Zouzou overclaim on "first starring role", Baara's false "first Mali feature" claim, Fad'jal's false "first African Cannes feature" claim, Yeelen's overbroad "first African film" claim narrowed to "first Black African film", Aoure's self-contradictory short/feature description, A Different Image reclassified from feature to short, Living in Bondage sales-figure overclaim softened, I Am Not a Witch's Golden Globes implication removed, Kwaku Ananse's Golden Bear nomination-vs-win wording tightened, Mossane's unsupported award claim removed, Sambizanga's country/production framing clarified, Dahomey's unverified "shortest Golden Bear winner" claim softened, Sanders of the River and Trader Horn fun facts downgraded from stated fact to reported/disputed lore, Quartier Mozart and L'Afrance and Black to Techno award citations downgraded to probable pending named-award confirmation
- New standard adopted: any claim not independently re-confirmed in this pass is marked verification_status: probable rather than verified, with the specific gap noted
- Decision: hold scaling to more films until this cleanup pass, now complete for the existing 80, rather than compounding errors across a larger batch

## 2026-07-28 — Eleventy scaffold built without repo/hosting connection
- GITHUB_TOKEN, NETLIFY_TOKEN, and Cloudflare/MailerLite credentials live in .env outside this Cowork session's connected folder, so Steps 2, 8, 9 (CMS backend), 10, 11 of the runbook were not executed
- Site structure, film data, and local build were completed and verified instead, so nothing blocks a fast follow-up once credentials are reachable
