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
}

const ADDINPUT = 'ADDINPUT';

export default function reducer(state = initialState, action) {
    const { payload } = action;
    switch (action.type) {
        case ADDINPUT:
            return { ...state, [payload.prop]: payload.val }
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