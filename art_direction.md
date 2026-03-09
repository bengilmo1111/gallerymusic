# Gallery Music Centre — Art Direction

## Vibe
A Saturday morning in a warm community hall — sunlight through high windows, the sound of a cello tuning up down the corridor, the smell of instant coffee from the parents' table. Grounded, inviting, unpretentious, and unmistakably Aotearoa.

## Emotional Core
This is about *accessible joy* — the radical idea that every kid in the Hutt Valley deserves to make music, regardless of their family's income. The central tension is between **humble means and genuine quality**: volunteer-run and subsidised, yet staffed by serious musicians who care deeply. The site must feel trustworthy enough for a parent to hand over their child on a Saturday morning, and warm enough that the child wants to come back.

## Visual References
- **Robin White's screen prints** — Flat, warm, distinctly New Zealand compositions. Domestic scenes treated with quiet dignity. The palette and shape language of everyday Aotearoa elevated without being precious.
- **New Zealand community hall noticeboards** — The honest, slightly imperfect warmth of hand-pinned flyers, well-worn timber, and morning tea tables. Not rustic-chic — genuinely community.
- **The Hutt River on a clear morning** — Deep teal-green water against grey-green riverbank bush and golden tussock. This IS the colour palette.
- **Saul Bass title sequences** — Bold, confident typography paired with simple graphic shapes. Proves you don't need complexity to have impact. Musical motifs should have this level of graphic restraint.
- **The interior of a school music room** — Instrument cases stacked along walls, music stands at angles, chairs in imperfect circles. Organised chaos with warmth.

## Color

### Palette
- **Dominant (60%): Hutt River Teal** — `#1a5c6b` — Hero backgrounds, header accents, primary links, section anchors. The colour of deep water on a Wellington morning. Grounded, trustworthy, not cold.
- **Secondary (25%): Tussock Gold** — `#d4982a` — CTA buttons, accent highlights, stat numbers, badges. The warm gold of dried grass in late-summer Hutt Valley. Catches the eye without shouting.
- **Neutral (10%): Warm Chalk** — `#f7f7f5` — Alternate section backgrounds, card surfaces. Not sterile white — the barely-there warmth of chalk on a music room blackboard.
- **Background (5%): Evening Karaka** — `#1a2a30` — Footer, dark sections. The deep blue-green of native bush at dusk. Anchors the bottom of every page.
- **Text: Charcoal Ink** — `#2d2d2d` — Body text. Dense enough to read easily, warm enough to avoid harshness.
- **Text Light: Pencil Grey** — `#5a5a5a` — Secondary text, descriptions, captions.

### Rules
- The teal-to-gold relationship IS the brand. Every page must feature both prominently.
- White (`#ffffff`) is used for card surfaces and nav background ONLY — never as a section background. Use Warm Chalk for breathing room.
- **FORBIDDEN: Saturated purple or violet.** It pulls the palette toward corporate tech. Also avoid pure black (`#000000`) — always use Charcoal Ink.
- The orchestra page uses the same palette but shifts the dominant balance: more Evening Karaka and less Tussock Gold, achieving sophistication through restraint rather than new colours.

## Typography
- **Primary: Nunito (700, 800)** — All headings, nav logo, stat values. Rounded terminals give friendliness without childishness. Rendered crisp, never outlined or shadowed. ALWAYS sentence case for headings (not ALL CAPS).
- **Secondary: Inter (400, 500, 600)** — Body text, labels, form fields, navigation links, footer. Clean and highly legible at all sizes. Letter-spacing: normal. Never condensed.
- **Text behavior:** Text is static — no typewriter effects, no fade-ins, no animated text. Content appears instantly and confidently. The only motion is in interactive elements (nav, accordion, hover states).

## Shape Language
The dominant geometry is **softened rectangles** — rounded corners (`10px` standard, `16px` for banners, `6px` for small elements) that feel approachable without being bubbly. Cards, buttons, and containers all share this vocabulary. Circles appear ONLY for avatars, step numbers, and the logo — they are punctuation, not structure. There are NO sharp angles, triangles, or diagonal lines anywhere in the design. The density is **generous and open** — ample whitespace between sections, breathing room inside cards. Nothing feels crowded. Think of how a good music teacher arranges chairs: enough space for everyone to move their bow arm.

## Lighting & Atmosphere
The site has **flat, even lighting** — no dramatic shadows, no gradients within content areas. The hero sections use a simple two-stop linear gradient (teal to dark teal at 135deg) as the only gradient in the system. Shadows are minimal and functional: `0 1px 3px rgba(0,0,0,0.08)` on cards at rest, `0 4px 12px rgba(0,0,0,0.1)` on hover. No bloom, no glow, no blur effects, no glassmorphism. The atmosphere is clear morning light — everything is legible, nothing is obscured. Contrast is moderate: high enough for WCAG AA (4.5:1 minimum for body text) but not so punchy that it feels aggressive.

## Motion
**Restrained and purposeful.** Transitions are `0.2s ease` — fast enough to feel responsive, slow enough to be noticed. Hover states lift cards by `2px` with a shadow increase — subtle, physical, like picking up a sheet of music. The mobile menu slides in from the right at `0.3s ease`. The FAQ accordion uses native `<details>` with no custom animation — it opens and closes instantly, honestly. Idle state: the page is completely still. No floating particles, no pulsing elements, no parallax. Stillness communicates confidence. **NEVER add decorative animation that doesn't serve a user interaction.**

## UI Philosophy
**Visible and honest.** The nav is always present (sticky top), the footer is always comprehensive. No hidden menus on desktop, no mystery-meat navigation. Interactive elements are obvious: buttons have strong fill colours with clear labels, links are teal and underline on hover, form fields have visible borders that intensify on focus (`0 0 0 3px rgba(26,92,107,0.15)`). The enrol CTA in the nav is the only element styled as a button in the navigation — it is the most important action on the site and should be unmissable. Information hierarchy: the parent scanning for "how much / when / where" should find answers within 3 seconds on any page.

## Anti-Targets
- **NEVER a SaaS startup landing page.** No hero background videos, no animated counters, no "trusted by 10,000+ companies" social proof bars. This is a community school, not a product.
- **NEVER childish or patronizing.** No cartoon mascots, no rainbow colours, no Comic Sans energy. Children attend but parents are the audience.
- **NEVER a private music school aesthetic.** No grand piano hero images, no black-and-gold "premium" feel. This is $210/year, subsidised, and proud of it.
- **NEVER template-generic.** No stock photo grids, no "Lorem Ipsum" visible in production, no Bootstrap/default component appearance. Every element should feel chosen, not generated.
- **NEVER cluttered.** No sidebars, no competing CTAs, no walls of text without whitespace. If a section feels crowded, remove content — don't shrink spacing.

## Implementation Notes
- **CSS custom properties are the single source of truth.** All colours, spacing, radii, and shadows reference variables defined in `:root`. Changing the palette means changing ~10 lines, not hunting through the stylesheet.
- **Emoji instrument icons are a Phase 1 placeholder.** They work surprisingly well at card size but MUST be replaced with consistent SVG icons or photos in Phase 2. When replaced, maintain the 48x48px icon container with the teal-light background circle.
- **The hero gradient is the ONLY gradient.** `linear-gradient(135deg, #1a5c6b 0%, #134a56 100%)`. The orchestra hero variant uses `#1a2a30` to `#134a56` for a darker, more sophisticated feel. No other gradients anywhere.
- **Border: `1px solid #e0e0e0`** is the universal card/component border. It's subtle enough to define edges without creating visual noise. Never use coloured borders on content cards.
- **Touch targets: minimum 44px.** All buttons, nav links, accordion summaries, and form elements meet this minimum. On mobile, form inputs go full-width and buttons get `padding: 1rem` for comfortable tapping.
- **Google Fonts load two families (Inter 400-700, Nunito 700-800).** Keep this lean — do not add weights or families. The font link uses `display=swap` to prevent invisible text during load.
