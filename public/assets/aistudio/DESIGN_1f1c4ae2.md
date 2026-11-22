---
name: Neo-Tokyo Nocturne
colors:
  surface: '#121317'
  surface-dim: '#121317'
  surface-bright: '#38393e'
  surface-container-lowest: '#0d0e12'
  surface-container-low: '#1a1b20'
  surface-container: '#1f1f24'
  surface-container-high: '#292a2e'
  surface-container-highest: '#343439'
  on-surface: '#e3e2e8'
  on-surface-variant: '#cfc2d6'
  inverse-surface: '#e3e2e8'
  inverse-on-surface: '#2f3035'
  outline: '#988d9f'
  outline-variant: '#4d4354'
  surface-tint: '#ddb7ff'
  primary: '#ddb7ff'
  on-primary: '#490080'
  primary-container: '#b76dff'
  on-primary-container: '#400071'
  inverse-primary: '#842bd2'
  secondary: '#dcfdff'
  on-secondary: '#00373a'
  secondary-container: '#00f1fd'
  on-secondary-container: '#006a6f'
  tertiary: '#ffb1c5'
  on-tertiary: '#65002f'
  tertiary-container: '#ff4a8e'
  on-tertiary-container: '#590028'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#f0dbff'
  primary-fixed-dim: '#ddb7ff'
  on-primary-fixed: '#2c0051'
  on-primary-fixed-variant: '#6900b3'
  secondary-fixed: '#6ff6ff'
  secondary-fixed-dim: '#00dce6'
  on-secondary-fixed: '#002022'
  on-secondary-fixed-variant: '#004f53'
  tertiary-fixed: '#ffd9e1'
  tertiary-fixed-dim: '#ffb1c5'
  on-tertiary-fixed: '#3f001b'
  on-tertiary-fixed-variant: '#8f0045'
  background: '#121317'
  on-background: '#e3e2e8'
  surface-variant: '#343439'
typography:
  display-hero:
    fontFamily: Space Grotesk
    fontSize: 72px
    fontWeight: '700'
    lineHeight: 76px
    letterSpacing: -0.04em
  display-hero-mobile:
    fontFamily: Space Grotesk
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.03em
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 36px
    fontWeight: '600'
    lineHeight: 42px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Space Grotesk
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 34px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 30px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Space Grotesk
    fontSize: 20px
    fontWeight: '500'
    lineHeight: 26px
    letterSpacing: 0em
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
    letterSpacing: -0.01em
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: 0em
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-code:
    fontFamily: Space Mono
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
    letterSpacing: 0.08em
  label-badge:
    fontFamily: Space Mono
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 14px
    letterSpacing: 0.12em
  label-kana:
    fontFamily: Space Grotesk
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
    letterSpacing: 0.2em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 3rem
  margin-mobile: 1.25rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system channels an avant-garde digital creator persona at the intersection of Tokyo cyberpunk and high-end modern anime aesthetic. It avoids juvenile tropes in favor of razor-sharp luxury, tactical futurism, and electric luminescence.

### Personality & Tone
- **Atmospheric & Immersive:** Midnight obsidian canvases with vibrant neon dissipation evoke subterranean mechanical arcades, holographic billboards, and high-fashion editorial styling.
- **Precision Craft & Technical Edge:** Highly calculated grid structures, micro-coordinates, and sharp geometric framing convey disciplined technical and design mastery.
- **High-Voltage Micro-Interactions:** Subtle neon sweeps, edge-bleed glows, chromatic shifts on hover, and tactile digital response patterns.

### Design Movement
**Cyber-Editorial Glassmorphism:** Melds dark-mode minimalism, semi-transparent frosted acrylic glass layers (`backdrop-blur-md`), razor-sharp geometric cuts, and localized glow boundaries. High-contrast sans-serif type stands alongside monospace technical telemetry and understated Japanese Katakana/Kanji accents.

## Colors

The palette leverages a deep abyss baseline layered with saturated neon emitters. Contrast is paramount: dark backgrounds recede into infinity, allowing active chromatic elements to pierce through with intense clarity.

### Color Roles & Ratios
- **Surface Abyss (60%):** `#0b0c10` (Root Void) and `#12131c` (Elevated Deck). Form the velvet-black backdrop that gives luminescence its dramatic stage.
- **Primary Electric Violet (20%):** `#a855f7` (with `#8a2be2` shadows). Serves as the core visual anchor for focal calls to action, brand insignias, and active state highlights.
- **Secondary Neon Cyan (10%):** `#00f2fe` (with `#06b6d4` mid-tones). Used for navigational signals, interactive indicators, code snippets, and active connectivity accents.
- **Tertiary Sakura Magenta (5%):** `#ff2a85`. High-impact hot neon reserved for critical focal points, live badges, decorative katakana highlights, and alert states.
- **Structural White/Silver (5%):** Pure `#ffffff` for primary headlines, grading into `#94a3b8` (Slate Silver) for secondary technical labels.

### Gradients & Luminance
Glows must use dual-stop gradients (e.g., linear sweeps from `#a855f7` to `#ff2a85` or `#00f2fe` to `#8a2be2`) at low opacities (15–30%) for subsurface card fills and 100% saturation for razor-thin 1px borders.

## Typography

Typography establishes an editorial-grade sci-fi rhythm. Content density remains low, letting oversized geometric forms set the stage.

### Font Hierarchy
- **Primary Display & Headlines (Space Grotesk):** Provides structured geometric confidence with subtle futuristic idiosyncratic glyphs.
- **Interface & Body Copy (Plus Jakarta Sans):** Balances geometric sharpness with high legibility, open counters, and clean ergonomics across screens.
- **Telemetry, Badges & Labels (Space Mono):** Used for micro-copy, project metadata, timestamps, terminal tags, and system telemetry to ground the interface in technical capability.

### Typographic Accents
Incorporate subtle Japanese typographic counterpoints (e.g., uppercase titles accompanied by low-opacity, tracking-stretched Katakana sub-labels like `// プロジェクト` in 30% opacity Neon Cyan or Electric Violet). Keep body blocks constrained to 2–3 sentences max to maintain visual impact.

## Layout & Spacing

The layout is built on a structured 12-column responsive fluid grid pinned within an expansive maximum container width of 1440px.

### Grid Rhythm & Viewports
- **Desktop (1024px+):** 12 columns with 1.5rem (24px) gutters and generous 3rem (48px) margins. Asymmetric arrangements (e.g., 7-column preview cards beside 5-column technical specs) evoke high-fashion lookbooks and production UI dashboards.
- **Tablet (768px – 1023px):** 8 columns, collapsing complex staggered cards into streamlined 4-column side-by-side modules.
- **Mobile (< 768px):** 4 columns with 1rem (16px) gutters and 1.25rem (20px) margins. Staggers collapse strictly into a vertical timeline stack.

### Spatial Composition
Negative space is treated as an active canvas rather than vacant emptiness. Large gaps (`space-xl` and above) isolate visual assets to maximize focal immersion. Components should consistently leverage 4px-base spatial multiples for internal alignments.

## Elevation & Depth

Depth avoids muddy, dark dropshadows in favor of glowing radiance, layered transparency, and physical glass refraction.

### Depth Architecture
1. **Base Layer (Level 0):** `#0b0c10` with an ultra-faint mechanical dot grid or sub-pixel scanline pattern at 3% opacity.
2. **Surface Layer (Level 1):** Solid `#12131c` or tinted glass acrylic `#12131c` at 70% opacity with `backdrop-filter: blur(16px)`. Bordered by a 1px solid stroke at `#ffffff` with 8% opacity.
3. **Floating Interactive (Level 2):** Elevated cards on hover or modal dialogs. Background shifts to 85% opacity with an intensified 1px perimeter border tinted by the primary accent: `rgba(168, 85, 247, 0.45)`.
4. **Neon Radiance:** Instead of diffuse black shadows, interactive and active items project directional luminescence:
   - *Violet Glow:* `box-shadow: 0 0 20px -3px rgba(168, 85, 247, 0.35), 0 0 8px -1px rgba(168, 85, 247, 0.2)`
   - *Cyan Surge:* `box-shadow: 0 0 24px -2px rgba(0, 242, 254, 0.35)`
   - *Hot Sakura Accent:* `box-shadow: 0 0 16px -2px rgba(255, 42, 133, 0.4)`

## Shapes

The design language favors clipped, clean, and subtly rounded geometric precision over organic or bubbly radii.

### Curvature Tokens
- **Core Radius (`roundedness: 1`):** Micro-radii of `0.25rem` (4px) applied to badges, buttons, cards, and input frames to maintain a crisp, surgical aesthetic without visual harshness.
- **Corner Treatments:** Where applicable, use 45-degree chamfered/angled corner accents (`clip-path: polygon(...)`) on primary showcase cards and prominent floating badges to enforce a tactical, anime-mecha silhouette.
- **Divider Lines:** 1px hairline horizontal rules tinted with linear gradients fading out at the edges: `linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.15), transparent)`.

## Components

### Buttons & Interactive Triggers
- **Primary Glow Button:** Solid fill or dark surface with an animated perimeter border gradient (`#a855f7` to `#ff2a85`). High-contrast white text in `label-badge` uppercase. On hover, produces an internal chromatic luminescence and subtle scale (`1.02`).
- **Ghost Cyber Button:** Transparent fill, 1px border in `rgba(0, 242, 254, 0.4)`, text in `#00f2fe`. On hover, fills with `rgba(0, 242, 254, 0.1)` with a direct `0 0 14px rgba(0, 242, 254, 0.3)` outer glow.

### Cards & Project Showcases
- **Glass Portfolio Card:** Built with `Level 1` surface styling, 16px backdrop blur, and 1px muted border. Showcases high-resolution media previews bordered by sharp hairline corners.
- **Header Slot:** Technical telemetry displayed at top right (`[SYS.01] // ARCHIVE`) in `label-code` at 40% white opacity.
- **Interactive State:** Hover activates a hairline gradient border transition and subtle dynamic neon edge bloom.

### Dynamic Chips & Badges
- **Status Indicator:** Pill or soft-chamfered badge with an embedded 6px pulsing dot (e.g., `#00f2fe` for "ONLINE / AVAILABLE FOR WORK").
- **Tech Stack Badges:** Low-profile capsules using `#12131c`, font `label-code`, 1px borders in `rgba(255, 255, 255, 0.08)`, and monochrome iconography that shifts to accent color on card focus.

### Form Inputs & Terminal Fields
- **Fields:** Dark sunken wells (`#07080b`), inset 1px borders in `rgba(255, 255, 255, 0.1)`. Focus state drops the inset and activates a 1px border in `#00f2fe` with an exterior teal aura. Monospaced placeholder text in `#64748b`.
- **Selectors (Checkboxes & Radios):** Sharp 2px-radius squares or diamond indicators featuring neon check fills in `#ff2a85` or `#00f2fe`.

### Japanese & Telemetry Accents
- Decorative floating metadata bars displaying real-time coordinates, UTC offsets, or vertical kanji watermarks (`電脳 / 創造`) set in 5–10% opacity, providing rich atmospheric layering without disrupting readability.