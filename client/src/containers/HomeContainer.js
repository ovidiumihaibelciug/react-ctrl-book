import React, { Component } from 'react'

import BookBox from '../components/BookBox';
import HeaderBox from '../components/home/HeaderBox';
import SecondaryNav from '../components/SecondaryNav';
import SideBar from '../components/home/SideBar';

import { fetchBooks, fetchBooksByGenre } from '../actions/bookActions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

class HomeContainer extends Component {

    componentWillMount = () => {
        const genre = this.props.match.params.genre;
        if (!genre) {
            this.props.fetchBooks();
        } else {
            this.props.fetchBooksByGenre(genre);            
        }
    }

    render() {
        let img = ['https://marketplace.canva.com/MAB___U-clw/1/0/thumbnail_large/canva-yellow-lemon-children-book-cover-MAB___U-clw.jpg', 
        'https://about.canva.com/wp-content/uploads/sites/3/2015/01/children_bookcover.png', 
        'http://www.creativindie.com/wp-content/uploads/2013/10/Enchantment-Book-Cover-Best-Seller1.jpg'
        ];
        const genre = this.props.match.params.genre;
        let categories = [
            {name: "All Genres", value: "", active: false}, 
            {name: "Business", value: "business", active: false}, 
            {name: "Science", value: "science", active: false},
            {name: "Fiction", value: "fiction", active: false}
        ];
        if (genre) {
            const a = categories.lastIndexOf(categories.find(category => category.value === genre));
            categories[a].active = true;
        } else {
            categories[0].active = true;
        }
        
        return (
            <div className="home-container">
                <div className="home-header">
                    <HeaderBox color="box-blue" cover={img[0]} />
                    <HeaderBox color="box-purple" cover={img[1]} />
                    <HeaderBox color="box-red" cover={img[2]} />
                </div>
                <div className="home-body container">
                    <div className="left-side">
                        <SideBar />
                        {this.props.match.params.genre}
                    </div>
                    <div className="right-side-container">
                        <SecondaryNav title="Popular by Genre" categories={categories}/>
                        <div className="book-list">
                            {this.props.books.map(book => {
                                return <BookBox key={book.id} book={book} />
                            })}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    books: state.books.books
})


export default withRouter(connect(mapStateToProps, { fetchBooks, fetchBooksByGenre })(HomeContainer));