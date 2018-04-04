import React, { Component } from 'react'

import Footer from '../components/Footer';
import Navbar from '../components/Navbar'
import ProfileContainer from '../containers/ProfileContainer'

export class Profile extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <ProfileContainer />
        <Footer />        
      </div>
    )
  }
}

export default Profile
