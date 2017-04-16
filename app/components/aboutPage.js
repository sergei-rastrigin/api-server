import { connect } from 'react-redux';
import React from 'react';


function AboutPage(props) {
    return (
        <div>About Page</div>
    )
}

const mapStateToProps = (state, props) => {

    return {
    }
};

// const mapDispatchToProps = dispatch => {
//     return {
//         onSetGoal(goal) {
//             dispatch(SET_GOAL(goal))
//         }
//     }
// };

export default connect(mapStateToProps)(AboutPage);