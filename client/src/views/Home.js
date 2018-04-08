import React, { Component } from 'react'
// import PropTypes from 'prop-types'

import Navbar from '../components/Navbar';
import HomeContainer from '../containers/HomeContainer';

export class Home extends Component {
  render() {
    return (
      <div>
          <Navbar />
          <HomeContainer />
      </div>
    )
  }
}

export default Home
