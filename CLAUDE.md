# bytevikas Portfolio — Project Context for Claude

## What This Is
Personal portfolio + blog for **Vikas** (GitHub: vikas9489), a Senior Android Developer.
Live at: **bytevikas.com** (GitHub Pages, repo: vikas9489/vikas9489.github.io, branch: main)

## Tech Stack
Pure **HTML + CSS + vanilla JS** — no frameworks, no build tools, no npm.
Deploy = `git push origin main`. GitHub Pages auto-deploys in ~1 minute.

---

## Design System (never change these)

```css
--bg:           #050505
--card-bg:      rgba(255,255,255,0.03)
--card-border:  rgba(255,255,255,0.08)
--text:         #ffffff
--muted:        #64748b
--muted-light:  #94a3b8
--blue:         #3b82f6   /* Kotlin Blue */
--blue-light:   #60a5fa
--green:        #10b981   /* Android Green */
--green-light:  #34d399
```

**Fonts** (loaded from Google Fonts):
- `Outfit` — headings (800/900 weight)
- `Inter` — body text
- `JetBrains Mono` — code, tags, badges

**Visual rules:**
- Dark theme only, #050505 background
- Two ambient glow divs (blue top-left, green bottom-right) fixed, blur 90px, z-index -1
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
| — | Navbar | Live | Sticky, blur, "Open to Work" green pill with pulse dot |
| 1 | Hero | Live | 90px heading, metrics bar, tech chips, CTA buttons |
| 2 | `#expertise` | Live | 3 cards: Architecture, Performance, Video/Streaming |
| 3 | `#projects` | Live | Nodat + Musist as featured wide cards; HailUp/Samachar/OnlyArabs in 3-col grid |
| 4 | `#creator` | **Hidden** (`display:none`) | YouTube/Instagram/LinkedIn — unhide when ready |
| 5 | `#blog` | Live | 3 preview cards → blog posts |
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

**To add a new blog post:**
1. Copy any existing `blog/*.html` file
2. Update the content, category color, date, read time
3. Add a new row to `blog/index.html` (the `.post-item` list)
4. Add a new `.blog-card` to `index.html` `#blog` section

---

## Hire Me Details
- **Target:** ₹30–50 LPA
- **Role:** Senior Android Engineer
- **Contact:** hi@bytevikas.com

---

## Social / Content Handles (currently hidden)
- YouTube: @bytevikas
- Instagram: @bytevikas
- LinkedIn: vikas9489

---

## User Preferences
- Keep the dark theme and CSS variables — never change them
- No CSS frameworks, no JS frameworks, no build step — pure HTML files only
- All links must be relative paths (site is opened directly as files locally)
- Don't add comments explaining what code does — only add when "why" is non-obvious
- No emoji in code unless explicitly asked
- Short, direct responses preferred
- When done, commit and push so changes go live on bytevikas.com
