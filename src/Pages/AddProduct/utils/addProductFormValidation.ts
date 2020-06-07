import Legitity from '../../../utils/Legitity'

const validateTitle = (title: string) => {
  return new Legitity(title)
    .min(10, 'Minimum character is 10')
    .max(120, 'maximum character 120')
    .required()
}

const validateDescription = (description: string) => {
  return new Legitity(description)
    .matches(/^[A-Z]/, 'first letter must be uppercase')
    .max(500, 'maximum character 500')
    .required()
}

const validateCategories = (categories: string) => {
  return new Legitity(categories)
    .required()
    .custom(
      (categories) => (categories ? categories.split(',').length - 1 < 4 : true),
      'Max categories is 4'
    )
}

const validateAuthorName = (authorNames: string) => {
  return new Legitity(authorNames)
    .required()
    .custom(
      (categories) => (categories ? categories.split(',').length - 1 < 3 : true),
      'Max authors is 3'
    )
}
const validateYear = (year: number) => {
  return new Legitity(year).required().max(4, 'Max digits is 4').min(4, 'Minimum digits is 4')
}

const validatePublisher = (publisher: string) => {
  return new Legitity(publisher)
    .required()
    .max(60, 'Max digits is 60')
    .min(5, 'Minimum digits is 5')
}

const validateNumberOfPages = (pageNumber: number) => {
  return new Legitity(pageNumber)
    .required()
    .custom((pageNumber) => pageNumber <= 9999, 'page number should be less than 9999')
}

const validateISBN10 = (ISBN: number) => {
  return new Legitity(ISBN)
    .required()
    .min(10, 'Isbn-10 should be 10 digits')
    .max(10, 'Isbn-10 should be 10 digits')
}

const validateISBN13 = (ISBN: number) => {
  return new Legitity(ISBN)
    .required()
    .min(13, 'Isbn-13 should be 13 digits')
    .max(13, 'Isbn-13 should be 13 digits')
}

export {
  validateTitle,
  validateDescription,
  validateCategories,
  validateAuthorName,
  validateYear,
  validatePublisher,
  validateNumberOfPages,
  validateISBN13,
  validateISBN10,
}
