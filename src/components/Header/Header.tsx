import React from 'react'
import styled from '@emotion/styled'
import {Link} from 'react-router-dom'

import {LocationDescriptor} from 'history'

import BaseButton, {BaseButtonProps} from '../../components/BaseButton'

const HeaderWrapper = styled('div')({
  width: '100%',
  height: '60px',
  backgroundColor: '#F7F8F9',
  textAlign: 'center',
  border: '1px solid black',
  display: 'flex',
  alignItems: 'center',
  padding: '20px',
  boxSizing: 'border-box',
})

const HeaderTitle = styled('h1')({
  fontSize: '50px',
  marginRight: '30px',
})

interface NavLinkProps extends BaseButtonProps {
  as?: any
  to: LocationDescriptor
  disabled?: boolean
}

const NavLink = styled(BaseButton)<NavLinkProps>(({disabled}) => ({
  border: '1px solid black',
  width: '100px',
  height: '30px',
  textDecoration: 'none',
  lineHeight: '26px',
  marginRight: '20px',
  borderRadius: '5px',
  ':active': {
    boxShadow: disabled
      ? undefined
      : 'rgba(0,0,0,.2) 0px 3px 5px -1px, rgba(0,0,0,.14) 0px 5px 8px 0px, rgba(0,0,0,.12) 0px 1px 14px 0px',
  },
}))

const Header = (): JSX.Element => {
  return (
    <HeaderWrapper>
      <HeaderTitle>Bookstore</HeaderTitle>
      <NavLink as={Link} to={'/addProduct'}>
        Add product
      </NavLink>
      <NavLink as={Link} to={'/'}>
        Search
      </NavLink>
    </HeaderWrapper>
  )
}

export default Header
