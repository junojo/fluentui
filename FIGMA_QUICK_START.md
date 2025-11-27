# Figma Code Connect Quick Start

## 🚀 Get Started in 5 Steps

### 1️⃣ Install Package

```bash
yarn add -D @figma/code-connect
```

### 2️⃣ Set Up Environment Variables

Create a `.env` file or set in your CI system:

```bash
# Get your token from: https://www.figma.com/settings/account
FIGMA_TOKEN=your_personal_access_token

# Your Figma design file ID (from the URL)
FIGMA_FILE_ID=your_file_id
```

### 3️⃣ Configure Project

The following files are already created:
- ✅ `figma.config.json` - Project configuration
- ✅ `.figmaignore` - Files to exclude
- ✅ `package.json` - Scripts and dependencies added

### 4️⃣ Create Code Connect Files

Add `.figma.tsx` files next to your components:

```
packages/react-components/react-button/library/src/
├── components/Button/Button.tsx
└── Button.figma.tsx          ← Create this
```

**Minimal Example:**

```typescript
import React from 'react';
import { figma } from '@figma/code-connect';
import { Button } from './Button';

figma.connect(
  Button,
  'https://www.figma.com/design/FILE_ID?node-id=COMPONENT_ID',
  {
    appearance: figma.enum('Appearance', {
      'Primary': 'primary',
      'Secondary': 'secondary',
    }),
    disabled: figma.boolean('Disabled'),
    children: figma.string('Label'),
  },
  (props) => (
    <Button appearance={props.appearance} disabled={props.disabled}>
      {props.children}
    </Button>
  ),
);
```

### 5️⃣ Test & Publish

```bash
# Validate your setup
yarn figma:audit

# Publish to Figma
yarn figma:publish
```

## 📋 Component Priority List

Start with these high-impact components:

### Phase 1 - Core (Start Here!)
- Button
- Text
- Input
- Checkbox
- Radio

### Phase 2 - Navigation
- Menu
- Tabs
- Breadcrumb
- Link

### Phase 3 - Layout
- Stack
- Flex
- Grid
- Card

### Phase 4 - Everything Else
- All remaining v9 components

## 🔍 How to Find Component Node IDs

1. Open your Figma design file
2. Click on a component in the canvas
3. Look at the URL when you right-click and copy the link:
   ```
   https://www.figma.com/design/FILE_ID?node-id=COMPONENT_ID
   ```
4. Extract both IDs and use in your `.figma.tsx` file

## 📚 Common Prop Mappings

```typescript
// For design variants/appearance
appearance: figma.enum('Appearance', {
  'Primary': 'primary',
  'Secondary': 'secondary',
  'Outline': 'outline',
})

// For sizes
size: figma.enum('Size', {
  'Small': 'small',
  'Medium': 'medium',
  'Large': 'large',
})

// For boolean states
disabled: figma.boolean('Disabled')
loading: figma.boolean('Loading')
required: figma.boolean('Required')

// For content
label: figma.string('Label')
placeholder: figma.string('Placeholder')
description: figma.string('Description')

// For nested components/slots
icon: figma.instance('Icon')
children: figma.children('Content')
```

## 🐛 Troubleshooting

### "Module not found: @figma/code-connect"
```bash
# Reinstall dependencies
yarn install
```

### "Authentication failed"
- Verify `FIGMA_TOKEN` is set and not expired
- Generate a new token: https://www.figma.com/settings/account
- Check token has `file:read` permission

### "File or component not found"
- Verify `FIGMA_FILE_ID` is correct (no spaces)
- Verify you have access to the file in Figma
- Check component node IDs match design

### "No Code Connect files detected"
- Verify `.figma.tsx` files exist in correct locations
- Check `figma.config.json` include patterns
- Run: `yarn figma:audit --verbose`

## 📖 Learn More

- **Full Setup Guide**: See `FIGMA_CODE_CONNECT.md`
- **Template & Examples**: See `CODE_CONNECT_TEMPLATE.md`
- **Official Docs**: https://developers.figma.com/docs/code-connect/
- **React Guide**: https://www.figma.com/code-connect-docs/react

## ✨ What Happens Next

Once published to Figma:

1. ✅ Designers see real production code in Dev Mode
2. ✅ Developers copy code directly from Figma
3. ✅ Design-code sync is automated
4. ✅ Better adoption of design system
5. ✅ Fewer design-dev inconsistencies

## 🎯 Success Criteria

Your setup is working when:

- [ ] `yarn figma:audit` runs without errors
- [ ] Component files in `packages/react-components/**/*.figma.tsx` are detected
- [ ] `yarn figma:publish` succeeds
- [ ] Code snippets appear in Figma Dev Mode
- [ ] Designers can copy code from Figma

## 🤝 Need Help?

1. Check `FIGMA_CODE_CONNECT.md` for detailed setup
2. Review `CODE_CONNECT_TEMPLATE.md` for examples
3. Run with `--verbose` flag: `yarn figma:audit --verbose`
4. Check GitHub Actions logs for CI/CD issues
5. Visit Figma Code Connect docs for advanced features
