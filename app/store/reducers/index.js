import T from '../types';
import {reducer as formReducer} from 'redux-form';
import {combineReducers} from 'redux';

function change_auth(state = {isAuthenticated: false, errors: []}, action) {
    switch (action.type) {
        case T.SUCCESS_LOGIN:
            return {
                isAuthenticated: true,
                errors: []
            };
        case T.FAILURE_LOGIN:
            return {
                isAuthenticated: false,
                errors: [...state.errors, action.error]
            };
        case T.SUCCESS_LOGOUT:
            return {
                isAuthenticated: false,
                errors: []
            };
        case T.FAILURE_LOGOUT:
            return {
                isAuthenticated: state.isAuthenticated,
                errors: [...state.errors, action.error]
            };
        default:
            return state;
    }
}

const fetching = (state = false, action) => {
    switch (action.type) {
        case T.START_FETCHING:
            return true;
        case T.CANCEL_FETCHING:
            return false;
        default:
            return state;
    }
};

export default combineReducers({
    user: change_auth,
    fetching,
    form: formReducer
});