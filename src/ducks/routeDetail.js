import axios from 'axios';

const initialState = {
    loading: false,
    route: [],
    comments: [],
    newComment: ''
}

const _PENDING = '_PENDING';
const _FULFILLED = '_FULFILLED';
const GETROUTE = 'GETROUTE';
const GETCOMMENTS = 'GETCOMMENTS';
const ADDTICK = 'ADDTICK';
const ADDTODO = 'ADDTODO';
const ADDRATING = 'SUBMITRATING';
const ADDCOMMENT = 'ADDCOMMENT';
const HANDLEINPUT = 'HANDLEINPUT';

export default function reducer(state = initialState, action) {
    const { payload } = action;
    switch (action.type) {
        case GETROUTE + _PENDING:
            return { ...state, loading: true }
        case GETROUTE + _FULFILLED:
            return { ...state, route: payload, loading: false }
        case GETCOMMENTS + _PENDING:
            return { ...state, loading: true }
        case GETCOMMENTS + _FULFILLED:
            return { ...state, loading: false, comments: payload }
        case HANDLEINPUT:
            return { ...state, [payload.prop]: payload.value }
        case ADDCOMMENT + _PENDING:
            return { ...state, loading: true }
        case ADDCOMMENT + _FULFILLED:
            return { ...state, loading: false, comments: [...state.comments, payload] }
        default:
            return state;
    }
}

export function addTodo(id) {
    let promise = axios.post(`/api/addTodo/${id}`).then(res => res.data);
    return {
        type: ADDTODO
    }
}

export function addTick(id, body) {
    let promise = axios.post(`/api/addTick/${id}`, body).then(res => res.data);
    return {
        type: ADDTICK
    }
}

export function addRating(id) {
    let promise = axios.post(`/api/addRating/${id}`).then(res => res.data);
    return {
        type: ADDRATING
    }
}

export function getRoute(id) {
    let promise = axios.get(`/api/route/${id}`).then(res => res.data);
    return {
        type: GETROUTE,
        payload: promise
    }
}

export function getComments(id) {
    let promise = axios.get(`/api/comments/${id}`).then(res => res.data);
    return {
        type: GETCOMMENTS,
        payload: promise
    }
}

export function handleInput(prop, value) {
    return {
        type: HANDLEINPUT,
        payload: { prop, value }
    }
}

export function addComment(id, body) {
    let promise = axios.post(`/api/comments/${id}`, body).then(res => res.data);
    return {
        type: ADDCOMMENT,
        payload: promise
    }
}