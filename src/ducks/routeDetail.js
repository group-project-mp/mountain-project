import axios from 'axios';

const initialState = {
    loading: false,
    route: [],
    areaRoutes: []
}

const _PENDING = '_PENDING';
const _FULFILLED = '_FULFILLED';
const GETROUTE = 'GETROUTE';
const GETAREA = 'GETAREA';


export default function reducer(state = initialState, action) {
    const { payload } = action;
    switch (action.type) {
        case GETROUTE + _PENDING:
            return { ...state, loading: true }
        case GETROUTE + _FULFILLED:
            return { ...state, route: payload, loading: false }
        case GETAREA + _PENDING:
            return { ...state, loading: true }
        case GETAREA + _FULFILLED:
            return { ...state, loading: false, areaRoutes: payload }
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

export function getSimilar(prop) {
    let promise = axios.get(`/api/similar/${prop}`).then(res => res.data);
    return {
        type: GETAREA,
        payload: promise
    }
}
