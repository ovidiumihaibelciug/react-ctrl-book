import React, { Component } from 'react'

import HeaderBox from '../components/home/HeaderBox';
import BookBox from '../components/BookBox';

class HomeContainer extends Component {

    render() {
        let img = ['https://marketplace.canva.com/MAB___U-clw/1/0/thumbnail_large/canva-yellow-lemon-children-book-cover-MAB___U-clw.jpg', 
        'https://about.canva.com/wp-content/uploads/sites/3/2015/01/children_bookcover.png', 
        'http://www.creativindie.com/wp-content/uploads/2013/10/Enchantment-Book-Cover-Best-Seller1.jpg'
        ];
        return (
            <div className="home-container">
                <div className="home-header">
                    <HeaderBox color="box-blue" cover={img[0]} />
                    <HeaderBox color="box-purple" cover={img[1]} />
                    <HeaderBox color="box-red" cover={img[2]} />
                </div>
                <div className="home-body container">
                    <div className="left-side">
                        sdkfjsndkfnskdf
                    </div>
                    <div></div>
                    <div className="right-side-container">
                        <BookBox />
                        <BookBox />
                        <BookBox />
                    </div>
                </div>
            </div>
        )
    }
}

export default HomeContainer;