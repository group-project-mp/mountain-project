import axios from 'axios';

const initialState = {
    loading: false,
    route: [],
    comments: []
}

const _PENDING = '_PENDING';
const _FULFILLED = '_FULFILLED';
const GETROUTE = 'GETROUTE';
const GETCOMMENTS = 'GETCOMMENTS';


export default function reducer(state = initialState, action) {
    const { payload } = action;
    switch (action.type) {
        case GETROUTE + _PENDING:
            return { ...state, loading: true }
        case GETROUTE + _FULFILLED:
            return { ...state, route: payload, loading: false }
        case GETCOMMENTS + _PENDING:
            return { ...state, loading: true }
        case GETCOMMENTS +_FULFILLED:
            return { ...state, loading: false, comments: payload }
        default:
            return state;
    }
}

export function getRoute(id) {
    let promise = axios.get(`/api/route/${id}`).then(res => res.data);
    return {
        type: GETROUTE,
        payload: promise
    }
}

export function getComments(id){
    let promise = axios.get(`/api/comments/${id}`).then(res => res.data);
    return {
        type: GETCOMMENTS,
        payload: promise
    }
}
