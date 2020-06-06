import React from 'react'
import styled from '@emotion/styled'

const HeaderWrapper = styled('div')({
  width: '100%',
  height: '60px',
  backgroundColor: '#F7F8F9',
  textAlign: 'center',
  border: '1px solid black',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '20px',
  boxSizing: 'border-box',
})

const HeaderTitle = styled('h1')({
  fontSize: '50px',
})

const Header = (): JSX.Element => {
  return (
    <HeaderWrapper>
      <HeaderTitle>Bookstore</HeaderTitle>
    </HeaderWrapper>
  )
}

export default Header
