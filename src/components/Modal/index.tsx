import { HTMLAttributes, ReactNode } from 'react';
import ReactDOM from 'react-dom';
import { closeSVG } from '../../assets/icon';
import { theme } from '../Themes';
import { Title } from '../Title';
import { IconWrapper } from '../IconWrapper';
import { ModalContainer, Overlay } from './styles';
const {
  colors: { cyan50, shade30 }
} = theme;

export interface ModalProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  onClose: () => void;
  title: string;
  footer?: ReactNode;
}

export function Modal({ title, children, onClose, footer, ...props }: ModalProps) {
  return ReactDOM.createPortal(
    <>
      <Overlay onClick={onClose} />
      <ModalContainer {...props}>
        <div className={'modalHeader'}>
          <Title size={'medium'} bold color={cyan50}>
            {title}
          </Title>
          <IconWrapper src={closeSVG} width={'14px'} height={'14px'} color={shade30} onClick={onClose} />
        </div>
        <div className={'modalContainer'}>{children}</div>
        <div className={'modalFooter'}>{footer}</div>
      </ModalContainer>
    </>,
    document.body
  );
}
