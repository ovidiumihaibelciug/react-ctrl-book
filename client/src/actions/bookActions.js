import { FETCH_BOOKS, FETCH_BOOKS_BY_GENRE } from "../constants/types";
import axios from "axios";

export const fetchBooks = (page = 0) => dispatch => {
  return new Promise((reject, resolve) => {
    axios
      .get(
        "https://www.googleapis.com/books/v1/volumes/?q=book&startIndex=" +
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
