import React from 'react'
import styled from '@emotion/styled'

import ImageField from '../../../components/ImageField/ImageField'

const Layout = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  marginRight: '80px',
})

const Title = styled('h1')({
  fontSize: '20px',
  marginBottom: '10px',
  marginTop: '10px',
})

const ProductListWrapper = styled('div')({
  display: 'flex',
  flexDirection: 'row',
})

const ProductItemWrapper = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  maxWidth: '25%',
  height: '150px',
  marginRight: '40px',
})

const ProductTitle = styled('div')({
  fontSize: '15px',
  marginTop: '5px',
  textAlign: 'center',
})

const BooksMayLike = (): JSX.Element => (
  <Layout>
    <Title>Other Books you may like</Title>
    <ProductListWrapper>
      <ProductItemWrapper>
        <ImageField width={'100%'} height={'100%'}></ImageField>
        <ProductTitle>Title</ProductTitle>
      </ProductItemWrapper>
      <ProductItemWrapper>
        <ImageField width={'100%'} height={'100%'}></ImageField>
        <ProductTitle>Title</ProductTitle>
      </ProductItemWrapper>
      <ProductItemWrapper>
        <ImageField width={'100%'} height={'100%'}></ImageField>
        <ProductTitle>Title</ProductTitle>
      </ProductItemWrapper>
      <ProductItemWrapper>
        <ImageField width={'100%'} height={'100%'}></ImageField>
        <ProductTitle>Title</ProductTitle>
      </ProductItemWrapper>
    </ProductListWrapper>
  </Layout>
)

export default BooksMayLike
