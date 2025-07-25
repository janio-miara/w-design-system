import { Meta, StoryObj } from '@storybook/react'
import { Sidebar } from './index'
import { dashboardSVG } from '../../assets/icon'

const meta: Meta<typeof Sidebar> = {
  title: 'Components/Sidebar',
  tags: ['autodocs'],
  component: Sidebar,
  argTypes: {
    layout: {
      control: 'object',
      description: 'Array of sidebar layout',
    },
    currentItemId: {
      control: 'text',
      description: 'Current item id',
    },
    currentGroupId: {
      control: 'text',
      description: 'Current group id',
    },
    setLink: {
      action: 'setLink',
      description: 'Function to set link',
    },
    items: {
      control: 'object',
      description: 'Items data',
    },
    groups: {
      control: 'object',
      description: 'Groups data',
    },
    logoUrl: {
      control: 'text',
      description: 'Logo url',
    },
  },
  args: {
    layout: [
      {
        type: 'item',
        id: 'DASHBOARD',
      },
      { type: 'group', id: 'group1' },
    ],
    currentItemId: 'DASHBOARD',
    currentGroupId: 'DASHBOARD',
    items: {
      DASHBOARD: {
        menuTitle: 'Dashboard',
        icon: dashboardSVG,
        link: '/dashboard',
        disabled: false,
        warning: 'This is a warning',
      },
    },
    groups: {
      group1: {
        name: 'Group 1',
        icon: dashboardSVG,
        itemIds: ['DASHBOARD'],
      },
    },
    logoUrl: '',
    baseColor: '',
  },
} satisfies Meta<typeof Sidebar>

export default meta

type Story = StoryObj<typeof Sidebar>

export const Playground: Story = {
  render: args => {
    return (
      <Sidebar
        {...args}
        layout={[
          {
            type: 'item',
            id: 'DASHBOARD',
          },
          { type: 'group', id: 'DASHBOARD' },
        ]}
        items={{
          DASHBOARD: {
            menuTitle: 'Dashboard',
            icon: dashboardSVG,
            link: '/dashboard',
            disabled: false,
            warning: 'This is a warning',
            showInMenu: true,
          },
        }}
        currentItemId={args.currentItemId}
        currentGroupId={args.currentGroupId}
        setLink={ args.setLink}
        groups={{
          DASHBOARD: {
            name: 'Group 1',
            icon: dashboardSVG,
            warning: 'This is a warning',
            itemIds: ['DASHBOARD'],
          },
        }}
        logoUrl={''}
      />
    )
  },
}
