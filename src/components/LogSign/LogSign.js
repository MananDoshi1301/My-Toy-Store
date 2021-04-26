import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import FetchData from "../FetchData";
import Login from "./LogIn/Login";
import NewUserProgress from "./Signup/NewUserProgress";
import Signup from "./Signup/Signup";
import { user } from "../Data/Data";
import styles from "../component.module.css"

const LogSign = () => {
  const { docs } = FetchData("userDetails");
  const history = useHistory();
  let [login, setLogin] = useState(true);

  const initialDetails = {
    fullName: null,
    password: null,
    email: null,
    contact: null,
  };

  let [details, setDetails] = useState(initialDetails);
  const [uploadSignUpData, setUploadSignUpData] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDetails({
      ...details,
      [name]: value,
    });
    // console.log(details);
  };

  const submitData = () => {
    if (login === false) {
      // console.log("Submit from Signup clicked!");
      // console.log(docs);
      let newUser = true;
      for (let i = 0; i < docs.length; i++) {
        if (details.email === docs[i].email) {
          alert("Email Already Registered!");
          newUser = false;
        }
        if (details.password === docs[i].password) {
          alert("Password Already Exists!");
          newUser = false;
        }
      }
      if (newUser) {
        setUploadSignUpData(true);
      }
    }
    //Login Conditions
    else {
      console.log(docs);
      let oldUser = false;
      let name = "";
      let id = "";
      for (let i = 0; i < docs.length; i++) {
        if (
          details.email === docs[i].email &&
          details.password === docs[i].password
        ) {
          oldUser = true;
          name = docs[i].fullName;
          id = docs[i].id;
          break;
        }
      }
      if (oldUser) {
        alert("User logged in successfully!");
        user.name = name;
        user.id = id;
        localStorage.setItem("userName", user.name);
        localStorage.setItem("userId", user.id);        
        history.push("/");
      } else {
        alert("Email or password is incorrect!");        
      }
    }
  };

  const grabfromgoogleAuth=(obj)=>{
    console.log(obj["profileObj"]);
    localStorage.setItem("userName", obj["profileObj"]["name"]);
    localStorage.setItem("userId", obj["profileObj"]["googleId"]);
    localStorage.setItem("userImg", obj["profileObj"]["imageUrl"]);
    history.push("/");
  }

  return (
    // <Router>
    //     <Switch>
    <div className={"overflow-hidden"}>
      <nav className="navbar navbar-dark bg-danger">
        <div className="container-fluid">
          <Link to="/" className={`navbar-brand fw-bold fs-1 ${styles.architectDaughters}`}>
            MyToyStore
          </Link>
          <div>
            <button
              className={"btn btn-warning btn-lg me-2"}
              type="button"
              onClick={() => {
                setLogin(!login);
                setDetails(initialDetails);
              }}
            >
              {login ? `SignUp` : `LogIn`}
            </button>
            <Link to="/">
              <button className={"btn btn-warning btn-lg mx-2"}>
                Back To Dashboard
              </button>
            </Link>
          </div>
        </div>
      </nav>

      <div>
        {uploadSignUpData && (
          <NewUserProgress
            file={details}
            // setFile={setDetails}
          />
        )}
      </div>

      {login ? (
        <Login changeDetail={handleInputChange} onSubmit={submitData} googleAuth={grabfromgoogleAuth} />
      ) : (
        <Signup changeDetail={handleInputChange} onSubmit={submitData} />
      )}
    </div>
    //     </Switch>
    // </Router>
  );
};

export default LogSign;
