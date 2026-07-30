# ARCHITECTURE — arush-portfolio

## Stack
Static HTML/CSS/JS. No build step, no framework, no router.

## Why single-page (not multi-page like the Arush Labs company site)
A personal portfolio is one continuous narrative about one person — unlike the company site, no section here needs its own indexable URL or standalone bookmark. Single-page with anchor navigation (`#about`, `#projects`, etc.) keeps it fast, simple to maintain, and matches how Linear/Vercel-style personal portfolios are typically built. Nav links scroll-spy to the active section instead of loading new pages.

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

## Relationship to the Arush Labs company site
Separate repo, separate content, separate purpose — this is personal branding for Arush Kumar, not Arush Labs the company. It reuses the same visual design tokens (`css/style.css` started as a copy of the company site's stylesheet) purely for consistency across the owner's web presence, since both were briefed with the same premium/dark/blue/glass direction. No company-specific copy, nav, or products live here.

## Data flow / content policy
There is no CMS or database — content is hand-authored directly into `index.html`, sourced from `docs/MEMORY.md`. Any new real fact should be added to MEMORY.md first, then reflected in the HTML, so the two never drift apart.

## Scalability notes
- If **Blogs** goes live with real posts, split it into its own `blogs.html` (or `blog/` folder with one file per post) rather than growing the single page indefinitely.
- If **GitHub stats** get wired to a live API, keep the fetch client-side in `js/main.js` with a graceful fallback to the current static "pending" state — never block page render on a third-party API call.
- Past ~3-4 dedicated sub-pages, consider migrating to a static site generator (11ty/Astro), matching the same threshold noted in the Arush Labs company site's architecture doc.

## SEO
Single `<title>` + `<meta name="description">` (whole page is one URL). Open Graph tags included for link previews. Section headings use real `<h2>`/`<h3>` hierarchy for accessibility and search indexing of in-page anchors.