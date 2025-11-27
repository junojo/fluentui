import React from 'react';
import { figma } from '@figma/code-connect';
import { Button, ButtonProps } from './Button';

/**
 * Button Code Connect mapping for Figma Dev Mode
 *
 * This file maps the Fluent UI v9 Button component to Figma designs,
 * enabling developers to view production code in Figma's Dev Mode.
 *
 * Learn more: https://developers.figma.com/docs/code-connect/
 */

figma.connect(
  Button,
  'https://www.figma.com/design/KpfxAYRh5iEUsOqqbo2gNE/Microsoft-Fluent-2-Web--Community-?node-id=9026-430&t=OUdVkqDk6CP4ipD0-4',
  {
    variant: {
      'Primary': 'primary',
      'Secondary': 'secondary',
      'Outline': 'outline',
      'Subtle': 'subtle',
      },
    size: {
      small: 'small',
      medium: 'medium',
      large: 'large',
      },
    disabled: figma.boolean('Disabled'),
    children: figma.string('Label'),
  },
  (props) => (
    <Button
      appearance={props.variant as ButtonProps['appearance']}
      size={props.size as ButtonProps['size']}
      disabled={props.disabled}
    >
      {props.children}
    </Button>
  ),
);

export default Button;
