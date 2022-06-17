import React from 'react';
import styled from 'styled-components';
import {
  background,
  BackgroundProps,
  borders,
  BordersProps,
  layout,
  LayoutProps,
  position,
  PositionProps,
  space,
  SpaceProps,
  typography,
  TypographyProps,
} from 'styled-system';
import { ThemeType } from 'src/theme';

export interface DivProps
  extends BackgroundProps<ThemeType>,
    BordersProps<ThemeType>,
    LayoutProps<ThemeType>,
    PositionProps<ThemeType>,
    SpaceProps<ThemeType>,
    TypographyProps<ThemeType>,
    React.HTMLAttributes<HTMLDivElement> {}

export const Div = styled.div<DivProps>`
  ${background}
  ${borders}
  ${layout}
  ${position}
  ${space}
  ${typography}
`;

Div.displayName = 'Div';

export default Div;
