import styled from 'styled-components'
import { theme } from '../Themes'

export const ContainerEmptyState = styled.div`
  padding: 36px;
  width: 100%;
  height: 100%;
  max-height: 550px;
  max-width: 800px;
  background: white;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.space3};
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  .empty-state-logo {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  .clearer-image {
    margin-right: 20px;
    opacity: 0.2;
  }
`
