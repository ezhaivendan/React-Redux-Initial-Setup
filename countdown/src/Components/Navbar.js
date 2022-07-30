import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { LOGOUTUSER } from '../Actions/Action';

const mapStatetoProps = (state) => ({loggedinUser : state.loginUser, eventDetails: state.eventInfo});
const mapDispatchtoProps = (dispatch) => ({
    logoutUser: (userInfo) => dispatch(LOGOUTUSER(userInfo)),
});

function Navbar({history, logoutUser, loggedinUser}) {
    const resetLoginUser = () => {
        logoutUser(loggedinUser[0]);
        history.push('/login');
    }

    const addEvent = () => {
        history.push('/addevent');
    }

    return (
        <div className="navbar">
            <button className="add-event" onClick={addEvent}>Add Event</button>
            <button className="logout-button" onClick={resetLoginUser}>Logout</button>
        </div>
    )
}

const navbarComponet = withRouter(Navbar);
export default connect(mapStatetoProps, mapDispatchtoProps)(navbarComponet);
