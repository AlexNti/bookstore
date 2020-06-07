import React, {HTMLAttributes} from 'react'
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
interface FieldBlockProps extends HTMLAttributes<HTMLDivElement> {
  width?: number
  error?: string
}
const FieldBlock = styled('div')<FieldBlockProps>(({width, error}) => ({
  alignItems: 'center',
  border: error ? '1px solid red' : '1px solid',
  borderRadius: 4,
  width: `${width ? width + 'px' : '100%'}`,
  display: 'flex',
  height: '40px',
  marginRight: '10px',
  position: 'relative',
  padding: '5px',
}))

const Label = styled('label')({
  fontSize: 12,
  fontWeight: 600,
  marginRight: '5px',
})

const InputField = (props: Props): JSX.Element => {
  const {dirty, error, onChange, value, placeholder = '', label = '', name, type = 'text'} = props
  return (
    <React.Fragment>
      <FieldBlock>
        <Label>{label}</Label>
        <BaseInput
          error={dirty ? (error as string) : undefined}
          name={name}
          onChange={onChange}
          placeholder={placeholder}
          type={type}
          value={value}
        />
      </FieldBlock>
    </React.Fragment>
  )
}

export default InputField
