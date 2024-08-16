import React from 'react';
import styled from 'styled-components';
import { theme } from '../Themes';
const sizes = Object.assign({}, theme.title);
const TitleStyled = styled.p `
  margin: 0;
  padding: 0;
  font-size: ${props => sizes[props.size]};
  font-weight: ${props => (props.bold ? 800 : 400)};
  line-height: 130%;
  font-family: 'Nunito Sans', sans-serif;
  color: ${props => props.color || 'inherit'}; // Aplicando a cor
`;
export const Title = ({ size = 'medium', bold, as = 'h2', color, children }) => {
    return (React.createElement(TitleStyled, { as: as, size: size, bold: bold, color: color }, children));
};
//# sourceMappingURL=index.js.map