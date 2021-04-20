import React, { useState } from 'react'
import Admin from './Admin/Admin';
import Login from './LogIn/Login'
import NewUserProgress from './Signup/NewUserProgress';
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
    const [uploadSignUpData, setUploadSignUpData] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setDetails({
          ...details,
          [name]: value,
        });     
        console.log(details);   
    };    

    const submitData = () => {
        
        if(login === false){
            console.log("Submit from Signup clicked!");
            setUploadSignUpData(true);
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
                    <button className={"btn btn-warning btn-lg me-2"} type="button" onClick={() => { setLogin(!login) }}>{login ? `SignUp` : `LogIn`}</button>
                </div>
            </nav>

            <div>
                {uploadSignUpData && 
                <NewUserProgress
                file={details} 
                // setFile={setDetails}
                />}
            </div>
        
            {login ? 
            <Login changeDetail={handleInputChange} onSubmit={submitData} /> : 
            <Signup changeDetail={handleInputChange} onSubmit={submitData} />}
            <p className={`text-end fs-5`}>
                <a className={`link-secondary me-4`}>
                    For Admin Click Here!
                </a>
            </p>
            {/* <Admin></Admin> */}
        </div>
    )
}

export default LogSign
