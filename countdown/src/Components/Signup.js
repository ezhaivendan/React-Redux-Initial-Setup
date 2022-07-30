import React, { useState } from 'react';
import { connect } from 'react-redux';
import { ADDUSER } from '../Actions/Action';
import { withRouter } from 'react-router-dom';

const mapStatetoProps = (state) => ({ userList : state.accountUser});

const mapDispatchtoProps = (dispatch) => ({addAccountUser : (userDetails) => dispatch(ADDUSER(userDetails))});

function Signup(props) {
    
    const [userInfo, setuserInfo] = useState({
        firstName       : '',
        userName        : '',
        email           : '',
        mobile          : 0,
        dob             : '',
        password        : '',
        confirmPassword : ''
    })
        
    function formOnChange(e) {
        const {
            name,
            value
        } = e.target

        setuserInfo({ ...userInfo, [name] : value})
    }

    function handleSignup(e) {
        e.preventDefault();
        props.addAccountUser(userInfo);
        props.history.push('/login');
    }

    return (
        <div className="signup-container">
            <form onSubmit={handleSignup}>
                <div className="form-row">
                    <label>Name</label>
                    <input  type="text" name="firstName" onChange ={formOnChange} required/>
                </div>
                <div className="form-row">
                    <label>User Name</label>
                    <input type="text" name="userName" onChange ={formOnChange} required />
                </div>
                <div className="form-row">
                    <label>Email</label>
                    <input type="email" name="email" onChange ={formOnChange} required/>
                </div>
                <div className="form-row">
                    <label>Mobile</label>
                    <input type="number" name="mobile" onChange ={formOnChange} minLength="9" maxLength="10" required/>
                </div>
                <div className="form-row">
                    <label>DOB</label>
                    <input type="date" name="dob" onChange ={formOnChange} required/>
                </div>
                <div className="form-row">
                    <label>Password</label>
                    <input type="password" name="password" onChange ={formOnChange} minLength="8" maxLength="16" required/>
                </div>
                <div className="form-row">
                    <label>Confirm Password</label>
                    <input type="password" name="confirmPassword" onChange ={formOnChange} required />
                </div>

                <button>Sign Up</button>
            </form>
        </div>
    )
}

const signupComponent = withRouter(Signup);

export default connect(mapStatetoProps, mapDispatchtoProps)(signupComponent);
