# Developer Portfolio

A minimal, dark-mode, single-page portfolio built with React, Tailwind CSS, and Framer Motion.

## Design notes

- **Palette:** graphite-navy background (`#0A0E13`) with a cyan "signal" accent (`#4CD9C0`) and amber used sparingly for tags (`#F2A65A`).
- **Type:** Space Grotesk (display), Inter (body), JetBrains Mono (tags, labels, code-style eyebrows) — a nod to the terminal/data-heavy nature of the work.
- **Signature element:** the animated oscilloscope-style waveform behind the hero headline (`src/components/Waveform.jsx`), a quiet reference to signal-processing work without being literal.

## Setup

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`).

## Structure

```
src/
  components/
    Navbar.jsx     — sticky nav with mobile menu
    Hero.jsx        — headline, bio, CTAs, social links
    Waveform.jsx     — signature animated SVG trace
    Skills.jsx       — Languages / Frameworks / Domains grid
    Projects.jsx      — project cards (edit PROJECTS array to update)
    Footer.jsx        — contact section
  App.jsx
  main.jsx
  index.css
```

## Customizing

- **Resume:** drop your PDF at `public/resume.pdf` — the Hero button already points to `/resume.pdf`.
- **Projects:** edit the `PROJECTS` array at the top of `Projects.jsx` — title, kind, stack tags, summary, and links.
- **Skills:** edit the `CATEGORIES` array in `Skills.jsx`.
- **Email / social links:** update the `href`s in `Hero.jsx` and `Footer.jsx`.
- **Colors:** all custom colors live in `tailwind.config.js` under `theme.extend.colors` — change them there and they propagate everywhere.

## Accessibility

- Visible focus rings on all interactive elements (`:focus-visible` in `index.css`).
- `prefers-reduced-motion` is respected globally.
- Icon-only buttons (GitHub/LinkedIn) have `aria-label`s.
