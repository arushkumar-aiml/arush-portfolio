# DESIGN — arush-portfolio

## Direction
Same premium, dark-mode-only reference points as the Arush Labs company site — Apple (restraint), Linear (glass surfaces, calm motion), Vercel (mono type for data, grid discipline) — but the tone here is personal and first-person, not corporate.

## Color tokens
Reused from the shared design system:

| Token | Hex | Use |
|---|---|---|
| `--bg` | `#05060A` | Page background |
| `--bg-1` | `#0A0C14` | Section-alt / card background |
| `--blue` | `#2E6BFF` | Primary brand, gradient start |
| `--cyan` | `#22D3EE` | Secondary brand, gradient end, accents, avatar glow |
| `--text` / `--text-2` / `--muted` | `#F3F5FA` / `#A7ACBD` / `#767C8F` | Text hierarchy |
| `--success` | `#34D399` | "Active" project status |
| `--glass` | `rgba(18,21,32,.55)` | Glassmorphic surfaces, speech bubble |

## Type
- Display: **Space Grotesk** — name, headings, avatar initials
- Body/UI: **Inter** — nav, paragraphs
- Mono: **JetBrains Mono** — eyebrows, tags, dates, the speech-bubble text (gives the "talking" line a terminal/AI-native feel consistent with the owner's actual work)

## Signature element — the talking avatar
The hero's defining moment: a circular gradient orb with a soft pulsing ring (CSS `pulse-ring` animation) and five small animated bars beneath it that move like a voice waveform. Above it, a glass speech bubble types out — one line at a time, looping — the real highlights: *AI Engineer. / Full-Stack Developer. / Founder, Arush Labs. / Open Source Contributor. / Building AI products in public.*

This was chosen deliberately over a literal photo/cartoon face:
- No real photo was supplied, and inventing a likeness isn't appropriate.
- An abstract "speaking" motif (orb + waveform + typed speech) reads as premium and AI-native — fitting for someone building AI products — rather than a novelty cartoon avatar.
- If a real photo is supplied later (see PHASE.md), it can replace the "AK" initials inside the same orb without changing the surrounding animation.

## Layout
- Single sticky glass nav with scroll-spy active-link highlighting (no page loads).
- `.section` / `.section-alt` alternation for rhythm, same as the company site.
- `.p-card` reused for Projects; a distinct `.exp-item` timeline for Experience; `.ach-row` list groups for Achievements — each content type gets its own component rather than forcing everything into one card shape, since a portfolio mixes timeline, list, and card data.

## Motion
- Scroll-reveal fades + lifts sections into view (`prefers-reduced-motion` respected).
- The avatar orb's ring-pulse and voice-bars animate continuously but subtly — the one place motion never stops, since it's the "is this person live/building" signal of the page.
- Card/button hover lifts, same restrained interaction language as the company site.

## Status badge reuse
Same `Live` / `Building` (`Active` here) / `Roadmap` / `Coming Soon` badge system as the company site, applied to personal project status instead of product status — keeps a single visual language across both of the owner's sites.