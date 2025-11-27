# Figma Code Connect Setup Guide

This document provides step-by-step instructions for connecting the Fluent UI project to Figma Code Connect.

## What is Figma Code Connect?

Figma Code Connect is a tool that connects design system components in code with their designs in Figma. When enabled in Figma's Dev Mode, it displays true-to-production code snippets from your design system instead of auto-generated code.

**Requirements:**
- Figma Organization or Enterprise plan
- Full Design or Dev Mode seat

## Project Setup

The following files have been created to set up Figma Code Connect integration:

### 1. **figma.config.json**
Main configuration file for Figma Code Connect. Before using, update the following environment variables:

```json
{
  "codeConnectConfig": {
    "figmaToken": "${FIGMA_TOKEN}",      // Your Figma personal access token
    "documentId": "${FIGMA_FILE_ID}",    // Figma file ID containing your design system
    "gitHubRepo": "microsoft/fluentui"
  }
}
```

### 2. **.figmaignore**
Specifies which files to exclude from Code Connect scanning. Configured to ignore:
- Build artifacts and dependencies
- Test files
- Infrastructure files
- Non-component apps

## Step-by-Step Setup Instructions

### Step 1: Get Your Figma Access Token

1. Go to [Figma Settings](https://www.figma.com/settings/account)
2. Scroll to "Personal access tokens"
3. Click "Create a new token"
4. Name it (e.g., "Code Connect")
5. Copy the token and save it securely

### Step 2: Identify Your Figma File ID

1. Open your Figma design system file
2. The file ID is in the URL: `https://www.figma.com/design/{FILE_ID}/...`
3. Copy and save this ID

### Step 3: Install Dependencies

```bash
yarn add -D @figma/code-connect
```

### Step 4: Configure Environment Variables

Create or update a `.env` file (or your CI environment):

```bash
FIGMA_TOKEN=your_personal_access_token_here
FIGMA_FILE_ID=your_figma_file_id_here
```

### Step 5: Update figma.config.json

Replace placeholder values in `figma.config.json`:

```json
{
  "codeConnectConfig": {
    "figmaToken": "your_token",
    "documentId": "your_file_id",
    "gitHubRepo": "microsoft/fluentui"
  }
}
```

## Creating Code Connect Files

Code Connect files should be placed alongside component implementations with the `.figma.tsx` extension.

### Structure

```
packages/react-components/react-button/library/src/
├── components/
│   └── Button/
│       ├── Button.tsx          (component implementation)
│       ├── Button.types.ts     (prop types)
│       └── Button.figma.tsx    (Code Connect mapping) ← ADD THIS
└── Button.tsx
```

### Example Code Connect File

See `packages/react-components/react-button/library/src/Button.figma.tsx` for a template example.

**Key Points:**
1. Use `.figma.tsx` extension
2. Import component and `figma` from `@figma/code-connect`
3. Use `figma.connect()` to map component props to Figma properties
4. Use `figma.enum()` for variant mappings
5. Use `figma.boolean()` for boolean props
6. Use `figma.string()` for text content

### Prop Mapping Examples

```typescript
// Enum props (variants)
figma.enum('VariantName', {
  'design-name': 'code-value',
  'design-name-2': 'code-value-2',
})

// Boolean props
figma.boolean('PropertyName')

// String props
figma.string('PropertyName')

// Number props
figma.number('PropertyName')
```

## Publishing Code Connect Mappings

### Using the CLI

```bash
npx figma-code-connect publish --config figma.config.json
```

### Adding to package.json Scripts

Add this to `package.json`:

```json
{
  "scripts": {
    "code-connect:publish": "figma-code-connect publish --config figma.config.json"
  }
}
```

Then run:

```bash
yarn code-connect:publish
```

## CI/CD Integration

### GitHub Actions Example

Create `.github/workflows/figma-code-connect.yml`:

```yaml
name: Publish Figma Code Connect

on:
  push:
    branches:
      - master
    paths:
      - 'packages/**/**.figma.tsx'
      - 'figma.config.json'
  workflow_dispatch:

jobs:
  publish:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '22.x'
      - run: yarn install --frozen-lockfile
      - run: yarn code-connect:publish
        env:
          FIGMA_TOKEN: ${{ secrets.FIGMA_TOKEN }}
          FIGMA_FILE_ID: ${{ secrets.FIGMA_FILE_ID }}
```

Add secrets in GitHub:
1. Go to Settings → Secrets and variables → Actions
2. Add `FIGMA_TOKEN`
3. Add `FIGMA_FILE_ID`

## Supported Components

Code Connect should be added for all public v9 components:

- **Core Components**: Button, Text, Checkbox, Radio, Select, Input, etc.
- **Composition Components**: Menu, Dropdown, Popover, Dialog, etc.
- **Complex Components**: Table, Tree, List, Breadcrumb, etc.

## Priority Mapping

Start with high-impact components:

1. **Phase 1** (Core): Button, Text, Input, Checkbox, Radio
2. **Phase 2** (Navigation): Menu, Tabs, Breadcrumb, Link
3. **Phase 3** (Layout): Stack, Flex, Grid
4. **Phase 4** (All remaining v9 components)

## Maintenance

- Update `.figma.tsx` files when component props change
- Keep variant mappings synchronized with Figma designs
- Review and update mappings quarterly
- Monitor for new design updates in Figma

## Troubleshooting

### Token Authentication Issues
- Verify token hasn't expired
- Check token has "file" and "content:read" scopes
- Regenerate token if needed

### File ID Not Found
- Ensure you have access to the Figma file
- Verify file ID is correct (no spaces, full ID)
- Check file is shared with your account

### Components Not Detected
- Verify `.figma.tsx` files exist
- Check `figma.config.json` include patterns
- Run `npx figma-code-connect audit` to diagnose

### Publishing Failures
- Check network connectivity
- Verify environment variables are set correctly
- Check file permissions in Figma
- Review component node IDs match Figma design

## Resources

- [Figma Code Connect Documentation](https://developers.figma.com/docs/code-connect/)
- [React Integration Guide](https://www.figma.com/code-connect-docs/react)
- [GitHub Repository](https://github.com/figma/code-connect)
- [NPM Package](https://www.npmjs.com/package/@figma/code-connect)

## Next Steps

1. ✅ Get Figma access token
2. ✅ Find Figma file ID
3. ✅ Install @figma/code-connect package
4. ✅ Configure figma.config.json
5. ✅ Create Code Connect files for priority components
6. ✅ Test locally: `npx figma-code-connect audit`
7. ✅ Set up CI/CD integration
8. ✅ Publish to Figma
9. ✅ Enable in Figma Dev Mode
