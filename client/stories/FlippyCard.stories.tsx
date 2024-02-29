import { Meta, StoryObj } from '@storybook/react';
import FlippyCard from '../app/_components/FlippyCard';

const meta: Meta<typeof FlippyCard> = {
  title: 'Components/FlippyCard',
  component: FlippyCard,
  args: {
    id: 1,
    imageUrl: 'https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*',
    isFlipped: false,
    index: 1,
  },
  argTypes: {
        id: {
          control: 'number',
          defaultValue: 2,
        },
        imageUrl: {
          control: 'text',
          defaultValue: 'https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*',
        },
        isFlipped: {
          control: 'boolean',
          defaultValue: false,
        },
    index: {
      control: 'number',
      defaultValue: 1,
    },
    handleCardClick: { action: 'handleCardClick' },
  },
  decorators: [
    (Story) => (
      <div style={{maxWidth: '350px'}}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

type FlippyCardStory = StoryObj<typeof meta>;

export const Default: FlippyCardStory = {
  render: ({ id, imageUrl, isFlipped, index, handleCardClick }) => (
    <FlippyCard
      card={{ id, imageUrl, isFlipped }}
      index={index}
      handleCardClick={handleCardClick}
    />
  ),
};

export const Flipped: FlippyCardStory = {
  args: {
    isFlipped: true,
  },
  render: ({ id, imageUrl, isFlipped, index, handleCardClick }) => (
    <FlippyCard
      card={{ id, imageUrl, isFlipped }}
      index={index}
      handleCardClick={handleCardClick}
    />
  ),
};
