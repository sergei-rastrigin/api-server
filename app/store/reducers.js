import T from './actionTypes';
import {combineReducers} from 'redux';


const exp = (state = "", action) =>
    (action.type === T.SET_EXP) ?
        parseInt(action.data) :
        state;

const styles = (state = [], action) => {
    switch (action.type) {
        case T.ADD_STYLES:
            // TODO write single style reducer
            return [
                ...state,
                ...action.data
            ];
        case T.CLEAR_STYLES:
            return [];

        default:
            return state;
    }
};

const tatoos = (state = [], action) => {
    switch (action.type) {
        case T.ADD_TATOO:
            // TODO write single tatoo reducer
            return [...state, action.data];
        case T.REMOVE_TATOO:
            return state.filter(tatoo => tatoo._id !== action.data);
        case T.CLEAR_TATOOS:
            return [];
        default:
            return state;
    }
};

const flashes = (state = [], action) => {
    switch (action.type) {
        // TODO write single flash reducer
        case T.ADD_FLASH:
            return [...state, action.data];
        case T.REMOVE_FLASH:
            return state.filter(flash => flash._id !== action.data);
        case T.CLEAR_FLASHES:
            return [];
        default:
            return state;
    }
};

const firstName = (state = "", action) =>
    (action.type === T.SET_FIRST_NAME) ?
        action.data :
        state;

const lastName = (state = "", action) =>
    (action.type === T.SET_LAST_NAME) ?
        action.data :
        state;

const age = (state = 0, action) =>
    (action.type === T.SET_AGE) ?
        parseInt(action.data) :
        state;

const city = (state = "", action) =>
    (action.type === T.SET_CITY) ?
        action.data :
        state;

const description = (state = "", action) =>
    (action.type === T.SET_DESCRIPTION) ?
        action.data :
        state;

const address = (state = "", action) =>
    (action.type === T.SET_ADDRESS) ?
        action.data :
        state;

const mobile = (state = "", action) =>
    (action.type === T.SET_MOBILE) ?
        action.data :
        state;

const email = (state = "", action) =>
    (action.type === T.SET_EMAIL) ?
        action.data :
        state;

const sex = (state = "", action) =>
    (action.type === T.SET_SEX) ?
        action.data :
        state;

const avatar = (state = "", action) =>
    (action.type === T.SET_AVATAR) ?
        action.data :
        state;

const background = (state = "", action) =>
    (action.type === T.SET_BACKGROUND) ?
        action.data :
        state;

const facebook = (state = "", action) =>
    (action.type === T.SET_SOCIAL_FACEBOOK) ?
        action.data :
        state;

const vk = (state = "", action) =>
    (action.type === T.SET_SOCIAL_VK) ?
        action.data :
        state;

const instagram = (state = "", action) =>
    (action.type === T.SET_SOCIAL_INSTAGRAM) ?
        action.data :
        state;

const isMaster = (state = false, action) =>
    (action.type === T.CHANGE_IS_MASTER) ?
        action.data :
        state;

const isAuthenticated = (state = false, action) => {
    switch (action.type) {
        case T.SUCCESS_LOGIN:
            return true;
        case T.FAILURE_LOGIN:
            return false;
        default:
            return state;
    }
};

const fetching = (state = false, action) => {
    switch (action.type) {
        case T.CANCEL_FETCHING:
        case T.SUCCESS_LOGIN:
        case T.FAILURE_LOGIN:
            return false;
        case T.START_FETCHING:
            return true;
        default:
            return state;
    }
};

const errors = (state = [], action) => {
    switch (action.type) {
        case T.CLEAR_ERRORS:
        case T.SUCCESS_LOGIN:
            return [];
        case T.ADD_ERROR:
        case T.FAILURE_LOGIN:
            if (state.indexOf(action.error) === -1) {
                return [...state, action.error]
            } else {
                return state;
            }
        default:
            return state;
    }
};

export default combineReducers({
    profile: combineReducers({
        masterInfo: combineReducers({
            exp,
            styles,
            tatoos,
            flashes
        }),
        isMaster,
        firstName,
        lastName,
        age,
        city,
        description,
        address,
        mobile,
        email,
        sex,
        avatar,
        background,
        social: combineReducers({
            facebook,
            vk,
            instagram
        })
    }),
    login: combineReducers({
        isAuthenticated,
        fetching,
        errors
    })
});