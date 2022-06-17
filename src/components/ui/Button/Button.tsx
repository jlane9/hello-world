import React from 'react';
import styled from 'styled-components';
import { layout, LayoutProps, space, SpaceProps, typography, TypographyProps } from 'styled-system';
import { themeData } from 'src/theme';

export interface ButtonProps extends LayoutProps, SpaceProps, TypographyProps, React.ButtonHTMLAttributes<HTMLButtonElement> {
  fontSize?: keyof typeof themeData.fontSizes;
  fontWeight?: keyof typeof themeData.fontWeights;
}

export const Button = styled('button')<ButtonProps>`
  font-family: 'Nunito Sans', -apple-system, '.SFNSText-Regular', 'San Francisco', BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue',
    Helvetica, Arial, sans-serif;

  ${layout};
  ${space};
  ${typography};
`;

Button.defaultProps = {
  fontSize: 'lg',
  fontWeight: 'semibold',
  mx: 'auto',
  py: 12,
  px: 24,
  type: 'button',
};

export default Button;
