import React, { Component } from 'react'

import Rating from '../components/Rating'

export default class BookBox extends Component {
    render() {
        return (
            <div className="book-box">                
                <div className="left-side">
                    <img src="https://99designs-blog.imgix.net/wp-content/uploads/2017/12/attachment_83090027.jpg?auto=format&q=60&fit=max&w=930" className="image" alt="" />
                </div>
                <div className="right-side">
                    <div className="settings"><i className="fa fa-ellipsis-v fa-lg"></i></div>
                    <div className="title">Act Like It</div>
                    <div className="author">by Lucy Parker</div>
                    <div className="rating">
                        <Rating score="3" />
                    </div>
                    <div className="description">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, dolor? Veritatis, minima veniam? Natus, velit. 
                    </div>
                </div>
                <div className="likes">
                    5 &nbsp; <i className="fa fa-heart"></i>
                </div>
            </div>
        );
    }
}