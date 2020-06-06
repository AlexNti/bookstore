import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Layout from './components/Layout'

import ProductPage from './Pages/Product'

const PageLayout: React.FC = () => {
  return (
    <Layout>
      <Switch>
        <Route exact path='/' component={ProductPage} />
      </Switch>
    </Layout>
  )
}

export default PageLayout
