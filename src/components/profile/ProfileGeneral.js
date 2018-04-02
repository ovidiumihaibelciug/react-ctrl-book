import React, { Component } from 'react'

export class ProfileGeneral extends Component {
  render() {
    let img = 'http://www.phspotasky.com/uploads/2/4/9/2/24928880/cp2_orig.jpg';
    return (
      <div className="profile-general box">
        <div className="profile-image-section">
            <div className="profile-image" style={ { backgroundImage: `url(${img})` } }></div>
        </div>
        <div className="profile-general-fullname">Lorem Ipsum Dolor</div>
        <div className="profile-general-details">
            <div className="followers">300,267 Followers</div>
            <div className="following">1,267 Following</div>
            <div className="books">267 Books</div>
        </div>
        <button className="profile-general-follow-btn"><i className="fa fa-plus"></i> &nbsp; Follow</button>
      </div>
    )
  }
}

export default ProfileGeneral
