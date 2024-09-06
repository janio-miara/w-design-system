import styled from 'styled-components'
import { theme } from '../Themes'
export const Container = styled.div`
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
    width: min-content;
    text-wrap: nowrap;
    gap: 1rem;
    font-family: 'Nunito Sans', sans-serif;
    color: ${theme.colors.shade40};
  }

  .select {
    min-width: 100px;
  }
`
