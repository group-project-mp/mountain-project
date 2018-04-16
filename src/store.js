import { createStore, applyMiddleware, combineReducers } from 'redux';
import promiseMiddleware from 'redux-promise-middleware'
import usersReducer from './ducks/users';
import routesReducer from './ducks/routes';
import routeDetail from './ducks/routeDetail';
import filterroutes from './ducks/filterroutes';

const middleware = applyMiddleware(promiseMiddleware());

const reducer = combineReducers({
    users: usersReducer,
    routes: routesReducer,
    detail: routeDetail,
    filter: filterroutes,
})


export default createStore(reducer, middleware);