import React from "react";

export default function Process() {
  return (
    <div className="" style={{height:"600px", objectFit:"cover",paddingTop:"200px" }}>
    <div className="progress container">
    
      <div
        className="progress-bar progress-bar-striped progress-bar-animated "
        role="progressbar"
        aria-valuenow="75"
        aria-valuemin="0"
        aria-valuemax="100"
        style={{width: "75%"}}
      ></div>
    </div>
    <p className="text-dark" style={{textAlign: "center"}}>Processing.....</p>
  </div>
  
  );
}
