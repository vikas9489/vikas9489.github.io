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
| `android-developer-verification-2026.html` | Android developer verification enforcement (Sep 30, 2026), Limited Distribution tier, sideloading via ADB | Security |
| `kotlin-2-4-0-context-parameters-uuid-api.html` | Kotlin 2.4.0 — stable context parameters, explicit backing fields, stable UUID API, AGP/Compose compiler migration notes | Kotlin |
| `android-17-developer-behavior-changes.html` | Android 17 (API 37) developer behavior changes — config-change restarts, background audio hardening, app memory limits, SMS OTP delay, mandatory large-screen adaptivity | Platform |
| `room-3-0-ksp-only-breaking-changes.html` | Room 3.0.0-rc01 — new androidx.room3 package, KSP-only (no Java/KAPT), no SupportSQLite/Cursor, mandatory coroutines, Flow-based InvalidationTracker, FTS5 + connection pool APIs | Database |
| `android-profilingmanager-production-profiling.html` | Android 15 ProfilingManager — heap dumps, heap profiles, stack sampling on production devices; Android 16 system triggers for cold start, reportFullyDrawn(), ANRs; Perfetto output, AndroidX Core 1.15.0+ wrapper | Profiling |
| `android-xr-developer-preview-4-jetpack-xr-sdk.html` | Android XR Developer Preview 4 — ARCore for Jetpack XR 1.0.0-alpha15, Geospatial API SPATIAL/INERTIAL mode split, QrCode API, SpatialPanel/SpatialGltfModel Compose for XR, what mobile Android skills transfer | XR |
| `google-play-billing-choice-lower-fees-2026.html` | Google Play expanded billing choice and restructured service fees (effective June 30, 2026) — fee table by product type, 5% billing fee for GPB vs 0% for alternative billing/external links, Games Level Up & Apps Experience programs | Monetize |
| `firebase-ai-logic-gemini-android-integration.html` | Firebase AI Logic on Android — Gemini 3.5 Flash structured JSON output via Schema API, Google Maps Grounding to prevent hallucinated coordinates, Gemini 2.5 Flash TTS with ResponseModality.AUDIO; patterns from the Android XR tour guide app | AI |
| `agp-9-migration-guide.html` | AGP 9.x (9.0, 9.1, 9.2) migration — 14 default property flips, Variant API removal (applicationVariants → androidComponents), DSL interface changes, R8 repackaging default (9.1), stricter -keepattributes wildcards (9.2), built-in Kotlin support, AGP Upgrade Assistant and Android Skills | Gradle |
| `media3-1-11-compose-player-pool-preloading.html` | Media3 1.11.0-alpha01 — PlayerPool + rememberPooledPlayer for sliding-window preloading, full Compose player UI suite (MiniController, PlayerDefaults, ErrorState), dynamic scheduling default, AudioSink.configure breaking change, FLAG_DISABLE_ARTWORK_METADATA, MediaSessionManager, Ktor datasource module | Media |
| `lifecycle-2-11-scoped-viewmodels-compose-pager.html` | Lifecycle 2.11.0 — ViewModelStoreProvider + rememberViewModelStoreOwner for per-page Compose Pager ViewModel scoping, KMP support for ViewModel-Compose and ViewModel-Navigation3, reified ViewModelProvider.get, lambda Lifecycle.addObserver, @EmptySuper on onCleared | Lifecycle |
| `android-17-eclipsa-video-hdr.html` | Eclipsa Video on Android 17 (API 37) — SMPTE ST 2094-50 adaptive HDR standard; Reference White Anchor + Headroom-Adaptive Gain Curves; ExoPlayer/Media3 zero-config playback; Camera2 DynamicRangeProfiles.HLG10_SMPTE_2094_50 capture; Display.overlayProperties.lutProperties hardware acceleration check | HDR |
| `navigation3-stable-compose-first-navigation.html` | Navigation3 1.1.4 stable — @Serializable NavKey type-safe destinations, developer-controlled NavBackStack, NavDisplay + entryProvider, Scene/SceneStrategy (SinglePane/Dialog/Overlay), shared element transitions (1.1.x), SceneDecoratorStrategy, NavMetadata DSL, predictive back, KMP runtime support (JVM/Native/Web), state serialization for process death | Navigation |
| `android-17-new-developer-apis.html` | Android 17 (API 37) new developer APIs — Handoff API (Activity.setHandoffEnabled, onHandoffActivityDataRequested, HandoffActivityData, cross-device continuity via CompanionDeviceManager), Contact Picker (no READ_CONTACTS, user selects fields), ART GC young-gen collection + lock-free MessageQueue (free perf for SDK 37+), Live Updates Semantic Color API (SEMANTIC_STYLE_SAFE/CAUTION/DANGER/INFO), PQC APK Signing (ML-DSA hybrid scheme), JobScheduler.getPendingJobReasonStats(), Camera RAW14 | APIs |
| `compose-1-12-mesh-gradient-swipe-reveal.html` | Compose 1.12.0-beta02 (July 1, 2026) — MeshGradient Modifier + MeshGradientPainter for organic multi-point gradients, SwipeToReveal with RevealState.drag() + SwipeToRevealDragScope + custom flingBehavior, Modifier.scrollIndicator + ScrollIndicatorFactory across LazyListState/LazyGridState/LazyStaggeredGridState/PagerState/ScrollState, Grid Named Areas via GridConfigurationScope.area() + Modifier.gridItem(area), Material3 TopAppBar/ButtonGroup/SearchBar graduation to non-experimental | Compose |
| `android-studio-quail-1-developer-tooling.html` | Android Studio Quail 1 (2026.1.1) — Android Performance Analyzer (26x faster trace rendering, cohesive CPU/GPU/memory/power, Perfetto SQL + Analysis AI skills), LeakCanary Profiler Task with desktop analysis + Gemini "Fix with Agent", R8 Configuration Analyzer (optimization/obfuscation/shrinking scores), zero-config multi-device emulator P2P networking (Platform Tools v37 + Android 17), ADB Wi-Fi 2.0, direct Google Play publishing from Studio | Tooling |
| `gemma-4-aicore-mlkit-genai-android.html` | Gemma 4 E2B/E4B on Android — ML Kit GenAI Prompt API production path, AICore Developer Preview, ModelReleaseTrack.PREVIEW + ModelPreference.FULL/FAST, Firebase AI Logic Hybrid Inference (PREFER_ON_DEVICE/PREFER_CLOUD), prefix caching, LiteRT-LM BYOM, AppFunctions Android MCP, ADK for Android; 4× faster + 60% less battery vs previous Gemini Nano; code migrates automatically to Gemini Nano 4 | GenAI |
| `hilt-1-4-0-stable-viewmodel-factory.html` | Hilt 1.4.0 stable — rememberHiltViewModelFactory() drops ViewModelStoreOwner parameter, pairs with Lifecycle 2.11's rememberViewModelStoreOwner for per-Pager-page Hilt ViewModels; hiltViewModel() Compose artifact split (hilt-lifecycle-viewmodel-compose vs hilt-navigation-compose); KGP 2.2.0+ and AGP 9.2.0+ requirements | DI |
| `appfunctions-android-mcp-ai-agents.html` | AppFunctions (Android 16+, Jetpack 1.0.0-alpha10) — @AppFunction + @AppFunctionSerializable + KDoc-as-schema, @AppFunctionServiceEntryPoint new in alpha10, on-device MCP execution flow, ADB testing commands, what to expose in notes/media/news apps, Early Access Program at goo.gle/eap-af | Agents |

**Category accent colors in use** (pick a new, unused one for each new category): perf `#60a5fa`, arch `#34d399`, video `#c084fc`, memory `#fb923c`, news `#38bdf8`, compose `#2dd4bf`, security `#f43f5e`, kotlin `#fbbf24`, platform `#818cf8`, data `#f472b6`, profiling `#e879f9`, xr `#a3e635`, monetize `#06b6d4`, ai `#7c3aed`, gradle `#fb7185`, media `#0ea5e9`, lifecycle `#059669`, hdr `#84cc16`, nav `#f97316`, api `#f59e0b`, tooling `#14b8a6`, genai `#4f46e5`, di `#d946ef`, agents `#67e8f9`.

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

**Auto-notify on publish:** `.github/workflows/notify-new-post.yml` runs on every push to `main` that touches `blog/*.html`. It diffs against the previous commit to find newly-**added** post files (ignores edits to existing posts and to `blog/index.html` itself), extracts the `<h1>` title and `<meta name="description">`, and sends a OneSignal push via their REST API (`https://api.onesignal.com/notifications`, `Authorization: Key <REST_API_KEY>`). This fires regardless of whether the post came from the daily cron job or a manual push — no separate trigger needed.

Requires a **`ONESIGNAL_REST_API_KEY` GitHub Actions secret** (repo → Settings → Secrets and variables → Actions). Get the value from the OneSignal dashboard → Settings → Keys & IDs → REST API Key. This is different from the public App ID already embedded in every page's `<script>` tag — the REST key is sensitive and must never be committed to the repo or hardcoded anywhere.

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
