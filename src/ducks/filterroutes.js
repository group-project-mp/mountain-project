import axios from 'axios';


const initialState = {
    routes: [],
    quality: '',
    pitches: 0,
    min: '',
    max: '',
    type: '',
    loading: true,
};


const CHANGE_INPUT = 'CHANGE_INPUT';
const GET_ROUTES = 'GET_ROUTES';



const _FULFILLED = '_FULFILLED'
const _PENDING = '_PENDING'
const _REJECTED = '_REJECTED'




export default function reducer(state = initialState, action) {
    switch (action.type) {

        case CHANGE_INPUT:
            return { ...state, [action.payload.prop]: action.payload.val }
        case GET_ROUTES + _PENDING:
            return Object.assign({}, state, { loading: true })
        case GET_ROUTES + '_FULFILLED':
            return Object.assign({}, state, { routes: action.payload, loading: false })
        default:
            return state;
    }
}

export function inputChange(prop, val) {
    return {
        type: CHANGE_INPUT,
        payload: { prop, val }
    }
}

export function getRoutes({ min, max, quality, pitches, type }) {
    let filteredRoutes = axios.get(`/filteredroutes?min=${min}&max=${max}&quality=${quality}&pitches=${pitches}&type=${type}`)
        .then(res => {
            // console.log(res.data)
            return res.data})
    return {
        type: GET_ROUTES,
        payload: filteredRoutes
    }
}