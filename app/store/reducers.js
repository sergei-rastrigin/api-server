import T from './actionTypes';
import {combineReducers} from 'redux';

const goal = (state = 10, action) =>
    (action.type === T.SET_GOAL) ?
        parseInt(action.payload) :
        state;

const skiDay = (state = null, action) =>
    (action.type === T.ADD_DAY) ?
        action.payload :
        state;

const errors = (state = [], action) => {
    switch (action.type) {
        case T.ADD_ERROR :
            return [
                ...state,
                action.payload
            ];
        case T.CLEAR_ERROR :
            return state.filter((message, i) => i !== action.payload)
        default:
            return state
    }
};

const allSkiDays = (state = [], action) => {

    switch (action.type) {

        case T.ADD_DAY :

            const hasDay = state.some(skiDay => skiDay.date === action.payload.date)

            return (hasDay) ?
                state :
                [
                    ...state,
                    skiDay(null, action)
                ].sort((a, b) => new Date(b.date) - new Date(a.date))

        case T.REMOVE_DAY :

            return state.filter(skiDay => skiDay.date !== action.payload)

        default:
            return state
    }

};

const fetching = (state = false, action) => {

    switch (action.type) {

        case T.FETCH_RESORT_NAMES :
            return true;

        case T.CANCEL_FETCHING :
            return false;

        case T.CHANGE_SUGGESTIONS :
            return false;

        default:
            return state
    }

};

const suggestions = (state = [], action) => {

    switch (action.type) {

        case T.CLEAR_SUGGESTIONS :
            return [];

        case T.CHANGE_SUGGESTIONS :
            return action.payload;

        default :
            return state
    }

};


export default combineReducers({
    allSkiDays,
    goal,
    errors,
    resortNames: combineReducers({
        fetching,
        suggestions
    })
});