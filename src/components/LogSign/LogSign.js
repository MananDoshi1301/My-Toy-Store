import React, { useState } from 'react'
import Admin from './Admin/Admin';
import Login from './LogIn/Login'
import Signup from './Signup/Signup'


const LogSign = () => {

    let [login, setLogin] = useState(true);    

    const initialDetails = {
        fullName:null,
        password:null,
        email:null,
        contact:null
    };

    let [details,setDetails] = useState(initialDetails);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setDetails({
          ...details,
          [name]: value,
        });        
    };    

    const submitData = () => {
        
        if(login === false){

        }
        else{

        }
        console.log(details);
    }
    
    return (
        <div className={"overflow-hidden"}>
            <nav className="navbar navbar-dark bg-danger">
                <div className="container-fluid">
                    <a className="navbar-brand fw-bold fs-1">MyToyStore</a>
                    <button className={"btn btn-warning btn-lg me-2"} type="button" onClick={() => { setLogin(!login) }}>{login ? `SignIn` : `LogIn`}</button>
                </div>
            </nav>
            {/* {login ? 
            <Login changeDetail={handleInputChange} onSubmit={submitData} /> : 
            <Signup changeDetail={handleInputChange} onSubmit={submitData} />} */}
            <Admin></Admin>
        </div>
    )
}

export default LogSign
