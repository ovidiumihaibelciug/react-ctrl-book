import React, { Component } from 'react'

export class BookBox extends Component {
  render() {
    let img = "https://about.canva.com/wp-content/uploads/sites/3/2015/01/business_bookcover.png";
    return (
        <div className="profile-book-box">
            <div className="book-img"  style={ { backgroundImage: `url(${img})` } }></div> 
            <div className="book-title">Lorem, ipsum .</div> 
        </div>
    )
  }
}

export default BookBox
