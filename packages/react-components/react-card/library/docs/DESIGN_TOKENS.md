# Card Component - Design Tokens & Specifications

## Overview

This document describes the design tokens, spacing, typography, and color specifications used in the Card component from the Fluent 2 Web design system.

## Design Tokens

### Spacing Tokens

Cards use standardized spacing tokens for consistent layouts:

| Token                       | Default Value | Usage                           |
| --------------------------- | ------------- | ------------------------------- |
| `--card-horizontal`         | 12px          | Horizontal padding (left/right) |
| `--card-vertical`           | 12px          | Vertical padding (top/bottom)   |
| `--card-gap`                | 12px          | Gap between card sections       |
| `--spacingHorizontalSNudge` | 6px           | Small nudge spacing for buttons |
| `--spacingHorizontalXS`     | 4px           | Extra small spacing             |
| `--spacingHorizontalM`      | 12px          | Medium spacing                  |
| `--spacingVerticalSNudge`   | 6px           | Small vertical nudge            |
| `--spacingVerticalXXS`      | 2px           | Extra extra small spacing       |

### Typography Tokens

Cards support two main typography styles:

#### Heading (Body 1 Strong)

- **Font Family:** Segoe UI (Semibold)
- **Font Weight:** 600
- **Font Size:** 14px
- **Line Height:** 20px
- **Letter Spacing:** 0

Used for: Card titles and headers

#### Body (Caption 1)

- **Font Family:** Segoe UI (Regular)
- **Font Weight:** 400
- **Font Size:** 12px
- **Line Height:** 16px
- **Letter Spacing:** 0

Used for: Card descriptions and body text

### Color Tokens

#### Neutral Colors

| Token                | Light Theme | Dark Theme | Usage           |
| -------------------- | ----------- | ---------- | --------------- |
| `NeutralBackground1` | #FFFFFF     | #1F1F1F    | Card background |
| `NeutralForeground1` | #242424     | #F4F4F4    | Primary text    |
| `NeutralForeground2` | #424242     | #D9D9D9    | Secondary text  |
| `NeutralForeground3` | #616161     | #B3B3B3    | Tertiary text   |
| `NeutralStroke1`     | #D1D1D1     | #333333    | Borders         |

#### Brand Colors

| Token             | Light Theme | Dark Theme | Usage                     |
| ----------------- | ----------- | ---------- | ------------------------- |
| `BrandBackground` | #0F6CBD     | #3AA0FF    | Primary button background |

#### Background Colors

| Token                   | Light Theme            | Dark Theme       | Usage             |
| ----------------------- | ---------------------- | ---------------- | ----------------- |
| `TransparentBackground` | rgba(255, 255, 255, 0) | rgba(0, 0, 0, 0) | Transparent areas |

### Shadow Tokens

Cards use shadow tokens for depth:

#### Shadow 04 (Default Card Shadow)

```
offset: (0, 0), radius: 2, spread: 0
offset: (0, 2), radius: 4, spread: 0
color: NeutralShadowAmbient + NeutralShadowKey
```

This creates a subtle shadow effect that provides elevation without being visually heavy.

### Button Tokens

Cards use button design tokens for action buttons:

| Token                           | Default Value | Usage                     |
| ------------------------------- | ------------- | ------------------------- |
| `--button/container`            | 4px           | Border radius for buttons |
| `--typography/font-family/base` | Segoe UI      | Font for button text      |
| `--typography/weight/semibold`  | 600           | Button text weight        |

---

## Component Structure & Layout

### Card Hierarchy

```
Card (Root Container)
├── CardHeader
│   ├── Image (Avatar/Icon)
│   ├── Text Container
│   │   ├── Header (Title)
│   │   └── Description (Metadata)
│   └── Action (Icon Button)
├── CardPreview
│   ├── Logo (Optional)
│   └── Image/Content
├── CardBody (Custom Content)
└── CardFooter
    ├── Primary Action (Button)
    ├── Secondary Action (Button)
    └── Quick Action (Icon Button)
```

### Default Dimensions

- **Card Width:** Flexible (fills container)
- **Card Height:** Auto (based on content)
- **Header Height:** 56px (with padding)
- **Preview Height:** Varies (typically 164-200px)
- **Footer Height:** 44px (with padding)

### Padding & Gap Layout

```
Card
├─ Padding: vertical=12px, horizontal=12px
├─ CardHeader
│  └─ Gap: 12px (between image and text)
├─ CardPreview
│  └─ Gap: 12px (from header)
├─ CardBody
│  └─ Gap: 12px (from preview)
└─ CardFooter
   └─ Gap: 12px (between buttons)
```

---

## State Specifications

### Card States

#### Rest

- Background: `NeutralBackground1`
- Border: None
- Shadow: `Shadow 04`
- Opacity: 100%

#### Hover

- Background: `NeutralBackground1` (slight lightening)
- Transform: Subtle lift (translateY -2px)
- Shadow: Enhanced shadow
- Opacity: 100%

#### Pressed

- Background: `NeutralBackground1` (slightly darker)
- Transform: Pressed down (translateY 0px)
- Shadow: Reduced shadow
- Opacity: 100%

#### Selected

- Background: `NeutralBackground1`
- Border: `BrandBackground` (2px)
- Shadow: `Shadow 04`
- Opacity: 100%

#### Draggable

- Opacity: 75%
- Cursor: grab
- Shadow: Enhanced

#### Disabled

- Background: `NeutralBackground1`
- Opacity: 50%
- Cursor: not-allowed
- Interactions: Disabled

---

## Appearance Variants

### Filled (Default)

Used for primary content and main actions.

```
Background: NeutralBackground1
Border: None
Shadow: Shadow 04
```

**CSS:**

```css
.card--filled {
  background-color: var(--NeutralBackground1, white);
  box-shadow:
    0 0 2px var(--NeutralShadowAmbient),
    0 2px 4px var(--NeutralShadowKey);
}
```

### Outline

Used for secondary content.

```
Background: Transparent or light fill
Border: 1px NeutralStroke1
Shadow: None
```

**CSS:**

```css
.card--outline {
  background-color: transparent;
  border: 1px solid var(--NeutralStroke1, #d1d1d1);
  box-shadow: none;
}
```

### Subtle

Used for tertiary content or minimal emphasis.

```
Background: Very light or transparent
Border: None
Shadow: None
```

**CSS:**

```css
.card--subtle {
  background-color: transparent;
  border: none;
  box-shadow: none;
}
```

---

## Button Specifications

### Primary Action Button

Located in CardFooter, typically on the left.

- **Appearance:** Filled with brand color
- **Background:** `BrandBackground.Rest`
- **Text Color:** White
- **Size:** 32px height
- **Padding:** Horizontal 12px, Vertical 6px
- **Border Radius:** 4px

### Secondary Action Button

Located in CardFooter, typically next to primary.

- **Appearance:** Outline
- **Background:** `NeutralBackground1`
- **Border:** 1px `NeutralStroke1`
- **Text Color:** `NeutralForeground1`
- **Size:** 32px height
- **Padding:** Horizontal 12px, Vertical 6px
- **Border Radius:** 4px

### Quick Action Button

Located in CardHeader and CardFooter for overflow actions.

- **Appearance:** Transparent/Subtle
- **Background:** Transparent
- **Border:** None
- **Icon Size:** 20px
- **Padding:** 6px

---

## Icon Specifications

### Icon Sizes

| Size | Dimensions | Usage                          |
| ---- | ---------- | ------------------------------ |
| 16px | 16 × 16    | Small actions, secondary icons |
| 20px | 20 × 20    | Quick action buttons           |
| 32px | 32 × 32    | Card header avatar             |

### Icon Colors

- **Primary:** `NeutralForeground1`
- **On Brand:** White (on brand background)
- **Disabled:** `NeutralForeground3`

---

## Responsive Behavior

### Mobile (< 480px)

```css
.card {
  --card-horizontal: 8px;
  --card-vertical: 8px;
  --card-gap: 8px;
  width: 100%;
  max-width: 100%;
}

.card-grid {
  grid-template-columns: 1fr;
  gap: 12px;
}
```

### Tablet (480px - 1024px)

```css
.card-grid {
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}
```

### Desktop (> 1024px)

```css
.card-grid {
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
}
```

---

## Accessibility Specifications

### Color Contrast

All color combinations meet WCAG AA standards:

| Component   | Text Color           | Background           | Ratio  |
| ----------- | -------------------- | -------------------- | ------ |
| Header      | `NeutralForeground1` | `NeutralBackground1` | 14.6:1 |
| Description | `NeutralForeground3` | `NeutralBackground1` | 4.5:1  |
| Button Text | White                | `BrandBackground`    | 11.4:1 |

### Focus States

- **Focus Ring:** 2px solid brand color
- **Focus Offset:** 2px from element

```css
.card:focus-visible {
  outline: 2px solid var(--BrandBackground, #0f6cbd);
  outline-offset: 2px;
}
```

### Keyboard Navigation

- **Tab:** Navigate between selectable cards and buttons
- **Enter/Space:** Toggle card selection
- **Arrow Keys:** Navigate card groups (when implemented)

### ARIA Attributes

```tsx
// Selectable card
<Card
  role="option"
  aria-selected={selected}
  tabIndex={0}
>
  ...
</Card>

// Card group
<div role="listbox" aria-label="Card list">
  <Card role="option" aria-selected={false}>...</Card>
</div>
```

---

## Animation & Transition Specifications

### Default Transitions

```css
.card {
  transition:
    background-color 200ms ease-out,
    box-shadow 200ms ease-out,
    transform 200ms ease-out;
}
```

### Hover Animation

```css
.card:hover {
  transform: translateY(-2px);
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.15);
}
```

### Selection Animation

```css
.card[aria-selected='true'] {
  animation: selectPulse 200ms ease-out;
}

@keyframes selectPulse {
  from {
    box-shadow: 0 0 0 3px var(--BrandBackground);
  }
  to {
    box-shadow: 0 0 0 0px var(--BrandBackground);
  }
}
```

---

## Design System References

### Figma Components

- **Card Frame:** node-id 9230:4927
- **Card Variants:** 28 variations (states × styles × layouts)
- **File:** Microsoft Fluent 2 Web - Community

### External Documentation

- [Fluent 2 Design System](https://fluent2.microsoft.design/)
- [Card Usage Guidance](https://fluent2.microsoft.design/components/web/react/core/card/usage)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

---

## Implementation Notes

### CSS Custom Properties Usage

For maximum flexibility, the component uses CSS custom properties:

```tsx
// Override spacing
<div style={{ '--card-horizontal': '16px' } as CSSProperties}>
  <Card>
    {/* Uses custom spacing */}
  </Card>
</div>

// Default values (defined in component styles)
--card-horizontal: 12px
--card-vertical: 12px
--card-gap: 12px
```

### Design Token Mapping

| Figma Token          | CSS Variable         | Default |
| -------------------- | -------------------- | ------- |
| spacing/horizontalL  | --card-horizontal    | 12px    |
| spacing/verticalL    | --card-vertical      | 12px    |
| spacing/horizontalM  | --card-gap           | 12px    |
| colorNeutral.white   | --NeutralBackground1 | #fff    |
| colorNeutral.gray100 | --NeutralForeground1 | #242424 |

---

## Version History

- **v1.0** (Current) - Fluent 2 design system alignment
  - 28 component variations
  - 3 appearance variants
  - 6 state definitions
  - Full accessibility compliance

---

## Related Components

- **Button** - Used in CardFooter
- **Avatar** - Used in CardHeader
- **Badge** - Used for status/tags
- **Icon** - Used throughout
- **Text** - Typography composition

---

## Change Log

### Recent Updates

- Added comprehensive design token documentation
- Expanded shadow specifications
- Enhanced accessibility guidelines
- Added responsive design specifications
