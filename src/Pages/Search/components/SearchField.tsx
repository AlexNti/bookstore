import React, {HTMLAttributes} from 'react'
import styled from '@emotion/styled'

import BaseInput from '../../../components/BaseInputField'
import useEventCallback from '../../../hooks/useEventCallback'

interface Props {
  name: string
  value: string
  placeholder?: string
  onChange: (value: any) => void
}
interface FieldBlockProps extends HTMLAttributes<HTMLDivElement> {
  width?: number
  error?: string
}
const FieldBlock = styled('div')<FieldBlockProps>(({width}) => ({
  alignItems: 'center',
  borderRadius: 4,
  border: '1px solid',
  width: `${width ? width + 'px' : '100%'}`,
  display: 'flex',
  height: '40px',
  position: 'relative',
  padding: '5px',
  marginBottom: '10px',
}))

const SearchField = (props: Props): JSX.Element => {
  const {onChange, value, placeholder = '', name} = props
  const handleChange = useEventCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const {value} = e.target
    onChange(value)
  })
  return (
    <React.Fragment>
      <FieldBlock>
        <BaseInput name={name} onChange={handleChange} placeholder={placeholder} value={value} />
      </FieldBlock>
    </React.Fragment>
  )
}

export default React.memo(SearchField)
