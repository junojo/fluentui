/**
 * @fileoverview Code Connect template for Fluent UI v9 components
 *
 * This file demonstrates the pattern for creating Code Connect mappings for any Fluent UI component.
 * Copy and adapt this template for other components in your design system.
 *
 * Requirements:
 * - Component must be a React component exported from the library
 * - All props should be mapped to Figma design properties
 * - File should be located in the same directory as the component
 * - Use .figma.tsx or .figma.ts extension
 *
 * @example
 * // For a component like Button at packages/react-components/react-button/library/src/
 * // Create: packages/react-components/react-button/library/src/Button.figma.tsx
 */

import React from 'react';
import { figma } from '@figma/code-connect';

/**
 * STEP 1: Import your component
 * Adjust the import path based on your component structure
 */
// import { ComponentName, type ComponentNameProps } from './ComponentName';

/**
 * STEP 2: Call figma.connect() with these parameters:
 *
 * 1. Component class/function reference
 * 2. Figma file URL with component node ID
 * 3. Props mapping object describing how design properties map to code props
 * 4. Code generator function that returns JSX
 */

/**
 * Example: Text Component with simple string variant
 */
// figma.connect(
//   Text,
//   'https://www.figma.com/design/[FILE_ID]/Fluent-Design-System?node-id=[COMPONENT_ID]',
//   {
//     variant: figma.enum('Variant', {
//       'Body 1': 'body1',
//       'Body 2': 'body2',
//       'Caption 1': 'caption1',
//       'Display': 'display',
//     }),
//     weight: figma.enum('Weight', {
//       'Regular': 'regular',
//       'Semibold': 'semibold',
//       'Bold': 'bold',
//     }),
//     children: figma.string('Content'),
//     disabled: figma.boolean('Disabled'),
//   },
//   (props) => (
//     <Text
//       size={props.variant as ComponentNameProps['size']}
//       weight={props.weight as ComponentNameProps['weight']}
//     >
//       {props.children}
//     </Text>
//   ),
// );

/**
 * Example: Select/Menu Component with nested properties
 */
// figma.connect(
//   Select,
//   'https://www.figma.com/design/[FILE_ID]/Fluent-Design-System?node-id=[COMPONENT_ID]',
//   {
//     size: figma.enum('Size', {
//       'Small': 'small',
//       'Medium': 'medium',
//       'Large': 'large',
//     }),
//     appearance: figma.enum('Appearance', {
//       'Outline': 'outline',
//       'Underline': 'underline',
//       'Filled': 'filled',
//     }),
//     disabled: figma.boolean('Disabled'),
//     invalid: figma.boolean('Invalid'),
//     label: figma.string('Label'),
//   },
//   (props) => (
//     <Select
//       size={props.size as ComponentNameProps['size']}
//       appearance={props.appearance as ComponentNameProps['appearance']}
//       disabled={props.disabled}
//       invalid={props.invalid}
//     >
//       <option>{props.label || 'Select option...'}</option>
//     </Select>
//   ),
// );

/**
 * REFERENCE: Available figma API methods
 *
 * figma.enum(name, options)
 *   - For design properties with multiple named values
 *   - options: { 'Design Name': 'code-value' }
 *
 * figma.boolean(name)
 *   - For true/false design properties
 *   - Maps to boolean prop
 *
 * figma.string(name)
 *   - For text content or string properties
 *   - Maps to string prop
 *
 * figma.number(name)
 *   - For numeric properties
 *   - Maps to number prop
 *
 * figma.instance(name)
 *   - For component instances (slots)
 *   - Allows nesting other components
 *
 * figma.children(name?)
 *   - For component children/content slots
 *   - Optional name parameter
 */

/**
 * TIPS FOR EFFECTIVE MAPPINGS:
 *
 * 1. Keep mapping names short and descriptive
 *    - Use: figma.enum('Size', {...})
 *    - Avoid: figma.enum('ComponentSizeProperty', {...})
 *
 * 2. Match design naming conventions exactly
 *    - If Figma shows "Primary", use 'Primary' as the key
 *
 * 3. Keep code values descriptive but consistent
 *    - Use camelCase: 'primary', 'secondary'
 *    - Avoid abbreviations: 'pri', 'sec'
 *
 * 4. Only map properties that designers control
 *    - Include: appearance, size, disabled, loading
 *    - Exclude: internal state, computed values, implementation details
 *
 * 5. Use type assertions for TypeScript compatibility
 *    - size={props.size as ComponentProps['size']}
 *
 * 6. Test your mappings locally first
 *    - Run: yarn figma:audit
 *    - Verify: All properties map correctly
 *    - Check: Generated code looks correct
 *
 * 7. Document non-obvious mappings with comments
 *    - Explain why a property maps to code in unexpected ways
 *
 * 8. Group related properties together
 *    - Size, weight, color together
 *    - State properties (disabled, readonly) together
 */

export default {};
