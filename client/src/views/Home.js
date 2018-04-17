import React, { Component } from "react";
// import PropTypes from 'prop-types'

import Footer from "../components/Footer";
import HomeContainer from "../containers/HomeContainer";
import Navbar from "../components/Navbar";

export class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <HomeContainer />
        <Footer />
      </div>
    );
  }
}

export default Home;
