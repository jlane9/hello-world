import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import { center } from 'src/stories/decorators/layout';
import ImageCard, { ImageCardProps } from './ImageCard';

export default {
  title: 'Components/ImageCard',
  component: ImageCard,
  decorators: [center],
} as Meta;

const Template: Story<ImageCardProps> = (args) => <ImageCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  image:
    'https://images.unsplash.com/photo-1587595431973-160d0d94add1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1955&q=80',
  alt: 'South America',
};
