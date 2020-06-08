import React from 'react'
import styled from '@emotion/styled'

import BookGridItem from './BookGridItem'

const BookGrid = styled('div')({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
  gridAutoRows: '1fr',
  gridGap: '10px',
  gridAutoFlow: 'dense',
})

const BooksGrid = () => (
  <BookGrid>
    <BookGridItem></BookGridItem>
    <BookGridItem></BookGridItem>
    <BookGridItem></BookGridItem>
    <BookGridItem></BookGridItem>
    <BookGridItem></BookGridItem>
    <BookGridItem></BookGridItem>
    <BookGridItem></BookGridItem>
    <BookGridItem></BookGridItem>
  </BookGrid>
)

export default BooksGrid
