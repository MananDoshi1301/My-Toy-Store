import React from 'react'
import classes from './Signup.module.css'

const Signup = () => {
    return (
        <div>
            <div className="row">
                   <div className="col-lg-6 offset-lg-3 mt-5">
                        <div className={`border border-5 p-5 ${classes.bordercurve} bg-warning`}>
                            <div className="display-3 fw-bold text-center pb-3">
                                SignUp
                            </div>  
                            <form>
                                <div class="mb-3">
                                    <label for="name" class="form-label">Full Name</label>
                                    <input type="password" class="form-control" id="exampleInputPassword1"></input>
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputPassword1" class="form-label">Password</label>
                                    <input type="password" class="form-control" id="exampleInputPassword1"></input>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="contactNo" className="form-label">Contact Number</label>
                                    <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" class="form-control" id="contactNo"></input>
                                    <div class="form-text">Enter a 10 digit phone number[123-456-7890].</div>
                                </div>
                                <button type="submit" class="btn btn-success">Submit</button>
                            </form>
                        </div>
                   </div>
               </div>
        </div>
    )
}

export default Signup
