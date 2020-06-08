import React from 'react'
import styled from '@emotion/styled'

import ImageField from '../../components/ImageField/ImageField'
import BookInformation from './components/BookInformation'
import BooksMayLike from './components/BooksMayLike'

import useBookStore from '../../hooks/useBookStore'
import {Book} from '../../utils/BookStoreContext'

const ProductPageLayout = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  marginTop: '60px',
  marginBottom: '20px',
  marginLeft: '80px',
})

const ProductInformationLayout = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  height: '100%',
})

const LeftPageLayout = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  flex: 1,
})

const RightPageLayout = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  flex: 1,
})

const Product = (): JSX.Element => {
  const {
    state: {selectedBook},
  } = useBookStore()
  const {
    title,
    description,
    published,
    pages,
    publisher,
    isbn13,
    isbn10,
    imageUrl,
    categories,
  } = selectedBook as Book
  return (
    <ProductPageLayout>
      <ProductInformationLayout>
        <LeftPageLayout>
          <ImageField imageUrl={imageUrl} width={'250px'} height={'350px'}></ImageField>
        </LeftPageLayout>
        <RightPageLayout>
          <BookInformation
            title={title}
            description={description}
            category={categories || 'not avaiable category'}
            year={new Date(published).getFullYear()}
            numberOfPages={pages}
            publisher={publisher}
            isbn10={isbn10}
            isbn13={isbn13}
          ></BookInformation>
        </RightPageLayout>
      </ProductInformationLayout>
      <BooksMayLike></BooksMayLike>
    </ProductPageLayout>
  )
}

export default Product
