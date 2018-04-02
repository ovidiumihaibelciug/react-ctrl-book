import React, { Component } from 'react'

import Navbar from '../components/Navbar'
import ProfileContainer from '../containers/ProfileContainer'

export class Profile extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <ProfileContainer />
      </div>
    )
  }
}

export default Profile
