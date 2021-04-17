import React from 'react'
import classes from './Login.module.css'
const Login = () => {
    return (
        <div>
           <div className="container">
               <div className="row">
                   <div className="col-lg-6 offset-lg-3 mt-5">
                        <div className={`border border-5 p-5 ${classes.bordercurve} bg-warning`}>
                            <div className="display-3 fw-bold text-center pb-3">
                                LogIn
                            </div>  
                            <form>
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputPassword1" class="form-label">Password</label>
                                    <input type="password" class="form-control" id="exampleInputPassword1"></input>
                                </div>
                                <button type="submit" class="btn btn-success">Submit</button>
                            </form>
                        </div>
                   </div>
               </div>
            </div>
        </div>
    )
}

export default Login
