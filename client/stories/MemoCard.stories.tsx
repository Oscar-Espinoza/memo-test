import { Meta, StoryObj } from '@storybook/react';
import SimplifiedMemoCard from './SimplifiedMemoCard';
import { MemoTest } from '@/app/_types/Memos';

export default {
  title: 'Components/SimplifiedMemoCard',
  component: SimplifiedMemoCard,
} as Meta<typeof SimplifiedMemoCard>;

const exampleMemoTest: MemoTest = {
  id: 1,
  name: 'Nature Memory Game',
  images: Array(6).fill('https://example.com/image.jpg'),
  highestScore: 250,
};

export const Default: StoryObj<typeof SimplifiedMemoCard> = {
  args: {
    memo: exampleMemoTest,
  },
};
