import { FETCH_BOOKS, NEW_BOOK } from '../constants/types';

export const fetchBooks = () => dispatch => {
    //axios promise dispatch
    console.log('asdasdasdasda');
        dispatch({
            type: FETCH_BOOKS,
            payload: [
                {
                    id: '1',
                    name: 'abcda'
                },
                {
                    id: '2',
                    name: 'sadabcda'
                }
            ]
        });
}