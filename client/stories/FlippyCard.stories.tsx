import { Meta, StoryObj } from '@storybook/react';
import FlippyCard from '../app/_components/FlippyCard';

const meta: Meta<typeof FlippyCard> = {
  title: 'Components/FlippyCard',
  component: FlippyCard,
  argTypes: {
    card: {
      control: 'object',
      defaultValue: {
        imageUrl: 'https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*',
        isFlipped: false,
      },
    },
    index: {
      control: 'number',
      defaultValue: 1,
    },
    handleCardClick: { action: 'handleCardClick' },
  },
};

export default meta;

type FlippyCardStory = StoryObj<typeof meta>;

export const Default: FlippyCardStory = {
  args: {
    card: {
      imageUrl: 'https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*',
      isFlipped: false,
    },
    index: 1,
    handleCardClick: () => console.log('Card clicked'),
  },
};

export const Flipped: FlippyCardStory = {
  args: {
    ...Default.args,
    card: { ...Default.args.card, isFlipped: true },
  },
};
