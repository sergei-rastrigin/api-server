import appReducer from './reducers/'
import {createStore, applyMiddleware} from 'redux'
import ReduxThunk from 'redux-thunk';

// middleware
// code before result = next(action) will be executed
// before store dispatch an action
// and code which stays after it will be executed after
const consoleMessages = store => next => action => {
    let result;

    console.groupCollapsed(`dispatching action => ${action.type}`);
    console.log('state before action', store.getState());
    result = next(action);
    console.log('state after action', store.getState());
    console.groupEnd();

    return result
};

export default (initialState = {}) => {
    return applyMiddleware(ReduxThunk, consoleMessages)(createStore)(appReducer, initialState)
}



