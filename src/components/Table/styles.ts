import styled from 'styled-components'
import { theme } from '../Themes'

export const TableWrapper = styled.div<{ maxHeight?: string }>`
  width: 100%
  height: 100%
  overflow-x: auto
  max-height: ${({ maxHeight }) => maxHeight || 'auto'}
  position: relative
`

export const TableStyled = styled.table`
  width: 100%
  height: 100%
  border-collapse: collapse
  text-align: left
`

export const TheadStyled = styled.thead`
  position: sticky
  top: 0
  background-color: ${theme.colors.white}
  z-index: 1
`

export const ThStyled = styled.th<{ width?: string; sortable?: boolean }>`
  width: ${({ width }) => width || 'auto'}
  border: none
  border-bottom: 1px solid ${theme.colors.shade20}
  padding: 8px
  margin-bottom: 8px
  background-color: ${theme.colors.white}
  cursor: ${({ sortable }) => (sortable ? 'pointer' : 'default')}
  display: flex
  align-items: center
  justify-content: space-between
  
`

export const TdStyled = styled.td<{ width?: string }>`
  width: ${({ width }) => width || 'auto'}
  padding: 0 12px
  border: none
  height: 50px
`

export const TdActionStyled = styled.td<{ width?: string }>`
  width: ${({ width }) => width || 'auto'}
  padding: 0 2px
  border: none
  height: 50px
`

export const TrStyled = styled.tr`
  &:nth-child(even) {
    background-color: ${theme.colors.shade05};
  }
  &:nth-child(odd) {
    background-color: #ffffff;
  }
`

export const TBodyStyled = styled.tbody`
  margin-top: 8px
  width: 100%
  overflow-y: auto
  position: relative
  height: 100%
`

export const LoadingWrapper = styled.div`
  display: flex
  align-items: center
  justify-content: center
  width: 100%
  height: 100%
`

export const EditBox = styled.div`
  background-color: white
  padding: 16px
  border: none
  min-height: 100px
`
