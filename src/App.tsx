import React from 'react'
import {History} from 'history'
import {Router} from 'react-router-dom'
import Routes from './routes'
import {BookStoreContextProvider} from './utils/BookStoreContext'

interface AppProps {
  history: History
}
const App = ({history}: AppProps): JSX.Element => {
  return (
    <BookStoreContextProvider>
      <Router history={history}>
        <Routes></Routes>
      </Router>
    </BookStoreContextProvider>
  )
}

export default App
