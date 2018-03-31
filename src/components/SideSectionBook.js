import React, { Component } from 'react'

export class SideSectionUser extends Component {
  render() {
    let {img, title, author} = this.props;
    return (
      <div className="side-section-book">
        <div className="side-section-book-img"></div>
        <div className="side-section-book-details">
            <div className="side-section-book-title">{title}</div>
            <div className="side-section-book-author">by {author}</div>
        </div>
      </div>
    )
  }
}

export default SideSectionUser
