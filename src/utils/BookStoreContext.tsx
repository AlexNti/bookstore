import React from 'react'

import booksMocks from '../books'

export interface Book {
  isbn: number
  title: string
  subtitle: string
  author: string
  published: Date
  publisher: string
  pages: number
  description: string
  website: string
  url?: string
}

export type State = {
  filterParam: string
  books: Book[]
  selectedBookISBN: Book | null
}

type Action<T, P = never> = {
  type: T
  payload?: P
}

type filterParamAction = Action<'FILTER_BOOKS', {filterParam: string}>
type addBookAction = Action<'ADD_BOOK', {book: Book}>
type selectBookAction = Action<'SELECT_BOOK', {selectedBookISBN: Book}>

type Actions = filterParamAction | addBookAction | selectBookAction

function reducer(state: State, action: Actions) {
  switch (action.type) {
    case 'FILTER_BOOKS':
      return {...state, filterParam: action?.payload?.filterParam}
    case 'ADD_BOOK':
      return {...state, books: [...state.books, action?.payload?.book]}
    case 'SELECT_BOOK':
      return {...state, selectedBookISBN: action?.payload?.selectedBookISBN}
    default:
      throw new Error()
  }
}

export const BookStoreContext = React.createContext<{
  state: State
  dispatch: React.Dispatch<any>
}>({
  state: {filterParam: '', books: [], selectedBookISBN: null},
  dispatch: (action: Actions) => null,
})

export const BookStoreContextProvider = ({children}: {children: React.ReactNode}): JSX.Element => {
  const initialState = React.useMemo(
    () => ({
      filterParam: '',
      books: booksMocks,
      selectedBookISBN: '',
    }),
    []
  )

  // @ts-ignore
  const [state, dispatch] = React.useReducer<React.Reducer<State, Actions>>(reducer, initialState)
  const contextValue = React.useMemo(() => ({state, dispatch}), [state, dispatch])

  return <BookStoreContext.Provider value={contextValue}>{children}</BookStoreContext.Provider>
}
