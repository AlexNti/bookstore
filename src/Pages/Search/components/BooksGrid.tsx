import React from 'react'
import styled from '@emotion/styled'

import BookGridItem from './BookGridItem'
import useBookStore from '../../../hooks/useBookStore'

const BookGrid = styled('div')({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
  gridAutoRows: '1fr',
  gridGap: '10px',
  gridAutoFlow: 'dense',
})

const BooksGrid = () => {
  const {
    state: {filterParam, books},
  } = useBookStore()

  return (
    <BookGrid>
      {books.map(({title, isbn, url}) => (
        <BookGridItem key={isbn} url={url} title={title}></BookGridItem>
      ))}
    </BookGrid>
  )
}

export default BooksGrid
