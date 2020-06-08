import React from 'react'
import styled from '@emotion/styled'

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

const BookGridItem = () => {
  return (
    <BookGridWrapper>
      <BookImage src='https://images-na.ssl-images-amazon.com/images/I/61AZw4wgu2L.jpg'></BookImage>
      <BookCaption>Mistoborn</BookCaption>
    </BookGridWrapper>
  )
}

export default React.memo(BookGridItem)
