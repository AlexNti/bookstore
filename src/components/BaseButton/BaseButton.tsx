import React, {ButtonHTMLAttributes} from 'react'

import styled from '@emotion/styled'

const disabledStyles = {
  cursor: 'not-allowed !important',
  opacity: 0.5,
  ':hover,:focus,:active,:disabled': {
    boxShadow: 'none !important ',
  },
  ':hover,:focus': {
    opacity: '0.5 !important',
  },
  ':active': {
    animation: 'none !important',
  },
}

export interface ButtonRootProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  disabled?: boolean
  height?: string
  width?: string
}

const ButtonRoot = styled('button')<ButtonRootProps>(
  {
    appearance: 'none',
    background: 'inherit',
    border: '0',
    borderRadius: '0',
    color: 'inherit',
    cursor: 'pointer',
    fontFamily: 'inherit',
    fontSize: 'inherit',
    margin: 0,
    outline: 0,
    padding: 0,
    textAlign: 'center',
  },
  ({disabled, height, width}) => (disabled ? {...disabledStyles, width, height} : {width, height})
)

export interface BaseButtonProps extends ButtonRootProps {
  children?: React.ReactNode
  onClick?: React.MouseEventHandler
}

const BaseButton = ({onClick, children, height, width, disabled, ...props}: BaseButtonProps) => (
  <ButtonRoot onClick={onClick} height={height} width={width} disabled={disabled} {...props}>
    {children}
  </ButtonRoot>
)

export default BaseButton
