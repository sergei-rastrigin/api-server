import {connect} from 'react-redux';
import React from 'react';

function HomePage(props) {
    return (
        <div>Home page</div>
    )
}

const mapStateToProps = (state, props) => {

    return {}
};


export default connect(mapStateToProps)(HomePage);