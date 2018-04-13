import axios from 'axios';


const initialstate = {
    routes: [],
    name: '',
    pitches: 0,
    difficulty: '',
    type: '',
    typeOptions: [
        { key: 'Trad', value: 'Trad', text: 'Trad' },
        { key: 'Sport', value: 'Sport', text: 'Sport' },
        { key: 'Boulder', value: 'Boulder', text: 'Boulder' }],
};


const CHANGE_INPUT = 'CHANGE_INPUT'


const _FULFILLED = '_FULFILLED'


export function inputChange(prop, val) {
    return {
        type: CHANGE_INPUT,
        payload: { prop, val }
    }
}

export default function reducer(state = initialstate, action) {
    switch (action.type) {
        case CHANGE_INPUT:
            return { ...state, [action.payload.prop]: action.payload.val }
        default:
         return state;
    }
}