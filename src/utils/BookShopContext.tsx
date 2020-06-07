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
}

type State = {
  filterParam: string | undefined
  books: Book[] | []
}

type Action<T, P = never> = {
  type: T
  payload?: P
}

type filterParamAction = Action<'FILTER_PARAM', {filterParam: string}>
type addBookAction = Action<'ADD_BOOK', {book: Book}>

type Actions = filterParamAction | addBookAction

function reducer(state: State, action: Actions) {
  switch (action.type) {
    case 'FILTER_PARAM':
      return {...state, filterParam: action?.payload?.filterParam}
    case 'ADD_BOOK':
      return {...state, books: [...state.books, action?.payload?.book]}

    default:
      throw new Error()
  }
}

export const BookShopContext = React.createContext<{
  state: State
  dispatch: (action: Actions) => void
  // @ts-ignore
}>(undefined)

export const BookShopContextProvider = ({children}: {children: React.ReactNode}): JSX.Element => {
  const initialState = React.useMemo(
    () => ({
      filterParam: '',
      books: booksMocks || [],
    }),
    []
  )

  // @ts-ignore
  const [state, dispatch] = React.useReducer<React.Reducer<State, Actions>>(reducer, initialState)
  const contextValue = React.useMemo(() => ({state, dispatch}), [state, dispatch])

  return <BookShopContext.Provider value={contextValue}>{children}</BookShopContext.Provider>
}
