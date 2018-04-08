import { FETCH_BOOKS, NEW_BOOK } from '../constants/types';

const initialState = {
    books: [],
    book: {}
}

export default function(state = initialState, action) {
    switch(action.type) {
        case FETCH_BOOKS:
            console.log(action.payload.data)
            return {
                ...state,
                books: action.payload.data.items
            };

        default: 
            return state;
    }
}
