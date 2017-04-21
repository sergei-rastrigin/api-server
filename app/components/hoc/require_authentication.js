import React, {Component} from 'react';
import {connect} from 'react-redux';

export default (ComposedComponent) => {
    class Authentication extends Component {
        constructor(props) {
            super(props);
        }

        componentWillMount() {
            const {isAuthenticated} = this.props.login;
            if(!isAuthenticated) {
                this.props.history.push('/login');
                console.log('user is not authenticated')
            }
        }


        render() {
            return (
                <ComposedComponent {...this.props}/>
            )
        }
    }

    function mapStateToProps(state, props) {
        return {
            login: state.login,
            router: props.router
        }
    }

    return connect(mapStateToProps)(Authentication);
};