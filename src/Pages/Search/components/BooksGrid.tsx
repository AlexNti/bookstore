import React from 'react'
import styled from '@emotion/styled'

import BookGridItem from './BookGridItem'
import useBookStore from '../../../hooks/useBookStore'
import useRouter from '../../../hooks/useRouter'

const BookGrid = styled('div')({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, minmax(200px, 1fr))',
  gridAutoRows: '1fr',
  gridGap: '10px',
})

const BooksGrid = () => {
  const {
    state: {filterParam, books},
    dispatch,
  } = useBookStore()
  const {history} = useRouter()

  const memoizedFilteredBooks = React.useMemo(() => {
    const filterParamToLowerCase = filterParam.toLocaleLowerCase()
    return (
      books?.filter(
        ({title, isbn, author}) =>
          title.toLocaleLowerCase().includes(filterParamToLowerCase) ||
          String(isbn).toLocaleLowerCase().includes(filterParamToLowerCase) ||
          author.toLocaleLowerCase().includes(filterParamToLowerCase)
      ) || []
    )
  }, [books, filterParam])

  const handleGridItemClick = React.useCallback(
    ({isbn}) => {
      history.push('/product')
      dispatch({type: 'SELECT_BOOK', payload: {selectedBookISBN: isbn}})
    },
    [history, dispatch]
  )

  return (
    <BookGrid>
      {memoizedFilteredBooks.map(({title, isbn, url}) => (
        <BookGridItem
          onClick={() => handleGridItemClick({isbn})}
          key={isbn}
          url={url}
          title={title}
        ></BookGridItem>
      ))}
    </BookGrid>
  )
}

export default BooksGrid
