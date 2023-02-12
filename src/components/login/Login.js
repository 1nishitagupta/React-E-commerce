import React from "react";
import { useState } from "react";
import { useLoginContext } from "../../context/loginContext";
import "./login.css";

const Login = (props) => {
  const [loggedInDetail, setLoggedInDetail] = useState({});
  // const [errMsg , setErrMsg] = useState("")
  const { matchDetails } = useLoginContext();
  const { details } = useLoginContext();
  
  console.log(details)
  const handleDetail = (e) => {
    setLoggedInDetail({ ...loggedInDetail, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="card">
        <form>
          <h2 className="title"> Log in</h2>
          <br />
          <p className="subtitle">
            Don't have an account? <a href="#"> sign Up</a>
          </p>

          <p className="or">
            <span>or</span>
          </p>

          <div className="email-login">
            <label htmlFor="email">
              {" "}
              <b>Email</b>
            </label>
            <input
              type="text"
              placeholder="Enter Email"
              name="email"
              onChange={handleDetail}
              required
            />
            <label htmlFor="psw">
              <b>Password</b>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              onChange={handleDetail}
              required
            />
          </div>
          <button
            className="cta-btn"
            onClick={(e) => {
              e.preventDefault();
              matchDetails(loggedInDetail);
              if(details.matched === 1){
                props.handleClose();
              }else{
                props.handleOpen()
                // setErrMsg("Invalid Credentials")
              }
            }}
          >
            Log In
          </button>
        </form>
        {/* {errMsg} */}
      </div>
    </>
  );
};

export default Login;

