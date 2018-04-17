import React, { Component } from "react";

import Rating from "../Rating";

class HeaderBox extends Component {
  render() {
    let className = ["home-book-box"];
    const { book_details } = this.props.book;
    if (this.props.book.rank % 3 == 0) {
      className = [...className, "box-blue"].join(" ");
    } else if (this.props.book.rank % 3 == 1) {
      className = [...className, "box-red"].join(" ");
    } else {
      className = [...className, "box-purple"].join(" ");
    }
    return (
      <div className={className}>
        <div className="row home-book-box-content">
          <div className="left-side">
            <div
              className="home-book-img"
              style={{
                backgroundImage: `url(${book_details[0].smallThumbnail})`
              }}
            />
          </div>
          <div className="right-side">
            <div className="home-book-title-box">
              <div className="home-book-title">{book_details[0].title}</div>
            </div>
            <div className="home-book-author">
              by <span>{book_details[0].author}</span>
            </div>
            <br />
            <div className="home-book-rank">#{this.props.book.rank}</div>
            <button className="home-book-btn">See The Book</button>
          </div>
        </div>
      </div>
    );
  }
}

export default HeaderBox;
