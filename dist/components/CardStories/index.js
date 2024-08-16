import React from 'react';
import styled from 'styled-components';
import { Paragraph } from '../Paragraph';
import { theme } from '../Themes';
const ContainerCardStories = styled.div `
  min-height: 300px;
  min-width: 200px;
  height: auto;
  width: auto;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;
const Wrapper = styled.div `
  padding: 16px;
  display: flex;
  min-height: 240px;
  min-width: 200px;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: column;
`;
const WrapperFooter = styled.div `
  height: 50px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid #e0e0e0;
  flex-direction: column;
`;
const CardStories = ({ title, subTitle, children }) => {
    return (React.createElement(ContainerCardStories, null,
        React.createElement(Wrapper, null, children),
        React.createElement(WrapperFooter, null,
            React.createElement(Paragraph, { color: theme.colors.shade50, heavyBod: true }, title),
            React.createElement(Paragraph, { size: 'x-small', color: theme.colors.shade30 }, subTitle))));
};
export default CardStories;
//# sourceMappingURL=index.js.map