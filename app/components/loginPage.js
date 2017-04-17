import {connect} from 'react-redux';
import React from 'react';
import {login} from './../store/actions';

class LoginPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props);
        return (
            <div>
                <div>Login page</div>
                <h3>is Authenticated - {this.props.isAuthenticated ? 'yes' : 'no'}</h3>
                <h3>fetching is - {this.props.fetching ? 'in progress' : 'stopped'}</h3>
                {this.props.errors.map((error, index) => <span key={index}>{error}</span>)}


                <form>
                    <input type="text" name="username" ref={(input) => {
                        this.username = input;
                    }}/>
                    <input type="password" name="password" ref={input => {
                        this.password = input;
                    }}/>
                    <button onClick={() => {
                        this.props.onLogin(this.username.value, this.password.value);
                    }}>Login</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => {
    return {
        isAuthenticated : state.login.isAuthenticated,
        fetching: state.login.fetching,
        errors: state.login.errors
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onLogin(username, password) {
            dispatch(login(username, password))
        }
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);