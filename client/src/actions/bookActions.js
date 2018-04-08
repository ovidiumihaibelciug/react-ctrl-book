import { FETCH_BOOKS, NEW_BOOK } from '../constants/types';
import axios from 'axios';


export const fetchBooks = () => dispatch => {
    return new Promise((reject, resolve) => {
        axios.get('https://www.googleapis.com/books/v1/volumes/?q=a')
            .then( data => {
                if (data) {
                    console.log(data.status === 200);
                    dispatch({
                        type: FETCH_BOOKS,
                        payload: data
                    });             
                } else reject();
            })
            .catch(err => reject(err));
    });
}