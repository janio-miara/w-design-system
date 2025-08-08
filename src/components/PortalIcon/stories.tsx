import { Meta, StoryObj } from '@storybook/react';
import { PortalIcon } from './index';

const meta: Meta<typeof PortalIcon> = {
  title: 'Components/PortalIcon',
  component: PortalIcon,
  tags: ['autodocs'],
  argTypes: {
    portalId: {
      control: {
        type: 'number'
      }
    },
    portalName: {
      control: {
        type: 'text'
      }
    },
    width: {
      control: {
        type: 'text'
      }
    },
    height: {
      control: {
        type: 'text'
      }
    },
    borderRadius: {
      control: {
        type: 'text'
      }
    }
  }
} satisfies Meta<typeof PortalIcon>;

export default meta;
type Story = StoryObj<typeof PortalIcon>;

export const Default: Story = {
  render: args => <PortalIcon {...args} />
};
