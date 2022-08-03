import React from 'react'
import { withRouter, Route, Switch, Link } from 'react-router-dom';

function Login() {
    return (
        <div className="App">
            <header className="App-header">
                Login is coming here
                <Link to='/'>Back to Home</Link>
            </header>
    </div>
    )
}

export default withRouter(Login)
