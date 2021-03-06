import React from 'react';
import classes from './Login.module.css';
import GoogleLogin from 'react-google-login';
import { motion } from "framer-motion";

const Login = ({ changeDetail, onSubmit, googleAuth }) => {

    const responseGoogle = (response) => {
        console.log(response);
    }

    return (
        <motion.div
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
            transition={{
                type: "spring",
                delay: 0.3,
                duration: 1,
                stiffness: 130,
            }}
        >
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-4 offset-lg-4 mt-5">
                        <div className={`border border-5 p-5 ${classes.bordercurve} bg-danger text-light`}>
                            <div className="display-3 fw-bold text-center pb-3">
                                LogIn
                            </div>

                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1"
                                    name="email"//
                                    onChange={changeDetail}
                                    aria-describedby="emailHelp"></input>
                                <div id="emailHelp" className="form-text text-light">We'll never share your email with anyone else.</div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" className="form-control"
                                    name="password"//
                                    onChange={changeDetail}
                                    id="exampleInputPassword1"></input>
                            </div>
                            <div className={`d-grid mt-4`}>
                                <button
                                    className="btn btn-warning"
                                    onClick={onSubmit}
                                >Login</button>
                                <p className={`text-center fw-bold mt-3`}>OR</p>
                                <div className={`text-center`}>
                                    <GoogleLogin
                                        clientId="905129563250-7qetaoaou55qo4sk1i5h9q442vfvjr1f.apps.googleusercontent.com"

                                        className={``}
                                        buttonText="SignIn With Google"
                                        onSuccess={googleAuth}
                                        onFailure={responseGoogle}
                                        cookiePolicy={'single_host_origin'}
                                    />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Login
