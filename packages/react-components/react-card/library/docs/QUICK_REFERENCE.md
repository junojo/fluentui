# Card Component - Quick Reference

## Import

```tsx
import { Card, CardHeader, CardPreview, CardFooter } from '@fluentui/react-components';
```

---

## Basic Usage

### Minimal Card

```tsx
<Card>
  <CardHeader header={<b>Title</b>} />
</Card>
```

### Full Card

```tsx
<Card>
  <CardHeader header={<b>Title</b>} description="Subtitle" />
  <CardPreview>
    <img src="image.jpg" alt="Preview" />
  </CardPreview>
  <div style={{ padding: '12px' }}>Content</div>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>
```

---

## Component Props

### Card

| Prop              | Type                              | Default  | Description       |
| ----------------- | --------------------------------- | -------- | ----------------- |
| appearance        | 'filled' \| 'outline' \| 'subtle' | 'filled' | Visual style      |
| selected          | boolean                           | false    | Selection state   |
| selectable        | boolean                           | false    | Enable selection  |
| onSelectionChange | function                          | -        | Selection handler |

### CardHeader

| Prop        | Type      | Description       |
| ----------- | --------- | ----------------- |
| image       | ReactNode | Avatar/icon       |
| header      | ReactNode | Title/main text   |
| description | ReactNode | Subtitle/metadata |
| action      | ReactNode | Right-side action |

### CardPreview

| Prop     | Type      | Description     |
| -------- | --------- | --------------- |
| logo     | ReactNode | Logo overlay    |
| children | ReactNode | Preview content |

### CardFooter

| Prop     | Type      | Description    |
| -------- | --------- | -------------- |
| action   | ReactNode | Primary action |
| children | ReactNode | Footer content |

---

## Appearance Variants

```tsx
// Primary - filled background
<Card appearance="filled">...</Card>

// Secondary - outline border
<Card appearance="outline">...</Card>

// Tertiary - minimal styling
<Card appearance="subtle">...</Card>
```

---

## Selection

```tsx
const [selected, setSelected] = useState(false);

<Card selectable selected={selected} onSelectionChange={e => setSelected(e.selected)}>
  <CardHeader header={<b>Selectable</b>} />
</Card>;
```

---

## Layouts

### Grid

```tsx
<div
  style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
    gap: '16px',
  }}
>
  {items.map(item => (
    <Card key={item.id}>...</Card>
  ))}
</div>
```

### List

```tsx
<div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
  {items.map(item => (
    <Card key={item.id} style={{ minWidth: 0 }}>
      ...
    </Card>
  ))}
</div>
```

---

## Common Examples

### Document Card

```tsx
<Card>
  <CardHeader header={<b>document.pdf</b>} description="2.4 MB • Modified today" />
  <CardPreview>
    <img src="thumb.jpg" alt="Document" />
  </CardPreview>
</Card>
```

### Contact Card

```tsx
<Card>
  <CardHeader image={<Avatar name="John Doe" />} header={<b>John Doe</b>} description="Software Engineer" />
  <CardFooter>
    <Button>Message</Button>
  </CardFooter>
</Card>
```

### Product Card

```tsx
<Card>
  <CardPreview>
    <img src="product.jpg" alt="Product" />
  </CardPreview>
  <CardHeader header={<b>Product Name</b>} description="$99.99" />
  <CardFooter>
    <Button appearance="primary">Buy Now</Button>
  </CardFooter>
</Card>
```

---

## Styling

### Custom Spacing

```tsx
<div style={{ '--card-horizontal': '16px', '--card-vertical': '16px' } as CSSProperties}>
  <Card>...</Card>
</div>
```

### Custom Class

```tsx
<Card className="my-custom-class">...</Card>
```

### Inline Styles

```tsx
<Card style={{ maxWidth: '400px', marginBottom: '16px' }}>...</Card>
```

---

## Interactions

### Clickable

```tsx
<Card onClick={() => navigate(`/item/${id}`)}>...</Card>
```

### Draggable

```tsx
<Card draggable onDragStart={e => e.dataTransfer.setData('id', itemId)}>
  ...
</Card>
```

### Dismissible

```tsx
const [dismissed, setDismissed] = useState(false);

{
  !dismissed && (
    <Card>
      <CardHeader
        action={<Button icon={<Dismiss16Regular />} onClick={() => setDismissed(true)} />}
        header={<b>Title</b>}
      />
    </Card>
  );
}
```

---

## Accessibility

```tsx
<Card
  role="option"
  aria-selected={selected}
  tabIndex={0}
  onKeyDown={e => {
    if (e.key === 'Enter' || e.key === ' ') {
      handleAction();
    }
  }}
>
  <CardHeader header={<b>Title</b>} />
</Card>
```

---

## States

| State     | Appearance         | Use Case        |
| --------- | ------------------ | --------------- |
| Rest      | Default styling    | Default view    |
| Hover     | Lifted shadow      | Visual feedback |
| Pressed   | Pressed appearance | Active press    |
| Selected  | Brand border       | Selected item   |
| Disabled  | Reduced opacity    | Inactive card   |
| Draggable | Reduced opacity    | During drag     |

---

## CSS Custom Properties

| Property            | Default | Description          |
| ------------------- | ------- | -------------------- |
| `--card-horizontal` | 12px    | Horizontal padding   |
| `--card-vertical`   | 12px    | Vertical padding     |
| `--card-gap`        | 12px    | Gap between sections |

---

## Common Patterns

### Multi-Select

```tsx
const [selected, setSelected] = useState<Set<string>>(new Set());

{
  items.map(item => (
    <Card
      key={item.id}
      selectable
      selected={selected.has(item.id)}
      onSelectionChange={e => {
        const newSet = new Set(selected);
        e.selected ? newSet.add(item.id) : newSet.delete(item.id);
        setSelected(newSet);
      }}
    >
      <CardHeader header={<b>{item.title}</b>} />
    </Card>
  ));
}
```

### Select All

```tsx
const allSelected = selected.size === items.length;

<>
  <Button onClick={() => setSelected(allSelected ? new Set() : new Set(items.map(i => i.id)))}>
    {allSelected ? 'Deselect All' : 'Select All'}
  </Button>
  {/* Cards */}
</>;
```

### Loading State

```tsx
{
  loading ? (
    <Card>
      <Skeleton count={3} />
    </Card>
  ) : (
    <Card>
      <CardHeader header={<b>{title}</b>} />
    </Card>
  );
}
```

---

## Performance Tips

1. **Memoize cards** when in large lists
2. **Virtual scroll** for 100+ items
3. **Lazy load** card content
4. **Avoid inline functions** in event handlers

---

## Troubleshooting

| Issue                           | Solution                                              |
| ------------------------------- | ----------------------------------------------------- |
| Card not selectable             | Add `selectable` prop and `onSelectionChange` handler |
| Styles not applying             | Check CSS specificity, ensure provider wraps cards    |
| Content overflowing             | Use proper text truncation, set max-width             |
| Keyboard navigation not working | Add `tabIndex` and keyboard event handlers            |

---

## Related Components

- **Button** - Actions in CardFooter
- **Avatar** - Images in CardHeader
- **Badge** - Status indicators
- **Skeleton** - Loading state
- **Dialog** - Card detail view

---

## Documentation

- [Full API Reference](./API.md)
- [Implementation Guide](./IMPLEMENTATION_GUIDE.md)
- [Design Tokens](./DESIGN_TOKENS.md)
- [Usage Guidelines](./USAGE_GUIDELINES.md)
- [Storybook](https://react.fluentui.dev/?path=/docs/components-card--default)

---

## Key Features

✓ Multiple appearance variants (filled, outline, subtle)
✓ Selectable with multi-select support
✓ Responsive grid layouts
✓ Accessible (WCAG AA compliant)
✓ Full theming support
✓ Keyboard navigation
✓ Drag and drop ready
✓ TypeScript support

---

## Version

Current: @fluentui/react-components v9 - Fluent 2 Design System
