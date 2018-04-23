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
    image: null,
    latitude: null,
    longitude: null,
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
    slot4: [],
    slot5: [],
    slot6: []
}

const _PENDING = '_PENDING';
const _FULFILLED = '_FULFILLED';
const ADDINPUT = 'ADDINPUT';
const GETSTATES = 'GETSTATES';
const GETSLOT2 = 'GETSLOT2';
const GETSLOT3 = 'GETSLOT3';
const GETSLOT4 = 'GETSLOT4';
const GETSLOT5 = 'GETSLOT5';
const GETSLOT6 = 'GETSLOT6';
const SUBMIT = 'SUBMIT';


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
        case GETSLOT5 + _PENDING:
            return { ...state, loading: true }
        case GETSLOT5 + _FULFILLED:
            return {
                ...state, slot5: payload.data, loading: false,
                selected: [...state.selected, payload.value]
            }
        case GETSLOT6 + _PENDING:
            return { ...state, loading: true }
        case GETSLOT6 + _FULFILLED:
            return {
                ...state, slot6: payload.data, loading: false,
                selected: [...state.selected, payload.value]
            }
        case SUBMIT + _PENDING:
            return { ...state, loading: true }
        case SUBMIT + _FULFILLED:
            state = initialState
            return state
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
    let promise = axios.get(`/api/slot4/${value}`).then(res => ({ data: res.data, value }));
    return {
        type: GETSLOT4,
        payload: promise
    }
}

export function getSlot5(value) {
    let promise = axios.get(`/api/slot5/${value}`).then(res => ({ data: res.data, value }));
    return {
        type: GETSLOT5,
        payload: promise
    }
}

export function getSlot6(value) {
    let promise = axios.get(`/api/slot6/${value}`).then(res => ({ data: res.data, value }));
    return {
        type: GETSLOT6,
        payload: promise
    }
}

export function submitNew(body) {
    let promise = axios.post('/api/newRoute', body).then(res => {
        res.status === 200 ? alert('Successfully added route') : alert('error adding route, please try again');
    });
    return {
        type: SUBMIT,
        payload: promise
    }
}