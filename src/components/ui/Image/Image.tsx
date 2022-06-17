import { IonImg } from '@ionic/react';
import React from 'react';
import styled from 'styled-components';
import { LayoutProps, layout, PositionProps, position, SpaceProps, space } from 'styled-system';
import { ThemeType } from 'src/theme';

export interface ImageProps
  extends LayoutProps<ThemeType>,
    PositionProps<ThemeType>,
    SpaceProps<ThemeType>,
    React.HTMLAttributes<HTMLIonImgElement> {}

const Image = styled(IonImg)<ImageProps>`
  ${layout}
  ${position}
  ${space}
`;

Image.displayName = 'Image';

export default Image;
