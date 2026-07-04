
# Portfolio Website — Site Map & Page Specifications


---

## 1. Overview

This document defines the complete structure, sections, and content requirements for the professional portfolio website of **Mackrine Ruth**, a Frontend Developer and UI Designer based in Mathur, Thanjavur. The portfolio is designed as a **multi-page static website** built with HTML5, Vanilla CSS3, and Vanilla JavaScript (ES6+), following the same high-performance, zero-dependency architecture used in previous TYM Agency projects.

### Design Philosophy
- **Clean & Minimal** with **Modern Corporate** undertones
- **Gradient-driven** visual identity (Indigo → Cyan → Purple → Teal)
- **Mobile-first** responsive design
- **Bilingual support** (English + Tamil)
- **Lightweight, fast-loading** with optimized animations

---

## 2. Global Site Structure

```
mackrine-ruth-portfolio/
│
├── index.html              # Home / Landing Page
├── about.html              # About Me & Journey
├── work.html               # Projects / Portfolio Showcase
├── skills.html             # Skills & Tech Stack
├── contact.html            # Contact & Lead Generation
│
├── css/
│   ├── style.css           # Main stylesheet (variables, layout, animations)
│   ├── responsive.css      # Media queries & breakpoints
│   └── themes.css          # Light/Dark mode variables (future)
│
├── js/
│   ├── main.js             # Core interactions (nav, scroll, observer)
│   ├── animations.js       # Scroll reveals, typing effect, counters
│   ├── projects.js         # Project filtering & detail modal logic
│   └── contact.js          # Form handling, WhatsApp integration
│
├── assets/
│   ├── images/
│   │   ├── profile/        # Professional headshots
│   │   ├── projects/       # Project screenshots (6 projects)
│   │   ├── certificates/   # Certification images
│   │   └── icons/          # Inline SVG icons
│   ├── resume/
│   │   └── mackrine-ruth-resume.pdf
│   └── fonts/              # Local font fallbacks (if needed)
│
├── prd.md                  # Product Requirements Document
├── pages.md                # This file — Site Map & Specifications
├── techstack.md            # Technical stack documentation
└── README.md               # Setup, deployment & editing guide
```

---

## 3. Page Specifications

---

### Page 1: Home (`index.html`)
**Purpose:** First impression. Communicate identity, value proposition, and guide visitors to explore deeper.
**Priority:** High

#### 3.1.1 Hero Section
| Element | Description |
|---------|-------------|
| **Background** | Animated gradient mesh (CSS-only) using primary palette: `#4F46E5` → `#06B6D4` → `#7C3AED`. Subtle floating shapes or particle effect (lightweight CSS animation). |
| **Headline** | H1: "Mackrine Ruth" — Large, bold typography (Playfair Display or similar serif). |
| **Sub-headline** | "Frontend Developer & UI Designer" — Sans-serif (Inter), with **typing effect** cycling through: "Frontend Developer", "UI Designer", "Web Developer", "Problem Solver". |
| **Tagline** | "I build fast, responsive, and visually engaging websites that combine clean design with seamless user experiences." |
| **CTA Buttons** | Primary: "View My Work" → links to `work.html`. Secondary: "Contact Me" → links to `contact.html`. |
| **Scroll Indicator** | Animated down-arrow or "Scroll to explore" cue at bottom of viewport. Fades on scroll. |
| **Profile Image** | Professional headshot (circular or soft-rounded frame) positioned beside or below text on mobile. |

#### 3.1.2 Quick Intro / Value Proposition
| Element | Description |
|---------|-------------|
| **Section Title** | "What I Do" or "Crafting Digital Experiences" |
| **Content** | 3-column grid (collapses to single column on mobile): |
| | 1. **Design** — "Clean, modern UI designs that captivate users and reflect brand identity." |
| | 2. **Develop** — "Responsive, performant websites built with semantic HTML, modern CSS, and vanilla JavaScript." |
| | 3. **Deliver** — "Business-focused solutions that strengthen online presence and drive real results." |
| **Icons** | Inline SVG icons for each pillar (design brush, code brackets, rocket/delivery). |

#### 3.1.3 Featured Projects Preview
| Element | Description |
|---------|-------------|
| **Section Title** | "Selected Work" |
| **Content** | Display 3 featured projects in a horizontal scroll or 3-column grid: AVIKA Boutique, Madhavi Mehandi, TYM Jewellery. |
| **Card Design** | Project thumbnail + project name + category tag + "View Project →" link. |
| **CTA** | "See All Projects" button → `work.html`. |

#### 3.1.4 Skills Snapshot
| Element | Description |
|---------|-------------|
| **Section Title** | "Tech Stack" or "Tools & Technologies" |
| **Content** | Horizontal scrolling marquee or 2-row grid of skill icons/badges: HTML5, CSS3, JavaScript, Responsive Design, Git, Figma, React, Python. |
| **CTA** | "Explore My Skills" → `skills.html`. |

#### 3.1.5 Testimonial / Quote
| Element | Description |
|---------|-------------|
| **Content** | Brief quote or testimonial from TYM Agency supervisor (if available) OR personal mission statement. |
| **Design** | Large serif typography, minimal background, high contrast. |

#### 3.1.6 Footer (Global)
| Element | Description |
|---------|-------------|
| **Brand** | "Mackrine Ruth" + tagline. |
| **Quick Links** | Home, About, Work, Skills, Contact. |
| **Social Links** | GitHub, LinkedIn icons. |
| **Contact** | Email: yovanmackrineruth@gmail.com, Phone: +91 6381649243. |
| **Copyright** | "© 2026 Mackrine Ruth. All rights reserved." |
| **Language Toggle** | EN / TA switch (if bilingual implemented). |

---

### Page 2: About (`about.html`)
**Purpose:** Build trust. Tell your story, show your journey, and humanize your brand.
**Priority:** High

#### 3.2.1 Page Hero
| Element | Description |
|---------|-------------|
| **Background** | Subtle gradient or solid surface color (`#F8FAFC`). |
| **Headline** | H1: "About Me" |
| **Breadcrumb** | Home → About |

#### 3.2.2 Personal Introduction
| Element | Description |
|---------|-------------|
| **Layout** | Two-column: Profile photo (left) + Bio text (right). Stacks on mobile. |
| **Photo** | Professional headshot, possibly with decorative gradient border. |
| **Bio** | Full personal introduction (2-3 paragraphs): |
| | - Origin: Mathur, Thanjavur |
| | - Education: B.Sc. Computer Science, Bishop Heber College, Trichy |
| | - Certifications: Java certification + 8 months of professional courses |
| | - Current role: Frontend Developer Intern at TYM Agency (since March 2026) |
| | - Philosophy: Focus on business impact, not just aesthetics |
| **Personal Touch** | Mention hobbies: Gardening, Mehendi Art. |

#### 3.2.3 Journey / Timeline Section
| Element | Description |
|---------|-------------|
| **Section Title** | "My Journey" |
| **Layout** | Vertical timeline with alternating left/right cards (desktop), single column (mobile). |
| **Timeline Items** | |
| | 1. **School** — Foundation years in Mathur, Thanjavur. |
| | 2. **B.Sc. Computer Science** — Bishop Heber College, Trichy. |
| | 3. **Professional Certification** — 8 months of intensive web development & Java certification. |
| | 4. **Personal Projects** — Self-driven learning and practice projects. |
| | 5. **Internship at TYM Agency** — March 2026 – Present. Real client work, business understanding. |
| | 6. **Building Real Client Websites** — AVIKA, Madhavi Mehandi, TYM Jewellery, TYM Events, TYM Electricals. |
| | 7. **Future Goal** — Full Stack Developer. |
| **Visual** | Gradient line connecting milestones, animated reveal on scroll. |

#### 3.2.4 What Makes Me Different
| Element | Description |
|---------|-------------|
| **Section Title** | "Why Work With Me?" |
| **Content** | 4-6 value propositions in card/grid layout: |
| | - Business-focused development |
| | - Clean UI + performance + accessibility |
| | - Continuous learning mindset |
| | - Understanding of both UX and business goals |
| | - Attention to detail |
| | - Strong willingness to learn and adapt |

#### 3.2.5 Hobbies & Interests (Optional but Recommended)
| Element | Description |
|---------|-------------|
| **Content** | Brief section on Gardening and Mehendi Art — adds personality and memorability. |
| **Design** | Small image gallery or icon-based cards. |

---

### Page 3: Work / Projects (`work.html`)
**Purpose:** Showcase proof of work. The most critical page for converting visitors into employers/clients.
**Priority:** High

#### 3.3.1 Page Hero
| Element | Description |
|---------|-------------|
| **Headline** | H1: "My Work" or "Projects" |
| **Sub-headline** | "A collection of websites and applications I've built — from client projects to personal experiments." |
| **Breadcrumb** | Home → Work |

#### 3.3.2 Project Filter Bar
| Element | Description |
|---------|-------------|
| **Filters** | Category tabs: All, Business Website, Portfolio, Event Management, College Project. |
| **Interaction** | Clicking a filter dynamically shows/hides projects with smooth fade animation. |

#### 3.3.3 Projects Grid
| Element | Description |
|---------|-------------|
| **Layout** | Responsive grid: 3 columns (desktop), 2 columns (tablet), 1 column (mobile). |
| **Card Design** | |
| | - Project thumbnail image (16:9 or 4:3 aspect ratio) |
| | - Project name (H3) |
| | - Category badge |
| | - Short description (1-2 lines) |
| | - Tech stack tags (small pills: HTML5, CSS3, JS, etc.) |
| | - "View Details" button |
| **Hover State** | Image zoom, card lift (shadow), overlay with "View Project" text. |

#### 3.3.4 Project Detail Modal / Page
| Element | Description |
|---------|-------------|
| **Trigger** | Clicking "View Details" on a project card. |
| **Content** | |
| | - Large hero image of the project |
| | - Full project description |
| | - Role: "Frontend Developer" |
| | - Tech stack list |
| | - Key features built (bullet list) |
| | - Screenshots gallery (2-3 images, scrollable) |
| | - Live Demo link (if available) |
| | - GitHub / Source link (if public) |
| | - "Next Project" / "Previous Project" navigation |
| **Close** | X button, click outside, or Escape key. |

#### 3.3.5 Projects Inventory

| # | Project Name | Category | Role | Live | GitHub | Screenshots |
|---|-------------|----------|------|------|--------|-------------|
| 1 | AVIKA Boutique | Business Website | Frontend Developer | ✅ | Public | ✅ |
| 2 | Madhavi Mehandi | Portfolio / Business | Frontend Developer | ✅ | Public | ✅ |
| 3 | TYM Jewellery | Business Website | Frontend Developer | ✅ | Public | ✅ |
| 4 | TYM Events | Event Management | Frontend Developer | ✅ | Public | ✅ |
| 5 | TYM Electricals & Hardware | Business Website | Frontend Developer | ✅ | Public | ✅ |
| 6 | Web Portal for Property Management System | College Project | Frontend Developer | ❌ | Private | ✅ |

---

### Page 4: Skills (`skills.html`)
**Purpose:** Demonstrate technical depth and versatility. Support claims made in other pages.
**Priority:** Medium

#### 3.4.1 Page Hero
| Element | Description |
|---------|-------------|
| **Headline** | H1: "Skills & Expertise" |
| **Sub-headline** | "Technologies and tools I use to bring ideas to life." |
| **Breadcrumb** | Home → Skills |

#### 3.4.2 Technical Skills Grid
| Element | Description |
|---------|-------------|
| **Layout** | Categorized skill cards or progress bars. |
| **Categories** | |
| | **Frontend Core** — HTML5 (Advanced), CSS3 (Advanced), JavaScript ES6+ (Intermediate), Responsive Design (Advanced) |
| | **Frameworks & Libraries** — React (Beginner), Next.js (Beginner) |
| | **Backend & Database** — PHP (Beginner), MySQL (Beginner), Python (Intermediate) |
| | **Design** — Figma / UI Design (Intermediate) |
| | **Tools & Workflow** — Git, GitHub, VS Code, Chrome DevTools |
| | **Productivity** — Canva, Microsoft Office, Google Workspace, ChatGPT/Gemini |
| **Visual** | Skill level indicated by progress bars, dots, or labels (Beginner / Intermediate / Advanced). |

#### 3.4.3 Soft Skills
| Element | Description |
|---------|-------------|
| **Section Title** | "Beyond Code" |
| **Content** | Grid of soft skill cards with icons: |
| | - Problem Solving |
| | - Team Collaboration |
| | - Communication |
| | - Time Management |
| | - Quick Learner |
| | - Adaptability |
| | - Attention to Detail |
| | - Creativity |
| | - Business Requirement Understanding |

#### 3.4.4 Certifications (Optional Section)
| Element | Description |
|---------|-------------|
| **Section Title** | "Certifications" |
| **Content** | List of completed certifications with: |
| | - Certificate name |
| | - Issuing organization |
| | - Date completed |
| | - View certificate link or thumbnail image |
| **Current** | Java Certification (confirmed). Others from 8-month course period to be added. |

#### 3.4.5 Learning Path / Future Goals
| Element | Description |
|---------|-------------|
| **Content** | Brief statement on current learning focus (React, Next.js, Full Stack path). |
| **Visual** | Roadmap-style graphic or simple text block. |

---

### Page 5: Contact (`contact.html`)
**Purpose:** Convert interest into action. Make it effortless for visitors to reach out.
**Priority:** High

#### 3.5.1 Page Hero
| Element | Description |
|---------|-------------|
| **Headline** | H1: "Let's Work Together" |
| **Sub-headline** | "Have a project in mind or want to discuss opportunities? I'd love to hear from you." |
| **Breadcrumb** | Home → Contact |

#### 3.5.2 Contact Methods Grid
| Element | Description |
|---------|-------------|
| **Layout** | 2-4 contact cards in a row (stacks on mobile). |
| **Cards** | |
| | **Email** — yovanmackrineruth@gmail.com |
| | **Phone / WhatsApp** — +91 6381649243 |
| | **LinkedIn** — linkedin.com/in/mackrine-ruth-5611002bb |
| | **GitHub** — github.com/macky-2004 |
| **Design** | Icon + label + value + "Connect" or "Copy" action. |

#### 3.5.3 Contact Form
| Element | Description |
|---------|-------------|
| **Fields** | |
| | - Name (required) |
| | - Email (required) |
| | - Subject (dropdown: Job Opportunity, Freelance Project, Collaboration, General Inquiry) |
| | - Message (textarea, required) |
| | - Submit button: "Send Message" |
| **Behavior** | Form submission redirects to WhatsApp with pre-filled message OR uses a form service (Formspree, Netlify Forms) if no backend. |
| **Validation** | Client-side validation for required fields and email format. |
| **Success State** | Thank you message + prompt to use WhatsApp for faster response. |

#### 3.5.4 Resume Download CTA
| Element | Description |
|---------|-------------|
| **Content** | Prominent card/button: "Download My Resume" |
| **File** | `mackrine-ruth-resume.pdf` from `/assets/resume/`. |
| **Design** | PDF icon + "Get my full CV" text. |

#### 3.5.5 Floating WhatsApp Button (Global)
| Element | Description |
|---------|-------------|
| **Position** | Fixed bottom-right corner across ALL pages. |
| **Design** | WhatsApp green circular button with chat icon. |
| **Action** | Opens `https://wa.me/916381649243?text=Hello%20Mackrine...` |
| **Tooltip** | "Chat on WhatsApp" on hover. |

---

## 4. Global Components & Features

### 4.1 Navigation Header
| Feature | Specification |
|---------|--------------|
| **Position** | Fixed top, full width. |
| **Initial State** | Transparent background over hero. |
| **Scroll State** | Glassmorphism effect (`backdrop-filter: blur(20px)`) + subtle shadow + solid background (`rgba(255,255,255,0.9)` or dark variant). |
| **Logo** | "Mackrine Ruth" text logo (serif font). |
| **Menu Items** | Home, About, Work, Skills, Contact |
| **Mobile** | Hamburger menu → slide-out drawer with overlay. Body scroll locked when open. |
| **Active State** | Current page highlighted in nav. |

### 4.2 Mobile Navigation Drawer
| Feature | Specification |
|---------|--------------|
| **Animation** | Slide in from right. |
| **Background** | Semi-transparent overlay behind drawer. |
| **Content** | Same links as desktop + contact info + social icons. |
| **Close** | X button, click overlay, or swipe. |

### 4.3 Scroll-Triggered Animations
| Feature | Specification |
|---------|--------------|
| **Technology** | IntersectionObserver API (vanilla JS). |
| **Effect** | Elements fade in + translate up (`opacity: 0 → 1`, `translateY: 30px → 0`). |
| **Trigger** | When element enters viewport (threshold: 0.1–0.2). |
| **Performance** | Unobserve after animation fires. |
| **FOIC Prevention** | Check visibility on load for above-fold elements. |

### 4.4 Typing Effect (Hero Only)
| Feature | Specification |
|---------|--------------|
| **Text** | Cycles through: "Frontend Developer", "UI Designer", "Web Developer", "Problem Solver". |
| **Speed** | Typing: 100ms/char, Deleting: 50ms/char, Pause: 2000ms. |
| **Cursor** | Blinking pipe character (`\|`). |

### 4.5 Back to Top Button
| Feature | Specification |
|---------|--------------|
| **Trigger** | Appears after scrolling 300px. |
| **Position** | Fixed bottom-left (opposite WhatsApp button). |
| **Action** | Smooth scroll to top. |

### 4.6 Dark / Light Mode Toggle (Future Enhancement)
| Feature | Specification |
|---------|--------------|
| **Toggle** | Sun/moon icon in header. |
| **Storage** | `localStorage` preference. |
| **Default** | Light mode. |

### 4.7 Language Toggle (Future Enhancement)
| Feature | Specification |
|---------|--------------|
| **Toggle** | EN / TA switch in header or footer. |
| **Implementation** | Data attributes or separate content blocks. |
| **Priority** | Phase 2 — English first. |

---

## 5. Responsive Breakpoints

| Breakpoint | Width | Layout Adjustments |
|-----------|-------|-------------------|
| Mobile | < 576px | Single column, hamburger nav, stacked sections, reduced padding |
| Tablet | 576px – 991px | 2-column grids, medium padding, simplified animations |
| Desktop | 992px+ | Full layout, 3-column grids, all animations active |
| Large Desktop | 1200px+ | Max-width container centered, enhanced spacing |

---

## 6. SEO & Meta Requirements (Per Page)

| Page | Title Tag | Meta Description |
|------|-----------|-----------------|
| Home | Mackrine Ruth — Frontend Developer & UI Designer | Portfolio of Mackrine Ruth, a Frontend Developer and UI Enthusiast from Thanjavur specializing in responsive, user-friendly, and business-focused websites. |
| About | About — Mackrine Ruth | Learn about Mackrine Ruth's journey from B.Sc. Computer Science to Frontend Developer Intern at TYM Agency. |
| Work | Projects — Mackrine Ruth | Explore Mackrine Ruth's portfolio of business websites, portfolios, and web applications built with modern technologies. |
| Skills | Skills — Mackrine Ruth | Discover the technical and soft skills of Mackrine Ruth, Frontend Developer specializing in HTML5, CSS3, JavaScript, and UI Design. |
| Contact | Contact — Mackrine Ruth | Get in touch with Mackrine Ruth for job opportunities, freelance projects, or collaborations. |

---

## 7. Performance & Accessibility Checklist

- [ ] Semantic HTML5 structure (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`)
- [ ] Single H1 per page
- [ ] Alt text on all images
- [ ] ARIA labels on interactive elements
- [ ] Keyboard-navigable menu and modals
- [ ] Focus indicators on all interactive elements
- [ ] Color contrast ratio ≥ 4.5:1 for body text
- [ ] Lazy loading for below-fold images
- [ ] Minified CSS and JS for production
- [ ] Preconnect to Google Fonts CDN
- [ ] Inline critical CSS (optional optimization)
- [ ] No render-blocking external libraries

---

## 8. Asset Requirements Summary

| Asset Type | Count | Location | Status |
|-----------|-------|----------|--------|
| Professional Headshot | 1-2 | `/assets/images/profile/` | ✅ Available |
| Project Screenshots | 15-18 (3 per project) | `/assets/images/projects/` | ✅ Available |
| Certificate Images | 2-5 | `/assets/images/certificates/` | ✅ Available |
| Resume PDF | 1 | `/assets/resume/` | ✅ Available |
| Inline SVG Icons | ~20 | Embedded in HTML/CSS | 🔄 To be created |
| Favicon | 1 | Root or `/assets/images/` | 🔄 To be created |

---

## 9. Future Enhancements (Phase 2)

| Feature | Description | Priority |
|---------|-------------|----------|
| Blog Section | `/blog.html` — Share learnings, tutorials, project case studies. | Medium |
| Testimonials Page | Dedicated page for client/mentor testimonials. | Low |
| Dark Mode | Full theme toggle with `localStorage` persistence. | Medium |
| Tamil Language | Full Tamil translation of all content. | Medium |
| Project Case Studies | Deep-dive pages for each project with process, challenges, solutions. | Medium |
| Analytics | Google Analytics or Plausible integration. | Low |
| Custom Domain | Deploy to `mackrineruth.com` or similar. | Low |

---

## 10. Navigation Flow Diagram

```
                    ┌─────────────┐
                    │   index.html │
                    │   (Home)     │
                    └──────┬──────┘
                           │
        ┌──────────────────┼──────────────────┐
        │                  │                  │
        ▼                  ▼                  ▼
   ┌─────────┐      ┌──────────┐      ┌──────────┐
   │ about   │      │  work    │      │ skills   │
   │.html    │      │ .html    │      │ .html    │
   └────┬────┘      └────┬─────┘      └────┬─────┘
        │                │                 │
        │                ▼                 │
        │         ┌─────────────┐          │
        │         │ Project     │          │
        │         │ Detail      │          │
        │         │ (Modal)     │          │
        │         └─────────────┘          │
        │                                  │
        └──────────────────┬───────────────┘
                           │
                           ▼
                    ┌─────────────┐
                    │ contact.html│
                    │ (Contact)   │
                    └─────────────┘
```

---

*End of Document*
"""


