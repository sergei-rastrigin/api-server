import T from './actionTypes';

/*
 *  Because we added `redux-thunk` to our middleware, hence
 *  now we can create 1st class functions which
 *  provide to us the opportunity for dispatching actions
 *  whenever we want
 */
export const getProfile = () => (dispatch, getState) => {
    fetch("/api/v1/profile", {method: 'GET'})
        .then(response => response.json())
        .then(profile => {
            console.log(response);

            dispatch({type: T.SET_AGE, data: 27});
        }).catch(error => console.log(error.message))
};

export const login = (username, password) => (dispatch, getState) => {
    dispatch({type: T.START_FETCHING});
    // let form = new FormData();
    // form.append("username", username);
    // form.append("password", password);


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
            } else {
                dispatch({type: T.FAILURE_LOGIN, error});
            }
        })
        .catch(error => dispatch({type: T.FAILURE_LOGIN, error: error.message}))
};


// export const SET_GOAL = goal => ({
//     type: T.SET_GOAL,
//     payload: goal
// });

