import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
// import todoApp from './reducers'
import Root from './Root'
 
import store from './store/store';

import './dist/App.css'


render(
  <Root store={store} />,
  document.getElementById('root')
)