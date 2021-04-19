import React from 'react'
import classes from './Login.module.css'
const Login = ( { changeDetail, onSubmit } ) => {
    return (
        <div>
           <div className="container-fluid">
               <div className="row">
                   <div className="col-lg-6 offset-lg-3 mt-5">
                        <div className={`border border-5 p-5 ${classes.bordercurve} bg-warning`}>
                            <div className="display-3 fw-bold text-center pb-3">
                                LogIn
                            </div>  
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" 
                                    name ="email"//
                                    onChange={changeDetail}
                                    aria-describedby="emailHelp"></input>
                                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                    <input type="password" className="form-control"
                                        name="password"//
                                        onChange={changeDetail}
                                        id="exampleInputPassword1"></input>
                                </div>
                                <button type="submit" className="btn btn-success" onClick={onSubmit}>Submit</button>
                            </form>
                        </div>
                   </div>
               </div>
            </div>
        </div>
    )
}

export default Login
