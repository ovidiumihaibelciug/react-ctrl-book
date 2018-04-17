import {
  FETCH_BOOKS,
  FETCH_BOOKS_BY_GENRE,
  FETCH_TOP_3_BOOKS
} from "../constants/types";

const initialState = {
  topBooks: [],
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
    case FETCH_TOP_3_BOOKS:
      return {
        ...state,
        topBooks: [...state.topBooks, action.payload]
      };
    default:
      return state;
  }
}
