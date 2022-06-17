import { IonIcon } from '@ionic/react';
import React from 'react';
import styled from 'styled-components';
import { fontSize, FontSizeProps } from 'styled-system';
import { ThemeType } from 'src/theme';

export interface IconProps extends FontSizeProps<ThemeType>, React.HTMLAttributes<HTMLIonIconElement> {
  strokeWidth?: number;
}

const Icon = styled(({ color, ...rest }) => <IonIcon {...rest} />)<IconProps>`
  ${fontSize}
  ${(props) => {
    if (props.color) {
      return `color: ${props.color};`;
    }
  }};
  ${(props) => {
    if (props.strokeWidth) {
      return `--ionicon-stroke-width: ${props.strokeWidth}px;`;
    }
  }};
`;

export default Icon;
