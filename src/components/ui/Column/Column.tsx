import React from 'react';
import Flex, { FlexProps } from '../Flex';

export interface ColumnProps extends FlexProps {}

export const Column: React.FC<ColumnProps> = (props) => {
  return <Flex flexDirection="column" {...props} />;
};

Column.displayName = 'Column';

export default Column;
