# Card Component - Implementation Guide

## Introduction

This guide provides detailed implementation guidance for using the Card component in your Fluent UI React applications. It covers design patterns, advanced usage, and integration strategies.

## Table of Contents

1. [Basic Implementation](#basic-implementation)
2. [Layout Patterns](#layout-patterns)
3. [State Management](#state-management)
4. [Styling & Theming](#styling--theming)
5. [Advanced Patterns](#advanced-patterns)
6. [Performance Optimization](#performance-optimization)
7. [Common Use Cases](#common-use-cases)

---

## Basic Implementation

### Minimal Card

The simplest card contains just a header:

```tsx
import { Card, CardHeader } from '@fluentui/react-components';

export const MinimalCard = () => (
  <Card>
    <CardHeader header={<b>Simple Card</b>} />
  </Card>
);
```

### Full-Featured Card

A comprehensive card with all sections:

```tsx
import { Card, CardHeader, CardPreview, CardFooter } from '@fluentui/react-components';
import { Button } from '@fluentui/react-components';
import { Avatar } from '@fluentui/react-components';

export const FullCard = () => (
  <Card>
    <CardHeader image={<Avatar name="John Doe" />} header={<b>John Doe</b>} description="Software Engineer" />
    <CardPreview>
      <img src="preview.jpg" alt="Preview" style={{ width: '100%' }} />
    </CardPreview>
    <div style={{ padding: '12px' }}>
      <p>Additional content goes here</p>
    </div>
    <CardFooter>
      <Button appearance="primary">View Profile</Button>
      <Button appearance="secondary">Message</Button>
    </CardFooter>
  </Card>
);
```

---

## Layout Patterns

### Horizontal Layout

Display content side-by-side:

```tsx
import { Card, CardHeader } from '@fluentui/react-components';

export const HorizontalCard = () => (
  <Card style={{ display: 'flex', gap: '16px' }}>
    <div style={{ flexShrink: 0 }}>
      <img src="thumbnail.jpg" alt="Thumbnail" style={{ width: '100px', height: '100px', borderRadius: '8px' }} />
    </div>
    <CardHeader header={<b>Title</b>} description="Description text" />
  </Card>
);
```

### Vertical Layout (Default)

Stack content vertically:

```tsx
import { Card, CardHeader, CardPreview, CardFooter } from '@fluentui/react-components';

export const VerticalCard = () => (
  <Card>
    <CardPreview>
      <img src="preview.jpg" alt="Preview" style={{ width: '100%' }} />
    </CardPreview>
    <CardHeader header={<b>Title</b>} />
    <div style={{ padding: '12px' }}>Content</div>
    <CardFooter>
      <button>Action</button>
    </CardFooter>
  </Card>
);
```

### Two-Column Grid

Arrange cards in a responsive grid:

```tsx
export const CardGrid = ({ cards }) => (
  <div
    style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
      gap: '16px',
      padding: '16px',
    }}
  >
    {cards.map(card => (
      <Card key={card.id}>
        <CardHeader header={<b>{card.title}</b>} />
      </Card>
    ))}
  </div>
);
```

### Three-Column Grid

Larger screen layout:

```tsx
export const ThreeColumnGrid = ({ cards }) => (
  <div
    style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
      gap: '20px',
      padding: '20px',
    }}
  >
    {cards.map(card => (
      <Card key={card.id} appearance="filled">
        <CardHeader header={<b>{card.title}</b>} />
      </Card>
    ))}
  </div>
);
```

---

## State Management

### Local State

Simple local selection state:

```tsx
import { useState } from 'react';
import { Card, CardHeader } from '@fluentui/react-components';

export const LocalStateCard = () => {
  const [selected, setSelected] = useState(false);

  return (
    <Card selectable selected={selected} onSelectionChange={e => setSelected(e.selected)}>
      <CardHeader header={<b>Selected: {selected.toString()}</b>} />
    </Card>
  );
};
```

### Multiple Card Selection

Manage selection across multiple cards:

```tsx
import { useState } from 'react';
import { Card, CardHeader } from '@fluentui/react-components';

export const MultiSelectCards = ({ cards }) => {
  const [selected, setSelected] = useState<Set<string>>(new Set());

  const toggleCard = (cardId: string, isSelected: boolean) => {
    const newSet = new Set(selected);
    if (isSelected) {
      newSet.add(cardId);
    } else {
      newSet.delete(cardId);
    }
    setSelected(newSet);
  };

  return (
    <div>
      {cards.map(card => (
        <Card
          key={card.id}
          selectable
          selected={selected.has(card.id)}
          onSelectionChange={e => toggleCard(card.id, e.selected)}
        >
          <CardHeader header={<b>{card.title}</b>} />
        </Card>
      ))}
    </div>
  );
};
```

### With Context API

Share card state across the component tree:

```tsx
import { createContext, useContext, useState, ReactNode } from 'react';
import { Card, CardHeader } from '@fluentui/react-components';

type CardContextType = {
  selected: Set<string>;
  toggleCard: (id: string) => void;
};

const CardContext = createContext<CardContextType | null>(null);

export const CardSelectionProvider = ({ children }: { children: ReactNode }) => {
  const [selected, setSelected] = useState<Set<string>>(new Set());

  const toggleCard = (id: string) => {
    const newSet = new Set(selected);
    if (newSet.has(id)) {
      newSet.delete(id);
    } else {
      newSet.add(id);
    }
    setSelected(newSet);
  };

  return <CardContext.Provider value={{ selected, toggleCard }}>{children}</CardContext.Provider>;
};

const useCardSelection = () => {
  const context = useContext(CardContext);
  if (!context) {
    throw new Error('useCardSelection must be used within CardSelectionProvider');
  }
  return context;
};

export const SelectableCardWithContext = ({ cardId }: { cardId: string }) => {
  const { selected, toggleCard } = useCardSelection();
  const isSelected = selected.has(cardId);

  return (
    <Card
      selectable
      selected={isSelected}
      onSelectionChange={e => {
        if (e.selected) {
          toggleCard(cardId);
        } else {
          toggleCard(cardId);
        }
      }}
    >
      <CardHeader header={<b>Card {cardId}</b>} />
    </Card>
  );
};
```

---

## Styling & Theming

### Appearance Variants

Use different appearances for visual hierarchy:

```tsx
import { Card, CardHeader } from '@fluentui/react-components';

export const AppearanceVariants = () => (
  <>
    {/* Primary - for main content */}
    <Card appearance="filled">
      <CardHeader header={<b>Primary</b>} />
    </Card>

    {/* Secondary - for supporting content */}
    <Card appearance="outline">
      <CardHeader header={<b>Secondary</b>} />
    </Card>

    {/* Tertiary - for minimal prominence */}
    <Card appearance="subtle">
      <CardHeader header={<b>Tertiary</b>} />
    </Card>
  </>
);
```

### Custom CSS

Add custom styling while respecting design system:

```tsx
import { Card, CardHeader } from '@fluentui/react-components';
import styles from './CustomCard.module.css';

export const CustomStyledCard = () => (
  <Card className={styles.customCard}>
    <CardHeader header={<b>Custom Styled</b>} />
  </Card>
);

// CustomCard.module.css
export const customCard = {
  maxWidth: '400px',
  borderRadius: '12px',
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
};
```

### CSS Custom Properties

Override spacing and sizing:

```tsx
export const CustomSpacingCard = () => (
  <div
    style={
      {
        '--card-horizontal': '24px',
        '--card-vertical': '20px',
        '--card-gap': '16px',
      } as React.CSSProperties
    }
  >
    <Card>
      <CardHeader header={<b>Custom Spacing</b>} />
    </Card>
  </div>
);
```

### Theme-Based Styling

Apply different styles based on theme:

```tsx
import { useFluentTheme } from '@fluentui/react-provider';
import { Card, CardHeader } from '@fluentui/react-components';

export const ThemeAwareCard = () => {
  const theme = useFluentTheme();

  return (
    <Card
      style={{
        backgroundColor: theme.colorNeutralBackground1,
        color: theme.colorNeutralForeground1,
      }}
    >
      <CardHeader header={<b>Theme Aware</b>} />
    </Card>
  );
};
```

---

## Advanced Patterns

### Draggable Cards

Make cards draggable:

```tsx
import { Card, CardHeader } from '@fluentui/react-components';
import { useState } from 'react';

export const DraggableCard = ({ id, title, onDragStart, onDragEnd }) => {
  const [isDragging, setIsDragging] = useState(false);

  return (
    <Card
      style={{
        opacity: isDragging ? 0.7 : 1,
        cursor: 'grab',
        transition: 'opacity 0.2s',
      }}
      draggable
      onDragStart={e => {
        setIsDragging(true);
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('cardId', id);
        onDragStart?.(id);
      }}
      onDragEnd={e => {
        setIsDragging(false);
        onDragEnd?.(id);
      }}
    >
      <CardHeader header={<b>{title}</b>} />
    </Card>
  );
};
```

### Animated Cards

Add transitions and animations:

```tsx
import { Card, CardHeader } from '@fluentui/react-components';
import styles from './AnimatedCard.module.css';

export const AnimatedCard = () => (
  <Card className={styles.animatedCard}>
    <CardHeader header={<b>Animated</b>} />
  </Card>
);

// AnimatedCard.module.css
.animatedCard {
  animation: slideIn 0.3s ease-out;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.animatedCard:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

### Expandable Card

Cards that expand to show more content:

```tsx
import { Card, CardHeader, CardFooter } from '@fluentui/react-components';
import { Button } from '@fluentui/react-components';
import { ChevronDown16Regular } from '@fluentui/react-icons';
import { useState } from 'react';

export const ExpandableCard = ({ title, preview, details }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Card>
      <CardHeader
        header={<b>{title}</b>}
        action={<Button icon={<ChevronDown16Regular />} onClick={() => setExpanded(!expanded)} appearance="subtle" />}
      />
      <div style={{ padding: '12px' }}>
        {preview}
        {expanded && details}
      </div>
    </Card>
  );
};
```

---

## Performance Optimization

### Memoization

Prevent unnecessary re-renders:

```tsx
import { memo, Card, CardHeader } from '@fluentui/react-components';

interface CardItemProps {
  id: string;
  title: string;
  selected: boolean;
  onSelectionChange: (e: any) => void;
}

export const MemoizedCard = memo(
  ({ id, title, selected, onSelectionChange }: CardItemProps) => (
    <Card selectable selected={selected} onSelectionChange={onSelectionChange}>
      <CardHeader header={<b>{title}</b>} />
    </Card>
  ),
  (prevProps, nextProps) => {
    // Custom comparison for better performance
    return (
      prevProps.id === nextProps.id && prevProps.title === nextProps.title && prevProps.selected === nextProps.selected
    );
  },
);

MemoizedCard.displayName = 'MemoizedCard';
```

### Virtual Scrolling

Render large lists efficiently:

```tsx
import { FixedSizeList as List } from 'react-window';
import { Card, CardHeader } from '@fluentui/react-components';

interface VirtualCardListProps {
  items: Array<{ id: string; title: string }>;
  height: number;
}

export const VirtualCardList = ({ items, height }: VirtualCardListProps) => (
  <List height={height} itemCount={items.length} itemSize={164} width="100%">
    {({ index, style }) => (
      <div style={style}>
        <Card>
          <CardHeader header={<b>{items[index].title}</b>} />
        </Card>
      </div>
    )}
  </List>
);
```

### Lazy Loading

Load card content on demand:

```tsx
import { Card, CardHeader, CardFooter } from '@fluentui/react-components';
import { Skeleton } from '@fluentui/react-components';
import { useEffect, useState } from 'react';

export const LazyLoadCard = ({ cardId }: { cardId: string }) => {
  const [content, setContent] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadContent = async () => {
      try {
        // Simulate async content loading
        await new Promise(resolve => setTimeout(resolve, 1000));
        setContent('Loaded content');
      } finally {
        setLoading(false);
      }
    };

    loadContent();
  }, [cardId]);

  return (
    <Card>
      <CardHeader header={<b>Card {cardId}</b>} />
      {loading ? (
        <Skeleton count={3} />
      ) : (
        <div style={{ padding: '12px' }}>
          <p>{content}</p>
        </div>
      )}
    </Card>
  );
};
```

---

## Common Use Cases

### Document Card

Display document information:

```tsx
import { Card, CardHeader, CardPreview, CardFooter } from '@fluentui/react-components';
import { Button } from '@fluentui/react-components';
import { DocumentPDF16Regular, Open16Regular } from '@fluentui/react-icons';

export const DocumentCard = ({ title, author, date, thumbnail }) => (
  <Card appearance="filled">
    <CardHeader header={<b>{title}</b>} description={`By ${author} • ${date}`} />
    <CardPreview logo={<DocumentPDF16Regular />}>
      <img src={thumbnail} alt={title} style={{ width: '100%' }} />
    </CardPreview>
    <CardFooter>
      <Button icon={<Open16Regular />}>Open</Button>
    </CardFooter>
  </Card>
);
```

### Profile Card

Display user profile:

```tsx
import { Card, CardHeader, CardFooter } from '@fluentui/react-components';
import { Button } from '@fluentui/react-components';
import { Avatar } from '@fluentui/react-components';
import { Mail16Regular, Phone16Regular } from '@fluentui/react-icons';

export const ProfileCard = ({ name, role, email, phone, avatar }) => (
  <Card appearance="filled">
    <CardHeader image={<Avatar name={name} image={{ src: avatar }} />} header={<b>{name}</b>} description={role} />
    <div style={{ padding: '12px' }}>
      <p style={{ margin: '8px 0' }}>
        <Mail16Regular style={{ marginRight: '8px' }} />
        {email}
      </p>
      <p style={{ margin: '8px 0' }}>
        <Phone16Regular style={{ marginRight: '8px' }} />
        {phone}
      </p>
    </div>
    <CardFooter>
      <Button appearance="primary">View Profile</Button>
    </CardFooter>
  </Card>
);
```

### Product Card

Display product information:

```tsx
import { Card, CardHeader, CardPreview, CardFooter } from '@fluentui/react-components';
import { Button, Badge } from '@fluentui/react-components';
import { Star16Filled } from '@fluentui/react-icons';

export const ProductCard = ({ name, price, rating, image, discount }) => (
  <Card appearance="filled">
    <CardHeader
      header={<b>{name}</b>}
      description={`$${price}`}
      action={
        discount && (
          <Badge appearance="brand" size="large">
            {discount}% OFF
          </Badge>
        )
      }
    />
    <CardPreview>
      <img src={image} alt={name} style={{ width: '100%' }} />
    </CardPreview>
    <div style={{ padding: '12px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
        <Star16Filled style={{ color: '#FFB900' }} />
        <span>{rating}/5</span>
      </div>
    </div>
    <CardFooter>
      <Button appearance="primary">Add to Cart</Button>
    </CardFooter>
  </Card>
);
```

---

## Testing

### Unit Testing Example

```tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { Card, CardHeader, CardFooter } from '@fluentui/react-components';
import { Button } from '@fluentui/react-components';

describe('Card Component', () => {
  it('renders card with header', () => {
    render(
      <Card>
        <CardHeader header={<b>Test Card</b>} />
      </Card>,
    );

    expect(screen.getByText('Test Card')).toBeInTheDocument();
  });

  it('handles selection state', () => {
    const { rerender } = render(
      <Card selectable selected={false}>
        <CardHeader header="Selectable" />
      </Card>,
    );

    rerender(
      <Card selectable selected={true}>
        <CardHeader header="Selectable" />
      </Card>,
    );

    // Test that selected state is applied
  });

  it('calls onSelectionChange handler', () => {
    const handleChange = jest.fn();

    render(
      <Card selectable onSelectionChange={handleChange}>
        <CardHeader header="Card" />
      </Card>,
    );

    fireEvent.click(screen.getByRole('presentation'));
    expect(handleChange).toHaveBeenCalled();
  });
});
```

---

## Summary

This implementation guide covers:

- ✓ Basic to advanced Card usage
- ✓ Layout patterns for different scenarios
- ✓ State management approaches
- ✓ Styling and theming strategies
- ✓ Performance optimization techniques
- ✓ Common use cases with code examples
- ✓ Testing approaches

For more information, visit the [API documentation](./API.md) or check out the [Storybook examples](https://react.fluentui.dev/?path=/docs/components-card--default).
