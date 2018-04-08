import React, { Component } from 'react'

import Rating from '../components/Rating'

export default class BookBox extends Component {
    render() {
        let {volumeInfo} = this.props.book;
        let rating = !volumeInfo.averageRating ? 0 : Math.floor(volumeInfo.averageRating);
        return (
            <div className="book-box">                
                <div className="left-side">
                    <img src={volumeInfo.imageLinks.thumbnail} className="image" alt="" />
                </div>
                <div className="right-side">
                    <div className="settings"><i className="fa fa-ellipsis-v fa-lg"></i></div>
                    <div className="title">{volumeInfo.title}</div>
                    <div className="author">by {volumeInfo.authors.map(author => author)}</div>
                    <div className="rating">
                        <Rating score={rating} /> {!rating ? ' No votes' : ''}
                    </div>
                    <div className="description">
                        {volumeInfo.description}
                    </div>
                </div>
                <div className="likes">
                    5 &nbsp; <i className="fa fa-heart"></i>
                </div>
            </div>
        );
    }
}