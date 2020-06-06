import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Layout from './components/Layout'

import ProductPage from './Pages/Product'
import AddProductPage from './Pages/AddProduct'

const PageLayout: React.FC = () => {
  return (
    <Layout>
      <Switch>
        <Route exact path='/' component={ProductPage} />
        <Route exact path='/addproduct' component={AddProductPage} />
      </Switch>
    </Layout>
  )
}

export default PageLayout
