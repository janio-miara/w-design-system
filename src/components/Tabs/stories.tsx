import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { Paragraph } from '../Paragraph'
import { Tabs } from './index'
import { useState } from 'react'

const meta: Meta<typeof Tabs> = {
  title: 'Components/Tabs',
  component: Tabs,
} satisfies Meta<typeof Tabs>

export default meta

type Story = StoryObj<typeof Tabs>

export const Playground: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [activeTab, setActiveTab] = useState('Tab 1')
    const handleTabChange = (activeTab: string) => {
      setActiveTab(activeTab)
    }

    return (
      <div style={{ background: '#e0dede', padding: '50px', height: '100vh' }}>
        <Tabs tabs={['Tab 1', 'Tab 2', 'Tab 3']} defaultActiveTab="Tab 1" onTabChange={handleTabChange} />
        <div style={{ background: 'white', padding: '50px 20px', borderRadius: '8px', marginTop: '-5px' }}>
          {activeTab === 'Tab 1' && (
            <>
              <Paragraph size={'medium'} weight={800}>
                Tab 1
              </Paragraph>
              <Paragraph>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
                into electronic
              </Paragraph>
            </>
          )}
          {activeTab === 'Tab 2' && (
            <>
              <Paragraph size={'medium'} weight={800}>
                Tab 2
              </Paragraph>
              <Paragraph>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
                into electronic Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also
                the leap into electronic
              </Paragraph>
            </>
          )}
          {activeTab === 'Tab 3' && (
            <>
              <Paragraph size={'medium'} weight={800}>
                Tab 3
              </Paragraph>
              <Paragraph>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
                into electronic
              </Paragraph>
            </>
          )}
        </div>
      </div>
    )
  },
}
