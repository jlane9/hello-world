import * as CSS from 'csstype';
import React from 'react';
import styled from 'styled-components';
import { layout, LayoutProps, position, PositionProps, typography, TypographyProps } from 'styled-system';
import { themeData, ThemeType } from 'src/theme';

export interface SpanProps
  extends LayoutProps<ThemeType>,
    PositionProps<ThemeType>,
    TypographyProps<ThemeType>,
    React.HTMLAttributes<HTMLSpanElement> {
  fontSize?: keyof typeof themeData.fontSizes;
  fontWeight?: keyof typeof themeData.fontWeights;
  textAlign?: CSS.Property.TextAlign;
}

export const Span = styled.span<SpanProps>`
  ${layout}
  ${position}
  ${typography}
`;

Span.displayName = 'Span';

export default Span;
