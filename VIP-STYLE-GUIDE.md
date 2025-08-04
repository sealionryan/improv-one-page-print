# Vegas Improv Power (VIP) – Brand Style Guide

## Brand Overview
Vegas Improv Power is where spontaneity meets personal growth. We empower people and teams to communicate fearlessly, collaborate joyfully, and discover confidence through Functional Improv®. Our visual language should feel just as welcoming and energetic as an improv stage: light, playful, and full of possibility.

## Core Design Principles

### 1. **Playful Lightness & Space**
* Embrace generous whitespace to let ideas breathe and spotlight content.
* Favor light backgrounds with subtle gradients for a modern, airy feel.
* Establish hierarchy through scale and spacing—never heavy dividers.

### 2. **Depth Through Subtlety**
* Layer multiple soft shadows to create natural depth without clutter.
* Use glassmorphic effects sparingly to suggest transparency and discovery.
* Rely on dimensional shadow work rather than borders to separate elements.

### 3. **Motion with Purpose & Joy**
* Animations should feel fluid and supportive—never gimmicky.
* Transitions guide attention and create a sense of flow.
* Micro‑interactions offer gentle, delightful feedback that reinforces user intent.

## Color System

### Primary Brand Colors
| Role               | Hex       | Tailwind Token* |
|--------------------|-----------|-----------------|
| Background Light   | #F2F2F2   | `vip-gray-100`  |
| Text Dark          | #1A1A1A   | `vip-purple-950`|
| **VIP Purple**     | #4E4489   | `vip-purple-800`|
| **VIP Coral**      | #FFA77A   | `vip-coral-500` |

<sub>*Exact token values defined in DESIGN‑SYSTEM.md.</sub>

### Gradient Guidance
* **Primary Direction:** Start with a VIP Purple variant and fade to a lighter, darker, or brighter shade of that same hue.
* **Alternative Endpoints:** White for airy backgrounds or `vip-purple-925` for dramatic depth.
* Gradients should be soft––avoid harsh banding by blending at least three stops.

### Neutral Scale
A full neutral ramp (`vip-gray-50` → `vip-gray-900`) provides flexible tones for backgrounds, borders, and disabled states.

## Typography
* **Headings:** Poppins Bold (700) — confident and modern.
* **Body & UI:** Karma Regular (400/500) — friendly and legible.

### Type Scale
| Style | Size | Line‑height | Letter‑spacing |
|-------|------|-------------|----------------|
| H1    | 48 px | 56 px | −0.02 em |
| H2    | 36 px | 44 px | −0.01 em |
| H3    | 28 px | 36 px | −0.01 em |
| H4    | 24 px | 32 px | 0 em |
| H5    | 20 px | 28 px | 0 em |
| H6    | 18 px | 24 px | 0 em |
| Body Large | 18 px | 28 px | 0 em |
| Body Regular | 16 px | 24 px | 0 em |
| Body Small | 14 px | 20 px | 0 em |
| Caption | 12 px | 16 px | 0.01 em |

## Visual Treatments

### Glassmorphic Cards
A translucent glass layer (`rgba(255,255,255,0.7)` with 20 px blur) framed by a subtle 1 px solid white border and 20 px radius delivers sophistication without weight.

### Shadow System (Elevation)
| Level | Use Case | Example Shadow* |
|-------|----------|-----------------|
| 1     | Input fields, icons | 0 1 2 rgba(31,31,31,0.02) |
| 2     | Default cards | 0 2 4 rgba(31,31,31,0.03) + 0 4 8 rgba(31,31,31,0.03) |
| 3     | Hovered cards | 0 4 8 rgba(31,31,31,0.04) + 0 8 16 rgba(31,31,31,0.04) |
| 4     | Modals / dropdowns | 0 8 16 rgba(31,31,31,0.06) + 0 16 32 rgba(31,31,31,0.05) |

<sub>*Exact multi‑shadow values live in DESIGN‑SYSTEM.md.</sub>

### Imagery & Iconography
* Photography should capture candid moments of collaboration and joy.
* Icons are minimal, rounded, and use 2‑px strokes; fill with `vip-purple-800` on light backgrounds or `vip-white` on dark.

## Accessibility Commitments
* Maintain AA contrast ratios for all text on backgrounds.
* Provide focus states (2 px solid `vip-coral-500`, offset 2 px) for all interactive elements.
* Offer reduced‑motion fallbacks.

## Voice & Tone
VIP’s written voice mirrors an improv coach: encouraging, witty, and compassionate. Write in second person, celebrate mistakes, and keep sentences active and concise.

## Dos & Don’ts
**Do**
- Use consistent spacing scale.
- Layer subtle shadows for depth.
- Implement glassmorphic effects with fallbacks.
- Test interactions across devices.

**Don’t**
- Invent new brand colors.
- Over‑animate every element.
- Mix border‑radius values inconsistently.
- Neglect keyboard navigation.

---
*This guide delivers the spirit; for token values, components, and production‑ready CSS, see **DESIGN‑SYSTEM.md**.*

