import React from 'react'
import styled from '@emotion/styled'

import Header from '../Header'

const LayoutRoot = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  padding: '20px',
  backgroundColor: 'white',
})

const Layout = ({children}: {children: React.ReactNode}): JSX.Element => (
  <LayoutRoot>
    <Header />
    {children}
    <Header />
  </LayoutRoot>
)

export default Layout
