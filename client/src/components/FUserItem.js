import React, { Component } from 'react'

export class FUserItem extends Component {
  render() {
    let img = "https://c1.staticflickr.com/8/7591/16992834140_99815ee4ac_m.jpg";
    return (
      <div className="f-user-item" style={ { backgroundImage: `url(${img})` } }></div>
    )
  }
}

export default FUserItem
