import T from './types';

export const login = (username, password) => (dispatch, getState) => {
    dispatch({type: T.START_FETCHING});

    let options = {
        method: "POST",
        body: JSON.stringify({username, password}),
        headers: {
            "Content-Type": "application/json"
        },
    };

    fetch("/auth/login", options)
        .then(response => response.json())
        .then(({isAuthenticated, error}) => {
            if (isAuthenticated) {
                dispatch({type: T.SUCCESS_LOGIN});
                dispatch({type: T.CANCEL_FETCHING});
            } else {
                dispatch({type: T.FAILURE_LOGIN, error});
                dispatch({type: T.CANCEL_FETCHING});
            }
        })
        .catch(error => dispatch({type: T.FAILURE_LOGIN, error: error.message}))
};

export const register = (username, password) => (dispatch, getState) => {
    dispatch({type: T.START_FETCHING});
};

export const logout = () => (dispatch, getState) => {
    dispatch({type: T.START_FETCHING});
    fetch("/auth/logout", {method: 'GET'})
        .then(response => response.json())
        .then(profile => {
            dispatch({type: T.SUCCESS_LOGOUT});
            dispatch({type: T.CANCEL_FETCHING});
        }).catch(error => dispatch({type: T.FAILURE_LOGOUT, error: error.message}));
};
