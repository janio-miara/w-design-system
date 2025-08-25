import { Text } from '../Text';
import * as Style from './styles';

export interface EmptyProps {
  title?: string;
  subTitle?: string;
  alertType?: 'notPage' | 'notData';
  height?: number | string;
  width?: number | string;
  asLink?: string;
  linkText?: string;
}

export function Empty({ title = 'Pagina não encontrada', subTitle, asLink = '#', linkText = '' }: EmptyProps) {
  return (
    <Style.Container>
      <Style.ContainerEmpty>
        <Text size="p2" color="default" bold element="p">
          {title}
        </Text>
        <Text size="p2" color="default" element="p">
          {!!subTitle && subTitle}
          {!!linkText && (
            <a href={asLink} target="_blank" rel="noreferrer">
              {linkText}
            </a>
          )}
        </Text>
      </Style.ContainerEmpty>
    </Style.Container>
  );
}
