import React from 'react'
import styled from '@emotion/styled'

import useBookStore from '../../hooks/useBookShop'

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

const Search = (): JSX.Element => {
  const {
    state: {selectedDatabase, selectedTable},
    dispatch,
  } = useBookStore()
  const filterParam = React.useCallback(
    (param) => dispatch({type: 'SEARCH_PARAM', payload: {searchParam: param}}),
    [dispatch]
  )

  ;<SeachPageLayout>Here is search</SeachPageLayout>
}

export default Search
