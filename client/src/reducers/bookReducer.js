import { FETCH_BOOKS, FETCH_BOOKS_BY_GENRE } from "../constants/types";

const initialState = {
  books: [],
  book: {},
  isFetching: true
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_BOOKS:
      return {
        ...state,
        isFetching: false,
        books: action.payload.data.items
      };
    case FETCH_BOOKS_BY_GENRE:
      return {
        ...state,
        isFetching: false,
        books: action.payload.data.items
      };
    default:
      return state;
  }
}
