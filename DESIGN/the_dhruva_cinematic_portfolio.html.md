# Design System: High-End Editorial & Cinematic Motion

## 1. Overview & Creative North Star: "The Digital Curator"
This design system is built to move beyond the static nature of standard portfolios. Our Creative North Star is **"The Digital Curator"**—a philosophy where the UI acts as a silent, premium gallery for the work it holds. We reject the "template" look by utilizing intentional asymmetry, expansive negative space, and a cinematic tonal shift that evolves as the user explores.

The experience is defined by a "Cream to Charcoal" progression. We begin in a world of high-end physical stationery (`surface: #f9f9fb`) and descend into a sophisticated, nocturnal workspace (`inverse_surface: #0c0e10`). This isn't just a theme toggle; it is a narrative journey.

---

## 2. Colors & Tonal Depth
We utilize a monochromatic-plus-warmth palette to achieve an "Apple-inspired" prestige. Color is used sparingly to denote action, while depth is managed through light and shadow.

### The "No-Line" Rule
**Standard 1px borders are strictly prohibited for sectioning.** To create separation, use tonal shifts between surface tiers. For example, a project card should be `surface_container_low` sitting on a `surface` background. The boundary is felt, not seen.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers. Use the following tokens to create "nested" depth:
- **Base Layer:** `surface` (#f9f9fb) – The primary canvas.
- **Sunken Elements:** `surface_container_low` (#f2f4f6) – Use for recessed areas or subtle backgrounds behind text blocks.
- **Raised Elements:** `surface_container_high` (#e4e9ee) – Use for interactive cards or floating navigation elements.

### Signature Textures: The Grain & Gradient
To prevent the "flat" digital look, apply a global CSS grain overlay (SVG noise at 3% opacity) over the entire viewport. Main CTAs should use a subtle linear gradient from `primary` (#5f5e60) to `primary_dim` (#535254) at a 145-degree angle to provide a metallic, premium sheen.

---

## 3. Typography: Minimalist Editorial
Typography is our primary visual tool. We use **Inter** with custom tracking and leading to create an authoritative, editorial feel.

- **Display (display-lg/md):** Reserved for hero statements. Set with `letter-spacing: -0.04em` and `line-height: 1.1`. This "tight" setting creates a bold, graphic block of text that feels like a high-fashion magazine.
- **Headlines (headline-lg/md):** Used for section titles. Use `on_surface` (#2d3338). Always pair with significant top-margin (`spacing-20`) to allow the type to breathe.
- **Body (body-md/lg):** Use `on_surface_variant` (#596065) for long-form text to reduce visual vibration and improve readability against the cream background.
- **Labels (label-md):** Always uppercase with `letter-spacing: 0.1em`. Used for "Overlines" above headlines to categorize content.

---

## 4. Elevation & Depth: Tonal Layering
Traditional drop shadows are too "software-like." We achieve lift through light physics.

- **The Layering Principle:** Instead of a shadow, place a `surface_container_highest` element onto a `surface` background. The contrast in luminance provides all the hierarchy needed.
- **Ambient Shadows:** For floating modals or navigation bars, use a "Ghost Shadow": 
  - `box-shadow: 0 20px 80px rgba(12, 14, 16, 0.06);` 
  - The shadow color must be a derivative of `inverse_surface` at ultra-low opacity.
- **Glassmorphism:** Navigation blurs are mandatory. Use `surface` at 80% opacity with a `backdrop-filter: blur(20px)`. This ensures the "Cream to Charcoal" transition is visible through the UI chrome.

---

## 5. Components

### Buttons (The "Fluid" Interaction)
- **Primary:** Background `primary` (#5f5e60), text `on_primary`. Shape `rounded-full`. Interaction: On hover, the button should slightly expand (scale 1.02) with a `300ms cubic-bezier(0.16, 1, 0.3, 1)` transition.
- **Tertiary (Ghost):** No background or border. Text `on_surface`. Interaction: A sophisticated underline that grows from the center out on hover.

### Cards & Work Tiles
**Forbid the use of divider lines.** Separate work items using `spacing-12` (4rem) of vertical white space. Tiles should utilize `surface_container_low` with a subtle `outline_variant` (at 10% opacity) "Ghost Border" that only appears on hover.

### Inputs & Fields
- **Styling:** Minimalist bottom-border only using `outline_variant`.
- **States:** When focused, the border transitions to `primary` (#5f5e60) with a smooth easing. Labels should use `label-md` and sit 8px above the input.

### Signature Component: The Cinematic Scroll-Progress
A 2px tall bar at the very top of the viewport using the `primary` token. As the user scrolls and the background transitions from Cream to Charcoal, the bar color should invert to `inverse_primary` (#ffffff) to maintain a "shimmer" effect.

---

## 6. Do's and Don'ts

### Do:
- **Do use "Optical Kerning":** Manually adjust letter spacing for large display type to ensure it feels tight and professional.
- **Do embrace Asymmetry:** Align descriptions to the right while headlines stay left. Break the 12-column grid to create visual interest.
- **Do use Fluid Transitions:** Every page change or state shift should feel like a camera lens refocusing (use long durations with "Power" easings).

### Don't:
- **Don't use pure black (#000):** It kills the "cinematic" depth. Always use `inverse_surface` (#0c0e10) for the deepest tones.
- **Don't use 1px Borders:** Unless it is a "Ghost Border" at <15% opacity, avoid them. Let the color blocks do the work.
- **Don't crowd the Canvas:** If you feel a section needs a divider, it actually needs more `spacing-16` or `spacing-20`.

---

## 7. Spacing Scale Implementation
We use a generous spacing scale to enforce the "High-End" vibe.
- **Section Gaps:** Use `spacing-24` (8.5rem) to separate major content blocks.
- **Content Grouping:** Use `spacing-6` (2rem) for related text and images.
- **Tight Elements:** Use `spacing-2` (0.7rem) for labels and icons.

By following this system, the portfolio will feel less like a website and more like a high-performance digital environment—intentional, expensive, and deeply professional.