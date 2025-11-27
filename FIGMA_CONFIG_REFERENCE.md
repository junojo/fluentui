# Figma Code Connect Configuration Reference

## Overview

This document describes the Figma Code Connect configuration files and how to use them.

## Configuration Files

### 1. `figma.config.json`

Main configuration file for Figma Code Connect. This file tells the CLI how to connect your code to Figma.

**Location**: `./figma.config.json` (root of repository)

**Structure**:
```json
{
  "codeConnectConfig": {
    "figmaToken": "${FIGMA_TOKEN}",
    "documentId": "${FIGMA_FILE_ID}",
    "projectName": "@fluentui/fluentui",
    "projectDescription": "Microsoft Fluent UI - ...",
    "gitHubRepo": "microsoft/fluentui"
  },
  "documentSettings": [
    {
      "file": "${FIGMA_FILE_ID}",
      "fullPath": true
    }
  ],
  "include": ["packages/react-components/**/*.figma.ts", "..."],
  "exclude": ["node_modules", "dist", "..."],
  "codeConnectVersion": "1.0.0"
}
```

**Key Fields**:

| Field | Type | Description | Example |
|-------|------|-------------|---------|
| `codeConnectConfig.figmaToken` | string | Figma personal access token | `token_...` |
| `codeConnectConfig.documentId` | string | Figma file ID containing your design system | `xxxxx` |
| `codeConnectConfig.projectName` | string | Name of your design system | `@fluentui/fluentui` |
| `codeConnectConfig.projectDescription` | string | Description of your design system | `Microsoft Fluent UI...` |
| `codeConnectConfig.gitHubRepo` | string | GitHub repo slug | `microsoft/fluentui` |
| `documentSettings` | array | File-specific settings | See below |
| `include` | array | Glob patterns to include | `["**/*.figma.tsx"]` |
| `exclude` | array | Glob patterns to exclude | `["node_modules", "dist"]` |
| `codeConnectVersion` | string | Code Connect spec version | `1.0.0` |

**How to Set**:

1. **Environment Variables** (Recommended)
   ```bash
   export FIGMA_TOKEN="your_token"
   export FIGMA_FILE_ID="your_file_id"
   ```
   The CLI will automatically substitute `${FIGMA_TOKEN}` and `${FIGMA_FILE_ID}`.

2. **Direct Values**
   ```json
   {
     "codeConnectConfig": {
       "figmaToken": "token_xxxxx",
       "documentId": "file_xxxxx"
     }
   }
   ```

3. **CI/CD Secrets** (GitHub Actions)
   ```yaml
   env:
     FIGMA_TOKEN: ${{ secrets.FIGMA_TOKEN }}
     FIGMA_FILE_ID: ${{ secrets.FIGMA_FILE_ID }}
   ```

### 2. `.figmaignore`

Similar to `.gitignore`, this file specifies which files to exclude from Code Connect scanning.

**Location**: `./.figmaignore` (root of repository)

**Current Configuration**:
```
node_modules           # Dependencies
dist                   # Build output
build                  # Build artifacts
coverage              # Test coverage
*.test.ts             # Test files
*.test.tsx
*.spec.ts
*.spec.tsx
.git                  # Git metadata
.github               # GitHub config
.vscode               # Editor config
.storybook            # Storybook config
azure-pipelines*.yml  # CI/CD config
scripts               # Build scripts
tools/workspace-plugin # Build tools
apps/rit-tests-*      # Test apps
apps/ssr-tests*       # Test apps
*.md                  # Documentation
*.json                # Config files
!figma.config.json    # Except these
!package.json
```

**How to Use**:

1. **Add patterns to ignore**
   ```
   # Ignore all files in a directory
   my-ignored-folder/

   # Ignore specific file types
   *.temp.ts

   # Ignore pattern
   **/*.internal.ts
   ```

2. **Include despite being ignored** (prefix with `!`)
   ```
   !important-file.ts
   ```

### 3. `packages/react-components/react-button/library/src/Button.figma.tsx`

Example Code Connect file showing how to map a component.

**Location**: `packages/react-components/react-button/library/src/Button.figma.tsx`

**Pattern**: Place near component implementation file

**File Naming Convention**: `{ComponentName}.figma.tsx` or `{ComponentName}.figma.ts`

**Key Patterns**:

```typescript
import React from 'react';
import { figma } from '@figma/code-connect';
import { Button, ButtonProps } from './Button';

// Connect component to Figma
figma.connect(
  // 1. Component reference
  Button,

  // 2. Figma file URL with component node ID
  'https://www.figma.com/design/[FILE_ID]/...?node-id=[COMPONENT_ID]',

  // 3. Props mapping
  {
    appearance: figma.enum('Appearance', { ... }),
    disabled: figma.boolean('Disabled'),
    label: figma.string('Label'),
  },

  // 4. Code generator function
  (props) => (
    <Button appearance={props.appearance} disabled={props.disabled}>
      {props.label}
    </Button>
  ),
);
```

## Environment Variables

These environment variables are used by the Figma Code Connect CLI.

### Required Variables

| Variable | Description | Where to Get | Format |
|----------|-------------|--------------|--------|
| `FIGMA_TOKEN` | Personal access token for Figma API | https://www.figma.com/settings/account | `token_xxxxx` |
| `FIGMA_FILE_ID` | ID of Figma file containing design system | Figma file URL: `/design/{FILE_ID}/` | `xxxxx` |

### Optional Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `FIGMA_CONFIG_PATH` | Path to figma.config.json | `./figma.config.json` |
| `LOG_LEVEL` | Logging verbosity | `info` |

### Setting Environment Variables

#### Local Development

Create a `.env` file in the root:

```bash
# .env
FIGMA_TOKEN=token_xxxxxxxxxxxxx
FIGMA_FILE_ID=xxxxxxxxxxxxx
```

Then load it:
```bash
source .env
yarn figma:publish
```

Or use inline:
```bash
FIGMA_TOKEN=token_xxx FIGMA_FILE_ID=xxx yarn figma:publish
```

#### GitHub Actions

1. Go to: Settings → Secrets and variables → Actions
2. Click "New repository secret"
3. Add secret `FIGMA_TOKEN` with your token
4. Add secret `FIGMA_FILE_ID` with your file ID

Then use in workflow:
```yaml
env:
  FIGMA_TOKEN: ${{ secrets.FIGMA_TOKEN }}
  FIGMA_FILE_ID: ${{ secrets.FIGMA_FILE_ID }}
```

## File Patterns (Include/Exclude)

The `include` and `exclude` fields in `figma.config.json` use glob patterns.

### Pattern Syntax

| Pattern | Matches |
|---------|---------|
| `*.figma.tsx` | `Button.figma.tsx` |
| `**/*.figma.tsx` | Any depth: `Button.figma.tsx`, `components/Button.figma.tsx` |
| `packages/*/src/*.figma.ts` | Specific depth: `packages/button/src/Button.figma.ts` |
| `packages/react-components/**/*.figma.tsx` | All under directory |
| `!node_modules` | Negate: exclude node_modules |

### Current Configuration

**Include**:
```
packages/react-components/**/*.figma.ts
packages/react-components/**/*.figma.tsx
packages/react/**/*.figma.ts
packages/react/**/*.figma.tsx
packages/web-components/**/*.figma.ts
packages/web-components/**/*.figma.tsx
```

All `.figma.ts` and `.figma.tsx` files in:
- v9 React components (`packages/react-components/`)
- v8 React components (`packages/react/`)
- Web Components (`packages/web-components/`)

**Exclude**:
```
node_modules
dist
build
coverage
*.test.ts
*.test.tsx
*.spec.ts
*.spec.tsx
.git
.github
.vscode
.storybook
azure-pipelines*.yml
scripts
tools/workspace-plugin
apps/rit-tests-v8
apps/rit-tests-v9
apps/ssr-tests
apps/ssr-tests-v9
apps/perf-test
apps/perf-test-react-components
*.md
*.json (!figma.config.json, !package.json)
```

## Document Settings

The `documentSettings` array allows file-specific configurations.

**Current Configuration**:
```json
{
  "documentSettings": [
    {
      "file": "${FIGMA_FILE_ID}",
      "fullPath": true
    }
  ]
}
```

**Options**:

| Option | Type | Description |
|--------|------|-------------|
| `file` | string | Figma file ID to apply settings to |
| `fullPath` | boolean | Whether to use full file paths in mappings |

## Prop Mapping API Reference

Figma Code Connect provides these functions for mapping design properties to code:

### figma.enum()

Maps design variants to code values.

```typescript
figma.enum('PropertyName', {
  'Design Label': 'code-value',
  'Another Label': 'another-value',
})
```

### figma.boolean()

Maps boolean design properties.

```typescript
figma.boolean('PropertyName')
```

### figma.string()

Maps text/string properties.

```typescript
figma.string('PropertyName')
```

### figma.number()

Maps numeric properties.

```typescript
figma.number('PropertyName')
```

### figma.instance()

Maps nested component instances.

```typescript
figma.instance('NestedComponent')
```

### figma.children()

Maps component children/slots.

```typescript
figma.children('SlotName')
```

## CLI Commands

### Audit

Validates your Code Connect setup.

```bash
yarn figma:audit
```

**Options**:
- `--verbose` - Detailed output
- `--config <path>` - Custom config file path

**Output**: Lists all detected Code Connect files and any errors

### Publish

Publishes Code Connect mappings to Figma.

```bash
yarn figma:publish
```

**Requirements**:
- Valid `FIGMA_TOKEN` environment variable
- Valid `FIGMA_FILE_ID` environment variable
- All `.figma.tsx` files have valid syntax

**Output**: Confirmation of published components

### Watch (Advanced)

Monitors files for changes and publishes automatically.

```bash
npx @figma/code-connect watch --config figma.config.json
```

## Troubleshooting

### "figma.config.json not found"

**Solution**: Ensure file exists in project root
```bash
ls -la figma.config.json
```

### "Cannot find module '@figma/code-connect'"

**Solution**: Install dependencies
```bash
yarn install
```

### "FIGMA_TOKEN is invalid"

**Solution**:
1. Verify token is set: `echo $FIGMA_TOKEN`
2. Check token hasn't expired: https://www.figma.com/settings/account
3. Generate new token if needed

### "File or component not found"

**Solution**:
1. Verify `FIGMA_FILE_ID` is correct
2. Check you have access to the file in Figma
3. Verify component node IDs in `.figma.tsx` files match Figma

### "No Code Connect files detected"

**Solution**:
1. Verify `.figma.tsx` files exist: `find . -name "*.figma.tsx"`
2. Check include patterns in `figma.config.json`
3. Run with verbose: `yarn figma:audit --verbose`

## Reference Links

- [Figma Code Connect Official Docs](https://developers.figma.com/docs/code-connect/)
- [React Integration Guide](https://www.figma.com/code-connect-docs/react)
- [GitHub Repository](https://github.com/figma/code-connect)
- [NPM Package](https://www.npmjs.com/package/@figma/code-connect)
