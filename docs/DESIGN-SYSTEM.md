---
name: Luminous System
colors:
  surface: "#f8f9ff"
  surface-dim: "#d0dbed"
  surface-bright: "#f8f9ff"
  surface-container-lowest: "#ffffff"
  surface-container-low: "#eff4ff"
  surface-container: "#e6eeff"
  surface-container-high: "#dee9fc"
  surface-container-highest: "#d9e3f6"
  on-surface: "#121c2a"
  on-surface-variant: "#4a4455"
  inverse-surface: "#27313f"
  inverse-on-surface: "#eaf1ff"
  outline: "#7b7487"
  outline-variant: "#ccc3d8"
  surface-tint: "#732ee4"
  primary: "#630ed4"
  on-primary: "#ffffff"
  primary-container: "#7c3aed"
  on-primary-container: "#ede0ff"
  inverse-primary: "#d2bbff"
  secondary: "#4b41e1"
  on-secondary: "#ffffff"
  secondary-container: "#645efb"
  on-secondary-container: "#fffbff"
  tertiary: "#7d3d00"
  on-tertiary: "#ffffff"
  tertiary-container: "#a15100"
  on-tertiary-container: "#ffe0cd"
  error: "#ba1a1a"
  on-error: "#ffffff"
  error-container: "#ffdad6"
  on-error-container: "#93000a"
  primary-fixed: "#eaddff"
  primary-fixed-dim: "#d2bbff"
  on-primary-fixed: "#25005a"
  on-primary-fixed-variant: "#5a00c6"
  secondary-fixed: "#e2dfff"
  secondary-fixed-dim: "#c3c0ff"
  on-secondary-fixed: "#0f0069"
  on-secondary-fixed-variant: "#3323cc"
  tertiary-fixed: "#ffdcc6"
  tertiary-fixed-dim: "#ffb784"
  on-tertiary-fixed: "#301400"
  on-tertiary-fixed-variant: "#713700"
  background: "#f8f9ff"
  on-background: "#121c2a"
  surface-variant: "#d9e3f6"
typography:
  headline-xl:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: "700"
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: "700"
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: "700"
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: "600"
    lineHeight: 32px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: "400"
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: "400"
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: "400"
    lineHeight: 20px
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: "600"
    lineHeight: 20px
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: "500"
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 48px
---

## Brand & Style

The design system is built for a modern productivity environment where clarity and focus are paramount. The brand personality is professional and orderly, yet approachable through the use of vibrant accents and soft geometry.

The style utilizes a **Corporate Modern** foundation mixed with **Minimalist** principles. It relies on a high-ratio of whitespace and a refined "Surface-on-Base" layering technique to create a sense of organized depth. The primary goal is to reduce cognitive load, allowing the user's tasks and data to take center stage while the UI provides a reliable, high-energy framework for action.

## Colors

The palette is centered around a high-contrast relationship between a neutral, structural base and a singular, vibrant accent.

- **Primary (Electric Violet):** Used exclusively for high-priority actions, active states, and brand moments.
- **Background:** A cool, very light gray that distinguishes the application canvas from elevated surface elements.
- **Surface:** Pure white is reserved for interactive cards, modals, and navigation bars to create a clear "object" hierarchy.
- **Text:** A deep slate gray ensures high legibility and a sophisticated tone, avoiding the harshness of pure black.
- **Borders:** Subtle and low-contrast, used to define structure without adding visual noise.

## Typography

The design system exclusively uses **Inter** for its systematic, utilitarian, and highly legible characteristics.

- **Headlines:** Use tighter letter-spacing and bold weights to create a strong visual anchor for sections.
- **Body Text:** Standard weight with generous line height to ensure comfortable reading during long-form task management.
- **Labels:** Used for buttons, tags, and small metadata. The `label-md` role utilizes a slight tracking increase and uppercase transform to differentiate functional text from content text.

## Layout & Spacing

This design system employs a **Fluid Grid** model with a fixed 8px baseline rhythm.

- **Desktop:** 12-column grid with 24px gutters. Content should be centered with a maximum width of 1440px.
- **Tablet:** 8-column grid with 24px gutters and 24px side margins.
- **Mobile:** 4-column grid with 16px gutters and 16px side margins.

Vertical rhythm is maintained through multiples of 8px. Use 16px (`md`) for standard element spacing and 24px (`lg`) or 32px (`xl`) for section grouping to maintain an airy, modern feel.

## Elevation & Depth

Hierarchy is established through **Tonal Layering** and **Ambient Shadows**.

1. **Base (Level 0):** Background (#F9FAFB). Flat.
2. **Surface (Level 1):** Cards and main containers (#FFFFFF). Use a very soft, diffused shadow: `0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)`.
3. **Overlay (Level 2):** Modals and dropdowns. Use a more pronounced shadow to imply physical lifting: `0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)`.

Avoid using heavy borders for elevation; rely on the contrast between white surfaces and the light gray background.

## Shapes

The shape language is consistently **Rounded**, providing a friendly and modern aesthetic that offsets the strictness of the grid.

- **Components (Buttons, Inputs):** 0.5rem (8px) corner radius. This provides a precise, professional look.
- **Containers (Cards, Modals):** 1rem (16px) corner radius (`rounded-lg`). These larger radii help define content areas as approachable "buckets" of information.
- **Indicators (Status Dots, Avatar):** Fully circular (9999px) to contrast against the geometric UI.

## Components

- **Buttons:**
  - _Primary:_ Solid Electric Violet with white text. 8px border radius.
  - _Secondary:_ White background with subtle #E5E7EB border and Slate Gray text.
- **Cards:** White background, 16px corner radius, Level 1 shadow. Internal padding should be 24px (`lg`).
- **Inputs:** White background, 8px border radius, 1px border (#E5E7EB). On focus: 1px Electric Violet border with a 3px soft violet outer glow (ring).
- **Tabs:**
  - _Pill style:_ Active state uses a light violet background with primary violet text.
  - _Underline style:_ 2px primary violet bottom border for active state with 600 weight text.
- **Chips/Tags:** Small (12px) text, 4px border radius, subtle gray background (#F3F4F6) for neutral categories, and tinted primary colors for status.
- **Lists:** Clean rows with 1px bottom border (#E5E7EB) and 16px vertical padding. No borders on the first or last items in a card.
