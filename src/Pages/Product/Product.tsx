import React from 'react'
import styled from '@emotion/styled'

import ImageField from './components/ImageField'
import BookInformation from './components/BookInformation'

const ProductPageLayout = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  height: '100%',
  marginTop: '60px',
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

const Product = (): JSX.Element => (
  <ProductPageLayout>
    <LeftPageLayout>
      <ImageField></ImageField>
    </LeftPageLayout>
    <RightPageLayout>
      <BookInformation
        title={'Book Title'}
        description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit'}
        category={'Epic'}
        year={1970}
        numberOfPages={845}
        publisher={'Tolkien'}
        isbn10={'123'}
        isbn13={'345'}
      ></BookInformation>
    </RightPageLayout>
  </ProductPageLayout>
)

export default Product
