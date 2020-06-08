import React from 'react'
import styled from '@emotion/styled'

import {Book} from '../../../utils/BookStoreContext'
import BaseButton from '../../../components/BaseButton'

import ImageField from '../../../components/ImageField'

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
      <ImageField height={'100%'} imageUrl={url}>
        <BookCaption>{title}</BookCaption>
      </ImageField>
    </BaseButton>
  )
}

export default React.memo(BookGridItem)
