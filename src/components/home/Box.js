import React, { Component } from 'react'

import Rating from '../Rating';

class Box extends Component {

    render() {
        let className = ['home-book-box', this.props.color].join(' ');
        let img = this.props.cover;
        return (
            <div className={className}>
                <div className="row home-book-box-content">
                    <div className="left-side">
                        <div className="home-book-img" style={ { backgroundImage: `url(${img})` } }></div>
                    </div>
                    <div className="right-side">
                        <div className="home-book-title-box">
                            <div className="home-book-title">
                                Adventure of Huckleberry Finn                            
                            </div>
                        </div>
                        <div className="home-book-author">
                            by <span>Emily Robbins</span>
                        </div>
                        <br />
                        <div className="home-book-rating">
                            <Rating score="3" />
                        </div>
                        {/* <div className="home-book-customers">adasd</div> */}
                    </div>
                </div>
            </div>
        )
    }
}

export default Box;