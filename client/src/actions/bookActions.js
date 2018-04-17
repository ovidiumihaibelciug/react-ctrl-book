import {
  FETCH_BOOKS,
  FETCH_BOOKS_BY_GENRE,
  FETCH_TOP_3_BOOKS
} from "../constants/types";
import axios from "axios";
import { keys } from "../utils";

export const fetchBooks = (page = 0) => dispatch => {
  return new Promise((reject, resolve) => {
    axios
      .get(
        "https://www.googleapis.com/books/v1/volumes/?" +
          "key=" +
          keys.gbooks +
          "&q=book&startIndex=" +
          page +
          "&orderBy=" +
          "relevance"
      )
      .then(data => {
        if (data.status === 200) {
          console.log("DONE");
          dispatch({
            type: FETCH_BOOKS,
            payload: data
          });
        } else reject();
      })
      .catch(err => reject(err));
  });
};

export const fetchBooksByGenre = (genre, page = 0) => dispatch => {
  return new Promise((reject, resolve) => {
    axios
      .get(
        "https://www.googleapis.com/books/v1/volumes?q=subject:" +
          genre +
          "&startIndex=" +
          page +
          "&orderBy=" +
          "relevance"
      )
      .then(data => {
        if (data.status === 200) {
          dispatch({
            type: FETCH_BOOKS_BY_GENRE,
            payload: data
          });
        } else reject();
      })
      .catch(err => reject(err));
  });
};

export const fetchTop3 = () => dispatch => {
  return new Promise((reject, resolve) => {
    axios
      .get(
        "https://api.nytimes.com/svc/books/v3/lists.json?api-key=" +
          keys.nyt +
          "&list=" +
          "hardcover-fiction"
      )
      .then(data => {
        if (data.status === 200) {
          const results = data.data.results.slice(0, 3);
          results.map(book => {
            console.log(book.isbns[book.isbns.length - 1].isbn10);
            axios
              .get(
                "https://www.googleapis.com/books/v1/volumes?q=isbn:" +
                  book.isbns[book.isbns.length - 1].isbn10 +
                  "&key=" +
                  keys.gbooks
              )
              .then(data => {
                book.book_details[0].smallThumbnail =
                  data.data.items[0].volumeInfo.imageLinks.smallThumbnail;
                dispatch({
                  type: FETCH_TOP_3_BOOKS,
                  payload: book
                });
                return book;
              })
              .catch(err => console.log(err));
          });
        } else reject();
      })
      .catch(err => reject(err));
  });
};
