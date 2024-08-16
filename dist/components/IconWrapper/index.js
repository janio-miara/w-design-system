import React from 'react';
import styled from 'styled-components';
import { ReactSVG } from 'react-svg';
const StyledIconWrapper = styled.div `
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  cursor: ${props => (props.onClick ? 'pointer' : 'default')};
  svg {
    width: ${props => props.width || '24px'};
    height: ${props => props.height || '24px'};
    fill: ${props => props.color || 'black'};

    path {
      fill: ${props => props.color || 'black'};
    }
  }
`;
export const IconWrapper = ({ src, color, width, height, className, onClick }) => (React.createElement(StyledIconWrapper, { color: color, width: width, height: height, className: className, onClick: onClick },
    React.createElement(ReactSVG, { src: src })));
//# sourceMappingURL=index.js.map