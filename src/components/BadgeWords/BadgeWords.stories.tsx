import { StoryFn, Meta } from '@storybook/react-vite';
import { BadgeWord } from '.';

const meta = {
  title: 'Example/BadgeWords',
  component: BadgeWord
} satisfies Meta<typeof BadgeWord>;

export default meta;

const PlaygroundContent: StoryFn<typeof BadgeWord> = args => {
  const handleClose = (text: string) => {
    console.log(text);
  };
  return <BadgeWord {...args} onClose={handleClose} />;
};
export const Playground = PlaygroundContent.bind({});

Playground.args = {
  color: 'primary',
  text: 'Text Primary',
  outlined: false
};
