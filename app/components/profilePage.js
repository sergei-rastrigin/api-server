import {connect} from 'react-redux';
import {getProfile} from '../store/actions';


import React from 'react';


class ProfilePage extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.onGetProfile();
    }

    render() {
        return (
            <div>Profile Page</div>
        )
    }
}

const mapStateToProps = (state, props) => {

    return {
        profile: state.profile
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onGetProfile() {
            dispatch(getProfile())
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);