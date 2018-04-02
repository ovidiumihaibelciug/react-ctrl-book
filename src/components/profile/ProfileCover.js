import React, { Component } from 'react'
// import PropTypes from 'prop-types'

export class ProfileCover extends Component {
  render() {
    return (
      <div className="profile-cover" style={ { backgroundImage: `url(${this.props.cover})` } }></div>
    )
  }
}

export default ProfileCover
