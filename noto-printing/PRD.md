# Product Requirements Document (PRD)
# Noto Printing - Platform Percetakan Digital

**Version:** 1.0  
**Last Updated:** 26 Desember 2024  
**Status:** Active Development  
**Product Owner:** Noto Printing Team

---

## 1. Executive Summary

### 1.1 Product Vision
Noto Printing adalah platform web modern yang menyediakan layanan percetakan profesional dengan fokus pada pengalaman pengguna yang seamless, dari pencarian produk hingga pemesanan via WhatsApp.

### 1.2 Business Objectives
- Meningkatkan visibilitas online untuk layanan percetakan
- Mempermudah pelanggan dalam mengeksplorasi produk dan layanan
- Mengurangi friction dalam proses pemesanan
- Membangun kredibilitas melalui portfolio dan konten edukatif
- Meningkatkan conversion rate melalui kalkulator harga transparan

### 1.3 Target Audience
- **Primary:** Individu yang membutuhkan jasa cetak (undangan, kartu nama, banner)
- **Secondary:** Perusahaan/Korporat untuk kebutuhan branding dan marketing material
- **Tertiary:** Wedding organizer, event organizer, dan UMKM

---

## 2. Product Overview

### 2.1 Core Features

#### 2.1.1 Product Catalog
**Tujuan:** Menampilkan produk percetakan dengan informasi detail

**Fitur:**
- Katalog produk terstruktur berdasarkan kategori
- Detail produk dengan spesifikasi lengkap
- Galeri gambar produk
- Search dan filter by kategori
- Breadcrumb navigation
- Recent viewed products (localStorage)

**Technical Implementation:**
- Server Components untuk SEO optimization
- Client Components untuk interaktivitas
- Static data dari `src/constants/products.ts`
- Next.js Image optimization

#### 2.1.2 Portfolio Showcase
**Tujuan:** Membangun trust melalui hasil karya sebelumnya

**Fitur:**
- Galeri portfolio dengan kategori
- Detail portfolio dengan:
  - Multiple images
  - Client testimonial dengan rating
  - Produk yang digunakan (relasi ke catalog)
  - Tags dan metadata
- Search dan filter portfolio
- Integrasi dengan product catalog

**Technical Implementation:**
- Portfolio data structure dengan product relations
- Image gallery dengan thumbnail selection
- Related products section
- SEO-optimized pages

#### 2.1.3 Blog & Content Marketing
**Tujuan:** SEO boost dan edukasi customer

**Fitur:**
- Blog posts dengan konten edukatif
- Kategori: Panduan, Tutorial, Inspirasi
- Metadata SEO lengkap (metaTitle, metaDescription, keywords)
- Author, publish date, read time
- Tags untuk content discovery
- Search dan filter

**Technical Implementation:**
- Markdown content storage
- Open Graph metadata generation
- Dynamic SEO meta tags
- Pre-wrap rendering untuk konten

#### 2.1.4 Price Calculator
**Tujuan:** Transparansi harga dan self-service quotation

**Fitur:**
- Interactive calculator dengan:
  - Pilihan jenis produk (5 types)
  - Input quantity dengan bulk discount indicator
  - Material selection dengan pricing
  - Size selection dengan multiplier
  - Multiple finishing options
  - Urgent order toggle
- Real-time price calculation
- Price breakdown:
  - Subtotal
  - Bulk discount (5%-20%)
  - Urgent fee (50%)
  - Total
  - Estimated completion days
- WhatsApp integration dengan pre-filled quotation

**Technical Implementation:**
- Client-side calculation logic
- Pricing rules engine
- WhatsApp deep linking
- Form validation

#### 2.1.5 WhatsApp Integration
**Tujuan:** Seamless communication channel

**Fitur:**
- Floating WhatsApp button (global)
- Product inquiry via WhatsApp (pre-filled message)
- Calculator quotation via WhatsApp
- Auto-hide/show on scroll

**Technical Implementation:**
- WhatsApp URL scheme
- Message templating dengan product info
- Scroll behavior detection

### 2.2 UX/UI Features

#### Navigation & Wayfinding
- ✅ Header navigation dengan 5 menu utama
- ✅ Breadcrumb navigation
- ✅ Footer dengan sitemap
- ✅ Mobile-responsive menu

#### Visual Feedback
- ✅ Loading skeletons
- ✅ Hover effects pada cards
- ✅ Image zoom (planned)
- ✅ Smooth transitions

#### Accessibility
- ✅ Semantic HTML
- ✅ ARIA labels
- ✅ Keyboard navigation support
- ✅ Dark/Light mode toggle

---

## 3. Technical Architecture

### 3.1 Tech Stack

**Frontend Framework:**
- Next.js 16.1.1 (App Router)
- React 19
- TypeScript

**Styling:**
- Tailwind CSS
- shadcn/ui components (New York style, Slate theme)
- next-themes (dark mode)

**State Management:**
- React Hooks (useState, useEffect, useMemo)
- localStorage (recent viewed)

**Carousel:**
- embla-carousel-react
- embla-carousel-autoplay

**Icons:**
- lucide-react

**Package Manager:**
- pnpm

### 3.2 Project Structure

```
noto-printing/
├── src/
│   ├── app/                    # App Router pages
│   │   ├── page.tsx           # Homepage (server)
│   │   ├── search/            # Product listing
│   │   ├── product/[slug]/    # Product detail
│   │   ├── portfolio/         # Portfolio pages
│   │   ├── blog/              # Blog pages
│   │   └── calculator/        # Price calculator
│   ├── components/            # React components
│   │   ├── ui/                # shadcn components
│   │   ├── skeletons/         # Loading states
│   │   ├── *-section.tsx      # Homepage sections
│   │   ├── *-content.tsx      # Page content (client)
│   │   └── *.tsx              # Reusable components
│   ├── constants/             # Static data
│   │   ├── types.ts           # TypeScript interfaces
│   │   ├── products.ts        # Product catalog
│   │   ├── portfolios.ts      # Portfolio data
│   │   ├── blogs.ts           # Blog posts
│   │   ├── calculator-options.ts  # Pricing rules
│   │   └── index.ts           # Exports & config
│   ├── hooks/                 # Custom React hooks
│   │   └── useRecentViewed.ts
│   ├── lib/                   # Utilities
│   └── providers/             # Context providers
├── public/                    # Static assets
└── package.json
```

### 3.3 Component Architecture

**Server Components:**
- All `page.tsx` files
- SEO-critical components
- Static content sections

**Client Components:**
- Interactive forms (calculator)
- Search/filter components
- Image galleries
- Carousel
- Theme toggle
- Recent viewed tracker

### 3.4 Data Flow

```
Constants (Static Data)
    ↓
Server Components (Data Fetch)
    ↓
Client Components (Interactivity)
    ↓
User Actions
    ↓
WhatsApp Integration (External)
```

---

## 4. Data Models

### 4.1 Product

```typescript
interface Product {
  id: string;
  name: string;
  slug: string;
  categoryId: string;
  description: string;
  specifications: {
    label: string;
    value: string;
  }[];
  images: string[];
  featured?: boolean;
}
```

### 4.2 Portfolio

```typescript
interface Portfolio {
  id: string;
  slug: string;
  title: string;
  client: string;
  description: string;
  images: string[];
  thumbnail: string;
  category: string;
  productIds: string[];  // Relation
  completedDate: string;
  tags: string[];
  testimonial?: {
    text: string;
    author: string;
    rating: number;
  };
}
```

### 4.3 BlogPost

```typescript
interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;  // Plain text
  author: string;
  publishedDate: string;
  updatedDate?: string;
  thumbnail: string;
  category: string;
  tags: string[];
  readTime: number;
  seo: {
    metaTitle: string;
    metaDescription: string;
    keywords: string[];
  };
}
```

### 4.4 PrintingOption

```typescript
interface PrintingOption {
  id: string;
  name: string;
  materials: {
    id: string;
    name: string;
    pricePerUnit: number;
  }[];
  sizes: {
    id: string;
    name: string;
    multiplier: number;
  }[];
  finishings: {
    id: string;
    name: string;
    additionalCost: number;
  }[];
}
```

---

## 5. User Journeys

### 5.1 Browse & Inquiry Journey

```
Landing Page
    → Browse Categories
    → View Product Detail
        → Add to Recent Viewed (auto)
        → View Breadcrumb
        → Click "Pesan via WhatsApp"
            → WhatsApp opens with pre-filled message
```

### 5.2 Portfolio Discovery Journey

```
Landing Page / Portfolio Section
    → Click "Lihat Semua Portfolio"
    → Portfolio Listing Page
        → Search/Filter by category
        → Click Portfolio Card
            → Portfolio Detail
                → View Images
                → Read Testimonial
                → See Related Products
                    → Click Product → Product Detail
```

### 5.3 Price Calculation Journey

```
Landing Page / Navigation
    → Click "Kalkulator"
    → Calculator Page
        → Select Product Type
        → Input Quantity (see bulk discount)
        → Select Material (see price)
        → Select Size
        → Choose Finishings (optional)
        → Toggle Urgent Order
        → Click "Hitung Harga"
            → View Price Breakdown
            → Click "Pesan via WhatsApp"
                → WhatsApp with full quotation
```

### 5.4 Content Consumption Journey

```
Landing Page / Blog Section / SEO Search
    → Blog Listing Page
        → Search/Filter
        → Click Article
            → Blog Detail Page
                → Read Content
                → View Tags
                → (Future: Related articles)
```

---

## 6. SEO Strategy

### 6.1 On-Page SEO

**Every Page Includes:**
- Proper title tags
- Meta descriptions
- Open Graph tags
- Canonical URLs
- Semantic HTML (h1, h2, section, article)

**Blog Pages:**
- Article structured data
- Author metadata
- Publish/update dates
- Keywords optimization

**Portfolio Pages:**
- Work/CreativeWork schema (planned)
- Image alt tags
- Descriptive content

### 6.2 Technical SEO

- Server-side rendering (Next.js App Router)
- Fast page loads (Next.js optimization)
- Image optimization (next/image)
- Mobile-responsive
- Clean URL structure (slug-based)

### 6.3 Content SEO

**Blog Topics:**
- Panduan (How-to guides)
- Tutorial (Technical tutorials)
- Inspirasi (Trend & inspiration)

**Target Keywords:**
- "jenis kertas undangan pernikahan"
- "tips persiapan file cetak"
- "tren desain kartu nama 2024"
- "percetakan [kota]"

---

## 7. Performance Requirements

### 7.1 Page Load

- **Target:** < 3s First Contentful Paint
- **Strategy:**
  - Next.js static generation where possible
  - Image optimization
  - Code splitting
  - Lazy loading

### 7.2 Interactivity

- **Target:** < 100ms interaction response
- **Strategy:**
  - Client-side state management
  - Optimistic UI updates
  - Debounced search

### 7.3 Accessibility

- **Target:** WCAG 2.1 Level AA
- **Implementation:**
  - Keyboard navigation
  - Screen reader support
  - Color contrast compliance
  - Focus indicators

---

## 8. Analytics & Metrics

### 8.1 Key Performance Indicators (KPIs)

**Traffic Metrics:**
- Page views per session
- Bounce rate
- Time on site
- Traffic sources

**Engagement Metrics:**
- Portfolio views
- Blog reads (scroll depth)
- Calculator usage rate
- WhatsApp click-through rate

**Conversion Metrics:**
- Product inquiry rate (WhatsApp clicks)
- Calculator → WhatsApp conversion
- Portfolio → Product navigation

### 8.2 Tracking Events (Planned)

- Product view
- Portfolio view
- Blog read
- Calculator submission
- WhatsApp CTA click
- Search usage
- Filter usage

---

## 9. Future Enhancements

### 9.1 Phase 2 Features

**Customer Features:**
- [ ] Custom design upload & preview
- [ ] Design template gallery
- [ ] Order tracking dashboard
- [ ] User accounts (optional)
- [ ] Wishlist/favorites (cookie-based)

**Content Features:**
- [ ] Proper markdown renderer (react-markdown)
- [ ] Blog comments
- [ ] Related articles
- [ ] Content search (Algolia/Meilisearch)

**UX Improvements:**
- [ ] Image zoom on hover/click
- [ ] Lightbox for galleries
- [ ] Sticky CTA on scroll
- [ ] Breadcrumbs on all pages
- [ ] 404 custom page
- [ ] Loading states everywhere

### 9.2 Phase 3 Features

**Business Logic:**
- [ ] Payment gateway integration (Midtrans/Xendit)
- [ ] Online ordering system
- [ ] Invoice generation
- [ ] Email notifications

**Advanced Features:**
- [ ] AR product preview
- [ ] Bulk order CSV upload
- [ ] Live chat/chatbot
- [ ] Referral program
- [ ] Loyalty points

**Analytics:**
- [ ] Google Analytics 4
- [ ] Heatmaps (Hotjar/Microsoft Clarity)
- [ ] Conversion funnel tracking
- [ ] A/B testing framework

### 9.3 Technical Debt

- [ ] Add unit tests (Jest + React Testing Library)
- [ ] Add E2E tests (Playwright)
- [ ] Implement proper error boundaries
- [ ] Add logging/monitoring (Sentry)
- [ ] Performance monitoring (Vercel Analytics)
- [ ] Database migration (if needed)
- [ ] CMS integration (Sanity/Contentful)

---

## 10. Constraints & Assumptions

### 10.1 Technical Constraints

- Static data (no database currently)
- No authentication system
- No real-time features
- Client-side state only (no persistence beyond localStorage)

### 10.2 Business Constraints

- WhatsApp as primary communication channel
- Manual order processing
- No online payment (yet)
- Self-managed content updates

### 10.3 Assumptions

- Target audience has smartphone with WhatsApp
- Internet connectivity sufficient for image-heavy content
- Users comfortable with WhatsApp for business inquiries
- Desktop and mobile usage roughly equal

---

## 11. Success Criteria

### 11.1 Launch Criteria (MVP)

- [x] All core pages functional (Home, Products, Portfolio, Blog, Calculator)
- [x] Mobile responsive
- [x] WhatsApp integration working
- [x] SEO basics implemented
- [x] Loading states for UX
- [ ] Build passes without errors
- [ ] Cross-browser tested (Chrome, Safari, Firefox)
- [ ] Performance acceptable (< 3s load)

### 11.2 Success Metrics (3 months post-launch)

- 1,000+ monthly visitors
- 5%+ WhatsApp inquiry rate
- 20%+ calculator usage rate
- 30%+ portfolio engagement
- < 50% bounce rate
- 10+ organic keywords ranked in top 10

---

## 12. Risks & Mitigations

| Risk | Impact | Likelihood | Mitigation |
|------|--------|------------|------------|
| WhatsApp dependency | High | Medium | Add email form as backup |
| Static data scalability | Medium | High | Plan CMS migration |
| SEO competition | Medium | High | Content quality + long-tail keywords |
| Image load performance | Medium | Medium | Aggressive optimization + CDN |
| Mobile UX complexity | High | Low | Extensive mobile testing |

---

## 13. Appendix

### 13.1 Glossary

- **PRD:** Product Requirements Document
- **SEO:** Search Engine Optimization
- **CTA:** Call To Action
- **UX:** User Experience
- **UI:** User Interface
- **MVP:** Minimum Viable Product

### 13.2 References

- [Next.js Documentation](https://nextjs.org/docs)
- [shadcn/ui Components](https://ui.shadcn.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [WCAG Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

### 13.3 Changelog

| Version | Date | Changes | Author |
|---------|------|---------|--------|
| 1.0 | 2024-12-26 | Initial PRD creation | Noto Printing Team |

---

**Document Owner:** Product Team  
**Technical Lead:** Development Team  
**Last Review:** 26 Desember 2024  
**Next Review:** Q1 2025
