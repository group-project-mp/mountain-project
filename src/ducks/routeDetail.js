import axios from 'axios';

const initialState = {
    loading: false,
    route: [],
    top20: []
}

const _PENDING = '_PENDING';
const _FULFILLED = '_FULFILLED';
const GETROUTE = 'GETROUTE';
const ADDTICK = 'ADDTICK';
const ADDTODO = 'ADDTODO';
const TOP20 = 'TOP20';

export default function reducer(state = initialState, action) {
    const { payload } = action;
    switch (action.type) {
        case GETROUTE + _PENDING:
            return { ...state, loading: true }
        case GETROUTE + _FULFILLED:
            return { ...state, route: payload, loading: false }
        case TOP20 + _PENDING:
            return { ...state, loading: true }
        case TOP20 + _FULFILLED:
            return { ...state, top20: payload, loading: false }
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

export function getRoute(id) {
    let promise = axios.get(`/api/route/${id}`).then(res => res.data);
    return {
        type: GETROUTE,
        payload: promise
    }
}

export function get20() {
    let promise = axios.get('/api/20').then(res => res.data);
    return {
        type: TOP20,
        payload: promise
    }
}
