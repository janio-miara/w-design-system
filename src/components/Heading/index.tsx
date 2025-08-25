import { Text } from '../Text';
import { Container } from './styles';

export interface HeadingProps {
  title: string;
  subTitle?: string;
  element?: 'h1' | 'h2' | 'h3' | 'h4';
  icon?: React.ReactNode;
}

export function Heading({ title, subTitle, element, icon }: HeadingProps) {
  return (
    <Container>
      {icon && <div className="icon">{icon}</div>}
      <div>
        <Text element={element || 'h4'} color="primary">
          {title}
        </Text>
        <Text color="dark">{subTitle}</Text>
      </div>
    </Container>
  );
}
