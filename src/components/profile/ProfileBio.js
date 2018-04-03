import React, { Component } from 'react'

export default class ProfileBio extends Component {
    render() {
        return (
            <div className="profile-bio box">
                <h3>Biography</h3>
                &nbsp;{this.props.bio}
            </div>
        )
    }
}
