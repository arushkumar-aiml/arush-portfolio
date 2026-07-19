# arush-portfolio

Personal developer portfolio for **Arush Kumar** — AI Engineer, Full-Stack Developer, Open Source Contributor, Founder of Arush Labs. Separate from the Arush Labs company site — this is personal, not company branding.

Dark theme, blue + cyan, glassmorphism. Single-page, anchor-navigated, static HTML/CSS/JS — no build step.

## Run locally
```bash
npx serve .
# or
python3 -m http.server 8000
```

## Structure
```
arush-portfolio/
├── index.html      Single-page site (all sections, anchor nav)
├── css/style.css    Design system (shared visual language with Arush Labs, personal copy)
├── js/main.js       Nav, scroll-spy, scroll-reveal, "talking avatar" speech bubble
├── assets/          Logo / avatar assets
└── docs/
    ├── MEMORY.md    Real facts used on this site — source of truth, from LinkedIn
    └── PHASE.md     What's real vs. pending content
```

## Content policy
Every fact on this site is sourced from the owner's LinkedIn profile (see `docs/MEMORY.md`). No fabricated achievements, stats, or projects. Sections without real data (Research, live GitHub stats, GSoC outcome) show an honest "content needed" / "not yet available" state instead of placeholder copy.

## Sections
Home · About · Skills · Projects · Experience · Open Source · Achievements · Research · Blogs · Contact
