import React from 'react'

import {BookStoreContext} from '../utils/BookStoreContext'

const useBookStore = () => React.useContext(BookStoreContext)

export default useBookStore
