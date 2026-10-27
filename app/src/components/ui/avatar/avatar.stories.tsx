import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Avatar } from './avatar';

const meta: Meta<typeof Avatar> = {
  component: Avatar,
};

export default meta;

type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  args: {
    src: '/avatar.jpg',
    alt: '',
    height: 400,
    width: 400,
  },
};
