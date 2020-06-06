import React from 'react'
import styled from '@emotion/styled'

import ImageField from '../../components/ImageField/ImageField'
import BookInformation from './components/BookInformation'
import BookMayLike from './components/BooksMayLike'

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

const Product = (): JSX.Element => (
  <ProductPageLayout>
    <ProductInformationLayout>
      <LeftPageLayout>
        <ImageField width={'250px'} height={'350px'}></ImageField>
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
    </ProductInformationLayout>
    <BookMayLike></BookMayLike>
  </ProductPageLayout>
)

export default Product
