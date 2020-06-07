import React from 'react'
import styled from '@emotion/styled'

import useBookStore from '../../hooks/useBookStore'
import {State} from '../../utils/BookStoreContext'

const SeachPageLayout = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  marginTop: '60px',
  marginBottom: '20px',
  marginLeft: '80px',
  marginRight: '80px',
  alignItems: 'center',
})

const Search: React.FC = (): JSX.Element => {
  const {state} = useBookStore()

  console.log(state)

  // const filterParam = React.useCallback(
  //   (param) => dispatch({type: 'SEARCH_PARAM', payload: {searchParam: param}}),
  //   [dispatch]
  // )

  return <SeachPageLayout>Hello</SeachPageLayout>
}

export default Search
