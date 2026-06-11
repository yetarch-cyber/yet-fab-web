# YET:FAB — Project Context

Read this first when joining this codebase. It captures everything decided across the build sessions so a new chat window can continue seamlessly.

---

## 1. What this is

Marketing + product site for **YET:FAB**, the fabrication / product / experimental-object branch of **YET Architecture** (a Tel Aviv architecture & interior design studio).

- This is a **separate website** from `yet-architecture-web`. Do NOT merge, rebuild, or pull portfolio logic from it.
- Live domain: **www.yet-fab.com** (registered at GoDaddy, owned by the user)
- Contact email: `studio@yetarchitecture.com` (shared with parent studio)
- Tel Aviv, Israel · Phone +972-58-629-7942 · IG `@yetfab` · LinkedIn `company/yet-fab`

### Brand name rule (STRICT)
Always write **YET:FAB** — colon, no space. Never `YET FAB`, `YET Fab`, `YETFAB`, `YET: FAB`.
Parent reference line: **"YET:FAB is the fabrication studio of YET Architecture."**

---

## 2. Tech stack

- **Next.js 16** (App Router, Turbopack) — same major version as the parent site; heed `node_modules/next/dist/docs/` for breaking changes.
- **React 19**, **TypeScript** strict
- **Tailwind CSS 4** — `@import "tailwindcss"` in `app/globals.css`, no config file
- **next/image** for all images (via the `Img` wrapper component)
- **next/font/google** → **Raleway** (all weights), applied globally
- No CMS — content lives in `data/*.ts` and TSX
- Deploy: **Vercel** (separate project under the **yetarch** Vercel team — NOT the personal `lord-abrigod` account)
- Repo: GitHub `yetarch-cyber/yet-fab-web`, default branch **`main`** (note: parent uses `master`)

---

## 3. Repo layout

```
app/
├── layout.tsx              # Shell, Raleway font, global SEO metadata, Nav + Footer
├── page.tsx                # Home
├── globals.css             # Tailwind import + keyframes + body font/colors
├── sitemap.ts              # Manual sitemap (6 routes)
├── not-found.tsx           # Custom styled 404
├── shop/page.tsx           # Product grid (collapsed blue grid)
├── services/page.tsx       # 3 service cards
├── about/page.tsx          # Text + 2 images
└── contact/
    ├── page.tsx            # Info only (address/email/phone/socials) + SEND INQUIRY button + 1 image
    └── inquiry/page.tsx    # The actual form page (separate)

components/
├── Nav.tsx                 # Fixed, transparent. Logo + bullet menu
├── Footer.tsx              # 3-col: brand / contact / social + copyright bar
├── HeroCarousel.tsx        # Home hero, 16:9, fades every 2.5s / 300ms
├── BespokeCarousel.tsx     # Fast flicker carousel, 13 imgs, 600ms / 80ms fade
├── Marquee.tsx             # Infinite scrolling text strip
├── ContactForm.tsx         # Client form → FormSubmit.co
└── Img.tsx                 # next/image wrapper: error fallback + quality/unoptimized props

data/
├── products.ts             # Shop items (order matters — see §6)
└── services.ts             # 3 services

scripts/
└── optimize-images.mjs     # sharp compressor — run after adding images

public/images/               # hero, shop, shop-preview, bespoke, services, about, contact
```

---

## 4. Design system

| Token | Hex | Use |
| --- | --- | --- |
| page bg | `#EDEDEB` | warm light grey background |
| ink | `#0A0A0A` | primary text |
| electric blue | `#2222FF` | accent — buttons, grid lines, links, bullets |
| mid grey | `#888888` | secondary text, thin headings |
| border | `#DCDAD5` | dividers |
| placeholder | `#AAAAAA` | muted text |

- **Logo / page titles**: `YET:` bold black (`font-black`) + ` NAME` thin (`font-thin`) grey or blue.
- **Buttons**: blue pill — `bg-[#2222FF] text-white ... rounded-full uppercase tracking-[0.16em]`.
- **Nav**: `fixed`, **transparent** background, no border. Bullet menu `• SHOP • SERVICES • ABOUT • CONTACT •` (blue bullets). Logo `3.5rem`, menu `0.84rem`.
- **Blue collapsed grid** (shop): outer wrapper `border-t border-l border-[#2222FF]`, each cell `border-b border-r border-[#2222FF]`, **no gap** — shared lines like a table, edge-to-edge (no side padding).
- **Standard side padding** elsewhere: `px-5 md:px-[100px]`.
- Fixed-nav clearance on inner pages: `pt-[70px]`–`pt-[90px]`.

---

## 5. Pages — current state

### Home (`app/page.tsx`)
1. `HeroCarousel` — 16:9, 7 images, autoplay 2.5s, 300ms fade, white arrows/dots, "SCROLL DOWN ↓"
2. `Marquee` — infinite scrolling tagline strip, `1.35rem`
3. **5-product row** — `grid-cols-2 md:grid-cols-5`, 3:4 portrait, hover overlay + name below each. Order: THICK, PARASITE, ALHERD ×?, RAMKOL (uses `SHOP_PREVIEW` array, separate from shop data). `gap-[10px]`, `px-[100px]`.
4. Blue **VIEW AND SHOP** button (`py-[25px]` block, ~`pt-[5px]`)
5. `BespokeCarousel` — full-width 16:7, 13 imgs, fast flicker (600ms), SERVICES button overlay

### Shop (`app/shop/page.tsx`)
- No page title. `pt-[90px]`.
- **Collapsed blue grid, 4 columns**, vertical **3:4** images, edge-to-edge.
- Each cell: image + (`Prefix "NAME"`) + blue VIEW AND SHOP button, `gap-[50px]` between name and button.
- Driven by `data/products.ts` order.

### Services (`app/services/page.tsx`)
- No title. Subtitle "Tailored to your needs" + intro paragraph, both `2rem font-thin text-[#888]`, full width.
- 3 cards (`grid-cols-3`), vertical **3:4** images, **no grey overlay**, CONTACT US button → `/contact/inquiry`.

### About (`app/about/page.tsx`)
- 2-col: text left / 2 stacked images right (`ADA_YET_3`, `ADA_YET_5`).
- No "YET: ABOUT" heading. Text offset `pl-[200px] pt-[290px]`. Images start at top edge.

### Contact (`app/contact/page.tsx`)
- **Info only**: YET:FAB / Tel Aviv / email / phone / IG / LinkedIn + **SEND INQUIRY** button (→ `/contact/inquiry`).
- One image `IMG_2915.jpg` flush right, **1080px tall**, native ratio via exact `aspectRatio` container.
- Text column `minmax(320px,1fr)` so it never collapses; offset `pl-[100px] pt-[200px]`.

### Inquiry (`app/contact/inquiry/page.tsx`)
- The form (`ContactForm`). Success state when `?sent=true`.

---

## 6. Data files

`data/products.ts` — **order is intentional** (user reorders often). Each: `id, name, prefix, displayName, type, description, image, shopUrl`.
Current shop order: PARASITE, ALHERD Pendant, ALHERD Table, ALHERD Floor, RAMKOL ×2, BAKLAN, THICK.
(The home `SHOP_PREVIEW` array in `app/page.tsx` is a **separate** 5-item list — don't confuse them.)

`data/services.ts` — 3D PRINTING, BESPOKE FABRICATION, EXPERT CONSULTATION. Each: `id, title, subtitle, description, image`.

`shopUrl` is currently `"#"` — **no real checkout yet** (see §9).

---

## 7. Images

- All under `public/images/<section>/`. Filenames often contain **spaces** — use literal spaces in `src` (next/image encodes once; never pre-encode → avoids `%2520`).
- **Always run `node scripts/optimize-images.mjs` after adding images.** It compresses in place (max 2400px, JPEG q82 / PNG q80, mozjpeg, EXIF-rotate, tmp-file write for Windows). One pass took the repo 166 MB → 12 MB (93%).
- `components/Img.tsx` props: `fill`, `className`, `priority`, `sizes`, `quality` (default 90), `unoptimized`. Has a styled placeholder fallback on load error.
- **Keep native ratio at a fixed height**: wrap in a `<div>` with the image's exact `aspectRatio` (e.g. `"2264 / 3019"`) + fixed height + `<Img fill className="object-cover">`. Do NOT force a fixed height onto the `width={0} height={0}` path — it **distorts**.
- PNGs of photos stay large (e.g. `contact/IMG_2913.png` ~2 MB). Convert photo-PNGs to JPEG if size matters.

---

## 8. Contact form (FormSubmit.co — no backend)

- `ContactForm.tsx` posts to `https://formsubmit.co/studio@yetarchitecture.com` (multipart).
- Hidden fields: `_subject`, `_captcha=false`, `_template=table`, `_next=https://www.yet-fab.com/contact/inquiry?sent=true`.
- **Required**: name, email, phone. **Optional**: select option, message, file attachment (`.pdf,.jpg,.png,.dwg,.zip,.ai,.dxf`).
- **One-time activation**: the FIRST submission triggers a confirmation email to `studio@yetarchitecture.com` — must click the link once to activate. After that, submissions arrive directly.

---

## 9. Open / TODO

- **No real purchasing yet** — `shopUrl: "#"`. Stripe is NOT available for Israel sign-up. Recommended path: **Cardcom** (Israeli gateway, supports תשלומים) for local buyers, **PayPal** for international. When the user provides payment links, drop them into each product's `shopUrl` in `data/products.ts`.
- **Domain**: DNS at GoDaddy is **already correct** (`A @ → 76.76.21.21`, `CNAME www → cname.vercel-dns.com`). Remaining step is adding `yet-fab.com` + `www.yet-fab.com` in **Vercel project → Settings → Domains** (use the *project* Domains screen, NOT the "buy a domain" search which shows "unavailable").

---

## 10. SEO

- `app/layout.tsx` holds default + templated title, description, keywords, OG, Twitter, robots, `metadataBase`.
- Each page sets its own `metadata` with a `canonical` under `https://www.yet-fab.com/...`.
- `app/sitemap.ts` lists all 6 routes (home, shop, services, about, contact, contact/inquiry).
- SEO title: `YET:FAB — Digital Fabrication, 3D Printed Objects & Custom Components`.
- SEO description: `YET:FAB is the fabrication studio of YET Architecture, developing 3D-printed objects, lighting, furniture interventions, prototypes, and custom architectural components in Tel Aviv.`

---

## 11. Vercel deploy gotchas (already solved — don't regress)

- `vercel.json` must contain `"framework": "nextjs"` and `"outputDirectory": ".next"`.
- Do **NOT** add `nodeVersion` to `vercel.json` (invalid schema key). Pin Node via `engines.node: ">=20.0.0"` in `package.json` (Next 16 needs Node ≥20; Vercel defaulted to 18 and failed).
- If Vercel keeps building an old commit, it may be deploying from a stale ref — deploy from latest `main`.

---

## 12. Workflow

- **Commit + push to `main` immediately after every change** — user expects Vercel live within seconds.
- Commit style: short imperative summary + body + `Co-Authored-By: Claude <noreply@anthropic.com>`.
- Git identity in this repo: name **"YET Architecture"**, email **studio@yetarchitecture.com**.
- `gh` CLI is **not installed**. Create GitHub repos via the web UI; push uses stored Windows credentials.
- `LF will be replaced by CRLF` warnings on Windows are harmless.
- Environment: Windows 11, PowerShell. Working dir `C:\Users\yetar\yet-fab-web`.

---

_Last updated: 2026-06-11. Keep this current as conventions evolve._
