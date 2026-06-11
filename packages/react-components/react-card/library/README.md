# @fluentui/react-card

**React Card components for [Fluent UI React](https://react.fluentui.dev)**

A card is a container that holds information and actions related to a single concept or object, like a document or a contact. Cards help give information prominence and create predictable patterns, making them ideal for presenting content in grids or lists.

## Overview

Cards are flexible containers designed to improve content organization and presentation. They can contain various elements including headers with icons, body text, images/previews, and action buttons in footers. While cards are highly customizable, using them consistently for particular use cases across your application creates a cohesive user experience.

**Key Features:**

- Multiple layout options (Default, Custom)
- Flexible state system (Rest, Hover, Pressed, Selected, Draggable, Disabled)
- Style variants (Filled, Filled alt, Outline, Subtle)
- Selectable cards with built-in selection handling
- Responsive design with CSS custom properties
- Accessible component structure
- Full Fluent Design System integration

## Quick Start

### Installation

```bash
yarn add @fluentui/react-components
```

### Import

```tsx
import { Card, CardPreview, CardHeader, CardFooter } from '@fluentui/react-components';
```

### Basic Example

```tsx
import { Share16Regular, ArrowReply16Regular } from '@fluentui/react-icons';
import { Button, Body1, Caption1 } from '@fluentui/react-components';
import { Card, CardHeader, CardPreview, CardFooter } from '@fluentui/react-components';

export const CardExample = () => (
  <Card>
    <CardHeader
      image={
        <img
          src="https://raw.githubusercontent.com/microsoft/fluentui/master/packages/react-components/react-card/assets/avatar_elvia.svg"
          alt="Face of a person"
        />
      }
      header={
        <Body1>
          <b>Elvia Atkins</b> mentioned you
        </Body1>
      }
      description={<Caption1>5h ago · About us - Overview</Caption1>}
    />
    <CardPreview
      logo={
        <img
          src="https://raw.githubusercontent.com/microsoft/fluentui/master/packages/react-components/react-card/assets/docx.png"
          alt="Microsoft Word logo"
        />
      }
    >
      <img
        src="https://raw.githubusercontent.com/microsoft/fluentui/master/packages/react-components/react-card/assets/doc_template.png"
        alt="Preview of a Word document"
      />
    </CardPreview>
    <CardFooter>
      <Button icon={<ArrowReply16Regular />}>Reply</Button>
      <Button icon={<Share16Regular />}>Share</Button>
    </CardFooter>
  </Card>
);
```

## Usage Patterns

### Selectable Cards

Create interactive cards that users can select:

```tsx
import { useState } from 'react';
import { Card, CardHeader } from '@fluentui/react-components';

export const SelectableCardExample = () => {
  const [selected, setSelected] = useState(false);

  return (
    <Card selectable selected={selected} onClick={() => setSelected(!selected)}>
      <CardHeader header={<b>Click to select</b>} />
    </Card>
  );
};
```

### Card with Custom Content

Cards support any content within their slots:

```tsx
import { Card, CardHeader, CardFooter } from '@fluentui/react-components';
import { Button } from '@fluentui/react-components';

export const CustomCardExample = () => (
  <Card>
    <CardHeader header={<h3>Custom Content</h3>} description="This card contains custom elements" />
    <div style={{ padding: '12px' }}>
      <p>Your custom content goes here.</p>
      <p>Add any JSX elements you need.</p>
    </div>
    <CardFooter>
      <Button appearance="primary">Action</Button>
      <Button appearance="secondary">Cancel</Button>
    </CardFooter>
  </Card>
);
```

### Card Variants

Use different card styles for different contexts:

```tsx
import { Card, CardHeader } from '@fluentui/react-components';

export const CardVariantsExample = () => (
  <>
    {/* Filled variant - primary usage */}
    <Card appearance="filled">
      <CardHeader header={<b>Filled Card</b>} />
    </Card>

    {/* Outline variant - secondary usage */}
    <Card appearance="outline">
      <CardHeader header={<b>Outline Card</b>} />
    </Card>

    {/* Subtle variant - tertiary usage */}
    <Card appearance="subtle">
      <CardHeader header={<b>Subtle Card</b>} />
    </Card>
  </>
);
```

## Component Architecture

### Card

The main container component that wraps all card content.

**Props:**

- `appearance?`: "filled" | "outline" | "subtle" - Visual style variant
- `selected?`: boolean - Whether card is selected
- `selectable?`: boolean - Whether card can be selected
- `onSelectionChange?`: (ev: CardOnSelectionChangeEvent) => void - Selection change handler
- `as?`: React.ElementType - Custom element type
- `className?`: string - Additional CSS class names

### CardHeader

Displays header content with optional image/icon.

**Props:**

- `image?`: React.ReactNode - Avatar or icon image
- `header?`: React.ReactNode - Primary header text
- `description?`: React.ReactNode - Secondary description text
- `action?`: React.ReactNode - Header action element

### CardPreview

Shows preview content like images or document thumbnails.

**Props:**

- `logo?`: React.ReactNode - Logo to display over preview
- `children?`: React.ReactNode - Preview content (typically an image)

### CardFooter

Contains action buttons or footer content.

**Props:**

- `action?`: React.ReactNode - Primary action element
- `children?`: React.ReactNode - Footer content

## Design System Integration

The Card component uses Fluent Design System tokens and CSS custom properties:

### Spacing Tokens

- `--card-horizontal`: Horizontal padding (default: 12px)
- `--card-vertical`: Vertical padding (default: 12px)
- `--card-gap`: Gap between card sections (default: 12px)

### Color Tokens

Cards automatically use the current theme's color palette:

- Background colors for different states (Rest, Hover, Pressed, etc.)
- Neutral and brand color schemes
- Shadow and elevation tokens

### Typography

Cards respect the typography system:

- Body 1 Strong for headers
- Caption 1 for descriptions
- Custom typography support through composition

## Accessibility

The Card component follows accessibility best practices:

- Semantic HTML structure
- Keyboard navigation support for selectable cards
- ARIA attributes for selection states
- Proper color contrast
- Screen reader friendly content

### Accessible Selection Example

```tsx
import { Card, CardHeader } from '@fluentui/react-components';
import { useState } from 'react';

export const AccessibleSelectableCard = () => {
  const [selected, setSelected] = useState(false);

  return (
    <Card
      selectable
      selected={selected}
      onSelectionChange={e => setSelected(e.selected)}
      role="option"
      aria-selected={selected}
    >
      <CardHeader header={<b>Selectable Card</b>} />
    </Card>
  );
};
```

## Best Practices

### DO ✓

- Use cards consistently for the same type of content
- Provide clear, descriptive headers
- Include relevant metadata (dates, status, etc.)
- Use action buttons for primary interactions
- Group related cards in a grid or list layout
- Keep card content scannable with clear hierarchy

### DON'T ✗

- Nest cards within cards (avoid deep nesting)
- Overcrowd cards with too much content
- Use cards for single-line items (use simpler components instead)
- Create inconsistent card layouts across your application
- Hide critical information in small text
- Use cards for page-level layout (use appropriate layout components)

## Grid Layout Example

```tsx
import { Card, CardHeader, CardFooter } from '@fluentui/react-components';
import { Button } from '@fluentui/react-components';

export const CardGridExample = () => {
  const cards = [
    { id: 1, title: 'Card 1' },
    { id: 2, title: 'Card 2' },
    { id: 3, title: 'Card 3' },
  ];

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gap: '16px',
        padding: '16px',
      }}
    >
      {cards.map(card => (
        <Card key={card.id}>
          <CardHeader header={<b>{card.title}</b>} />
          <div style={{ padding: '12px' }}>
            <p>Card content goes here</p>
          </div>
          <CardFooter>
            <Button appearance="primary">Learn More</Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};
```

## States

Cards support multiple visual states through the design system:

- **Rest**: Default state with standard styling
- **Hover**: Visual feedback when hovering
- **Pressed**: Active press state for selectable cards
- **Selected**: Applied when card is selected
- **Draggable**: Indicates card can be dragged
- **Disabled**: Disabled state for inactive cards

## Styling

### CSS Custom Properties

Override default styling using CSS custom properties:

```tsx
<div
  style={
    {
      '--card-horizontal': '16px',
      '--card-vertical': '16px',
      '--card-gap': '16px',
    } as React.CSSProperties
  }
>
  <Card>{/* Card content */}</Card>
</div>
```

### Custom Styling with className

```tsx
import { Card } from '@fluentui/react-components';

export const StyledCard = () => <Card className="my-custom-card-style">{/* Card content */}</Card>;
```

## Specification

See the [Spec.md](./Spec.md) file for background information on the design/engineering decisions of the component.

## API

For detailed API documentation, refer to the [API documentation](https://react.fluentui.dev/?path=/docs/preview-components-card--default).

## Storybook

View interactive examples in [Storybook](https://master--628d031b55e942004ac95df1.chromatic.com/?path=/docs/components-card--default).

## Migration

For migration information from previous versions, see the [migration guide](./MIGRATION.md).
