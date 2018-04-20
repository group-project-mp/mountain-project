import axios from 'axios';

const initialState = {
    loading: false,
    route: [],
}

const _PENDING = '_PENDING';
const _FULFILLED = '_FULFILLED';
const GETROUTE = 'GETROUTE';
const ADDTICK = 'ADDTICK';
const ADDTODO = 'ADDTODO';

export default function reducer(state = initialState, action) {
    const { payload } = action;
    switch (action.type) {
        case GETROUTE + _PENDING:
            return { ...state, loading: true }
        case GETROUTE + _FULFILLED:
            return { ...state, route: payload, loading: false }
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
