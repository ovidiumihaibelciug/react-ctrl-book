import React, { Component } from 'react'

import Box from '../components/home/Box';

class HomeContainer extends Component {

    render() {
        let img = ['https://marketplace.canva.com/MAB___U-clw/1/0/thumbnail_large/canva-yellow-lemon-children-book-cover-MAB___U-clw.jpg', 
        'https://about.canva.com/wp-content/uploads/sites/3/2015/01/children_bookcover.png', 
        'http://www.creativindie.com/wp-content/uploads/2013/10/Enchantment-Book-Cover-Best-Seller1.jpg'
        ];
        return (
            <div className="home-container">
                <Box color="box-blue" cover={img[0]} />
                <Box color="box-purple" cover={img[1]} />
                <Box color="box-red" cover={img[2]} />
            </div>
        )
    }
}

export default HomeContainer;