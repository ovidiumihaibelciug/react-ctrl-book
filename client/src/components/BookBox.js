import React, { Component } from "react";

import Rating from "../components/Rating";

export default class BookBox extends Component {
  parseText = (text, limit) => {
    if (text === "") {
      return "";
    }
    if (text.length > limit)
      for (let i = limit; i > 0; i--) {
        if (
          text.charAt(i) === " " &&
          (text.charAt(i - 1) !== "," ||
            text.charAt(i - 1) !== "." ||
            text.charAt(i - 1) !== ";")
        ) {
          return text.substring(0, i) + "...";
        }
      }
    else return text;
  };
  render() {
    let { volumeInfo } = this.props.book;
    let authors = [];
    let rating = 0;
    if (volumeInfo) {
      console.log(volumeInfo);
      rating = !volumeInfo.averageRating
        ? 0
        : Math.floor(volumeInfo.averageRating);
      if (volumeInfo.authors) {
        volumeInfo.authors.forEach(author => {
          authors = [...authors, author];
        });
      }
      authors = authors.join(", ");
    }
    return (
      <div className="book-box">
        <div className="left-side">
          <img src={volumeInfo.imageLinks.thumbnail} className="image" alt="" />
        </div>
        <div className="right-side">
          <div className="settings">
            <i className="fa fa-ellipsis-v fa-lg" />
          </div>
          <div className="title">
            {volumeInfo.title ? this.parseText(volumeInfo.title, 50) : ""}
          </div>
          <div className="author">
            by {volumeInfo ? this.parseText(authors, 50) : ""}
          </div>
          <div className="rating">
            <Rating score={rating} /> {!rating ? " No votes" : ""}
          </div>
          <div className="description">
            {this.parseText(
              volumeInfo.description ? volumeInfo.description : "",
              120
            )}
          </div>
        </div>
        <div className="likes">
          5 &nbsp; <i className="fa fa-heart" />
        </div>
      </div>
    );
  }
}
