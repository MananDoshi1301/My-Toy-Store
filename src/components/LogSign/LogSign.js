import React, { useState } from 'react'
import { Link } from 'react-router-dom';
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
        // <Router>
        //     <Switch>                
                <div className={"overflow-hidden"}>
                    <nav className="navbar navbar-dark bg-danger">
                        <div className="container-fluid">                            
                                <Link to="/" className="navbar-brand fw-bold fs-1">
                                    MyToyStore
                                </Link>                            
                            <button className={"btn btn-warning btn-lg me-2"}
                                type="button"
                                onClick={() => {
                                    setLogin(!login)
                                    setDetails(initialDetails)
                                }}
                            >{login ? `SignUp` : `LogIn`}</button>
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
                                        
                </div>
        //     </Switch>
        // </Router>
    )
}

export default LogSign
