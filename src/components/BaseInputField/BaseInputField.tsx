import React from 'react'
import styled from '@emotion/styled'

const Input = styled('input')({
  appearance: 'none',
  borderWidth: 0,
  borderRadius: 0,
  boxShadow: 'none',
  color: 'black',
  display: 'block',
  fontSize: 14,
  margin: 0,
  outline: 0,
  padding: '2px 5px 2px 0',
  width: '100%',
})

const ErrorMessage = styled('div')({
  fontSize: '11px',
  color: 'red',
  fontWeight: 600,
  textAlign: 'center',
  position: 'absolute',
  bottom: '-14px',
  right: 0,
})

interface Props {
  disabled?: boolean
  error?: string | undefined
  name?: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  type?: string
  value: string
}

const BaseInput = (props: Props) => {
  const {disabled, error, name, onChange, placeholder, type = 'text', value} = props
  return (
    <React.Fragment>
      <Input
        disabled={Boolean(disabled)}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        type={type}
        value={value}
      />
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </React.Fragment>
  )
}

export default BaseInput
