import React from 'react'
import { render } from 'react-dom'

import Root from './Root'
 
import store from './store/store';

import './dist/App.css'


render(
  <Root store={store} />,
  document.getElementById('root')
)