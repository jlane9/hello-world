import styled, { css } from 'styled-components';

interface VerticalScrollProps {
  hideScrollbar?: boolean;
}

const VerticalScroll = styled.div<VerticalScrollProps>`
  display: flex;
  flex-direction: column;
  overflow: visible;
  overflow-y: auto;

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

export default VerticalScroll;
