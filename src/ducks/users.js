import axios from 'axios'

const initialState = {
    user: {},
    ticks: [],
    todos: []
}

const GET_USER_INFO = 'GET_USER_INFO'
const GET_TICKS = 'GET_TICKS'
const GET_TODOS = 'GET_TODOS'
const DELETE_TODO = 'DELETE_TODO'

export function getUserInfo() {
    let userData = axios.get('/getuserinfo').then(res => {
        // console.log(res.data)
        return res.data;
    })
    return {
        type: GET_USER_INFO,
        payload: userData
    }
}

export function getTicks() {
    let userData = axios.get('/getticks').then(res => {
        // console.log(res.data)
        return res.data;
    })
    return {
        type: GET_TICKS,
        payload: userData
    }
}

export function getTodos() {
    let userData = axios.get('/gettodos').then(res => {
        // console.log(res.data)
        return res.data;
    })
    return {
        type: GET_TODOS,
        payload: userData
    }
}

export function deleteTodo(id) {
    let userData = axios.delete(`/deletetodo/${id}`, { id }).then(res => {
        // console.log(res.data)
        return res.data;
    })
    return {
        type: DELETE_TODO,
        payload: userData
    }
}
export default function reducer(state = initialState, action) {
    switch (action.type) {

        case GET_USER_INFO + '_FULFILLED':
            return Object.assign({}, state, { user: action.payload });

        case GET_TICKS + '_FULFILLED':
            return Object.assign({}, state, { ticks: action.payload });

        case GET_TODOS + '_FULFILLED':
            return Object.assign({}, state, { todos: action.payload });

        case DELETE_TODO + '_FULFILLED':
            return Object.assign({}, state, { todos: action.payload });

        default:
            return state;

    }
}