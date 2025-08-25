import * as Styles from './styles';

export interface AvatarProps {
  active?: boolean;
  name: string;
}

export function Avatar({ active, name }: AvatarProps) {
  const handleName = () => {
    const newName = name.split(' ');
    if (newName.length > 1) {
      return newName[0][0] + newName[1][0];
    }
    return newName[0][0] + newName[0][1];
  };

  return (
    <Styles.Container>
      <Styles.Wrapper $active={active}>{handleName()}</Styles.Wrapper>
    </Styles.Container>
  );
}
