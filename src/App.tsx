import React from 'react'
import {History} from 'history'
import {Router} from 'react-router-dom'
import Routes from './routes'
import {BookShopContextProvider} from './utils/BookShopContext'

interface AppProps {
  history: History
}
const App = ({history}: AppProps): JSX.Element => {
  return (
    <BookShopContextProvider>
      <Router history={history}>
        <Routes></Routes>
      </Router>
    </BookShopContextProvider>
  )
}

export default App
