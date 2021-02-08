import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import Home from '../../pages/Home';

export default {
  title: 'Pages/Home',
  component: Home,
} as Meta;

export const Primary = () => <Home />;
