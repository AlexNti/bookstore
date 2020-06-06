import React from 'react'
import styled from '@emotion/styled'

import ImageField from './components/ImageField'

const ProductPageLayout = styled('div')({
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
    <LeftPageLayout>
      <ImageField></ImageField>
    </LeftPageLayout>
    <RightPageLayout>Here is right</RightPageLayout>
  </ProductPageLayout>
)

export default Product
