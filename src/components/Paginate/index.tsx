import React from 'react'
import { Container } from './styles'
import { IconWrapper } from '../IconWrapper'
import { chevronLeftSVG, chevronRightSVG } from '../../assets/icon'
import { Select } from '../Select'
export type PaginateProps = {
  currentPage: number
  itemCount: number
  itemsPerPage?: number
  onChangePage: (page: number) => void
  onChangeItemsPerPage: (itemsPerPage: number) => void
  dropDownTop?: boolean
  itemPerPageOptions?: number[]
}

export const Paginate = ({
  currentPage,
  itemCount,
  onChangePage,
  itemsPerPage,
  onChangeItemsPerPage,
  itemPerPageOptions = [],
  dropDownTop,
}: PaginateProps) => {
  // Se itemsPerPage for undefined, o valor default e 20
  let itemsPerPageValue = itemsPerPage || 20

  const pageCount = Math.ceil(itemCount / itemsPerPageValue)

  const pages: (number | 'elipsis')[] = []

  // o interval indica quantas paginas mostrar antes e depois da pagina atual
  const interval = 2

  // Adiciona a primeira pagina
  if (pageCount > 0 && currentPage - interval > 1) {
    pages.push(1)
  }

  // Adiciona as paginas entre a primeira e a ultima do intervalo
  const start = Math.max(currentPage - interval, 1)
  const end = Math.min(currentPage + interval, pageCount)

  if (start > 2) {
    pages.push('elipsis')
  }

  for (let i = start; i <= end; i++) {
    pages.push(i)
  }

  if (end < pageCount - 1) {
    pages.push('elipsis')
  }

  if (pageCount > currentPage + interval) {
    pages.push(pageCount)
  }

  const minItem = (currentPage - 1) * itemsPerPageValue + 1
  const maxItem = Math.min(currentPage * itemsPerPageValue, itemCount)

  const itemPerPageOptionsCopy = Array.from(itemPerPageOptions)
  if (itemsPerPage) itemPerPageOptionsCopy.push(itemsPerPage)

  const itemPerPageOptionsSorted = Array.from(new Set(itemPerPageOptionsCopy)).sort((a, b) => a - b)

  return (
    <Container>
      <ul className="pagination">
        <IconWrapper
          className={currentPage === 1 ? 'icon-disabled' : 'icon'}
          src={chevronLeftSVG}
          width="14px"
          onClick={() => currentPage !== 1 && onChangePage(currentPage - 1)}
        />
        {pages.map((page, index) => {
          if (page === 'elipsis') {
            return <li key={`elipsis-${index}`}>...</li>
          }
          return (
            <li key={page} className={page === currentPage ? 'page-active' : 'page'} onClick={() => onChangePage(page)}>
              {page}
            </li>
          )
        })}
        <IconWrapper
          className={currentPage === pageCount ? 'icon-disabled' : 'icon'}
          src={chevronRightSVG}
          width="14px"
          onClick={() => currentPage !== pageCount && onChangePage(currentPage + 1)}
        />
      </ul>
      <div className="items-per-page-wrapper">
        <div className="item-per-page">Itens por página</div>
        <Select
          className="select"
          dropDownTop={dropDownTop !== false}
          value={itemsPerPageValue.toString()}
          onOptionChange={option => {
            option && onChangeItemsPerPage(option.id)
          }}
          disabled={itemPerPageOptions.length <= 1}
          options={itemPerPageOptionsSorted.map(count => ({
            id: count,
            text: count?.toString(),
          }))}
        />
        <div className="items-per-page-selected">
          {minItem} - {maxItem} de {itemCount}
        </div>
      </div>
    </Container>
  )
}
