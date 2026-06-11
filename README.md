# Creative Krishna Photography

> Luxury wedding photography website — Jamshedpur

A premium, editorial-style single-page React website for Creative Krishna Photography, built with React + Vite + Tailwind CSS + Framer Motion.

---

## ✨ Tech Stack

| Tool | Version | Purpose |
|------|---------|---------|
| React | 18 | UI framework |
| Vite | 5 | Build tool |
| Tailwind CSS | 3 | Styling |
| Framer Motion | 11 | Animations |
| React Icons | 5 | Icons |
| React Intersection Observer | 9 | Scroll triggers |

---

## 📁 Folder Structure

```
creative-krishna-photography/
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/              # Static assets (add your logo here)
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.jsx   # Sticky navbar with blur-on-scroll
│   │   │   └── Footer.jsx   # Dark luxury footer
│   │   ├── sections/
│   │   │   ├── Hero.jsx           # Fullscreen hero with particles
│   │   │   ├── TrustBar.jsx       # Scrolling marquee
│   │   │   ├── About.jsx          # Split layout + stats
│   │   │   ├── Services.jsx       # Arch cards (Ritual Haus style)
│   │   │   ├── Portfolio.jsx      # Masonry gallery + lightbox
│   │   │   ├── SignatureWeddings.jsx  # Florence template style
│   │   │   ├── Packages.jsx       # Luxury pricing cards
│   │   │   ├── WhyUs.jsx          # Dark section with grid
│   │   │   ├── Testimonials.jsx   # Dark carousel
│   │   │   ├── Process.jsx        # Timeline steps
│   │   │   ├── FAQ.jsx            # Accordion
│   │   │   ├── CTAStrip.jsx       # WhatsApp CTA with parallax BG
│   │   │   └── Contact.jsx        # Form + contact info
│   │   └── ui/
│   │       ├── FloatingWhatsApp.jsx  # Floating WA button
│   │       └── LoadingScreen.jsx     # Luxury loading screen
│   ├── data/
│   │   └── siteContent.js   # ← ALL content lives here
│   ├── hooks/
│   │   ├── useScrollReveal.js
│   │   └── useActiveSection.js
│   ├── utils/
│   │   └── animations.js    # Framer Motion variants
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── netlify.toml
├── vercel.json
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Local Development

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# Opens at http://localhost:3000
```

### Production Build

```bash
npm run build
npm run preview  # preview the production build
```

---

## 🌐 Deployment

### Vercel (Recommended)

```bash
# Option 1: Vercel CLI
npm i -g vercel
vercel

# Option 2: GitHub
# Push to GitHub → Import project on vercel.com → Deploy
# Framework: Vite (auto-detected)
```

### Netlify

```bash
# Option 1: Netlify CLI
npm i -g netlify-cli
netlify deploy --prod --dir=dist

# Option 2: Drag & drop
# npm run build → drag /dist folder to netlify.com/drop
```

---

## ✏️ Customization

All content is in **one file**: `src/data/siteContent.js`

| What to change | Location |
|---------------|----------|
| Brand name, phone, email | `brand` object |
| Services list | `services` array |
| Package pricing | `packages` array |
| Testimonials | `testimonials` array |
| FAQs | `faqs` array |
| Gallery images | `galleryImages` array |
| Color palette | `tailwind.config.js` |
| Fonts | `index.html` (Google Fonts link) + `tailwind.config.js` |

### To add your real logo
Replace the brand text in `Navbar.jsx` with:
```jsx
<img src="/logo.png" alt="Creative Krishna Photography" className="h-10 w-auto" />
```
Place `logo.png` in the `/public` folder.

### To add a real video background (Hero)
Set `videoError` to `false` in `Hero.jsx` and add:
```jsx
<video ref={videoRef} autoPlay muted loop playsInline className="w-full h-full object-cover">
  <source src="/wedding-reel.mp4" type="video/mp4" />
</video>
```
Place `wedding-reel.mp4` in `/public`.

### To connect the contact form
Replace the `setTimeout` mock in `Contact.jsx` with:
- **EmailJS**: `emailjs.sendForm(serviceId, templateId, formRef.current, publicKey)`
- **Formspree**: `fetch('https://formspree.io/f/YOUR_ID', { method: 'POST', body: formData })`
- **Backend API**: Your own endpoint

---

## 📱 Mobile Features

- Full-screen hero
- Swipeable gallery (touch-optimized)
- Sticky WhatsApp button
- Horizontal-scroll package cards fallback
- Optimized images (lazy loading)
- Touch-friendly accordion & carousel

---

## ♿ Accessibility

- Semantic HTML5 landmarks
- ARIA labels on all interactive elements
- Keyboard navigation support
- `prefers-reduced-motion` respected
- Focus visible states throughout

---

## 📞 Business Contact

**Creative Krishna Photography**  
📍 Jamshedpur, Jharkhand  
📞 +91 91354 89571  
✉️ krishnatanti1998@gmail.com  
📷 @creative_krishna_01

---

© 2026 Creative Krishna Photography. All Rights Reserved.
