import React, { Component } from 'react'

import { fetchBooks } from '../actions/bookActions';
import { connect } from 'react-redux';

class Books extends Component {

    componentWillMount = () => {
        this.props.fetchBooks();
    }

    render() {
        return (
            <div>
                {this.props.books.map(book => {
                    return <div>{book.name}</div>
                })}
            </div>
        )
    }
}


const mapStateToProps = state => ({
    books: state.books.items
})

export default connect(mapStateToProps, { fetchBooks })(Books)
