import React from 'react'
import styled from '@emotion/styled'

import {Book} from '../../../utils/BookStoreContext'
import BaseButton from '../../../components/BaseButton'

const BookGridWrapper = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  margin: 0,
  height: '100%',
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

type BookGridItemProps = Pick<Book, 'title' | 'url'> & {onClick: () => void}

const BookGridItem = ({title, url, onClick}: BookGridItemProps): JSX.Element => {
  return (
    <BaseButton height={'100%'} onClick={onClick}>
      <BookGridWrapper>
        <BookImage src={url}></BookImage>
        <BookCaption>{title}</BookCaption>
      </BookGridWrapper>
    </BaseButton>
  )
}

export default React.memo(BookGridItem)
