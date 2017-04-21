import {connect} from 'react-redux';
import React, {Component} from 'react';
import {register} from '../../store/actions';

const Register = (props) => {
    return (
        <div className="row">
            <div className="col-md-6 col-md-offset-3">
                <h2>Please Sign Up</h2>
                <div className="form-group">
                    <input type="text" name="username" className="form-control input-lg" ref={(input) => {
                        this.username = input;
                    }}/>
                </div>

                <div className="form-group">
                    <input type="password" name="password" className="form-control input-lg" ref={input => {
                        this.password = input;
                    }}/>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <button className="btn btn-lg btn-success btn-block" onClick={() => {
                            props.register(this.username, this.password)
                        }}>Register
                        </button>
                    </div>

                    <div className="col-md-6">
                        <button className="btn btn-lg btn-primary btn-block" onClick={() => {
                            props.history.push('/login')
                        }}>Sign In
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default connect(null, {register})(Register);
