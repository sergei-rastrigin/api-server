import React, {Component} from 'react';
import {connect} from 'react-redux';

export default (ComposedComponent) => {
    class Authentication extends Component {
        constructor(props) {
            super(props);
        }

        componentWillMount() {
            const {isAuthenticated} = this.props.user;
            if(!isAuthenticated) {
                this.props.history.push('/login');
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
            user: state.user
        }
    }

    return connect(mapStateToProps)(Authentication);
};