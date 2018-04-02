import React from 'react'
// import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from '../views/Home'

export const routes = [
    {
        path: '/',
        component: 'Home'
    }, 
    {
        path: '/abc',
        component: 'Home'
    }   
]

const Root = ({ store }) => (
    <Provider store={store}>
        <Router>
            <React.Fragment> 
                {
                    routes.map(route => (
                        <Route exact path={route.path} component={Home} />                     
                    ))
                }
            </React.Fragment>
      </Router>
    </Provider>
  )

  export default Root
