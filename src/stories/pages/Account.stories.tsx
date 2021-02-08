import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import Account from '../../pages/Account';

export default {
  title: 'Pages/Account',
  component: Account,
} as Meta;

export const Primary = () => <Account />;
