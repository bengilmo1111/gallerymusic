# Claude Code Prompt: Gallery Music Centre Website Rebuild

## Project Overview

Build a modern, mobile-friendly static website for **Gallery Music Centre** — a community music school in Lower Hutt, New Zealand that operates on Saturday mornings at Dyer Street School. The site will be hosted on GitHub Pages.

The website needs to encourage new student enrolments, reduce admin queries from parents by surfacing key information (fees, schedules, FAQs), and provide a dedicated page for the community orchestra (which targets adults and needs separate promotion).

## Tech Stack

- **Pure HTML, CSS, and JavaScript** (no build tools, no frameworks — must work on GitHub Pages as static files)
- Use a **CSS custom property design system** for consistent colours, spacing, and typography
- Mobile-first responsive design with breakpoints at 640px, 768px, and 1024px
- Use Google Fonts (suggest: Inter or similar clean sans-serif for body, a slightly more characterful font for headings)
- All pages should share a common `header`, `footer`, and `nav` via a simple JS include or just duplicated HTML

## File Structure

```
/
├── index.html          # Home page
├── classes.html         # Classes & FAQ
├── about.html           # About, committee, location
├── enrol.html           # Enrolment form
├── orchestra.html       # Community Orchestra (adults)
├── css/
│   └── style.css        # All styles
├── js/
│   └── main.js          # Nav toggle, FAQ accordion, form validation
├── images/              # Placeholder images (use placeholder services or simple SVGs)
├── README.md            # GitHub Pages deployment instructions
└── CNAME                # Optional, leave empty with a comment explaining its use
```

## Design Direction

All visual decisions — colour, typography, shape, motion, UI — are defined in **`art_direction.md`**, the single source of truth for how the site looks and feels. Key points summarised here:

- **Art direction document**: See `art_direction.md` for the full creative brief, including palette hex codes, typography specs, shape language, motion philosophy, and anti-targets.
- **Colour palette**: Hutt River Teal (`#1a5c6b`) dominant, Tussock Gold (`#d4982a`) accent, Warm Chalk (`#f7f7f5`) backgrounds, Evening Karaka (`#1a2a30`) dark sections, Charcoal Ink (`#2d2d2d`) text. Forbidden: saturated purple/violet, pure black.
- **Typography**: Nunito (700, 800) for headings — friendly rounded terminals. Inter (400–600) for body — clean and legible. No additional fonts.
- **Tone**: Friendly, welcoming, community-focused. Use "kia ora" and NZ-appropriate language where it fits naturally. Parents are the primary audience; children attend but the site speaks to adults.
- **Imagery**: Phase 1 minimises images to speed up release. Emoji instrument icons are an explicit Phase 1 placeholder — to be replaced with consistent SVG icons or photography in Phase 2. Use placeholder images (https://placehold.co or inline SVG) showing dimensions and descriptions of what real photos should be. Include alt text descriptions.
- **Visual style**: Softened rectangles (10px radius standard), generous whitespace, minimal flat shadows. No gradients except the hero section. No decorative animation. Think warm community hall, not SaaS startup. See art_direction.md Anti-Targets for what the site must NEVER look like.

---

## Page Specifications

### 1. Home Page (`index.html`)

**Purpose**: First impression — hook parents, answer the "what is this?" question fast, and drive enrolment.

**Sections (in order):**

1. **Hero Section**
   - Headline: "Affordable Music Lessons for Hutt Valley Kids"
   - Subhead: "Group music classes every Saturday morning at Dyer Street School, Lower Hutt. Subsidised by the Ministry of Education."
   - Primary CTA button: "Enrol Your Child" → links to enrol.html
   - Secondary CTA: "View Our Classes" → links to classes.html
   - Background: placeholder image or gradient with musical motif

2. **Key Stats / Trust Bar**
   - Three or four stat cards in a row: e.g., "10+ Instruments", "$210/year", "Saturday Mornings", "Qualified Teachers"
   - Keep it scannable

3. **What We Offer (brief)**
   - Short paragraph about Gallery Music Centre being part of the Ministry of Education's out-of-hours programme
   - Grid of instrument icons/cards: Violin, Cello, Keyboard, Guitar, Flute, Recorder, Drums, Trumpet, Choir (free!), Music Basics
   - Each card links to classes.html

4. **How It Works**
   - Three-step visual: 1. Choose an instrument → 2. Enrol online → 3. Turn up Saturday morning
   - Simple, parent-friendly

5. **Term Calendar**
   - Text-based calendar showing the current/upcoming year's term dates
   - Use this structure (placeholder — instruct the admin to update):
     ```
     Term 1 (8 lessons): 8 Feb – 5 Apr
     Term 2 (8 lessons): 3 May – 28 Jun
     Term 3 (9 lessons): 26 Jul – 20 Sep (includes Annual Concert)
     Term 4 (8 lessons): 18 Oct – 6 Dec
     ```
   - Note: "No classes on public holiday weekends — see full calendar for details"
   - Style as a simple, clean table or card layout

6. **Testimonial / Social Proof**
   - Placeholder for 2–3 parent testimonials (use Lorem Ipsum with a note to replace)
   - Simple quote card design

7. **CTA Banner**
   - "Ready to get started? Enrol your child today."
   - Button: "Go to Enrolment Form" → enrol.html
   - Mention: "Questions? Email administration@gallerymusic.org or call 021-177-0072"

8. **Footer**
   - Logo / name
   - Address: Dyer Street School, 9 Dyer Street, Epuni, Lower Hutt 5011
   - Email: administration@gallerymusic.org
   - Phone: 021-177-0072
   - Facebook link (https://www.facebook.com/gallerymusiccentre)
   - "Part of the Ministry of Education's Creatives in Schools / Out-of-Hours Music Programme"
   - Copyright notice

---

### 2. Classes Page (`classes.html`)

**Purpose**: Answer all the questions parents have before they contact admin. Reduce email/phone load.

**Sections:**

1. **Page Header**
   - Title: "Our Classes"
   - Brief intro: group music lessons for primary and intermediate school-aged children, Saturday mornings

2. **Instrument Cards Grid**
   - One card per class offering. Each card shows:
     - Instrument name
     - Age requirement
     - A placeholder icon or image
     - Brief description (1–2 sentences)
   - Classes to include:
     - **Music Basics** — Ages 5–7. A pre-instrumental programme introducing children to music fundamentals. (Lorem ipsum for additional detail.)
     - **Violin** — Ages 7+. (Lorem ipsum detail.)
     - **Cello** — Ages 7+. Cellos available for hire ($100/year). (Lorem ipsum detail.)
     - **Keyboard** — Ages 7+. (Lorem ipsum detail. Note: waitlists may apply.)
     - **Guitar** — Ages 7+. (Lorem ipsum detail. Note: waitlists may apply.)
     - **Flute** — Ages 10+. (Lorem ipsum detail.)
     - **Recorder** — Ages 6.5+. (Lorem ipsum detail.)
     - **Trumpet** — Ages 8+. (Lorem ipsum detail.)
     - **Drums** — Ages 7+. (Lorem ipsum detail.)
     - **Choir** — Free! Open to all Gallery students. (Lorem ipsum detail.)
     - **Ensemble** — Requires approx. 2 years prior tuition. (Lorem ipsum detail.)
     - **Orchestra** — Requires approx. 3 years prior tuition. Open to all ages. Link to orchestra.html for the community orchestra.

3. **FAQ Accordion**
   Build as a proper accessible accordion (use `<details>/<summary>` or JS toggle with ARIA attributes).

   Questions to include:
   - **How much do classes cost?**
     "The annual contribution is $210 per class for the year. Classes are heavily subsidised by the Ministry of Education. Instrument hire is additional: violins $80/year, cellos $100/year."
   - **When and where are classes held?**
     "All classes are on Saturday mornings at Dyer Street School, 10 Gordon Street, Lower Hutt. Each class is 30 minutes long."
   - **What age does my child need to be?**
     "Most instrument classes start at age 7. Music Basics is for ages 5–7. Recorder starts at 6.5, trumpet at 8+, and flute at around 10+."
   - **Does my child need their own instrument?**
     "Students are expected to have access to an instrument at home and bring it to class each week. Gallery Music Centre has violins available for hire ($80/year) and cellos ($100/year). Tutors can advise on purchasing instruments."
   - **How are class placements decided?**
     "Placements are determined by tutors and the Gallery Coordinator. Priority goes to students advancing from our pre-instrumental programme, then to siblings of existing students and families from Dyer Street School."
   - **What about music books and materials?**
     "Tutor books are chosen by each tutor and are usually available from them directly or from local music stores. This is an additional cost beyond the class contribution."
   - **Is there a waitlist?**
     "Some classes (especially keyboard and guitar) have significant waitlists. Please contact us to be added to a waitlist."
   - **Can my child learn more than one instrument?**
     "Students wishing to learn more than one instrument will be placed in additional classes if spaces are available."
   - **What is the annual concert?**
     "Gallery holds an annual concert (usually in Term 3) where students perform for family and friends. It's a highlight of the year! (Lorem ipsum for more detail.)"
   - **How do I enrol?**
     "Visit our enrolment page → enrol.html or contact us at administration@gallerymusic.org if you have more questions"

4. **CTA**
   - "Found the right class? Enrol now!" → enrol.html

---

### 3. About Page (`about.html`)

**Purpose**: Build trust, show the organisation's community roots, provide practical info.

**Sections:**

1. **Page Header**
   - Title: "About Gallery Music Centre"

2. **Our Story**
   - Paragraph explaining that Gallery Music Centre is part of the Ministry of Education's out-of-hours music programme
   - Operates at Dyer Street School, Lower Hutt
   - Run by a volunteer committee
   - Teachers are highly qualified, dedicated professionals
   - Subsidised classes keep costs very low
   - Use Lorem Ipsum to pad out the history section with a note: "[Replace with actual history — founding year, milestones, etc.]"

3. **Our Teachers**
   - Placeholder section for teacher bios
   - Grid of placeholder cards (name + instrument + short bio)
   - Include 4–6 placeholder entries. Example real reference: "Alex Hoare — Cello. BMus(Hons) from the NZ School of Music." (Use Lorem Ipsum for others with a note to replace.)

4. **The Committee**
   - Explain that Gallery Music Centre is governed by a volunteer committee
   - "If you are willing to help ensure Gallery continues to offer musical education at minimum cost, please consider joining the committee."
   - Placeholder list of committee roles: Chairperson, Secretary, Treasurer, Gallery Coordinator, General Committee Members
   - Use placeholder names with a note to replace
   - Include the AGM info: "Our Annual General Meeting is held each year — details are announced via email and Facebook."

5. **Location & Contact**
   - Address: Dyer Street School, 9 Dyer Street, Epuni, Lower Hutt 5011
   - Embedded Google Maps iframe (use coordinates: -41.20184056487011, 174.935894086508 approximately for Dyer Street School, Lower Hutt)
   - Email: administration@gallerymusic.org
   - Phone: 021-177-0072
   - Facebook: https://www.facebook.com/gallerymusiccentre

6. **Acknowledgement**
   - "Gallery Music Centre is grateful to Dyer Street School for hosting our classes. 
   - "Our programme is subsidised by the Ministry of Education."

---

### 4. Enrolment Page (`enrol.html`)

**Purpose**: Capture enrolment interest. This is a **static form** that submits via a free service (Formspree, Getform, or similar) or `mailto:` link.

**Sections:**

1. **Page Header**
   - Title: "Enrol Your Child"
   - Brief note: "Fill in the form below to register your interest. We'll be in touch to confirm placement and next steps."

2. **Important Info Box**
   - Highlight box with key details:
     - Annual contribution: $210 per class
     - Classes: Saturday mornings, 30 minutes each
     - Location: Dyer Street School, Lower Hutt
     - "Existing students: please re-enrol via ClubHub each year."

3. **Enrolment Form**
   Fields:
   - Parent/Guardian name (required)
   - Email (required)
   - Phone (required)
   - Student name (required)
   - Student date of birth (required)
   - Student school (text field)
   - Preferred instrument (dropdown: Music Basics, Violin, Cello, Keyboard, Guitar, Flute, Recorder, Trumpet, Drums, Choir, Ensemble, Orchestra)
   - Second preference instrument (optional dropdown, same options)
   - Has your child had any prior music tuition? (Yes/No radio + text area for details)
   - Does your child have access to an instrument at home? (Yes/No radio)
   - Any additional information (textarea)
   - Submit button

   **Form handling**: Use a mailto: administration@gallerymusic.org as the form action. 

4. **Client-side validation**
   - Required field validation
   - Email format validation
   - Show inline error messages
   - Disable submit button until required fields are filled
   - Style the form with clear labels, good spacing, and obvious focus states

5. **After-submit**
   - Show a thank-you message (JS-based, hide form and show message)
   - "Thank you! We've received your enrolment. We'll be in touch soon. If you have questions, contact administration@gallerymusic.org"

---

### 5. Orchestra Page (`orchestra.html`)

**Purpose**: Promote the community orchestra separately — this targets **adults** and older players, not just school kids.

**Sections:**

1. **Hero Section**
   - Headline: "Gallery Community Orchestra"
   - Subhead: "Open to all ages — join our community orchestra and make music together."
   - This should feel distinct from the kids' classes — slightly more sophisticated visual treatment while staying in the same design system

2. **About the Orchestra**
   - The Gallery Orchestra is open to all ages (unlike other classes which are restricted to primary/intermediate students)
   - Requires approximately 3 years of prior tuition on your instrument
   - Meets on Saturday mornings alongside the children's classes
   - Lorem Ipsum for additional details about repertoire, conductor, what a typical rehearsal looks like
   - Note: "[Replace with details about the orchestra conductor, current repertoire, and upcoming performances]"

3. **Who Is It For?**
   - Adults returning to music after a break
   - Older students who've progressed through Gallery's programme
   - Community musicians looking for a friendly ensemble
   - No audition required (confirm this with admin — use placeholder text noting this should be verified)

4. **Practical Details**
   - When: Saturday mornings (specify time slot or note as TBC)
   - Where: Dyer Street School, 10 Gordon Street, Lower Hutt
   - Cost: $210/year (same as other classes — confirm and update)
   - What to bring: Your instrument, a music stand if you have one

5. **How to Join**
   - Contact: administration@gallerymusic.org or 021-177-0072
   - Or use the enrolment form (link to enrol.html)
   - "Come along to a rehearsal and see if it's for you!"

6. **CTA**
   - "Interested? Get in touch or come along to a Saturday morning session."

---

## Shared Components

### Navigation
- Sticky/fixed top nav on desktop, hamburger menu on mobile
- Logo/name on left, nav links on right
- Links: Home, Classes, Orchestra, About, Enrol (styled as a button/CTA)
- Active page indicator
- Accessible: keyboard navigable, proper ARIA labels on mobile menu

### Footer
- Consistent across all pages (see Home page footer spec above)

### Mobile Responsiveness
- Nav collapses to hamburger menu below 768px
- All grids collapse to single column on mobile
- Touch-friendly tap targets (min 44px)
- Font sizes scale appropriately
- Form inputs are full-width on mobile
- Test that the FAQ accordion works well on touch devices

---

## Accessibility Requirements

- Semantic HTML5 (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`)
- All images have descriptive alt text
- Colour contrast meets WCAG AA (4.5:1 for body text)
- Focus indicators visible on all interactive elements
- FAQ accordion is keyboard accessible
- Form labels properly associated with inputs
- Skip-to-content link
- `lang="en-NZ"` on html element

---

## README.md — GitHub Pages Deployment

Create a README.md with:

1. **Project description**: "Static website for Gallery Music Centre, Lower Hutt, NZ"
2. **Local development**: "Open index.html in a browser, or use a local server: `npx serve .` or `python -m http.server 8000`"
3. **Deploying to GitHub Pages** — step by step:
   - Create a GitHub repository
   - Push the code to the `main` branch
   - Go to Settings → Pages
   - Set source to "Deploy from a branch", select `main` and `/ (root)`
   - Site will be live at `https://yourusername.github.io/repository-name/`
   - To use a custom domain (gallerymusic.org):
     - Add a CNAME file containing `gallerymusic.org`
     - In your domain registrar, add a CNAME record pointing to `yourusername.github.io`
     - Or use A records pointing to GitHub's IP addresses (list them)
     - Enable "Enforce HTTPS" in GitHub Pages settings
4. **Updating content**: Brief guide on which files to edit for common changes (term dates, fees, teacher bios, etc.)
5. **Form setup**: Instructions for setting up Formspree or alternative form backend

---

## Content Notes for the Developer

- Where real content from the current gallerymusic.org site is available, use it. Key facts:
  - Location: Dyer Street School, 9 Dyer Street, Epuni, Lower Hutt 5011
  - Email: administration@gallerymusic.org
  - Phone: 021-177-0072
  - Facebook: https://www.facebook.com/gallerymusiccentre
  - Annual fee: $210/year per class
  - Violin hire: $80/year, Cello hire: $100/year
  - Classes: 30 minutes, Saturday mornings
  - Part of Ministry of Education out-of-hours programme
  - Governed by volunteer committee
  - Uses ClubHub for admin/payments (mention but don't deep-link)
  - Instruments offered: Music Basics (5-7), Trumpet (8+), Cello, Violin, Flute (10+), Recorder (6.5+), Drums, Guitar, Keyboard, Choir (free), Ensemble (2yr experience), Orchestra (3yr experience, open age)
- Where content is unknown or needs to be confirmed, use Lorem Ipsum and add an HTML comment: `<!-- TODO: Replace with actual content -->`
- All placeholder images should include a description of what the real image should be

---

## Quality Checklist

Before finishing, verify:
- [ ] All 5 pages render correctly
- [ ] Navigation works on all pages (including mobile hamburger)
- [ ] All internal links work
- [ ] Form validation works (client-side)
- [ ] FAQ accordion expands/collapses properly
- [ ] Site looks good on mobile (320px), tablet (768px), and desktop (1024px+)
- [ ] Colour contrast passes WCAG AA
- [ ] No horizontal scrolling on any viewport
- [ ] Footer is consistent across all pages
- [ ] README deployment instructions are complete and accurate
- [ ] All placeholder content is clearly marked with TODO comments