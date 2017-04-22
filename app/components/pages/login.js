import {connect} from 'react-redux';
import React, {Component} from 'react';
import {login} from '../../store/actions';

const Login = (props) => {
    return (
        <div>
            <h2>Please Sign In</h2>
            <div className="form-group">
                <input type="text" name="username" className="form-control input-lg" ref={(input) => {
                    this.username = input;
                }}/>
            </div>

            <div className="form-group">
                <input type="password" name="password" className="form-control input-lg" ref={input => {
                    this.password = input;
                }}/>
            </div>1
            <div className="row">
                <div className="col-md-6">
                    <button className="btn btn-lg btn-success btn-block" onClick={() => {
                        props.login(this.username.value, this.password.value);
                    }}>Sign In
                    </button>
                </div>

                <div className="col-md-6">
                    <button className="btn btn-lg btn-primary btn-block" onClick={() => {
                        props.history.push('/register')
                    }}>Register
                    </button>
                </div>
            </div>
        </div>
    )
};


export default connect(null, {login})(Login);
