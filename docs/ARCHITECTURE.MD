# ARCHITECTURE — arush-portfolio

## Stack
Static HTML/CSS/JS. No build step, no framework, no router.

## Why single-page
A personal portfolio is one continuous narrative about one person — no section here needs its own indexable URL or standalone bookmark. Single-page with anchor navigation (`#about`, `#projects`, etc.) keeps it fast, simple to maintain, and matches how Linear/Vercel-style personal portfolios are typically built. Nav links scroll-spy to the active section instead of loading new pages.

## File structure
```
arush-portfolio/
├── index.html       All 10 sections: Home, About, Skills, Projects,
│                     Experience, Open Source, Achievements, Research,
│                     Blogs, Contact
├── css/style.css     Design system (see DESIGN.md)
├── js/main.js        Mobile nav toggle, scroll-spy active link,
│                     scroll-reveal, talking-avatar speech bubble
├── assets/           Logo / avatar image assets
└── docs/
    ├── README.md
    ├── ARCHITECTURE.md   (this file)
    ├── MEMORY.md         Real facts used on the site — source of truth
    ├── PHASE.md          Build status, what's pending
    └── DESIGN.md         Visual design system
```

## Data flow / content policy
There is no CMS or database — content is hand-authored directly into `index.html`, sourced from `docs/MEMORY.md`. Any new real fact should be added to MEMORY.md first, then reflected in the HTML, so the two never drift apart.

## Scalability notes
- If **Blogs** goes live with real posts, split it into its own `blogs.html` (or `blog/` folder with one file per post) rather than growing the single page indefinitely.
- If **GitHub stats** get wired to a live API, keep the fetch client-side in `js/main.js` with a graceful fallback to the current static "pending" state — never block page render on a third-party API call.
- Past ~3-4 dedicated sub-pages, consider migrating to a static site generator (11ty/Astro).

## SEO
Single `<title>` + `<meta name="description">` (whole page is one URL). Open Graph tags included for link previews. Section headings use real `<h2>`/`<h3>` hierarchy for accessibility and search indexing of in-page anchors.