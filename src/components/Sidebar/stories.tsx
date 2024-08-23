import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { Sidebar } from './index'
import { action } from '@storybook/addon-actions'
import { dashboardSVG } from '../../assets/icon'

const meta: Meta<typeof Sidebar> = {
  title: 'Components/Sidebar',
  tags: ['autodocs'],

  component: Sidebar,
} satisfies Meta<typeof Sidebar>

export default meta

type Story = StoryObj<typeof Sidebar>

export const Playground: Story = {
  render: () => {
    return (
        <Sidebar
          layout={[
            {
              type: 'item',
              id: 'DASHBOARD',
            },
            { type: 'group', id: 'group1' },
          ]}
          items={{
            DASHBOARD: {
              menuTitle: 'Dashboard',
              icon: dashboardSVG,
              link: '/dashboard',
              disabled: false,
            },
          }}
          currentItemId={''}
          currentGroupId={''}
          setLink={action('setLink')}
          groups={{
            group1: {
              name: 'Group 1',
              icon: dashboardSVG,
              itemIds: ['DASHBOARD'],
            },
          }}
          logoUrl={''}
        />
    )
  },
}
