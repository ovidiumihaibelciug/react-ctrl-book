import React, { Component } from 'react'

import BookList from './BookList';

export class ProfileBookShelf extends Component {
  render() {
    return (
      <div className="profile-bookshelf box" style={{'marginBottom': '100px'}}> {/* the margin will be deleted */}
        <div className="profile-header">Books</div>
        <div className="profile-options">
            <div className="profile-option profile-option-active">Read</div>
            <div className="profile-option">Liked</div>
        </div>
        <div className="profile-filters">
            <div>Sort by:</div>
            <select>
                <option value="">Release Date (Newest First)</option>
                <option value="">Release Date (Oldest First)</option>
            </select>
        </div>

        <div className="profile-book-list">
            <BookList />
        </div>
        
      </div>
    )
  }
}

export default ProfileBookShelf
