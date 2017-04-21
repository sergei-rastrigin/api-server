import {connect} from 'react-redux';
import React, {Component} from 'react';
import {logout} from '../../store/actions';

const Logout = (props) => {
    const onHandleClick = () => {
        props.logout();
    }

    return (
        <button onClick={onHandleClick}>Logout</button>
    )
}

export default connect(null, {logout})(Logout);
