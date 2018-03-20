import { FETCH_BOOKS, NEW_BOOK } from '../constants/types';

const initialState = {
    items: [],
    item: {

    }
}

export default function(state = initialState, action) {
    switch(action.type) {
        case FETCH_BOOKS:
            return {
                ...state,
                items: action.payload
            }

        default: 
            return state;
        

    }
}
