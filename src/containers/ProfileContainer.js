import React, { Component } from 'react'

import ProfileCover from '../components/profile/ProfileCover';
import ProfileGeneral from '../components/profile/ProfileGeneral';

export class ProfileContainer extends Component {
  render() {
    let img = 'https://i.imgur.com/GcP71BP.png';
    return (
      <React.Fragment>
        <div className="container">  
          <ProfileCover cover={img} />
          <div className="profile-body">
            <div className="profile-leftside">
              <ProfileGeneral />  
            </div>
            <div className="profile-rightside">bbb</div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default ProfileContainer