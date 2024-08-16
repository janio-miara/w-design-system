import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Modal } from './index'
import { Paragraph } from '../Paragraph'
import { Button } from '../Button'

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
} satisfies Meta<typeof Modal>

export default meta

type Story = StoryObj<typeof Modal>

export const Playground: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [isOpen, setIsOpen] = useState(false)

    return (
      <>
        <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
        {isOpen && (
          <Modal
            onClose={() => setIsOpen(false)}
            footer={
              <>
                <Button onClick={() => setIsOpen(true)} variant={'gray'}>
                  Cancelar
                </Button>
                <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
              </>
            }
          >
            <Paragraph size={'medium'} heavyBod>
              Modal Title
            </Paragraph>
            <Paragraph>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release
              of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
              like Aldus PageMaker including versions of Lorem Ipsum.
            </Paragraph>
          </Modal>
        )}
      </>
    )
  },
}
