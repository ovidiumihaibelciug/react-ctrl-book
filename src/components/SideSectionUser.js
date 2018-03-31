import React, { Component } from 'react'

export class SideSectionUser extends Component {
  render() {
    let {img, fullname} = this.props;
    return (
      <div className="side-section-user">
        <div className="side-section-user-img"></div>
        <div className="side-section-user-fullname">{fullname}</div>
      </div>
    )
  }
}

export default SideSectionUser
