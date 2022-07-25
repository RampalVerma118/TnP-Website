import React from "react";
import { useState } from "react";
// import {auth} from '../firebase'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(name, email, password);
    try {
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, email, password).then(()=>{

        alert("You are signed in successfully");
        
      }).catch((error) => {
        alert("You are already signed up, please log in");
      })
        
      
    } catch (err) {
      
    }
    
  };
  return (
    <div className="" style={{ height: "550px", objectFit: "cover" }}>
      <div
        className="card container bg-secondary text-light my-5"
        style={{ alignItems: "center", paddingTop: "50px", maxWidth: "600px" }}
      >
        <form onSubmit={(e) => handleSubmit(e)} style={{}}>
          <div className="mb-3">
            <label htmlFor="exampleInputName">Name: -</label>
            <input
              type="text"
              placeholder="Enter your full name"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address: -
            </label>
            <input
              type="email"
              placeholder="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <div id="emailHelp" className="form-text text-light">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password: -
            </label>
            <input
              type="password"
              placeholder="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label center" htmlFor="exampleCheck1">
              Check me out
            </label>
          </div>
          <button type="submit" className="btn btn-success">
            Signup
          </button>
          {/* <button className="mx-2 btn btn-primary " onclick="loginWithGoogle()">Login with google</button> */}
          <h5 className=" center text-warning" style={{ textAlign: "center" }}>
            Please Signup
          </h5>
        </form>
      </div>
    </div>
  );
}
