import axios from 'axios';


const initialstate = {
    routes: [],
    quality: '',
    pitches: 0,
    difficulty: '',
    type: '',
    typeOptions: [
        { key: 'Trad', value: 'Trad', text: 'Trad' },
        { key: 'Sport', value: 'Sport', text: 'Sport' },
        { key: 'Boulder', value: 'Boulder', text: 'Boulder' }],
};


const CHANGE_INPUT = 'CHANGE_INPUT';
const GET_ROUTES ='GET_ROUTES';



const _FULFILLED = '_FULFILLED'


export function inputChange(prop, val) {
    return {
        type: CHANGE_INPUT,
        payload: { prop, val }
    }
}

export function getRoutes() {
    let filteredRoutes = axios.get('/filteredroutes').then(res => {
        return res.data
    })
    return {
        type: GET_ROUTES,
        payload: filteredRoutes
    }
}

export default function reducer(state = initialstate, action) {
    switch (action.type) {
        case CHANGE_INPUT:
            return { ...state, [action.payload.prop]: action.payload.val }
        case GET_ROUTES + _FULFILLED:
            return Object.assign({}, state, {routes: action.payload})
        default:
         return state;
    }
}