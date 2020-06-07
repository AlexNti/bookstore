import React from 'react'
import styled from '@emotion/styled'

import InputField from './InputField'
import Legitity from '../../../utils/Legitity'
import useForm from '../../../hooks/useForm'

const FieldGroup = styled('div')({
  display: 'flex',
  alignItems: 'center',
  padding: '2px',
})

const AddProductFormLayout = styled('form')({
  width: '50%',
  height: '300px',
  border: '1px solid black',
  display: 'flex',
  padding: '5px',
  boxSizing: 'border-box',
})

const AddProductGrid = styled('div')({
  display: 'grid',
  width: '100%',
  height: '100%',
  gridTemplateColumns: '1fr 1fr',
  gridAutoRows: '40px',
  gridGa: '10px',
})

const validateTitle = (title: string) => {
  return new Legitity(title).min(10, 'Minimum character is 10').max(120, 'maximum character 120')
}

const AddProductForm = (): JSX.Element => {
  const {fields, onChange, validateField} = useForm({
    title: {
      getDefault: () => '',
      validate: validateTitle,
    },
  })

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const {title} = validateField()
    console.log(title)
  }

  return (
    <AddProductFormLayout onSubmit={onSubmit}>
      <AddProductGrid>
        <FieldGroup>
          <InputField
            onChange={onChange}
            name='title'
            label='Title:'
            {...fields.title}
          ></InputField>
        </FieldGroup>
      </AddProductGrid>
    </AddProductFormLayout>
  )
}

export default AddProductForm
