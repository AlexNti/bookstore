import React from 'react'
import styled from '@emotion/styled'

import AddProductForm from './components/AddProductForm'

const AddProductPageLayout = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  marginTop: '60px',
  marginBottom: '20px',
  marginLeft: '80px',
  marginRight: '80px',
  alignItems: 'center',
})

const AddProduct = (): JSX.Element => {
  return (
    <AddProductPageLayout>
      <AddProductForm></AddProductForm>
    </AddProductPageLayout>
  )
}

export default AddProduct
