import React from 'react'

import styled from '@emotion/styled'

const ProductPageLayout = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  height: '100%',
})

const LeftPageLayout = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
})

const RightPageLayout = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
})

const Product = (): JSX.Element => (
  <ProductPageLayout>
    <LeftPageLayout>Here is left</LeftPageLayout>
    <RightPageLayout>Here is right</RightPageLayout>
  </ProductPageLayout>
)

export default Product
