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
  lineHeight: '1.375rem',
  margin: 0,
  outline: 0,
  padding: '.3125rem 1rem .3125rem 0',
  width: '100%',
})

const ErrorMessage = styled('div')({
  fontSize: '.8125rem',
  marginTop: '.5rem',
  color: 'red',
  fontWeight: 600,
  textAlign: 'center',
})

interface Props {
  disabled?: boolean
  error: string | undefined
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
