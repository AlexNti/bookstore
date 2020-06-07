import React from 'react'
import styled from '@emotion/styled'

import BaseInput from '../../../components/BaseInputField'

interface Props {
  name: string
  dirty: boolean
  error: string | undefined
  value: string
  placeholder?: string
  label?: string
  type?: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Label = styled('label')({
  fontSize: 12,
  fontWeight: 600,
  marginRight: '5px',
})

const InputField = (props: Props): JSX.Element => {
  const {dirty, error, onChange, value, placeholder = '', label = '', name, type = 'text'} = props
  return (
    <React.Fragment>
      <Label>{label}</Label>
      <BaseInput
        error={dirty ? (error as string) : undefined}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        type={type}
        value={value}
      />
    </React.Fragment>
  )
}

export default InputField
