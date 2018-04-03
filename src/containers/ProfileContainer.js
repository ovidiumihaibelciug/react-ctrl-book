import React, { Component } from 'react'

import FollowingBox from '../components/profile/FollowingBox';
import ProfileBio from '../components/profile/ProfileBio';
import ProfileBookShelf from '../components/profile/ProfileBookShelf';
import ProfileCover from '../components/profile/ProfileCover';
import ProfileGeneral from '../components/profile/ProfileGeneral';

export class ProfileContainer extends Component {
  render() {
    let img = 'https://i.imgur.com/GcP71BP.png';
    let bio = ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita rem, soluta temporibus veniam obcaecati voluptatum voluptas iusto deserunt, quae molestias minus natus recusandae quos facilis et eaque ad non! Quidem voluptate ducimus molestiae nostrum at error quo reprehenderit laborum quae! '
    return (
      <React.Fragment>
        <div className="container">  
          <ProfileCover cover={img} />
          <div className="profile-body">
            <div className="profile-leftside">
              <ProfileGeneral />
              <FollowingBox />
            </div>
            <div className="profile-rightside">
              <ProfileBio bio={bio} />
              <ProfileBookShelf />
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default ProfileContainer