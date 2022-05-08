import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'
import { reducers } from './reducers/index';

const middleware = [
    reduxThunk,
];
const store = createStore(reducers, composeWithDevTools(applyMiddleware(...middleware)));

export default store;