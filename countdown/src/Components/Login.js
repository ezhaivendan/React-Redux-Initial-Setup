import React, { useState } from 'react'
import { connect } from 'react-redux'
import { LOGINUSER } from '../Actions/Action'
import { withRouter } from 'react-router-dom'
import '../App.css';

const mapStatetoProps = state => ({userList : state});

const mapDispatchtoProps = dispatch => ({ addLoginUser : (loginUser) => dispatch(LOGINUSER(loginUser))});

function Login(props) {

    const[loginInfo, setloginInfo] = useState({});
    const[errorMessage, seterrorMessage] = useState(false);

    function formOnChange(e) {
        const {
            name,
            value
        } = e.target
        setloginInfo({ ...loginInfo, [name] : value})
    }

    function handleLogin(e) {
        e.preventDefault();
        const getLoginUserInfo = props.userList.accountUser.filter(loginUser => loginUser.userName === loginInfo.userName && loginUser.password === loginInfo.password);
        if(getLoginUserInfo.length) {
            props.addLoginUser(getLoginUserInfo[0]);
            props.history.push('/landing');
        }
        else {
            seterrorMessage(true);
        }
    }

    return (
        <div className="App">
            <header className="App-header">
                <div className="signup-container">
                    <form onSubmit={handleLogin}>
                        <div className="form-row">
                            <label>User Name</label>
                            <input type="text" name="userName" onChange={formOnChange} required />
                        </div>
                        <div className="form-row">
                            <label>Password</label>
                            <input type="password" name="password" minLength="8" maxLength="16" onChange={formOnChange} required/>
                        </div>
                        <button>Login</button>
                        {
                            errorMessage && <div className="error-message">
                            <label>Please check your credentials</label>
                            </div>
                        }
                    </form>
                </div>
            </header>
        </div>
    )
}

const routerComponent = withRouter(Login);
export default connect(mapStatetoProps, mapDispatchtoProps)(routerComponent);
