import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Layout from './components/Layout'

import ProductPage from './Pages/Product'
import AddProductPage from './Pages/AddProduct'
import SearchPage from './Pages/Search'

const PageLayout: React.FC = () => {
  return (
    <Layout>
      <Switch>
        <Route exact path='/product' component={ProductPage} />
        <Route exact path='/addproduct' component={AddProductPage} />
        <Route exact path='/' component={SearchPage} />
      </Switch>
    </Layout>
  )
}

export default PageLayout
