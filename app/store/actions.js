import T from './actionTypes';

/*
*  Because we added `redux-thunk` to our middleware, hence
 *  now we can create 1st class functions which
 *  provide to us the opportunity for dispatching actions
 *  whenever we want
*/
export const SET_GOAL = (goal=0) => (dispatch, getState) => {
    // fetch(`http://api.github.com/users/Sergey Rastrigin/gists`).then(response => {
    //     console.log(response);
    //     console.log(getState);
    //
    //     dispatch({type: T.SET_GOAL, payload: 50});
    // });
};