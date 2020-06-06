import React from 'react'
import {History} from 'history'
import {Router} from 'react-router-dom'
import Routes from './routes'

interface AppProps {
  history: History
}
const App = ({history}: AppProps): JSX.Element => {
  return (
    <Router history={history}>
      <Routes></Routes>
    </Router>
  )
}

export default App
