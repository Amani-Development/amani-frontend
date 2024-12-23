import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import Header from './header';

const meta: Meta<typeof Header> = {
  title: 'Components/Header',
  component: Header,
  // parameters: {
  //     layout: 'centered',
  // },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    Auth: '',
  }
};
