import React, { Component } from 'react'

import { fetchBooks } from '../actions/bookActions';
import { connect } from 'react-redux';

class Books extends Component {

    componentWillMount = () => {
        this.props.fetchBooks();
    }

    componentDidMount = () => {
        console.log(this.props.books);
    }

    render() {
        return (
            <div>
               {this.props.books.id}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    books: state.books.items  
})

export default connect(mapStateToProps, { fetchBooks })(Books);
