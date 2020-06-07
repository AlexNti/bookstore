import React, {HTMLAttributes} from 'react'
import styled from '@emotion/styled'

import BaseInput from '../../../components/BaseInputField'

interface Props {
  name: string
  value: string
  placeholder?: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}
interface FieldBlockProps extends HTMLAttributes<HTMLDivElement> {
  width?: number
  error?: string
}
const FieldBlock = styled('div')<FieldBlockProps>(({width}) => ({
  alignItems: 'center',
  borderRadius: 4,
  width: `${width ? width + 'px' : '100%'}`,
  display: 'flex',
  height: '40px',
  marginRight: '10px',
  position: 'relative',
  padding: '5px',
}))

const SearchField = (props: Props): JSX.Element => {
  const {onChange, value, placeholder = '', name} = props
  return (
    <React.Fragment>
      <FieldBlock>
        <BaseInput name={name} onChange={onChange} placeholder={placeholder} value={value} />
      </FieldBlock>
    </React.Fragment>
  )
}

export default React.memo(SearchField)
