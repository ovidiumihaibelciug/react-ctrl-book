import React, { Component } from 'react';

export class SideSection extends Component {
  render() {
    let {title, children} = this.props;
    return (
      <div className="side-section">
        <div className="side-section-title">{title}</div>
        <div className="side-section-children">{children}</div>
      </div>
    )
  }
}

export default SideSection
