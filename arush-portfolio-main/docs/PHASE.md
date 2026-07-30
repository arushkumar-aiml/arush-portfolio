# PHASE — arush-portfolio build status

## Done
- [x] New repo scaffolded: `arush-portfolio` (separate from Arush Labs company site)
- [x] Single-page site, all 10 nav sections as anchors (Home → Contact)
- [x] Talking-avatar hero: pulsing orb + animated "voice bars" + speech bubble that types real one-line highlights (AI Engineer / Full-Stack / Founder / OSS / Building in public)
- [x] All content sourced from LinkedIn profile — see `docs/MEMORY.md`
- [x] Projects section: ThreatShield AI, SecureAI Agent, Arush Marketplace, OfficeOS (real, with GitHub/live links where they exist)
- [x] Experience timeline: 5 real roles with real dates
- [x] Open Source section: real pinned repos, GSoC-aspirant status (not overstated as "selected")
- [x] Achievements grouped by Open Source / Hackathons / Research / Community — Research left as an honest empty state (nothing real to show)
- [x] Blogs section: honest "not live yet," links to LinkedIn build-in-public posts instead
- [x] Contact section: LinkedIn, GitHub, Instagram, Email, Portfolio, X — all real links

## Needs from you
1. **Profile photo** — received and wired in (`assets/avatar.jpg`), replacing the abstract "AK" orb in the hero.
2. **GitHub API wiring** — for live contribution stats/graph instead of the current "pending" placeholder, confirm `arushkumar-aiml` is the GitHub username to pull from.
3. **GSoC 2026 outcome** — update once confirmed selected/not selected.
4. **Research** — first content whenever there's something real to publish.
5. **Blogs** — first post whenever ready; can add a `blogs.html` list page at that point.
6. Confirm **contact email** — currently using `hello@arushlabs.com` (only known real email). Send a personal one if you'd rather not point personal contact to the company inbox.

## Design note
Reused the same design-system tokens (dark, blue+cyan, glass) as the Arush Labs company site for visual consistency across your own web presence, since the same premium/Apple/Linear/Vercel brief was given for both — but this file, copy, and structure are entirely separate from that project.