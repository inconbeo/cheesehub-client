import {API_BASE_URL} from '../config';

export const FETCH_CHEESE_REQUEST = 'FETCH_CHEESE_REQUEST';
export const fetchCheesesRequest = () => ({
    type: FETCH_CHEESE_REQUEST
});

export const FETCH_CHEESE_SUCCESS = 'FETCH_CHEESE_SUCCESS';
export const fetchCheesesSuccess = cheeses => ({
    type: FETCH_CHEESE_SUCCESS,
    cheeses
});

export const FETCH_CHEESE_ERROR = 'FETCH_CHEESE_ERROR';
export const fetchCheesesError = error => ({
    type: FETCH_CHEESE_ERROR,
    error
});


export const fetchCheeses = () => dispatch => {
    dispatch(fetchCheesesRequest());
    return fetch(API_BASE_URL).then(res => {
        if (!res.ok) {
            return Promise.reject(res.statusText);
        }
        return res.json();
    }).then(data => {
        console.log(data);
        dispatch(fetchCheesesSuccess(data.cheeses))})
    .catch(error => dispatch(fetchCheesesError(error)))
    
};

// export const fetchCheeses = () => dispatch => {
    
//     return fetch('http://localhost:8080/api/cheeses')
//         .then(res => res.json())
//         .then(cheeses => console.log(cheeses))
//         .catch(error => console.log(error));
    
// };


