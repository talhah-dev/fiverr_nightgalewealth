# Adoura.ai — Landing Page (Frontend)

A modern, AI‑themed landing page built on top of a Vuexy front‑page template. This repo contains the **static frontend** (Home, Features, Pricing, Reviews, FAQ, CTA, Footer, Mobile Nav). The backend (auth, logging, Stripe upgrades) will be integrated later.

> **Note:** We draw inspiration from crayo.ai but **do not copy** it. Visuals and copy are original to Adoura.ai.

---

## ✨ Highlights

- **AI aesthetic**: dark-on-light neutrals, indigo/violet accents, glassmorphism, subtle particles.
- **Four core tools surfaced**: Argument Response Generator, Pick‑Up Line Generator, Rizz Assist, AI Date & Gift Concierge.
- **Mobile-first** with smooth AOS animations and micro-interactions.
- **Lightweight** static HTML/CSS/JS (no framework lock-in).
- **Ready for Stripe upgrade flow** (frontend hooks + placeholders).

---

## 📂 Structure

```
.
├── index.html                # Main landing page (anchors: #home, #features, #pricing, #faq)
├── /docs/assets/images/      # Logos & store badges (logo.svg, apple.svg, playstore.svg ...)
├── /css/                     # Tailwind build or additional styles (if used)
├── /js/                      # Navbar, mobile menu, counters, swiper, aos init
└── README.md
```

> Paths used in snippets: `/docs/assets/images/logo.svg`, `/docs/assets/images/apple.svg`, `/docs/assets/images/playstore.svg`. Update as needed.

---

## 🔧 Tech Stack

- **HTML5 + Tailwind utility classes** (via CDN or compiled — your choice)
- **AOS** (Animate on Scroll) – used via `data-aos` attributes
- **Font Awesome** – icons for features/ratings/navigation
- **Swiper** (optional) – used for counters/slider section
- Vanilla **JavaScript** – mobile nav, accordion FAQ, counters

---

## 🚀 Getting Started

### Option A — Quick preview (no build)
1. Open `index.html` directly in the browser, or
2. Use a static server for proper routing and cache headers:
   ```bash
   npx serve .
   # or
   python3 -m http.server 5173
   ```

### Option B — With Tailwind build (recommended)
If you want to compile Tailwind locally:

1. Install Tailwind (or use your existing toolchain):
   ```bash
   npm i -D tailwindcss postcss autoprefixer
   npx tailwindcss init -p
   ```
2. Configure `tailwind.config.js` to scan your files:
   ```js
   content: ["./*.html", "./js/**/*.js"]
   ```
3. Build CSS during development:
   ```bash
   npx tailwindcss -i ./css/input.css -o ./css/output.css --watch
   ```

---

## 🔗 Anchors & Navigation

- **Desktop nav**: Home, Features, Pricing (uppercase)
- **Mobile drawer**: opens full-screen; items link to `#home`, `#features`, `#pricing`, and `#signup`/CTA
- **Smooth scrolling** can be added via CSS `scroll-behavior: smooth;` on `html`

**Known fix (mobile drawer full-width):**
If the drawer doesn’t fill the screen on small devices, remove the width cap:
```html
<div id="mobileMenu"
  class="fixed left-0 top-0 bg-white max-w-none md:max-w-[30rem] w-0 overflow-hidden h-screen z-50 transition-all duration-500">
```
Or slide with transforms for smoother performance.

---

## 🧩 Sections Overview

### Hero
- Badge: “Trained with real conversations”
- Headline: “Talk smarter. Win arguments. Impress dates.”
- Subhead: unique value + “cheapest on the market”
- CTA: **See Features** / **Try Free**

### Feature Tiles
- **Argument Response Generator** (scale icon)
- **Pick‑Up Line Generator** (heart icon)
- **Rizz Assist** (bolt icon)
- **AI Date & Gift Concierge** (gift icon)

### Features Grid (Detailed)
- De‑escalation engine, Tone & Style controls, Privacy-first, Conversation insights

### Metrics Slider / Counters
- User Satisfaction, Daily Generations, Conversations Assisted, Core Tools, Countries, Uptime

### Pricing
- **Free** ($0): 15/day, all tools, standard speed, community support
- **Pro** ($9): unlimited, faster, presets, priority support, one‑tap rephrase
- **Ultimate** ($19): fastest, advanced safety/spice controls, early access, optional team workspace

### Reviews
Short, authentic testimonials tied to product value.

### FAQ
- What is Adoura.ai?
- How do I use it?
- Is my data private?
- Is there a free plan?
- Where can I use it?
- Billing & upgrades (Stripe, refund window)

### CTA Band
- “Talk smarter in seconds.” + store badges / web signup

### Footer
- Quick Links + Product links + Social (Instagram, TikTok, X/Twitter)
- Copyright

---

## 🛡️ Privacy & Safety (copy placeholders)

- Chats are not sold.
- One-tap delete for history.
- Opt-out of training.
- Transport encryption (HTTPS/TLS).

> Update with your legal team’s final **Privacy Policy** and **Terms of Service** links.

---

## 🧪 QA Checklist

- [ ] Validate all anchor links (#home, #features, #pricing, #faq)
- [ ] Mobile menu covers full viewport (no `max-w` cap on small screens)
- [ ] Icons load (Font Awesome)
- [ ] AOS animations trigger and don’t hurt performance
- [ ] SEO meta present (title, description, og tags)
- [ ] Lighthouse: Performance > 90 on mobile
- [ ] Replace placeholder images/logos & social links

---

## 🌐 Deployment

Any static hosting works:
- **Vercel**: drag‑drop or `vercel deploy`
- **Netlify**: drag‑drop or connect repo
- **GitHub Pages**: push to `gh-pages`
- **Cloudflare Pages**: connect repo

> Cache static assets with long TTL; keep HTML with shorter TTL to allow copy updates.

---

## 🔌 Future Integration (Stripe Upgrades)

- Add a **/account** page that reads current plan.
- “Upgrade to Pro/Ultimate” buttons POST to your backend to create Stripe Checkout sessions.
- Webhooks set user’s plan after payment (`checkout.session.completed`).

Placeholders are already in pricing cards; wire to backend when ready.

---

## 📝 License & Attribution

- © Adoura.ai. All rights reserved.
- Design uses Vuexy front‑page template as a base theme. Please ensure you hold the proper license.
- Third‑party assets (icons, fonts) are their respective owners’ property.

---

## 🙋 Support

- Bug/feature: open an issue or email **support@adoura.ai**
- Press/partnerships: **hello@adoura.ai**

---

Happy shipping! 🚀
