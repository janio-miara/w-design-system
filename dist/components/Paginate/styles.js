import styled from 'styled-components';
import { theme } from '../Themes';
import { chevronDownSVG } from '../../assets/icon';
export const Container = styled.div `
  display: flex;
  justify-content: space-between;
  align-items: center;

  .icon,
  .icon svg,
  .icon svg path {
    fill: ${theme.colors.shade30} !important;
  }

  .icon:hover,
  .icon:hover svg,
  .icon:hover svg path {
    fill: ${theme.colors.cyan30} !important;
  }

  .icon-disabled,
  .icon-disabled svg,
  .icon-disabled svg path {
    fill: ${theme.colors.shade20} !important;
  }

  ul.pagination {
    display: flex;
    gap: 1rem;
    font-family: 'Nunito Sans', sans-serif;
    font-size: 1rem;
    color: ${theme.colors.shade40};
    li {
      list-style: none;
    }

    li.page {
      cursor: pointer;
    }

    li.page:hover {
      color: ${theme.colors.cyan30};
    }

    li.page-active {
      color: ${theme.colors.cyan30};
      cursor: default;
    }
  }

  .items-per-page-wrapper {
    display: flex;
    align-items: center;

    gap: 1rem;
    font-family: 'Nunito Sans', sans-serif;
    color: ${theme.colors.shade40};

    select {
      /* styling */
      cursor: pointer;
      background-color: ${theme.colors.shade05};
      background-image: url(${chevronDownSVG});
      background-repeat: no-repeat;
      background-size: 1rem;
      background-position: right 1rem top calc(50% + 1px);
      border: 1px solid ${theme.colors.shade20};
      color: ${theme.colors.shade40};
      border-radius: 4px;
      display: inline-block;
      font: inherit;
      outline: 0;

      padding: 18px 48px 14px 16px;

      margin: 0;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      -webkit-appearance: none;
      -moz-appearance: none; /* Firefox */
      -webkit-appearance: none; /* Safari and Chrome */
      appearance: none;
    }

    select:hover {
      background-color: ${theme.colors.shade10};
      border: 1px solid ${theme.colors.shade20};
    }

    select:focus {
      background-color: ${theme.colors.shade10};
      border: 1px solid ${theme.colors.shade30};
    }
  }
`;
//# sourceMappingURL=styles.js.map