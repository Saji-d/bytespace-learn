# ByteSpace New

> A modern, pixel-faithful recreation of the **ByteSpace** online-learning landing page — built from the provided Figma design as the final project for the **Junior Software Engineer (Frontend) assessment at Doin Tech Limited**.

![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)
![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-black?logo=vercel&logoColor=white)

## ✨ Overview

ByteSpace is a course-platform landing page that translates a 1440px Figma design into a responsive, production-style web experience. The implementation covers the complete landing page — hero with course search, partner logos, course discovery with topic filtering, learning-path categories, a two-part "professional growth" feature section, creator CTA, testimonials, and a full footer — plus **bonus login and register pages** and a branded 404.

Built with the App Router and React Server Components: pages are statically prerendered, and only small interactive islands (search filters, forms, mobile navigation) ship client JavaScript.

## 🔗 Links

- **Live demo:** [https://bytespace-learn.vercel.app](https://bytespace-learn.vercel.app)
- **Repository:** [https://github.com/Saji-d/bytespace-learn](https://github.com/Saji-d/bytespace-learn)

## 🎨 Design & UI

- **Visual identity** — the design's "Electric Violet" blue (`#003BE2`) and lime (`#D4FB20`) accent system, exposed as Tailwind CSS v4 design tokens in `src/app/globals.css`.
- **Signature grid backdrop** — the faint 120px line grid from the design, drawn as a CSS gradient aligned to the page centre so it matches the 1440px design frame at any screen width.
- **Hero** — 72px Poppins headline, pill search bar with live course filtering, floating glassy stat cards over the student photo, a lime ring graphic and 3D ornaments positioned from the design's own coordinates.
- **Course discovery** — 19 topic chips in the design's three centred rows (with a "+ More" expander on mobile) and a six-card course grid.
- **Course & category cards** — image, lesson/duration/comment chips, rating, level pill, learner avatars and price; six square category cards with custom SVG icons.
- **Growth section** — two feature rows with photo collages, floating cards and platform stats.
- **Creator CTA & testimonials** — a blue full-bleed CTA with grid and 3D shapes, and a testimonial grid over soft lime/blue glow fields.
- **Footer** — logo, newsletter form with validation, three link columns and a legal row.
- **Typography** — Poppins (headings, via `next/font`) and self-hosted Satoshi (body, licensed Fontshare files in `src/fonts`).

## 📱 Responsive Design

The desktop layout follows the 1440px Figma frame; smaller screens preserve the same visual language with sensible breakpoints (640 / 768 / 1024 / 1280):

- **Desktop (≥1024px)** — three-column course grid, six category cards, centred desktop navigation, decorative shapes placed on the design's 1440px stage.
- **Tablet (768–1024px)** — navigation collapses into a keyboard-accessible burger menu, grids drop to two columns, typography scales down, decorative elements are trimmed or tucked to the edges.
- **Mobile (<768px)** — single-column layouts, topic chips collapse to a short list with the "+ More" expander, photo collages scale proportionally via a reusable scaled-stage component, and images are served responsively through `next/image` sizes.

No absolute "works on every device" claims — layouts were verified across common desktop, tablet and mobile viewports and browser zoom levels without horizontal overflow.

## 🧩 Main Features

- Full landing page faithfully recreated from the provided Figma design
- Course search (`/?q=…#courses`) and topic-chip filtering driven by shareable URL params
- Six-course grid and six-category grid with hover interactions
- Responsive header with mobile navigation drawer
- Testimonials, creator CTA, partner logo strip and newsletter footer
- **Bonus:** login and register pages with client-side validation, social sign-in UI (demo state) and a course-aware enrolment note (`/register?course=…`)
- Branded 404 page
- Reusable, typed component library (`Container`, `Button`, `TextField`, `Decor`, `AvatarStack`, …)
- Accessible interactive elements: semantic landmarks, labelled controls, inline form errors, `aria-pressed` filters, visible focus styles, `prefers-reduced-motion` support
- Optimised image assets — all WebP/SVG exports from the Figma file, served via `next/image`
- Statically prerendered routes with minimal client JavaScript

## 🏗️ Project Architecture

```text
src/
├── app/                  # routes, root layout, global styles & design tokens
│   ├── (auth)/           # shared blue shell for /login and /register
│   ├── globals.css       # Tailwind v4 @theme tokens from the Figma style guide
│   ├── layout.tsx        # fonts (Poppins + Satoshi), metadata
│   ├── page.tsx          # landing page composition
│   └── not-found.tsx     # branded 404
├── components/
│   ├── layout/           # Header, MobileNav, Footer, NewsletterForm
│   ├── sections/         # Hero, PartnerLogos, CourseDiscovery, LearningPaths,
│   │                     # GrowthSection, CreatorCta, Testimonials
│   ├── course/           # CourseCard, CourseGrid, TopicFilter, CourseExplorer
│   ├── growth/           # collage compositions, ScaledStage, GlowField
│   ├── cards/            # floating stat cards used in hero & collages
│   ├── auth/             # auth card, intro, validated forms, social sign-in
│   ├── forms/            # TextField + reusable validation hook
│   ├── ui/               # Container, Button, Logo, Decor, AvatarStack, GridBackdrop
│   └── icons.tsx         # inline SVG icon set from the Figma file
├── data/                 # typed content: courses, topics, testimonials, nav, avatars
├── fonts/                # self-hosted Satoshi (with licence)
└── lib/                  # cn() helper, validation helpers
public/
└── images/               # optimised Figma exports (WebP @2x, SVG)
    ├── auth/  avatars/  courses/  decor/  partners/  people/
```

**Stack:** Next.js 16 (App Router, RSC, Turbopack) · React 19 · TypeScript (strict) · Tailwind CSS v4 · `next/font` + `next/image`. No UI kits or runtime dependencies beyond Next.js and React.

## 🚀 Getting Started

```bash
npm install
npm run dev      # http://localhost:3000
```

Other scripts:

```bash
npm run build    # production build (statically prerendered)
npm run start    # serve the production build
npm run lint     # ESLint (next/core-web-vitals + TypeScript)
```

Requires Node.js 18+. No environment variables needed — there is no backend; form submissions are simulated client-side.

## 📄 Assessment Notes

| Requirement | Status |
| --- | --- |
| Complete landing page from the provided Figma design | ✅ |
| Public GitHub repository | ✅ |
| Separate feature branch + pull request | ✅ `feature/bytespace-assessment` |
| Vercel deployment with public URL | ✅ |
| **Bonus:** Login & Signup pages | ✅ |

**Design fidelity** — the implementation was verified against the Figma file's node data: all section positions and heights match the design frame within sub-pixel tolerance at 1440px, and the rendered document height equals the design's total frame height.

## 🙌 Credits

- **Design:** ByteSpace Figma file provided with the Doin Tech Limited assessment.
- **Fonts:** [Satoshi](https://www.fontshare.com/fonts/satoshi) by Fontshare (licence included in `src/fonts`) · [Poppins](https://fonts.google.com/specimen/Poppins) by Google Fonts.
- **Imagery & 3D ornaments:** exported from the provided Figma file.
