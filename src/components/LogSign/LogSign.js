import React, { useState } from 'react'
import Login from './LogIn/Login'
import Signup from './Signup/Signup'


const LogSign = () => {

    let [login, setLogin] = useState(true);

    return (
        <div className={"overflow-hidden"}>
            <nav className="navbar navbar-dark bg-danger">
                <div className="container-fluid">
                    <a className="navbar-brand fw-bold fs-1">MyToyStore</a>
                    <button className={"btn btn-warning btn-lg me-2"} type="button" onClick={() => { setLogin(!login) }}>{login ? `SignIn` : `LogIn`}</button>
                </div>
            </nav>
            {login ? <Login /> : <Signup />}
        </div>
    )
}

export default LogSign
