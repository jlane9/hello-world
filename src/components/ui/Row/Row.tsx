import React from 'react';
import Flex, { FlexProps } from '../Flex';

export interface RowProps extends FlexProps {}

export const Row: React.FC<RowProps> = (props) => {
  return <Flex flexDirection="row" {...props} />;
};

Row.displayName = 'Row';

export default Row;
