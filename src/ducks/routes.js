import axios from 'axios';

const initialState = {
    routes: [],
    name: '',
    pitches: 0,
    Type: '',
    Difficulty: '',
    topRope: false,
    rating: 1,
    description: '',
    protection: '',
    image: '',
    latitude: '',
    longitude: '',
    state: '',
    slot_2: '',
    slot_3: '',
    slot_4: '',
    slot_5: '',
    typeOptions: [
        { key: 'Trad', value: 'Trad', text: 'Trad' },
        { key: 'Sport', value: 'Sport', text: 'Sport' },
        { key: 'Boulder', value: 'Boulder', text: 'Boulder' }],
    typeSelected: null,
    states: [],
    loading: false,
    selectedState: null
}

const _PENDING = '_PENDING';
const _FULFILLED = '_FULFILLED';
const ADDINPUT = 'ADDINPUT';
const GETSTATES = 'GETSTATES';
const GETSLOT2 = 'GETSLOT2';


export default function reducer(state = initialState, action) {
    const { payload } = action;
    switch (action.type) {
        case ADDINPUT:
            return { ...state, [payload.prop]: payload.val }
        case GETSTATES + _PENDING:
            return { ...state, loading: true }
        case GETSTATES + _FULFILLED:
            return { ...state, states: payload, loading: false }
        default:
            return state;
    }
}

export function handleInput(prop, val) {
    return {
        type: ADDINPUT,
        payload: { prop, val }
    }
}

export function getStates() {
    let promise = axios.get('/api/stateCount').then(res => res.data);
    return {
        type: GETSTATES,
        payload: promise
    }
}

export function getSlot2(prop){
    let promise = axios.get(`/api/slot2/${prop}`).then(res => res.data);
    return {
        type: GETSLOT2,
        payload: promise
    }
}