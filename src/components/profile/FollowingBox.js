import React, { Component } from 'react'

import FUserItem from '../FUserItem';

export class FollowingBox extends Component {
  render() {
    return (
        <div className="profile-following-box box">
            <div className="header">
                <div class="title">Following</div>
                <div class="all">View All</div>
            </div>
            <div className="profile-following-list">
                <FUserItem />
                <FUserItem />
                <FUserItem />
                <FUserItem />
                <FUserItem />
                <FUserItem />
            </div>
        </div>
    )
  }
}

export default FollowingBox
