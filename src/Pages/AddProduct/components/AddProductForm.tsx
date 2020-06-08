import React from 'react'
import styled from '@emotion/styled'
import useBookStore from '../../../hooks/useBookStore'
import InputField from './InputField'
import BaseButton from '../../../components/BaseButton'
import useForm from '../../../hooks/useForm'
import {
  validateTitle,
  validateDescription,
  validateCategories,
  validateAuthorName,
  validateYear,
  validateISBN13,
  validateISBN10,
  validateNumberOfPages,
  validatePublisher,
} from '../utils/addProductFormValidation'

const AddProductFormLayout = styled('form')({
  width: '50%',
  minWidth: '600px',
  height: '400px',
  border: '1px solid black',
  display: 'flex',
  padding: '5px',
  boxSizing: 'border-box',
  flexDirection: 'column',
})

const AddProductGrid = styled('div')({
  display: 'grid',
  width: '100%',
  height: '100%',
  gridTemplateColumns: '1fr 1fr',
  gridAutoRows: '1fr',
  gridGap: '10px',
})

const AddProductForm = (): JSX.Element => {
  const {dispatch, state} = useBookStore()

  const {fields, onChange, setDirtyField, areAllFieldsValid} = useForm({
    title: {
      getDefault: () => '',
      validate: validateTitle,
    },
    description: {
      getDefault: () => '',
      validate: validateDescription,
    },
    categories: {
      getDefault: () => '',
      validate: validateCategories,
    },
    authorNames: {
      getDefault: () => '',
      validate: validateAuthorName,
    },
    year: {
      getDefault: () => 0,
      validate: validateYear,
    },
    options: {
      getDefault: () => '',
    },
    publisher: {
      getDefault: () => '',
      validate: validatePublisher,
    },
    rating: {
      getDefault: () => '',
    },
    isbn10: {
      getDefault: () => '',
      validate: validateISBN10,
    },
    pageNumber: {
      getDefault: () => 0,
      validate: validateNumberOfPages,
    },
    isbn13: {
      getDefault: () => 0,
      validate: validateISBN13,
    },
    imageUrl: {
      getDefault: () => '',
    },
  })

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setDirtyField()

    if (!areAllFieldsValid()) {
      alert('some field are invalid')
      return
    }
    const {
      authorNames,
      year,
      publisher,
      isbn10,
      pageNumber,
      isbn13,
      categories,
      title,
      description,
      imageUrl,
    } = fields
    dispatch({
      type: 'ADD_BOOK',
      payload: {
        book: {
          authorNames: authorNames.value,
          description: description.value,
          isbn10: isbn10.value,
          isbn13: isbn13.value,
          categories: categories.value,
          title: title.value,
          year: year.value,
          pageNumber: pageNumber.value,
          publisher: publisher.value,
          imageUrl: imageUrl.value,
        },
      },
    })

    console.log(state)
  }

  const SubmitButton = styled(BaseButton)(({disabled}) => ({
    border: '1px solid black',
    width: '100px',
    height: '30',
    borderRadius: '5px',
    ':active': {
      boxShadow: disabled
        ? undefined
        : 'rgba(0,0,0,.2) 0px 3px 5px -1px, rgba(0,0,0,.14) 0px 5px 8px 0px, rgba(0,0,0,.12) 0px 1px 14px 0px',
    },
  }))

  return (
    <AddProductFormLayout onSubmit={onSubmit}>
      <AddProductGrid>
        <InputField onChange={onChange} name='title' label='Title:' {...fields.title}></InputField>

        <InputField
          onChange={onChange}
          name='categories'
          label='Categories:'
          {...fields.categories}
        ></InputField>

        <InputField
          onChange={onChange}
          name='description'
          label='Description:'
          {...fields.description}
        ></InputField>

        <InputField
          onChange={onChange}
          name='authorNames'
          label='Author Name(s):'
          {...fields.authorNames}
        ></InputField>

        <InputField
          onChange={onChange}
          name='options'
          label='Options:'
          {...fields.options}
        ></InputField>

        <InputField
          onChange={onChange}
          name='publisher'
          label='Publisher:'
          {...fields.publisher}
        ></InputField>

        <InputField
          onChange={onChange}
          name='rating'
          label='Rating:'
          {...fields.rating}
        ></InputField>

        <InputField
          onChange={onChange}
          name='year'
          label='Year:'
          {...fields.year}
          type='number'
        ></InputField>

        <InputField
          onChange={onChange}
          name='pageNumber'
          label='Page Number:'
          {...fields.pageNumber}
          type='number'
        ></InputField>

        <InputField
          onChange={onChange}
          name='isbn10'
          label='ISBN-10:'
          {...fields.isbn10}
          type='number'
        ></InputField>

        <InputField
          onChange={onChange}
          name='isbn13'
          label='ISBN-13:'
          {...fields.isbn13}
          type='number'
        ></InputField>

        <InputField
          onChange={onChange}
          name='imageUrl'
          label='Image Url:'
          {...fields.imageUrl}
        ></InputField>
      </AddProductGrid>
      <SubmitButton type='submit'>Save</SubmitButton>
    </AddProductFormLayout>
  )
}

export default AddProductForm
