# bytevikas Portfolio — Project Context for Claude

## What This Is
Personal portfolio + blog for **Vikas** (GitHub: vikas9489), a Senior Android Developer.
Live at: **bytevikas.com** (GitHub Pages, repo: vikas9489/vikas9489.github.io, branch: main)

## Tech Stack
Pure **HTML + CSS + vanilla JS** — no frameworks, no build tools, no npm.
Deploy = `git push origin main`. GitHub Pages auto-deploys in ~1 minute.

---

## Design System

```css
--bg:            #050505      /* dark background */
--card-bg:       rgba(255,255,255,0.03)
--card-border:   rgba(255,255,255,0.08)
--text:          #ffffff
--muted:         #64748b
--muted-light:   #94a3b8
--amber:         #22c55e      /* primary brand accent (green) */
--amber-light:   #4ade80
--orange:        #16a34a      /* secondary accent (deep green) */
--orange-light:  #6ee7b7
/* badge / blog-category only: */
--blue:          #3b82f6
--blue-light:    #60a5fa
--green:         #10b981
--green-light:   #34d399
```

**Theme:** Dark — green/white as primary accent. Blue/teal kept ONLY for blog category labels and project download badges.

**Fonts** (loaded from Google Fonts):
- `Outfit` — headings (800/900 weight)
- `Inter` — body text
- `JetBrains Mono` — code, tags, badges

**Visual rules:**
- Dark theme only, #0a0805 warm black background
- Two ambient glow divs (amber top-left, orange bottom-right) fixed, blur 90px, z-index -1
- Scroll reveal: `.reveal` class + IntersectionObserver adds `.in-view` (opacity 0→1, translateY 32→0)
- Stagger delays via `.delay-1 / .delay-2 / .delay-3` (0.1s increments)
- Cards: `border-radius: 20px`, hover = `translateY(-6px)` + subtle shadow

---

## File Structure

```
vikas9489.github.io/
├── index.html          ← Main portfolio page
├── CNAME               ← bytevikas.com
└── blog/
    ├── index.html      ← Blog listing page
    ├── startup-time-optimization.html
    ├── clean-architecture.html
    └── tiktok-feed.html
```

**Internal links must always be relative** (not `/blog/` or `/`).
- From `blog/*.html` → portfolio: `../index.html`
- From `blog/*.html` → blog index: `index.html`
- From `index.html` → blog: `blog/index.html`

---

## Current Page Sections (index.html)

| # | Section id | Status | Notes |
|---|-----------|--------|-------|
| — | Navbar | Live | Sticky, blur, "Open to Work" amber pill with pulse dot |
| 1 | Hero | Live | 90px heading, metrics bar, tech chips, CTA buttons |
| 2 | `#expertise` | Live | 3 cards: Architecture, Performance, Video/Streaming |
| 3 | `#projects` | Live | Nodat + Musist as featured wide cards; HailUp/Samachar/OnlyArabs in 3-col grid |
| 4 | `#creator` | **Hidden** (`display:none`) | YouTube/Instagram/LinkedIn — unhide when ready |
| 5 | `#blog` | Live | 4 cards in 2×2 grid → blog posts |
| 6 | `#hire` | Live | ₹30–50 LPA, Senior Android Engineer CTA |
| — | Footer | Live | Email, GitHub, LinkedIn, YouTube, Blog links |

---

## Vikas's Real Projects

| App | Downloads | Rating | Stack |
|-----|-----------|--------|-------|
| **Nodat** | 10K+ | ★ 5.0 | Kotlin, Clean Architecture, Dagger Hilt |
| **Musist** | 1K+ | ★ 4.7 | Kotlin, MVVM, FFMPEG, ExoPlayer, AdMob |
| **HailUp** | 10K+ | — | Kotlin, MVVM, ExoPlayer, PayPal SDK |
| **Samachar** | 10K+ | — | Kotlin, YouTube API |
| **OnlyArabs** | Live/ongoing | — | Jetpack Compose, Agora SDK, HLS/DASH |

---

## Key Stats (used in hero metrics bar)
- 5+ years experience
- 10+ apps shipped
- 30K+ total downloads
- 60% startup time reduction (production achievement)
- 99.6% crash-free rate

---

## Blog Posts

| File | Topic | Category |
|------|-------|----------|
| `startup-time-optimization.html` | 60% cold start reduction — Macrobenchmark, lazy Hilt, Baseline Profiles | Performance |
| `clean-architecture.html` | 5 years of Clean Arch lessons, trade-offs, real patterns | Architecture |
| `tiktok-feed.html` | ExoPlayer 3-player-pool for vertical video feed (Samachar) | Video |
| `memory-leaks.html` | 8 leak patterns, LeakCanary, Memory Profiler, prevention checklist | Memory |
| `google-io-2026-android-announcements.html` | Android CLI stable, Android Skills, Android Bench from I/O 2026 | News |
| `jetpack-compose-1-11-pausable-composition-grid-api.html` | Compose 1.11 pausable composition + experimental Grid API | Compose |

**Category accent colors in use** (pick a new, unused one for each new category): perf `#60a5fa`, arch `#34d399`, video `#c084fc`, memory `#fb923c`, news `#38bdf8`, compose `#2dd4bf`.

**To add a new blog post:**
1. Copy any existing `blog/*.html` file as the structural template (CSS variables, post-meta badge, announce-grid, code blocks, callouts, OneSignal script block, likes/comments interactions block).
2. Update the content, category color (new category → new accent color, add a `.post-cat.<name>` / `.blog-cat.<name>` CSS rule), date, read time, and unique slug passed to `initInteractions('<slug>')`.
3. Add a new row to `blog/index.html` (the `.post-item` list, newest at top).
4. Update `index.html` `#blog` section — it shows only the **4 most recent** posts. Add the new `.blog-card` and remove the oldest of the current 4 to keep it to 4.
5. Commit and push to `main` — GitHub Pages auto-deploys in ~1 minute.

---

## Automated Daily Blog Post

A scheduled cloud agent runs **daily at 8:00 AM IST (2:30 AM UTC)** and publishes one new blog post automatically, with no human review step (auto-publish was explicitly authorized for this job).

**Topic queue:** `blog/.next-topic.txt` (a dotfile — Jekyll's default processing excludes dotfiles from the published site, so this stays private even though it lives in the public repo).
- If Vikas messages a topic or a URL during a normal session, write it into this file (plain text, one topic/link).
- The daily job reads this file first. If non-empty, it writes that day's post about the given topic/link, then **clears the file back to empty** after a successful publish.
- If the file is empty, the job fetches the latest news itself (priority order: official Android Developers Blog, Android Authority, 9to5Google, Kotlin Blog/KotlinConf, then broader AI/tech news relevant to developers) and picks one timely, technically substantive, **not-already-covered** topic (cross-check against the Blog Posts table above / `blog/index.html`).

**Style bar:** every claim with a specific number, version, date, or API name must come from what was actually fetched that day — never invented. If a number can't be verified, write around it qualitatively.

The job follows the same "add a new blog post" steps above (template, listing, homepage swap, commit, push).

---

## Hire Me Details
- **Target:** ₹30–50 LPA
- **Role:** Senior Android Engineer
- **Contact:** hi@bytevikas.com

---

## Social / Content Handles (currently hidden)
- YouTube: @bytevikas
- Instagram: @bytevikas
- LinkedIn: vikas-dhiman9489

---

## User Preferences
- Keep the warm dark theme and amber/orange CSS variables
- No CSS frameworks, no JS frameworks, no build step — pure HTML files only
- All links must be relative paths (site is opened directly as files locally)
- Don't add comments explaining what code does — only add when "why" is non-obvious
- No emoji in code unless explicitly asked
- Short, direct responses preferred
- When done, commit and push so changes go live on bytevikas.com
