import { createStore, applyMiddleware, combineReducers } from 'redux';
import promiseMiddleware from 'redux-promise-middleware'
import usersReducer from './ducks/users';
import routesReducer from './ducks/routes';


const middleware = applyMiddleware(promiseMiddleware());

const reducer = combineReducers({
    users: usersReducer,
    routes: routesReducer
})


export default createStore(reducer, middleware);