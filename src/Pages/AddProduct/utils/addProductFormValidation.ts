import Legitity from '../../../utils/Legitity'

const validateTitle = (title: string) => {
  return new Legitity(title)
    .min(10, 'Minimum character is 10')
    .max(120, 'maximum character 120')
    .required()
}

const validateDescription = (description: string) => {
  return new Legitity(description)
    .matches(/^[A-Z]/)
    .max(500, 'maximum character 500')
    .required()
}

const validateCategories = (categories: string) => {
  return new Legitity(categories).required()
}

const validateAuthorName = (authorNames: string) => {
  return new Legitity(authorNames).required()
}
const validateYear = (year: number) => {
  return new Legitity(year).required().max(4, 'Max digits is 4').min(4, 'Minimum digits is 4')
}
export {validateTitle, validateDescription, validateCategories, validateAuthorName, validateYear}
