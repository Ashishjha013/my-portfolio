# 🚀 Ashish Kumar Jha — Developer Portfolio

A modern, single-page **developer portfolio** built with **React 19**, **Vite (rolldown-vite)**, and **Tailwind CSS v4**.  
This project represents my **learning journey in backend and full-stack development**, focused on **real projects**, **clean logic**, and **production-style UI**.

---

## ✨ Overview

This portfolio is designed to:
- Showcase **project-based learning**, not just tutorials
- Demonstrate **modern frontend practices**
- Highlight my focus on **backend systems & full-stack development**
- Act as a clean, deployable personal site for recruiters and collaborators

It is fully responsive, animated, and optimized for performance.

---

## 🧩 Sections & Structure

The site is a **single-page layout** composed of the following sections (top → bottom):

### 🔹 NavBar (`src/layout/NavBar.jsx`)
- Fixed header with scroll-based glass effect
- Desktop navigation + mobile slide menu
- Primary “Contact Me” call-to-action

### 🔹 Hero (`src/sections/Hero.jsx`)
- Full-screen hero with background image (`public/hero-bg.png`)
- Canvas-based animated **Floating Dots** background
- Primary CTA: **Contact Me**
- Secondary CTA: **Download CV**
- Social links (GitHub, LinkedIn, X)
- Infinite marquee displaying tech stack

### 🔹 About (`src/sections/About.jsx`)
- Short personal bio
- Four highlight cards:
  - Clean Code
  - Performance
  - Collaboration
  - Innovation

### 🔹 Projects (`src/sections/Projects.jsx`)
- Featured project grid
- Hover overlays with **Live Demo** and **GitHub** links
- Tech stack tags
- “View All Projects” button (links to GitHub)

### 🔹 Experience (`src/sections/Experience.jsx`)
- Vertical timeline layout
- Glow-accented timeline line
- Animated “current” indicator
- Focus on **learning progression**, not job titles

### 🔹 Testimonials (`src/sections/Testimonials.jsx`)
- Carousel-style testimonials
- Represents **learning philosophy & project mindset**
- Prev / next controls + dot navigation

### 🔹 Contact (`src/sections/Contact.jsx`)
- EmailJS-powered contact form
- Contact information cards
- Availability / open-to-work card

### 🔹 Footer (`src/layout/Footer.jsx`)
- Quick navigation links
- Social icons
- Copyright notice

---

## 🛠 Tech Stack

### Core
- **React** (`react`, `react-dom`)
- **Vite** (via `rolldown-vite` alias)
- **Tailwind CSS v4** (`@tailwindcss/vite`)

### UI & Utilities
- **lucide-react** (icons)
- **EmailJS** (`@emailjs/browser`) for contact form
- **ESLint** (Flat Config)

---

## 🧠 Where Content Lives (Easy Editing)

Most content is stored as **simple arrays or constants** inside components:

| Content | File |
|------|------|
| Name / Branding | `src/layout/NavBar.jsx`, `Footer.jsx` |
| Hero skills marquee | `src/sections/Hero.jsx` |
| Projects list | `src/sections/Projects.jsx` |
| Experience timeline | `src/sections/Experience.jsx` |
| Testimonials | `src/sections/Testimonials.jsx` |
| Contact info | `src/sections/Contact.jsx` |

No CMS — everything is **code-first and transparent**.

---

## 🖼 Assets

All static assets are served from the `public/` folder:

- `hero-bg.png` — Hero background
- `profile-photo.png` — Profile photo
- `Ashish_Kumar_Jha_Backend_Developer_Resume.pdf` — Resume download
- `projects/*.jpg` — Project thumbnails
- `avatar/dev-avatar.jpg` — Testimonial avatar

---

## 🎨 Styling & Theme

Theme configuration lives in **`src/index.css`** and includes:

- CSS variables via `@theme`
- Dark, black-blue color scheme
- Glassmorphism utilities:
  - `.glass`
  - `.glass-strong`
- Glow utilities:
  - `.glow-text`
  - `.glow-border`
  - `.timeline-glow`
- Custom animations:
  - `fade-in`
  - `fade-in-no-blur` (for SVG/icon performance)
  - `float`
  - `marquee`
  - Animated border effect (used by `AnimatedBorderButton`)

---

## 🧪 Local Development

### Prerequisites
- Node.js (any modern LTS)

### Install
```powershell
Set-Location c:\my-portfolio
npm install
