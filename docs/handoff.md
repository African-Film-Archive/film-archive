# Handoff — 2026-07-28

## Current state

**Done tonight (this Cowork session):**
- 80 verified film records in `src/_data/films.json`, exactly 10 per era across all 8 eras, no duplicates
- Eleventy v3 scaffold: config, 8-era taxonomy, layouts (base/home/era/film/membership), 8 era pages, paginated film detail pages (80 generated), homepage, membership page with placeholder Stripe button and tier copy, 404 page
- CSS for the retro/analog aesthetic (sepia palette, film grain overlay, VHS scanlines, IM Fell DW Pica / Cormorant Garamond / Special Elite fonts via Google Fonts CDN)
- News data seeded with 4 real items (Timbuktu restoration, Whisper captioning milestone, FESPACO dispatch, Arsenal digitization note)
- Full local build verified: `npm run build` produces 91 files in `_site/` with no errors; spot-checked home, era, film, and membership page output directly from generated HTML
- 80-film docx export delivered for owner review (`AFA_Films_Batch_80.docx` in the project folder)

**NOT done — blocked on credentials not available in this session:**
- Repo has not been cloned from or connected to `github.com/African-Film-Archive/film-archive` — no git remote configured
- Netlify site not created, no deploy has happened
- Cloudflare DNS not touched — `africanfilmarchive.win` has no records yet
- Cloudflare Email Routing not configured
- Sveltia CMS (`src/admin/`) not built
- MailerLite embed not wired into membership page (placeholder text only)
- Stripe integration deferred per plan (placeholder button in place, as specified)

The blocker: Steps 2, 8, 9 (partially), 10, and 11 of the runbook all require `GITHUB_TOKEN`, `NETLIFY_TOKEN`, and the Cloudflare/MailerLite keys from `.env` at `C:\Users\<username>\film-archive-project\.env`. That file lives outside the Cowork session's connected folder (`Art Projects`), so it was never read. Everything that could be built without those credentials (Steps 3-6, most of 12-13) is done.

## Known issues

- `@11ty/eleventy-plugin-rss` is installed but disabled in `.eleventy.js` — its v3 export shape didn't load cleanly via `require()` under this Eleventy 3 config. No RSS feed template exists yet. Needs revisiting, likely via dynamic `import()`.
- No `src/admin/` yet, so there is no CMS login flow to test.
- Poster fields are all external links (Criterion, Wikipedia, festival sites, etc.) per the no-poster-scraping rule — no images have been fetched or embedded anywhere in the site yet, including the homepage or film cards, which currently render text-only.
- `des-fusils-pour-banta-1970` is marked `verification_status: probable` rather than `verified` — the film itself is lost, so verification rests on secondary historical accounts, not primary sourcing. Flagged clearly in its `notes` field.
- `living-in-bondage-1992` has a genuinely disputed director credit (Chris Obi Rapu vs. Kenneth Nnebue) recorded in its `notes` field rather than silently resolved.

## Next steps for Aug 1-7 launch window

1. Owner: run Phase A of the runbook (the `.env` setup) if not already done, in a session where Cowork can actually read that file — either by moving/copying it inside the connected folder, or running the credential-gated steps in a session with direct filesystem access to `C:\Users\<username>\film-archive-project\`.
2. Once credentials are reachable: Steps 2 (repo clone/push), 8 (Netlify site creation), 9 (Sveltia CMS), 10 (DNS), 11 (email routing) can all run in one pass — nothing about tonight's scaffold blocks them.
3. Review the 80 films in `AFA_Films_Batch_80.docx`; flag anything to cut or fix before it goes live via CMS.
4. Decide whether poster images should ever be sourced/licensed properly, or whether the archive stays text-first with source links only (current approach).
5. Wire the MailerLite embed once `MAILERLITE_SIGNUP_URL` is available.

## Decisions made tonight

See `docs/decisions.md` for the append-only log (stack choices, video/payment/domain decisions carried over from the runbook's seed log — no new architectural decisions were made in this session beyond the ones already documented there).
