import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import Tabs from '../../pages/Tabs';

export default {
    title: 'Pages/Tabs',
    component: Tabs,
} as Meta;

export const Primary = () => <Tabs />;
