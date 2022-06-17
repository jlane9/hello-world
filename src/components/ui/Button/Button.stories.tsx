import { Meta } from '@storybook/react/types-6-0';
import React from 'react';
import { center } from 'src/stories/decorators/layout';
import Button from './Button';

export default {
  title: 'UI/Button',
  component: Button,
  decorators: [center],
} as Meta;

export const Primary = () => <Button className="bg-black text-white rounded-full">Hello World</Button>;
