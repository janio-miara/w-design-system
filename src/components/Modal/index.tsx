import React from 'react'
import ReactDOM from 'react-dom'
import { closeSVG } from '../../assets/icon'
import { theme } from '../Themes'
import { Title } from '../Title'
import { IconWrapper } from '../IconWrapper'
import { ModalTypes } from '../Types'
import { ModalContainer, Overlay } from './styles'
const {
  colors: { cyan50, shade30 },
} = theme

export const Modal: React.FC<ModalTypes> = ({ children, onClose, footer, ...props }) => {
  return ReactDOM.createPortal(
    <>
      <Overlay onClick={onClose} />
      <ModalContainer {...props}>
        <div className={'modalHeader'}>
          <Title size={'medium'} bold color={cyan50}>
            Enviar
          </Title>
          <IconWrapper src={closeSVG} width={'14px'} height={'14px'} color={shade30} onClick={onClose} />
        </div>
        <div className={'modalContainer'}>{children}</div>
        <div className={'modalFooter'}>{footer}</div>
      </ModalContainer>
    </>,
    document.body,
  )
}
