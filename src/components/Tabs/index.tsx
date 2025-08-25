import { useState } from 'react';
import * as S from './styles';
import { Text } from '../Text';
import { Color, SizeText } from '../Types';

export interface TabsProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  tabs: string[];
  onChange?: (tab: string) => void;
  disabled?: boolean;
  colorActive?: Color;
  colorDefault?: Color;
  size?: SizeText;
}

export function Tabs({ onChange, tabs, size, colorActive, colorDefault }: TabsProps) {
  const [active, setActive] = useState(tabs[0]);

  const handleTab = (tab: string) => {
    setActive(tab);
    if (onChange) {
      onChange(tab);
    }
  };
  return (
    <S.Container>
      {tabs.map(tab => {
        return (
          <S.Wrapper key={tab} onClick={() => handleTab(tab)} $colorActive={colorActive}>
            <Text
              element="span"
              bold={active === tab}
              size={size || 'p2'}
              color={active === tab ? colorActive || 'secondary' : colorDefault || 'default'}
            >
              {tab}
            </Text>
            {active === tab && <div className="divider" />}
          </S.Wrapper>
        );
      })}
    </S.Container>
  );
}
