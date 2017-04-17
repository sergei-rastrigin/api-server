import {connect} from 'react-redux';
import React from 'react';

class HomePage extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
        return (
            <div>Home Page</div>
        )
    }
}

const mapStateToProps = (state, props) => {
    return {}
};

const mapDispatchToProps = dispatch => {
    return {

    }
};



export default connect(mapStateToProps, mapDispatchToProps)(HomePage);