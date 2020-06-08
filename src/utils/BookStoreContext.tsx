import React from 'react'

import booksMocks from '../books'

export interface Book {
  isbn: number
  title: string
  subtitle: string
  author: string
  year: number
  publisher: string
  pageNumber: number
  description: string
  website: string
  imageUrl?: string
  isbn10?: number
  isbn13?: number
  categories?: string
  authorNames?: string
}

export type State = {
  filterParam: string
  books: Book[]
  selectedBook: Book | null
}

type Action<T, P = never> = {
  type: T
  payload?: P
}

type filterParamAction = Action<'FILTER_BOOKS', {filterParam: string}>
type addBookAction = Action<'ADD_BOOK', {book: Book}>
type selectBookAction = Action<'SELECT_BOOK', {selectedBook: Book}>

type Actions = filterParamAction | addBookAction | selectBookAction

function reducer(state: State, action: Actions) {
  switch (action.type) {
    case 'FILTER_BOOKS':
      return {...state, filterParam: action?.payload?.filterParam}
    case 'ADD_BOOK':
      return {...state, books: [...state.books, action?.payload?.book]}
    case 'SELECT_BOOK':
      return {...state, selectedBook: action?.payload?.selectedBook}
    default:
      throw new Error()
  }
}

export const BookStoreContext = React.createContext<{
  state: State
  dispatch: React.Dispatch<any>
}>({
  state: {filterParam: '', books: [], selectedBook: null},
  dispatch: (action: Actions) => null,
})

export const BookStoreContextProvider = ({children}: {children: React.ReactNode}): JSX.Element => {
  const initialState = React.useMemo(
    () => ({
      filterParam: '',
      books: booksMocks,
      selectedBook: '',
    }),
    []
  )

  // @ts-ignore
  const [state, dispatch] = React.useReducer<React.Reducer<State, Actions>>(reducer, initialState)
  const contextValue = React.useMemo(() => ({state, dispatch}), [state, dispatch])

  return <BookStoreContext.Provider value={contextValue}>{children}</BookStoreContext.Provider>
}
