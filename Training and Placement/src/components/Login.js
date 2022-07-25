import React from "react";
import { useState } from "react";
// import { auth } from "../firebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(email, password);
    try{

      const auth = getAuth();
      signInWithEmailAndPassword(auth, email, password).then((userData)=>{
        if(userData){
          const user = userData;
          console.log(user);
          alert("You are signed in successfully")
          

        }
        else{
          alert("This are wrong credentials");
        }
      }).catch((error) => {
        alert(error);
        <div className="alert alert-danger text-light" role="alert">
           {error.message}
         </div>
        console.log(error);
      })

        // const result= await auth.signInWithEmailAndPassword(email,password);
        // <div className="alert alert-success text-light" role="alert">
        //     `Welcome ${result.user.email}`
        //  </div>
    
        }catch(err){
          alert("This are wrong credentials");
          
            
        }
  };
  return (
    <div className=""
      style={{ height: "550px", objectFit: "cover" }}
    >
        <div className="card container bg-secondary text-light my-5" style={{ alignItems: "center",paddingTop:"50px",maxWidth:"600px",}}>
      <form onSubmit={(e) => handleSubmit(e)} style={{}}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address: -
          </label>
          <input
            type="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label center" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" className="btn btn-success">
          Login
        </button>
        <h5 className=" center text-warning" style={{textAlign: "center"}}>Please login</h5>
      </form>
      </div>
    </div>
  );
}
