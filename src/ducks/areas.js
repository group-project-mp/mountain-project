import axios from 'axios'

const initialState = {
    slot_1: [],
    slot_2: [],
    slot_3: [],
    slot_4: [],
    slot_5: [],
    slot_6: [],
    finalAreaRoutes: [],
    description: {}
}

const GET_SLOT_1 = 'GET_SLOT_1'
const GET_SLOT_2 = 'GET_SLOT_2'
const GET_SLOT_3 = 'GET_SLOT_3'
const GET_SLOT_4 = 'GET_SLOT_4'
const GET_SLOT_5 = 'GET_SLOT_5'
const GET_SLOT_6 = 'GET_SLOT_6'
const GET_FINAL_AREA_ROUTES = 'GET_FINAL_AREA_ROUTES'
const GET_DESCRIPTION = 'GET_DESCRIPTION'


export function getSlot1() {
    let areaData = axios.get('/getslot1').then(res => {
        return res.data;
    })
    return {
        type: GET_SLOT_1,
        payload: areaData
    }
}
export function getSlot2(area) {
    let areaData = axios.get(`/getslot2/${area}`, {area}).then(res => {
        return res.data;
    })
    return {
        type: GET_SLOT_2,
        payload: areaData
    }
}
export function getSlot3(area) {
    let areaData = axios.get(`/getslot3/${area}`, {area}).then(res => {
        return res.data;
    })
    return {
        type: GET_SLOT_3,
        payload: areaData
    }
}
export function getSlot4(area) {
    let areaData = axios.get(`/getslot4/${area}`, {area}).then(res => {
        return res.data;
    })
    return {
        type: GET_SLOT_4,
        payload: areaData
    }
}
export function getSlot5(area) {
    let areaData = axios.get(`/getslot5/${area}`, {area}).then(res => {
        return res.data;
    })
    return {
        type: GET_SLOT_5,
        payload: areaData
    }
}
export function getSlot6(area) {
    let areaData = axios.get(`/getslot6/${area}`, {area}).then(res => {
        return res.data;
    })
    return {
        type: GET_SLOT_6,
        payload: areaData
    }
}
export function getFinalAreaRoutes(area) {
    let areaData = axios.get(`/getfinalarea/${area}`, {area}).then(res => {
        // console.log(res.data)
        return res.data;
    })
    return {
        type: GET_FINAL_AREA_ROUTES,
        payload: areaData
    }
}

export function getDescription(area) {
    let areaData = axios.get(`/getdescription/${area}`, {area}).then(res => {
        // console.log(res.data)
        return res.data;
    })
    return {
        type: GET_DESCRIPTION,
        payload: areaData
    }
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
    
        case GET_SLOT_1 + '_FULFILLED':
        // console.log(action.payload)
        return Object.assign({}, state, {slot_1: action.payload});

        case GET_SLOT_2 + '_FULFILLED':
        return Object.assign({}, state, {slot_2: action.payload});

        case GET_SLOT_3 + '_FULFILLED':
        return Object.assign({}, state, {slot_3: action.payload});

        case GET_SLOT_4 + '_FULFILLED':
        return Object.assign({}, state, {slot_4: action.payload});
        
        case GET_SLOT_5 + '_FULFILLED':
        return Object.assign({}, state, {slot_5: action.payload});

        case GET_SLOT_6 + '_FULFILLED':
        return Object.assign({}, state, {slot_6: action.payload});
        
        case GET_FINAL_AREA_ROUTES+ '_FULFILLED':
        return Object.assign({}, state, {finalAreaRoutes: action.payload});

        case GET_DESCRIPTION+ '_FULFILLED':
        return Object.assign({}, state, {description: action.payload});
        
        default: 
        return state;

    }
}