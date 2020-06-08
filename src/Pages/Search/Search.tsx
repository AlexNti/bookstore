import React from 'react'
import styled from '@emotion/styled'

import useBookStore from '../../hooks/useBookStore'
import SearchFiled from './components/SearchField'
import BooksGrid from './components/BooksGrid'

const SeachPageLayout = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  marginTop: '60px',
  marginBottom: '20px',
  marginLeft: '80px',
  marginRight: '80px',
  alignItems: 'center',
  height: '100%',
  overflow: 'scroll',
})

const Search: React.FC = (): JSX.Element => {
  const {
    state: {filterParam},
    dispatch,
  } = useBookStore()

  const handleFilterParam = React.useCallback(
    (param) => dispatch({type: 'FILTER_BOOKS', payload: {filterParam: param}}),
    [dispatch]
  )

  return (
    <SeachPageLayout>
      <SearchFiled
        placeholder='...search'
        onChange={handleFilterParam}
        value={filterParam}
        name='searchField'
      ></SearchFiled>
      <BooksGrid></BooksGrid>
    </SeachPageLayout>
  )
}

export default Search
