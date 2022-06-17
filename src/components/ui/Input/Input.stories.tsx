import { Meta } from '@storybook/react/types-6-0';
import { close, search } from 'ionicons/icons';
import React from 'react';
import { center } from 'src/stories/decorators/layout';
import Input from './Input';

export default {
  title: 'UI/Input',
  component: Input,
  decorators: [center],
} as Meta;

export const Primary = () => <Input border="1px solid #555555" />;

export const Search = () => <Input startIcon={search} backgroundColor="#F3F3F3" textColor="#555555" />;

export const SearchWithClear = () => (
  <Input startIcon={search} endIcon={close} backgroundColor="#F3F3F3" placeholder="Explore a city..." textColor="#555555" />
);
