import React, { Component } from 'react'

import BookBox from './BookBox';

export class BookList extends Component {
  render() {
    return (
        <React.Fragment>
            <BookBox book="bookVar" />
            <BookBox book="bookVar" />
            <BookBox book="bookVar" />
            <BookBox book="bookVar" />
            <BookBox book="bookVar" />
            <BookBox book="bookVar" />
        </React.Fragment>
    )
  }
}

export default BookList
