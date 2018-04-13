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
    typeOptions: [
        { key: 'Trad', value: 'Trad', text: 'Trad' },
        { key: 'Sport', value: 'Sport', text: 'Sport' },
        { key: 'Boulder', value: 'Boulder', text: 'Boulder' }],
    typeSelected: null,
    states: [],
    loading: false,
    selected: [],
    slot2: [],
    slot3: [],
    slot4: []
}

const _PENDING = '_PENDING';
const _FULFILLED = '_FULFILLED';
const ADDINPUT = 'ADDINPUT';
const GETSTATES = 'GETSTATES';
const GETSLOT2 = 'GETSLOT2';
const GETSLOT3 = 'GETSLOT3'
const GETSLOT4 = 'GETSLOT4'


export default function reducer(state = initialState, action) {
    const { payload } = action;
    switch (action.type) {
        case ADDINPUT:
            return { ...state, [payload.prop]: payload.val }
        case GETSTATES + _PENDING:
            return { ...state, loading: true }
        case GETSTATES + _FULFILLED:
            return { ...state, states: payload, loading: false }
        case GETSLOT2 + _PENDING:
            return { ...state, loading: true }
        case GETSLOT2 + _FULFILLED:
            return {
                ...state, slot2: payload.data, loading: false,
                selected: [...state.selected, payload.value]
            }
        case GETSLOT3 + _PENDING:
            return { ...state, loading: true }
        case GETSLOT3 + _FULFILLED:
            return {
                ...state, slot3: payload.data, loading: false,
                selected: [...state.selected, payload.value]
            }
        case GETSLOT4 + _PENDING:
            return { ...state, loading: true }
        case GETSLOT4 + _FULFILLED:
            return {
                ...state, slot4: payload.data, loading: false,
                selected: [...state.selected, payload.value]
            }
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

export function getSlot2(value) {
    let promise = axios.get(`/api/slot2/${value}`).then(res => ({ data: res.data, value }));
    return {
        type: GETSLOT2,
        payload: promise
    }
}

export function getSlot3(value) {
    let promise = axios.get(`/api/slot3/${value}`).then(res => ({ data: res.data, value }));
    return {
        type: GETSLOT3,
        payload: promise
    }
}

export function getSlot4(value) {
    let promise = axios.get(`/api/slot3/${value}`).then(res => ({ data: res.data, value }));
    return {
        type: GETSLOT4,
        payload: promise
    }
}