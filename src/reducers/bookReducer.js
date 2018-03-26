import { FETCH_BOOKS, NEW_BOOK } from '../constants/types';

const initialState = {
    items: [],
    item: {}
}

export default function(state = initialState, action) {
    switch(action.type) {
        case FETCH_BOOKS:
            console.log(action.payload.data)
            return {
                ...state,
                items: action.payload.data
            };

        default: 
            return state;
    }
}
