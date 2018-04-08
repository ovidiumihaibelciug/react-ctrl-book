import React, { Component } from 'react'

import { fetchBooks } from '../actions/bookActions';
import { connect } from 'react-redux';

class Books extends Component {

    componentWillMount = () => {
        this.props.fetchBooks();
    }

    render() {
        console.log(this.props.books.id);
        return (
            <div>
               {this.props.books.id}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    books: state.books.books
})

export default connect(mapStateToProps, { fetchBooks })(Books);
