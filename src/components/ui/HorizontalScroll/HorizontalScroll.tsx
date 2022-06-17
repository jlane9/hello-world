import styled, { css } from 'styled-components';

interface HorizontalScrollProps {
  hideScrollbar?: boolean;
}

const HorizontalScroll = styled.div<HorizontalScrollProps>`
  display: flex;
  flex-direction: row;
  overflow: visible;
  overflow-x: auto;

  ${(props) =>
    props.hideScrollbar &&
    css`
      &::-webkit-scrollbar {
        display: none;
      }
      -ms-overflow-style: none; /* IE and Edge */
      scrollbar-width: none; /* Firefox */
    `}
`;

export default HorizontalScroll;
