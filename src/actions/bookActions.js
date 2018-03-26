import { FETCH_BOOKS, NEW_BOOK } from '../constants/types';
import axios from 'axios';


export const fetchBooks = () => dispatch => {
    return new Promise((reject, resolve) => {
        axios.get('https://www.googleapis.com/books/v1/volumes/s1gVAAAAYAAJ')
            .then( data => {
                if (data) {
                    dispatch({
                        type: FETCH_BOOKS,
                        payload: data
                    });             
                } else reject();
            })
            .catch(err => reject(err));
    });
}