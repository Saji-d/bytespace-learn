# ByteSpace — Frontend Assessment

A responsive implementation of the **ByteSpace** landing page (plus bonus Login and Register pages), built from the provided Figma design for the Doin Tech Limited Jr. Software Engineer (Frontend) assessment.

## Tech stack

- [Next.js 16](https://nextjs.org/) (App Router, React Server Components, Turbopack)
- React 19 + TypeScript (strict)
- Tailwind CSS v4 (CSS-first `@theme` design tokens)
- `next/font` (Poppins from Google Fonts, Satoshi self-hosted from Fontshare) and `next/image`

No UI kits or runtime dependencies beyond Next.js/React.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

Other scripts:

```bash
npm run build    # production build
npm run start    # serve the production build
npm run lint     # ESLint (next/core-web-vitals + TypeScript)
```

No environment variables are required.

## Routes

| Route       | Description                                           |
| ----------- | ----------------------------------------------------- |
| `/`         | Landing page                                          |
| `/login`    | Sign in page (client-side validation, bonus)          |
| `/register` | Create account page (client-side validation, bonus)   |

## Project structure

```
src/
  app/                 routes, root layout, global styles & design tokens
    (auth)/            login + register pages sharing an auth layout
  components/
    layout/            header, mobile navigation, footer, newsletter form
    sections/          one component per landing-page section
    course/            course card, topic filter, course grid
    cards/             floating stat cards used across sections
    auth/, forms/      auth shell and reusable form fields
    ui/                primitives: Container, Button, Logo, Decor, AvatarStack…
    icons.tsx          SVG icons exported from the Figma file
  data/                page content (courses, navigation, testimonials…)
  fonts/               self-hosted Satoshi (with licence)
  lib/                 small utilities (class names, validation)
public/images/         optimised WebP assets exported from Figma
```

## Implementation notes

- **Design fidelity** — colours, type scale, radii and the 12-column / 1200px grid come straight from the Figma style guide and are exposed as Tailwind tokens in `src/app/globals.css`. Photography, 3D ornaments and icons are the original Figma assets (exported and converted to WebP / inline SVG).
- **Responsive** — the design is desktop-only (1440px); tablet and mobile layouts were designed to keep the same visual language (stacked columns, scaled typography, a mobile navigation menu, trimmed decorations).
- **Functionality** — the hero search and topic chips filter the course grid (`/?q=…#courses`), navigation links scroll to sections, and the newsletter / auth forms validate input accessibly. There is no backend, so form submissions are simulated.
- **Accessibility** — semantic landmarks and headings, labelled form controls with inline errors, visible focus styles, keyboard-operable menu and filters, and `prefers-reduced-motion` support.
- **Performance** — pages are statically prerendered; only small interactive islands (mobile menu, filters, forms) ship client JavaScript; images are responsive and lazy-loaded below the fold.
