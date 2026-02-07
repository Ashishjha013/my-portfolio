#  Ashish Kumar Jha — Developer Portfolio

A modern, single-page developer portfolio built with **React 19**, **Vite (rolldown-vite)**, and **Tailwind CSS v4**.

This README includes a detailed, educational guide to the responsive image pipeline used in this repo (Sharp generator + AVIF/WebP + `<picture>` + LCP preload + CLS prevention).

---

##  Overview

This portfolio is designed to:
- Showcase **project-based learning**, not just tutorials
- Demonstrate **modern frontend practices**
- Highlight a focus on **backend systems & full-stack development**
- Act as a clean, deployable personal site for recruiters and collaborators

---

##  Sections & Structure

The site is a single-page layout composed of the following sections:

- **NavBar** (`src/layout/NavBar.jsx`)
- **Hero** (`src/sections/Hero.jsx`)
- **About** (`src/sections/About.jsx`)
- **Projects** (`src/sections/Projects.jsx`)
- **Experience** (`src/sections/Experience.jsx`)
- **Testimonials** (`src/sections/Testimonials.jsx`)
- **Contact** (`src/sections/Contact.jsx`)
- **Footer** (`src/layout/Footer.jsx`)

---

##  Tech Stack

### Core
- React (`react`, `react-dom`)
- Vite (via `rolldown-vite` alias)
- Tailwind CSS v4 (`@tailwindcss/vite`)

### Utilities
- `lucide-react` (icons)
- `@emailjs/browser` (contact form)
- ESLint (flat config)

---

##  Where Content Lives (Easy Editing)

Most content is stored as simple arrays/constants inside components:

| Content | File |
|------|------|
| Hero skills marquee | `src/sections/Hero.jsx` |
| Projects list | `src/sections/Projects.jsx` |
| Experience timeline | `src/sections/Experience.jsx` |
| Testimonials | `src/sections/Testimonials.jsx` |
| Contact info | `src/sections/Contact.jsx` |

---

##  Assets

All static assets are served from `public/`:

- `hero-bg.webp` — hero background
- `profile-photo.webp` — profile photo (LCP candidate)
- `avatar/dev-avatar.webp` — testimonial avatar
- `projects/*.webp` — project thumbnails

**Responsive variants** are also generated into `public/` alongside the originals, e.g.

- `public/projects/wanderlust-640.avif`
- `public/projects/wanderlust-640.webp`

---

# Responsive image pipeline (detailed guide)

## Goals

- Serve the right image size for each viewport (save bandwidth, improve load time)
- Prefer AVIF where supported; fall back to WebP
- Keep the LCP image fast and predictable
- Prevent CLS/layout shift by reserving image space

## Key files

- Generator script: `scripts/generate-responsive-images.mjs`
- `<picture>` component: `src/components/ResponsivePicture.jsx`
- LCP preload hint: `index.html`
- Usages:
  - `src/sections/Hero.jsx`
  - `src/sections/Projects.jsx`
  - `src/sections/Testimonials.jsx`

---

## 1) How the Sharp generator works internally

The generator is a Node script powered by **Sharp**. It runs before `dev` and `build`.

### What it does

1. Defines an `imageJobs` array. Each job has:
   - `input`: original file path under `public/`
   - `widths`: responsive target widths
   - `formats`: output formats (`webp`, `avif`)

2. For each job, it:
   - reads metadata (especially the original width)
   - skips any width larger than the source image (no upscaling)
   - generates each `width  format` output

3. It is incremental:
   - if an output exists and is newer than the input, it is skipped
   - otherwise, it is regenerated

4. It uses a stable naming convention:

   Input: `public/projects/wanderlust.webp`

   Outputs:
   - `public/projects/wanderlust-640.webp`
   - `public/projects/wanderlust-640.avif`

### Why 640 / 960 / 1200 / 1600

These widths are a practical set that covers:

- small/mobile (~640)
- large phones / small tablets (~960)
- typical desktop card sizes (~1200)
- larger hero/background needs (~1600)

If the original image is smaller than a requested width, that width is skipped.

### Quality settings

In `scripts/generate-responsive-images.mjs`:

- WebP: `quality: 78`
- AVIF: `quality: 50`, `effort: 4`

These are balanced defaults (good quality with meaningful size savings). You can tune them.

---

## 2) How variants are created

For every job:

- The image is resized with `withoutEnlargement: true`
- Encoded to the requested formats
- Written into `public/` so Vite serves them as static assets

This produces predictable `-WIDTH` files for `srcset`.

---

## 3) How AVIF/WebP + `<picture>` selection works

`<picture>` works like this:

- The browser picks the **first `<source>` it supports**.
- If it supports AVIF, it uses the AVIF `srcset`.
- If not, it uses the WebP `srcset`.
- If neither, it falls back to the `<img src>`.

### How `srcset` + `sizes` chooses the best file

Each `<source>` provides a `srcset` with width descriptors:

- `image-640.avif 640w, image-960.avif 960w, ...`

`sizes` tells the browser how wide the image will be on the page at different breakpoints.

The browser combines:

- viewport width
- `sizes`
- device pixel ratio (DPR)

and chooses the smallest file that should still look sharp.

---

## 4) How `ResponsivePicture` is structured

File: `src/components/ResponsivePicture.jsx`

### Responsibilities

- Build consistent `srcset` URLs from a single canonical `src`
- Emit AVIF `<source>` and WebP `<source>`
- Emit the `<img>` fallback with:
  - `width` and `height` (CLS prevention)
  - `loading` / `decoding`
  - `fetchPriority` when needed

### Include original behavior

By default, `ResponsivePicture` appends the original `src` as the largest `srcset` candidate.

That means you can generate `640/960/1200` but still include the original image as the max candidate
without generating an extra `-1536` file.

---

## 5) Add a new image (step-by-step)

Example: `public/projects/new-project.webp`

1) Add the original file under `public/`.

2) Add a job in `scripts/generate-responsive-images.mjs`:

```js
{
  input: 'public/projects/new-project.webp',
  widths: [640, 960, 1200, 1600],
  formats: ['webp', 'avif'],
},
```

3) Generate variants:

```powershell
npm run images:generate
```

4) Use it in React:

- Replace `<img>` with `<ResponsivePicture />`
- Set `src` to `/projects/new-project.webp`
- Set `width`/`height` to the original pixel dimensions
- Provide `widths` that match what you generate
- Provide an accurate `sizes` string for the layout

---

## 6) Regenerate images & troubleshoot

### Regenerate

```powershell
npm run images:generate
```

This also runs automatically before `npm run dev` and `npm run build`.

### Troubleshooting

- **Variants missing**: check the job exists; check the input path; remember widths larger than the source are skipped.
- **404s**: make sure `widths` passed to `ResponsivePicture` matches the generated widths.
- **Sharp install problems (Windows)**: re-run `npm install`; verify proxy/firewall allows downloading Sharp binaries.
- **Images too soft**: increase WebP/AVIF quality in the generator.
- **Images too large**: verify your `sizes` string (incorrect `sizes` often causes oversized downloads).

---

## 7) LCP preload and CLS prevention

### LCP preload

The profile photo is a likely LCP element.

In `index.html`, it is preloaded using:

- `fetchpriority="high"`
- `imagesrcset` + `imagesizes` so the browser can preload the right candidate

In `Hero`, the profile image is also:

- `loading="eager"`
- `fetchPriority="high"`

To keep LCP behavior predictable, the profile photo currently uses **WebP only** (no AVIF negotiation).

### CLS prevention

CLS is prevented by:

- always including `width` + `height` on `<img>`
- using stable layout containers (aspect ratio containers and fixed-size avatars)

This reserves space before images load.

---

## 8) Performance best practices used

- Responsive `srcset` + accurate `sizes`
- AVIF-first with WebP fallback
- LCP preload for the profile image
- Lazy loading for below-the-fold images
- Explicit `width/height` to prevent CLS
- Incremental variant generation for fast rebuilds

---

##  Local Development

### Prerequisites
- Node.js (modern LTS recommended)

### Install

```powershell
Set-Location C:\my-portfolio
npm install
```

### Dev server

```powershell
npm run dev
```

### Generate responsive images only

```powershell
npm run images:generate
```

### Lint

```powershell
npm run lint
```

### Production build + preview

```powershell
npm run build
npm run preview
```
