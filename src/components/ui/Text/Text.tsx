import styled from 'styled-components';
import Span, { SpanProps } from '../Span';

export interface TextProps extends SpanProps {}

export const Text = styled(Span)<TextProps>`
  font-family: 'Nunito Sans', -apple-system, '.SFNSText-Regular', 'San Francisco', BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue',
    Helvetica, Arial, sans-serif;
`;

Text.defaultProps = {
  fontWeight: 'normal',
  fontSize: 'normal',
  lineHeight: 'normal',
};

export default Text;
