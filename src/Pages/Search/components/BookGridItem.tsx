import React from 'react'
import styled from '@emotion/styled'

import {Book} from '../../../utils/BookStoreContext'
const BookGridWrapper = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  margin: 0,
})

const BookImage = styled('img')({
  flex: '1',
  objectFit: 'cover',
  width: '100%',
})

const BookCaption = styled('figcaption')({
  padding: '1px 2px',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  color: '#fff',
  textAlign: 'right',
})

type BookGridItemProps = Pick<Book, 'title' | 'url'>

const BookGridItem = ({title, url}: BookGridItemProps): JSX.Element => {
  return (
    <BookGridWrapper>
      <BookImage src={url}></BookImage>
      <BookCaption>{title}</BookCaption>
    </BookGridWrapper>
  )
}

export default React.memo(BookGridItem)
