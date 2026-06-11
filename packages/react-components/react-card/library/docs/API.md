# Card Component API Documentation

## Overview

The Card component library exports four main components:

- `Card` - Main container component
- `CardHeader` - Header section with icon, title, and description
- `CardPreview` - Preview section for images or media
- `CardFooter` - Footer section for actions

## Card Component

### Description

The main card container that wraps all card content. It serves as the root component for building card layouts.

### Props

#### `appearance?: 'filled' | 'outline' | 'subtle'`

Defines the visual style of the card.

- **filled** (default): Full background color with shadow, used for primary content
- **outline**: Subtle border with transparent background, used for secondary content
- **subtle**: Minimal styling, used for tertiary content

**Example:**

```tsx
<Card appearance="filled">
  <CardHeader header={<b>Primary</b>} />
</Card>

<Card appearance="outline">
  <CardHeader header={<b>Secondary</b>} />
</Card>

<Card appearance="subtle">
  <CardHeader header={<b>Tertiary</b>} />
</Card>
```

#### `selected?: boolean`

Controls whether the card is currently selected. Used with `selectable` prop.

**Default:** `false`

**Example:**

```tsx
const [selected, setSelected] = useState(false);

<Card selected={selected} selectable onChange={() => setSelected(!selected)}>
  <CardHeader header={<b>Selectable Card</b>} />
</Card>;
```

#### `selectable?: boolean`

Enables selection functionality on the card. When true, allows users to select/deselect the card.

**Default:** `false`

**Example:**

```tsx
<Card selectable>
  <CardHeader header={<b>Click to select</b>} />
</Card>
```

#### `onSelectionChange?: (event: CardOnSelectionChangeEvent) => void`

Callback fired when the card's selection state changes.

**Event Details:**

```typescript
type CardOnSelectionChangeEvent = {
  selected: boolean;
  event: React.MouseEvent<HTMLDivElement>;
};
```

**Example:**

```tsx
<Card selectable onSelectionChange={e => console.log('Selected:', e.selected)}>
  <CardHeader header={<b>Card</b>} />
</Card>
```

#### `as?: React.ElementType`

Override the underlying HTML element. Defaults to `div`.

**Example:**

```tsx
<Card as="article">
  <CardHeader header={<b>Card Article</b>} />
</Card>
```

#### `className?: string`

Additional CSS class names to apply to the card.

**Example:**

```tsx
<Card className="my-card custom-style">
  <CardHeader header={<b>Styled Card</b>} />
</Card>
```

#### `style?: React.CSSProperties`

Inline styles for the card element.

**Example:**

```tsx
<Card style={{ maxWidth: '400px', margin: '16px' }}>
  <CardHeader header={<b>Sized Card</b>} />
</Card>
```

#### Additional Props

Inherits all standard `HTMLDivElement` attributes:

- `id`, `data-*` attributes, `role`, `aria-*` attributes, etc.

### Return Type

`React.ReactNode`

### Example Usage

```tsx
import { Card, CardHeader, CardFooter } from '@fluentui/react-components';
import { Button } from '@fluentui/react-components';

export const CardExample = () => {
  const [selected, setSelected] = useState(false);

  return (
    <Card appearance="filled" selected={selected} selectable onSelectionChange={e => setSelected(e.selected)}>
      <CardHeader header={<b>Card Title</b>} description="Subtitle or metadata" />
      <div style={{ padding: '12px' }}>
        <p>Card content goes here</p>
      </div>
      <CardFooter>
        <Button>Action</Button>
      </CardFooter>
    </Card>
  );
};
```

---

## CardHeader Component

### Description

Displays the header section of a card, typically containing an icon/avatar, title, and optional description or actions.

### Props

#### `image?: React.ReactNode`

Avatar or icon image to display on the left side of the header.

**Example:**

```tsx
<CardHeader image={<Avatar name="John Doe" />} header={<b>John Doe</b>} />
```

#### `header?: React.ReactNode`

Primary header text/content. Usually the main title of the card.

**Example:**

```tsx
<CardHeader header={<b>Important Title</b>} />

// With custom formatting
<CardHeader
  header={
    <div>
      <b>Title</b>
      <span style={{ marginLeft: '8px' }}>⭐</span>
    </div>
  }
/>
```

#### `description?: React.ReactNode`

Secondary descriptive text displayed below the header. Often used for metadata like dates or status.

**Example:**

```tsx
<CardHeader header={<b>New Message</b>} description="2 hours ago • From John Doe" />
```

#### `action?: React.ReactNode`

Action element to display on the right side of the header, typically an icon button or menu.

**Example:**

```tsx
import { MoreHorizontal16Regular } from '@fluentui/react-icons';
import { Button } from '@fluentui/react-components';

<CardHeader header={<b>Card Title</b>} action={<Button icon={<MoreHorizontal16Regular />} appearance="subtle" />} />;
```

#### `className?: string`

Additional CSS class names for the header.

#### `style?: React.CSSProperties`

Inline styles for the header.

### Return Type

`React.ReactNode`

### Example Usage

```tsx
import { CardHeader } from '@fluentui/react-components';
import { Avatar } from '@fluentui/react-components';
import { MoreHorizontal16Regular } from '@fluentui/react-icons';
import { Button } from '@fluentui/react-components';

export const CardHeaderExample = () => (
  <CardHeader
    image={<Avatar name="Jane Smith" />}
    header={<b>Jane Smith</b>}
    description="Last updated: 2024-01-20"
    action={<Button icon={<MoreHorizontal16Regular />} appearance="subtle" />}
  />
);
```

---

## CardPreview Component

### Description

Displays a preview section, typically for images, document thumbnails, or media content.

### Props

#### `logo?: React.ReactNode`

Logo or icon to display over the preview content, typically in a corner.

**Example:**

```tsx
import { DocumentPDF16Regular } from '@fluentui/react-icons';

<CardPreview logo={<DocumentPDF16Regular />}>
  <img src="document-thumbnail.png" alt="Document preview" />
</CardPreview>;
```

#### `children?: React.ReactNode`

Preview content, typically an image or media element.

**Example:**

```tsx
<CardPreview>
  <img
    src="preview-image.jpg"
    alt="Content preview"
    style={{ width: '100%', height: 'auto' }}
  />
</CardPreview>

// With video
<CardPreview>
  <video width="100%" height="auto" controls>
    <source src="video.mp4" type="video/mp4" />
  </video>
</CardPreview>
```

#### `className?: string`

Additional CSS class names for the preview.

#### `style?: React.CSSProperties`

Inline styles for the preview.

### Return Type

`React.ReactNode`

### Example Usage

```tsx
import { CardPreview } from '@fluentui/react-components';
import { DocumentWord16Regular } from '@fluentui/react-icons';

export const CardPreviewExample = () => (
  <CardPreview logo={<DocumentWord16Regular style={{ width: '32px', height: '32px' }} />}>
    <img src="word-document-thumbnail.png" alt="Word document preview" style={{ width: '100%', height: 'auto' }} />
  </CardPreview>
);
```

---

## CardFooter Component

### Description

Displays the footer section of a card, typically containing action buttons or additional controls.

### Props

#### `action?: React.ReactNode`

Primary action element, usually a button or action group.

**Example:**

```tsx
import { Button } from '@fluentui/react-components';

<CardFooter action={<Button appearance="primary">Submit</Button>} />;
```

#### `children?: React.ReactNode`

Footer content, typically buttons or controls. Can contain multiple action elements.

**Example:**

```tsx
import { Button } from '@fluentui/react-components';

<CardFooter>
  <Button appearance="primary">Save</Button>
  <Button appearance="secondary">Cancel</Button>
</CardFooter>;
```

#### `className?: string`

Additional CSS class names for the footer.

#### `style?: React.CSSProperties`

Inline styles for the footer.

### Return Type

`React.ReactNode`

### Example Usage

```tsx
import { CardFooter } from '@fluentui/react-components';
import { Button } from '@fluentui/react-components';

export const CardFooterExample = () => (
  <CardFooter>
    <Button appearance="primary" size="small">
      Accept
    </Button>
    <Button appearance="secondary" size="small">
      Decline
    </Button>
    <Button appearance="subtle" size="small">
      Learn More
    </Button>
  </CardFooter>
);
```

---

## Type Definitions

### CardOnSelectionChangeEvent

```typescript
type CardOnSelectionChangeEvent = {
  selected: boolean;
  event: React.MouseEvent<HTMLDivElement>;
};
```

### CardContextValue

```typescript
type CardContextValue = {
  selected?: boolean;
  appearance?: 'filled' | 'outline' | 'subtle';
  disabled?: boolean;
};
```

---

## Styling & CSS Custom Properties

### Available CSS Custom Properties

The Card component respects the following CSS custom properties for layout and spacing:

#### Spacing

- `--card-horizontal`: Horizontal padding (default: 12px)
- `--card-vertical`: Vertical padding (default: 12px)
- `--card-gap`: Gap between card sections (default: 12px)

#### Typography

- `--typography/font-family/base`: Base font family (default: 'Segoe UI')
- `--typography/font-size/300`: Heading font size (default: 14px)
- `--typography/font-size/200`: Body font size (default: 12px)
- `--typography/line-height/300`: Heading line height (default: 20px)
- `--typography/line-height/200`: Body line height (default: 16px)

#### Colors (varies by theme)

- `--NeutralBackground1.Rest`: Card background
- `--NeutralForeground1.Rest`: Primary text color
- `--NeutralForeground2.Rest`: Secondary text color
- `--NeutralStroke1.Rest`: Border color
- `--BrandBackground.Rest`: Brand/primary color

### Using CSS Custom Properties

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
  <Card>{/* Card will use custom spacing */}</Card>
</div>
```

---

## Best Practices

### 1. Semantic Content Structure

```tsx
// ✓ GOOD: Clear semantic structure
<Card>
  <CardHeader
    header={<h3>Title</h3>}
    description="Metadata"
  />
  <div style={{ padding: '12px' }}>
    <p>Main content</p>
  </div>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>

// ✗ BAD: Unclear structure
<Card>
  <div>Title Metadata Main content</div>
  <Button>Action</Button>
</Card>
```

### 2. Consistent Appearance

```tsx
// ✓ GOOD: Use consistent appearance
const CARD_APPEARANCE = 'filled';

{
  cards.map(card => (
    <Card key={card.id} appearance={CARD_APPEARANCE}>
      {/* ... */}
    </Card>
  ));
}

// ✗ BAD: Inconsistent appearances
{
  cards.map((card, i) => (
    <Card key={card.id} appearance={i % 2 === 0 ? 'filled' : 'outline'}>
      {/* ... */}
    </Card>
  ));
}
```

### 3. Proper Selection Handling

```tsx
// ✓ GOOD: Controlled selection
const [selectedCards, setSelectedCards] = useState<Set<string>>(new Set());

{
  cards.map(card => (
    <Card
      key={card.id}
      selectable
      selected={selectedCards.has(card.id)}
      onSelectionChange={e => {
        const newSet = new Set(selectedCards);
        if (e.selected) {
          newSet.add(card.id);
        } else {
          newSet.delete(card.id);
        }
        setSelectedCards(newSet);
      }}
    >
      {/* ... */}
    </Card>
  ));
}

// ✗ BAD: Uncontrolled selection
{
  cards.map(card => (
    <Card key={card.id} selectable defaultSelected>
      {/* ... */}
    </Card>
  ));
}
```

### 4. Accessibility

```tsx
// ✓ GOOD: Accessible markup
<Card role="option" aria-selected={selected}>
  <CardHeader header={<h3>Title</h3>} />
  <CardFooter>
    <Button aria-label="View details">View</Button>
  </CardFooter>
</Card>

// ✗ BAD: Missing accessibility
<Card onClick={handleClick}>
  <div>Title</div>
  <div onClick={handleAction}>View</div>
</Card>
```

---

## Common Patterns

### Multi-Select Card Grid

```tsx
import { useState } from 'react';
import { Card, CardHeader, CardFooter } from '@fluentui/react-components';
import { Button } from '@fluentui/react-components';

export const MultiSelectCardGrid = ({ items }) => {
  const [selected, setSelected] = useState<Set<string>>(new Set());

  const handleSelectAll = () => {
    if (selected.size === items.length) {
      setSelected(new Set());
    } else {
      setSelected(new Set(items.map(item => item.id)));
    }
  };

  return (
    <div>
      <Button onClick={handleSelectAll}>{selected.size === items.length ? 'Deselect All' : 'Select All'}</Button>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '16px',
        }}
      >
        {items.map(item => (
          <Card
            key={item.id}
            selectable
            selected={selected.has(item.id)}
            onSelectionChange={e => {
              const newSet = new Set(selected);
              if (e.selected) {
                newSet.add(item.id);
              } else {
                newSet.delete(item.id);
              }
              setSelected(newSet);
            }}
          >
            <CardHeader header={<b>{item.name}</b>} />
            <CardFooter>
              <Button size="small">Details</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};
```

### Dismissible Card

```tsx
import { useState } from 'react';
import { Card, CardHeader, CardFooter } from '@fluentui/react-components';
import { Button } from '@fluentui/react-components';
import { Dismiss16Regular } from '@fluentui/react-icons';

export const DismissibleCard = ({ title, onDismiss }) => {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <Card>
      <CardHeader
        header={<b>{title}</b>}
        action={
          <Button
            icon={<Dismiss16Regular />}
            appearance="subtle"
            onClick={() => {
              setDismissed(true);
              onDismiss?.();
            }}
          />
        }
      />
    </Card>
  );
};
```

---

## Troubleshooting

### Card not responding to clicks

**Issue:** Selectable cards not responding to selection
**Solution:** Ensure both `selectable` and `onSelectionChange` are provided:

```tsx
<Card selectable selected={selected} onSelectionChange={e => setSelected(e.selected)}>
  {/* ... */}
</Card>
```

### Styling not applying

**Issue:** CSS classes or inline styles not applying to card
**Solution:** Ensure you're not using conflicting styles. Check for specificity issues:

```tsx
<Card className="custom-card" style={{ maxWidth: '400px' }}>
  {/* ... */}
</Card>
```

### Header content overflowing

**Issue:** Header content extending beyond card bounds
**Solution:** Use proper text truncation and wrapping:

```tsx
<CardHeader
  header={
    <b
      style={{
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
      }}
    >
      Long Title
    </b>
  }
/>
```

---

## Accessibility Compliance

The Card component follows WAI-ARIA guidelines:

- Semantic HTML structure
- Proper heading hierarchy
- Keyboard navigation support
- Screen reader friendly
- Color contrast compliance
- Focus management

For more information, see [WCAG 2.1](https://www.w3.org/WAI/WCAG21/quickref/) guidelines.
