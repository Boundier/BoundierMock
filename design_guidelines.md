# Boundier Prototype/Demo - Design Guidelines

## Design Approach

**Selected Approach:** Hybrid - Design System with Wellness App Inspiration

**Rationale:** Boundier is a digital wellbeing tool requiring clear data presentation and intuitive interactions (utility-focused), but as a prototype/demo, it must visually communicate trust, calm, and cognitive clarity to effectively pitch the concept.

**References:**
- Apple Screen Time: Clean data visualization, calming aesthetics
- Headspace: Wellness-focused color psychology, friendly interactions
- Stripe Dashboard: Clear information hierarchy, precise data displays
- Arc Browser: Modern interface patterns, thoughtful overlays

**Core Principles:**
1. Cognitive Clarity: Reduce visual noise to honor the app's purpose
2. Trustworthy Aesthetics: Professional yet approachable
3. Mindful Interactions: Purposeful animations that don't distract
4. Data Transparency: Clear visualization of content analysis

---

## Color Palette

**Dark Mode (Primary):**
- Background Base: 220 15% 8%
- Surface Elevated: 220 12% 12%
- Surface Interactive: 220 10% 16%
- Primary Brand: 200 85% 55% (calming blue)
- Success/Safe: 145 65% 50% (mindful green)
- Warning/Caution: 35 85% 60% (warm amber)
- Danger/Manipulative: 355 75% 55% (alert red)
- Text Primary: 220 10% 95%
- Text Secondary: 220 8% 70%
- Text Tertiary: 220 6% 50%

**Light Mode (Secondary):**
- Background Base: 220 20% 98%
- Surface Elevated: 0 0% 100%
- Primary Brand: 200 75% 45%
- Text Primary: 220 15% 15%
- Text Secondary: 220 10% 40%

**Accent Colors:**
- Focus Purple: 260 70% 60% (for overlay indicators)
- Neutral Gray: 220 5% 35%

---

## Typography

**Font Families:**
- Primary: 'Inter' (Google Fonts) - UI, data, body text
- Display: 'Space Grotesk' (Google Fonts) - headings, emphasis

**Type Scale:**
- Hero/Display: 3.5rem (56px), font-weight 700, Space Grotesk
- H1: 2.5rem (40px), font-weight 600, Space Grotesk
- H2: 2rem (32px), font-weight 600, Inter
- H3: 1.5rem (24px), font-weight 600, Inter
- Body Large: 1.125rem (18px), font-weight 400, Inter
- Body: 1rem (16px), font-weight 400, Inter
- Small: 0.875rem (14px), font-weight 400, Inter
- Caption: 0.75rem (12px), font-weight 500, Inter, letter-spacing 0.5px

**Line Heights:**
- Headings: 1.2
- Body: 1.6
- Captions: 1.4

---

## Layout System

**Spacing Scale:** Use Tailwind units of 2, 4, 6, 8, 12, 16, 20, 24

**Common Patterns:**
- Section padding: py-16 md:py-24
- Component spacing: gap-6 to gap-8
- Card padding: p-6 md:p-8
- Button padding: px-6 py-3

**Container Strategy:**
- Max width: max-w-7xl for full sections
- Content width: max-w-4xl for text-focused areas
- Narrow width: max-w-2xl for forms, focused content

**Grid System:**
- Dashboard cards: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- Feature showcase: grid-cols-1 md:grid-cols-2
- Stat displays: grid-cols-2 md:grid-cols-4

---

## Component Library

### Navigation
- Fixed top navigation bar with logo, demo navigation, CTA
- Background: Surface Elevated with backdrop-blur
- Height: 64px (h-16)
- Mobile: Hamburger menu with slide-out drawer

### Hero Section
- Split layout: 60% content, 40% visual demonstration
- Large headline showcasing value proposition
- Subheading explaining the cognitive firewall concept
- Primary CTA: "See Demo" + Secondary: "Learn More"
- Animated phone mockup showing overlay in action
- Background: Subtle gradient from Background Base to Surface Elevated

### Overlay Notification Components
**Critical Element:** Simulated phone overlay cards showing:
- Content warning indicator (colored bar on left)
- Warning level badge (Safe/Caution/Manipulative)
- Brief explanation text
- Action buttons: "Continue Anyway" + "Switch Content"
- Blur backdrop effect: backdrop-blur-xl
- Border: 1px with Warning/Danger color
- Shadow: large, colored based on warning level

### Dashboard Cards
- Rounded corners: rounded-xl
- Padding: p-6
- Background: Surface Elevated
- Border: 1px Surface Interactive
- Hover state: slight elevation, border color shift
- Contains: Icon, metric value, label, trend indicator

### Data Visualization
- Bar charts for content type breakdown
- Line graphs for usage over time
- Circular progress indicators for daily limits
- Color-coded by content safety levels
- Tooltips on hover with detailed info

### Feature Cards
- Grid layout with icon, title, description
- Icons: Heroicons (shield, eye, bell, chart-bar, cog)
- Background: Surface Interactive
- Minimal elevation
- 2-column on tablet+, stacked on mobile

### Forms & Inputs
- Dark mode optimized inputs
- Background: Surface Interactive
- Border: 1px Neutral Gray, focus: Primary Brand
- Padding: px-4 py-3
- Rounded: rounded-lg
- Label above input, helper text below

### Buttons
- Primary: Background Primary Brand, text white, rounded-lg, px-6 py-3
- Secondary: Background transparent, border Primary Brand, text Primary Brand
- Danger: Background Danger color for destructive actions
- All buttons: font-weight 500, transition-all duration-200

### Footer
- Background: Surface Base
- Three columns: About, Features, Legal
- Social media icons
- Newsletter signup form
- Copyright and links

---

## Page Structure

### Landing/Demo Page Sections:

1. **Hero (100vh)**
   - Bold headline + elevator pitch
   - Animated phone mockup with overlay demo
   - Primary CTAs

2. **How It Works (auto height)**
   - 3-step visual process
   - Numbered cards with icons
   - Screenshots/illustrations of each step

3. **Live Demo Simulation (auto height)**
   - Interactive section showing content detection
   - Sample social media feed with overlay triggers
   - Toggle between safe/manipulative content examples

4. **Features Grid (auto height)**
   - 6 feature cards in 2x3 or 3x2 grid
   - Icons + titles + descriptions
   - Features: Real-time Detection, Privacy-First, Customizable, Analytics Dashboard, etc.

5. **Dashboard Preview (auto height)**
   - Full-width screenshot or interactive preview
   - Shows data visualization, weekly reports, insights

6. **Social Proof/Impact (auto height)**
   - Stats on manipulation reduction
   - User testimonials (simulated for prototype)
   - Partnership/certification badges

7. **CTA Section (auto height)**
   - Strong call-to-action
   - Email signup for beta/updates
   - Secondary action: "View Documentation"

8. **Footer**
   - Navigation links
   - Social media
   - Copyright

---

## Images

### Hero Image:
**Description:** Modern smartphone mockup (iPhone/Android) displaying the Boundier overlay in action - showing a warning overlay on top of a simulated social media feed. The overlay should have a glowing amber/red border indicating manipulative content detected.
**Placement:** Right side of hero section (40% width on desktop), below content on mobile
**Style:** Clean, high-quality 3D render or realistic mockup with subtle shadow

### Dashboard Preview:
**Description:** Full dashboard interface screenshot showing data visualizations, charts, weekly report, and content safety breakdown
**Placement:** Dashboard Preview section, full-width container with rounded corners
**Style:** UI screenshot with sample data, dark mode aesthetic

### Feature Icons:
**Source:** Heroicons (shield-check, eye, bell-alert, chart-bar, adjustments-horizontal, lock-closed)
**Placement:** Feature cards, centered above titles

---

## Animations

**Minimal, purposeful only:**
- Fade-in on scroll for sections (opacity + translateY)
- Smooth overlay appearance simulation in hero mockup
- Gentle hover elevations on cards (translateY: -2px)
- Button hover states (subtle scale or glow)
- Chart animations: bars/lines draw in on viewport entry

**Avoid:** Excessive parallax, continuous animations, distracting effects

---

## Accessibility

- Maintain WCAG AA contrast ratios minimum
- All interactive elements keyboard accessible
- Focus states clearly visible with Primary Brand outline
- Overlay demonstrations include text alternatives
- Dark mode throughout maintains readability

---

**Elevator Pitch:** "Boundier is your cognitive firewall—detecting manipulative content in real-time and empowering you to take back control of your attention."