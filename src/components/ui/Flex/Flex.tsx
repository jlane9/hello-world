import styled from 'styled-components';
import { flexbox, FlexboxProps } from 'styled-system';
import Div, { DivProps } from '../Div';
import { ThemeType } from 'src/theme';

export interface FlexProps extends FlexboxProps<ThemeType>, DivProps {}

export const Flex = styled(Div)<FlexProps>`
  display: flex;
  ${flexbox}
`;

Flex.displayName = 'Flex';

export default Flex;
