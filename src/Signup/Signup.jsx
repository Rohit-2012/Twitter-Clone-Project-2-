import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { Link } from "react-router-dom";
import SignupCss from "./Signup.module.css";
import { userData } from "../LocalStorage/LocalStorage";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function Signup() {
  const [local, setLocal] = useRecoilState(userData);
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [submitButton, setSubmitButton] = useState(false);
  function submitToLocal() {
    //variable for the validation of input
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const nameRegex = /^[a-zA-Z]+$/;
    const passwordRegex = /^(?=.*\d)(?=.*[a-zA-Z]).{7,}$/;

    if (fname === "" && lname === "" && email === "" && password === "") {
      const newData = [...local];
      setLocal(newData);
      localStorage.setItem("users", JSON.stringify(newData));
      alert("Check all the input field");
    } else if (
      emailRegex.test(email) &&
      nameRegex.test(fname) &&
      nameRegex.test(lname) &&
      passwordRegex.test(password)
    ) {
      const newData = [...local, { fname, lname, email, password }];
      setLocal(newData);
      localStorage.setItem("users", JSON.stringify(newData));
      setSubmitButton(!submitButton);
      alert("Registration successful Click on Go to Login Button");
    } else {
      alert("Please check all the fields  ");
    }
  }
  function handleSubmitButton() {
    alert("Enter the details same details in the login fields");
    setSubmitButton(false);
  }

  return (
    <div className={SignupCss.container}>
      <div className={SignupCss.div}>
        <TextField
          type="text"
          color="success"
          sx={{
            width: "25ch",
            paddingBottom: "0px",
            backgroundColor: "rgb(122, 128, 125)",
          }}
          title="FirststName"
          id="filled-basic1"
          label="First Name"
          variant="filled"
          helperText={
            /^[a-zA-Z]+$/.test(fname) ? (
              <span>Valid Name</span>
            ) : (
              <span>Only contains Alphabets </span>
            )
          }
          onChange={(e) => {
            setFname(e.target.value);
          }}
        />

        <TextField
          sx={{
            width: "25ch",
            paddingBottom: "0px",
            backgroundColor: "rgb(122, 128, 125)",
          }}
          id="filled-basic2"
          color="info"
          label="Last Name"
          variant="filled"
          title="LastName"
          helperText={
            /^[a-zA-Z]+$/.test(lname) ? (
              <span>Valid Name</span>
            ) : (
              <span>Only contains Alphabets</span>
            )
          }
          onChange={(e) => {
            setLname(e.target.value);
          }}
        />

        <TextField
          sx={{
            width: "25ch",
            paddingBottom: "0px",
            backgroundColor: "rgb(122, 128, 125)",
          }}
          id="filled-basic3"
          color="secondary"
          type="email"
          title="Email"
          label="E-mail"
          variant="filled"
          helperText={
            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email) ? (
              <span>Valid email</span>
            ) : (
              <span> Enter Valid Email</span>
            )
          }
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <TextField
          sx={{
            width: "25ch",
            paddingBottom: "",
            backgroundColor: "rgb(122, 128, 125)",
          }}
          id="filled-basic4"
          color="error"
          type="password"
          label="Password"
          title="Password"
          variant="filled"
          helperText={
            /^(?=.*\d)(?=.*[a-zA-Z]).{7,}$/.test(password) ? (
              <span>Strong Password</span>
            ) : (
              <span>Password contain 8 characters with one number</span>
            )
          }
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <div className={SignupCss.Button}>
          {submitButton ? (
            <Link to={"/"}>
              {" "}
              <Button
                sx={{
                  width: "28ch",
                  paddingBottom: "0px",
                  marginTop: "10px",
                  borderRadius: 6,
                  borderBottomRightRadius: 0,
                }}
                variant="contained"
                color="success"
                onClick={handleSubmitButton}
              >
                Go to Signin Page
              </Button>
            </Link>
          ) : (
            <Button
              color="primary"
              sx={{
                width: "12ch",
                paddingBottom: "0px",
                marginTop: "10px",
                marginLeft: "50px",
                borderRadius: 4,
                borderBottomRightRadius: 0,
              }}
              variant="contained"
              onClick={submitToLocal}
            >
              Sign-Up
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Signup;
