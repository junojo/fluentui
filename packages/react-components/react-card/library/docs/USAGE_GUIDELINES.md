# Card Component - Usage Guidelines

## When to Use Cards

Cards are ideal for presenting self-contained pieces of information that users can interact with or navigate to for more details. They work best in grid or list layouts.

### ✓ Use Cards When:

1. **Displaying Similar Items** - Multiple items of the same type (documents, contacts, products)
2. **Container Pattern Needed** - Information needs scaffolding with header, body, and footer
3. **Grid Layouts** - Presenting data in a responsive grid with consistent spacing
4. **Selective Actions** - Users need to select multiple items for bulk operations
5. **Preview Content** - Showing thumbnails or previews of larger content
6. **Hierarchical Content** - Content has a clear structure (title, description, actions)

### ✗ Don't Use Cards When:

1. **Simple Lists** - Just a few lines of text (use list items instead)
2. **Page Layout** - Structuring main page sections (use containers/sections)
3. **Forms** - Primary purpose is data input (use form components)
4. **Navigation** - Primary purpose is navigating elsewhere (use links/nav)
5. **Single Element** - One piece of information (unnecessary container)
6. **Deeply Nested** - Cards within cards (confusing hierarchy)

---

## Common Use Cases

### 1. Document/File Cards

**Purpose:** Display files or documents for browsing and action

**Key Elements:**

- Document icon/thumbnail
- File name and type
- Metadata (date, size, author)
- Actions (open, download, share)

**Example:**

```tsx
<Card>
  <CardHeader header={<b>Q4 Report.docx</b>} description="Modified 2 hours ago • 2.4 MB" />
  <CardPreview>
    <img src="document-preview.jpg" alt="Document" />
  </CardPreview>
  <CardFooter>
    <Button icon={<Open16Regular />}>Open</Button>
    <Button icon={<Download16Regular />}>Download</Button>
  </CardFooter>
</Card>
```

### 2. Contact/Profile Cards

**Purpose:** Display people, accounts, or profiles

**Key Elements:**

- Avatar image
- Name and role/title
- Contact information or status
- Profile actions (message, connect, etc.)

**Example:**

```tsx
<Card>
  <CardHeader image={<Avatar name="Sarah Johnson" />} header={<b>Sarah Johnson</b>} description="Product Manager" />
  <div style={{ padding: '12px' }}>
    <p>sarah.johnson@company.com</p>
    <p>Seattle, WA</p>
  </div>
  <CardFooter>
    <Button>Send Message</Button>
    <Button appearance="secondary">View Profile</Button>
  </CardFooter>
</Card>
```

### 3. Product Cards

**Purpose:** Display products for e-commerce or marketplaces

**Key Elements:**

- Product image
- Product name and price
- Rating or reviews
- Stock status
- Purchase or add-to-cart action

**Example:**

```tsx
<Card>
  <CardPreview>
    <img src="product.jpg" alt="Product" />
  </CardPreview>
  <CardHeader header={<b>Premium Headphones</b>} description="$199.99" />
  <div style={{ padding: '12px' }}>
    <div style={{ display: 'flex', gap: '4px' }}>
      {[1, 2, 3, 4, 5].map(i => (
        <Star16Filled key={i} style={{ color: '#FFB900' }} />
      ))}
      <span>4.8 (234 reviews)</span>
    </div>
  </div>
  <CardFooter>
    <Button appearance="primary">Add to Cart</Button>
  </CardFooter>
</Card>
```

### 4. News/Article Cards

**Purpose:** Display article summaries or news items

**Key Elements:**

- Article title
- Featured image
- Summary/excerpt
- Publication date and author
- Read more action

**Example:**

```tsx
<Card>
  <CardPreview>
    <img src="article-image.jpg" alt="Article" style={{ width: '100%' }} />
  </CardPreview>
  <CardHeader header={<b>Latest Industry Trends</b>} />
  <div style={{ padding: '12px' }}>
    <p>Discover the latest innovations reshaping the technology landscape...</p>
    <p style={{ fontSize: '12px', color: '#616161' }}>By John Smith • 3 hours ago</p>
  </div>
  <CardFooter>
    <Button appearance="primary">Read Article</Button>
  </CardFooter>
</Card>
```

### 5. Task/Status Cards

**Purpose:** Display tasks, issues, or status items

**Key Elements:**

- Task/issue title
- Status badge
- Priority indicator
- Assignee
- Action/due date
- Quick actions

**Example:**

```tsx
<Card selected={isSelected} selectable onSelectionChange={handleSelect}>
  <CardHeader header={<b>Implement dark mode</b>} action={<Badge>High Priority</Badge>} />
  <div style={{ padding: '12px' }}>
    <p>Assigned to: John Doe</p>
    <p>Due: January 25, 2025</p>
  </div>
  <CardFooter>
    <Button appearance="primary">Start</Button>
    <Button appearance="secondary">Details</Button>
  </CardFooter>
</Card>
```

---

## Best Practices

### Content Organization

#### ✓ DO: Clear Information Hierarchy

```tsx
<Card>
  <CardHeader
    header={<b>Main Topic</b>}           {/* Most important */}
    description="Supporting context"     {/* Secondary */}
  />
  <div style={{ padding: '12px' }}>
    <p>Additional details...</p>
  </div>
  <CardFooter>
    <Button>Primary Action</Button>
  </CardFooter>
</Card>
```

#### ✗ DON'T: Unclear Structure

```tsx
<Card>
  <div>
    Supporting Context Main Topic {/* Wrong order */}
    Additional details...
    <Button>Some Action</Button>
  </div>
</Card>
```

### Text Length

#### ✓ DO: Scannable Text

```tsx
<CardHeader
  header={<b>Quarterly Report</b>}      {/* Clear, short */}
  description="Q4 2024 • Finance"
/>
```

#### ✗ DON'T: Long, Complex Text

```tsx
<CardHeader
  header={<b>Comprehensive Analysis of Financial Performance Metrics</b>}
  description="This document contains detailed information about quarterly results..."
/>
```

### Visual Balance

#### ✓ DO: Balanced Layout

```tsx
<Card appearance="filled">
  <CardHeader
    image={<Avatar />}                  {/* Balanced elements */}
    header={<b>Title</b>}
    description="Context"
  />
  <CardPreview>
    <img src="..." />                    {/* Good use of space */}
  </CardPreview>
</Card>
```

#### ✗ DON'T: Overcrowded Card

```tsx
<Card>
  <CardHeader header={<b>Very Long Title Here</b>} description="..." />
  <div style={{ padding: '4px' }}>
    <p>Too much content packed in too small a space</p>
    <p>Another line of text</p>
    <p>And another</p>
  </div>
</Card>
```

### Consistency

#### ✓ DO: Uniform Card Patterns

```tsx
{
  items.map(item => (
    <Card key={item.id} appearance="filled">
      <CardHeader image={<Avatar name={item.name} />} header={<b>{item.name}</b>} description={item.role} />
      <CardFooter>
        <Button>View Details</Button>
      </CardFooter>
    </Card>
  ));
}
```

#### ✗ DON'T: Inconsistent Layouts

```tsx
{
  items.map((item, i) => (
    <Card key={item.id} appearance={i % 2 === 0 ? 'filled' : 'outline'}>
      {/* Different structure each time */}
    </Card>
  ));
}
```

---

## Layout Patterns

### Single Column List

```tsx
<div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
  {items.map(item => (
    <Card key={item.id}>
      <CardHeader header={<b>{item.title}</b>} />
    </Card>
  ))}
</div>
```

### Responsive Grid

```tsx
<div
  style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
    gap: '16px',
    padding: '16px',
  }}
>
  {items.map(item => (
    <Card key={item.id}>
      <CardHeader header={<b>{item.title}</b>} />
    </Card>
  ))}
</div>
```

### Fixed Columns

```tsx
<div
  style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '20px',
    padding: '20px',
  }}
>
  {items.map(item => (
    <Card key={item.id}>
      <CardHeader header={<b>{item.title}</b>} />
    </Card>
  ))}
</div>
```

### Horizontal List

```tsx
<div
  style={{
    display: 'flex',
    gap: '16px',
    overflowX: 'auto',
    padding: '16px',
  }}
>
  {items.map(item => (
    <Card key={item.id} style={{ flex: '0 0 300px' }}>
      <CardHeader header={<b>{item.title}</b>} />
    </Card>
  ))}
</div>
```

---

## Accessibility Guidelines

### Keyboard Navigation

Cards must be keyboard accessible:

```tsx
<Card
  role="option"
  tabIndex={isSelected ? 0 : -1}
  onKeyDown={e => {
    if (e.key === 'Enter' || e.key === ' ') {
      handleSelect();
    }
  }}
>
  <CardHeader header={<b>Keyboard Accessible Card</b>} />
</Card>
```

### Screen Reader Support

```tsx
<Card role="article" aria-label="Product card for premium headphones">
  <CardHeader header={<h3>Premium Headphones</h3>} description="$199.99" />
</Card>
```

### Focus Management

```tsx
<Card
  style={{
    outline: 'none',
  }}
  onFocus={e => {
    e.currentTarget.style.outline = '2px solid #0f6cbd';
    e.currentTarget.style.outlineOffset = '2px';
  }}
  onBlur={e => {
    e.currentTarget.style.outline = 'none';
  }}
>
  <CardHeader header={<b>Focusable Card</b>} />
</Card>
```

### Color Contrast

Ensure text is readable:

- Primary text: 14.6:1 contrast ratio
- Secondary text: 4.5:1 minimum
- Button text: 11.4:1 contrast ratio

---

## Performance Tips

### Memoize Card Components

```tsx
import { memo } from 'react';

const CardItem = memo(
  ({ item, selected, onSelect }) => (
    <Card selected={selected} selectable onSelectionChange={onSelect}>
      <CardHeader header={<b>{item.title}</b>} />
    </Card>
  ),
  (prev, next) => {
    return prev.item.id === next.item.id && prev.selected === next.selected;
  },
);
```

### Virtualize Large Lists

```tsx
import { FixedSizeList } from 'react-window';

<FixedSizeList height={600} itemCount={items.length} itemSize={164} width="100%">
  {({ index, style }) => (
    <div style={style}>
      <Card>
        <CardHeader header={<b>{items[index].title}</b>} />
      </Card>
    </div>
  )}
</FixedSizeList>;
```

### Lazy Load Card Content

```tsx
import { useState, useEffect } from 'react';

const LazyCard = ({ itemId }) => {
  const [content, setContent] = useState(null);

  useEffect(() => {
    loadCardContent(itemId).then(setContent);
  }, [itemId]);

  return (
    <Card>
      <CardHeader header={<b>Title</b>} />
      {content && <div>{content}</div>}
    </Card>
  );
};
```

---

## Interaction Patterns

### Selectable Cards

For multi-select scenarios:

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

### Clickable Cards

For navigation:

```tsx
import { useNavigate } from 'react-router-dom';

const NavigableCard = ({ item }) => {
  const navigate = useNavigate();

  return (
    <Card style={{ cursor: 'pointer' }} onClick={() => navigate(`/items/${item.id}`)}>
      <CardHeader header={<b>{item.title}</b>} />
    </Card>
  );
};
```

### Draggable Cards

For drag-and-drop:

```tsx
const DraggableCardItem = ({ item, onDragStart }) => (
  <Card
    draggable
    onDragStart={e => {
      e.dataTransfer.effectAllowed = 'move';
      e.dataTransfer.setData('itemId', item.id);
      onDragStart?.(item.id);
    }}
  >
    <CardHeader header={<b>{item.title}</b>} />
  </Card>
);
```

---

## Common Mistakes to Avoid

### ❌ Mistake 1: Too Much Content

```tsx
// DON'T DO THIS
<Card>
  <div style={{ padding: '12px' }}>
    <h2>Title</h2>
    <p>Paragraph 1 of body text with lots of content...</p>
    <p>Paragraph 2 of body text with more content...</p>
    <p>Paragraph 3 of body text with even more content...</p>
    <div>Nested content structure</div>
  </div>
</Card>
```

**Solution:** Keep cards focused on one concept; add a "Read More" link to detailed content.

### ❌ Mistake 2: Nested Cards

```tsx
// DON'T DO THIS
<Card>
  <CardHeader header={<b>Parent Card</b>} />
  <Card>
    {' '}
    {/* Don't nest */}
    <CardHeader header={<b>Nested Card</b>} />
  </Card>
</Card>
```

**Solution:** Use separate cards or a different layout structure.

### ❌ Mistake 3: Inconsistent State Handling

```tsx
// DON'T DO THIS
<Card selected>                   {/* Uncontrolled */}
  <CardHeader header="..." />
</Card>
<Card selected={true} onClick={() => {}} /> {/* Ambiguous handler */}
```

**Solution:** Always use controlled selection with proper handlers.

### ❌ Mistake 4: Poor Text Truncation

```tsx
// DON'T DO THIS
<CardHeader header={<b>This is a very long title that will wrap awkwardly and make the card look messy</b>} />
```

**Solution:** Use ellipsis or limit text length with proper styling.

---

## Theming

### Light Theme

```tsx
<Card appearance="filled">{/* Uses light theme colors automatically */}</Card>
```

### Dark Theme

When using dark theme provider:

```tsx
import { FluentProvider, teamsLightTheme, teamsDarkTheme } from '@fluentui/react-components';

<FluentProvider theme={teamsDarkTheme}>
  <Card>{/* Automatically adapts to dark theme */}</Card>
</FluentProvider>;
```

### Custom Theme

```tsx
<div
  style={
    {
      '--NeutralBackground1': '#f0f0f0',
      '--NeutralForeground1': '#1a1a1a',
    } as React.CSSProperties
  }
>
  <Card>{/* Uses custom colors */}</Card>
</div>
```

---

## Migration Guide

### From HTML Cards

```tsx
// OLD - Plain HTML
const OldCard = () => (
  <div style={{ border: '1px solid #ccc', padding: '12px' }}>
    <h3>Title</h3>
    <p>Description</p>
  </div>
);

// NEW - Fluent Card
const NewCard = () => (
  <Card>
    <CardHeader header={<b>Title</b>} description="Description" />
  </Card>
);
```

### From Bootstrap Cards

```tsx
// OLD - Bootstrap
const OldBootstrapCard = () => (
  <div className="card">
    <div className="card-header">Header</div>
    <div className="card-body">Body</div>
    <div className="card-footer">
      <button className="btn btn-primary">Action</button>
    </div>
  </div>
);

// NEW - Fluent
const NewFluentCard = () => (
  <Card>
    <CardHeader header={<b>Header</b>} />
    <div>Body</div>
    <CardFooter>
      <Button appearance="primary">Action</Button>
    </CardFooter>
  </Card>
);
```

---

## Support & Resources

- **Documentation:** See [API.md](./API.md) for complete API reference
- **Implementation:** See [IMPLEMENTATION_GUIDE.md](./IMPLEMENTATION_GUIDE.md) for advanced patterns
- **Design Tokens:** See [DESIGN_TOKENS.md](./DESIGN_TOKENS.md) for styling specifications
- **Examples:** Check Storybook for interactive examples
- **Issues:** Report bugs on GitHub with reproduction steps
