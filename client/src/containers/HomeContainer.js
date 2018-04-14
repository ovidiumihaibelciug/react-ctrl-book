import React, { Component } from "react";

import BookBox from "../components/BookBox";
import HeaderBox from "../components/home/HeaderBox";
import SecondaryNav from "../components/SecondaryNav";
import SideBar from "../components/home/SideBar";

import { fetchBooks, fetchBooksByGenre } from "../actions/bookActions";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { maxResults, maxResultsPerPage, categories, img } from "../utils";

class HomeContainer extends Component {
  componentWillMount = () => {
    const genre = this.props.match.params.genre;
    const page = this.props.match.params.page - 1;
    if (!genre && !page) {
      this.props.fetchBooks();
    } else if (genre && page) {
      this.props.fetchBooksByGenre(genre, page);
    } else if (genre && !page) {
      this.props.fetchBooksByGenre(genre, 0);
    } else if (!genre && page) {
      this.props.fetchBooks(page * 10 - page);
    }
  };

  render() {
    const genre = this.props.match.params.genre;
    const page = this.props.match.params.page
      ? parseInt(this.props.match.params.page)
      : 1;
    let output = [];
    let path = genre ? "/" + genre + "/" : "/page/";
    if (page === 1) {
      output = [
        <a href={path + page} className="page-active">
          {page}
        </a>,
        <a href={path + (page + 1)}>{page + 1}</a>,
        <a href={path + (page + 2)}>{page + 2}</a>,
        <a href={path + (page + 3)}>
          <i className="fa fa-arrow-right" />
        </a>
      ];
    } else {
      output = [
        <a href={path + (page - 2)}>
          <i className="fa fa-arrow-left" />
        </a>,
        <a href={path + (page - 1)}>{page - 1}</a>,
        <a href={path + page} className="page-active">
          {page}
        </a>,
        <a href={path + (page + 1)}>{page + 1}</a>,
        <a href={path + (page + 2)}>
          <i className="fa fa-arrow-right" />
        </a>
      ];
    }
    if (genre) {
      const a = categories.lastIndexOf(
        categories.find(category => category.value === genre)
      );
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
            {/* {this.props.match.params.genre} */}
          </div>
          <div className="right-side-container">
            <SecondaryNav title="Popular by Genre" categories={categories} />
            <div className="book-list">
              {this.props.books.map(book => {
                return <BookBox key={book.id} book={book} />;
              })}
            </div>
            <div className="book-links">{output}</div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  books: state.books.books
});

export default withRouter(
  connect(mapStateToProps, {
    fetchBooks,
    fetchBooksByGenre
  })(HomeContainer)
);
