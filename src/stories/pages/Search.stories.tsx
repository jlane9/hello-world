import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import Search from '../../pages/Search';

export default {
  title: 'Pages/Search',
  component: Search,
} as Meta;

export const Primary = () => <Search />;
