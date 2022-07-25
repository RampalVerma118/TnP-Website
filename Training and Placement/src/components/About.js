import React from "react";

export default function About() {
  return (
    <>
    <div className="container row">
    <div className="col-md-6 bg-light" style={{height:"700px", objectFit:"cover" }}>
    <div className="my-5">
      <div className=" mx-5" style={{width:"500px"}}>
        <h1 className="title bg-light">About us</h1>
        <div className="bg-light " style={{width:500}}>The purpose of Training and Placement Management System is to automate the existing  manual system by the help of computerized equipment’s and full-fledged computer software, fulfilling their requirements, so that their valuable data/information can be stored for a longer period with easy accessing and manipulation of the same. The required software and hardware are easily available and easy to work with
 
          <strong>Training and Placement Management System</strong>, as described above, can lead to error free, secure, reliable and fast management system. It can assist the user to concentrate on their other activities rather to concentrate on the record keeping. Thus, it will help organization in better utilization of resources. The organization can maintain computerized records without redundant entries. That means that one need not be distracted by information that is not relevant, while being able to reach the information!
     </div>
      </div>
    </div>
    </div>

    <div className="my-5 col-md-6" style={{height:"500px",width:"600px"}}>
      <img src="/img/RGPVLOGO.jpg" alt="" style={{height:"200px",width:"200px",justifyItems:"center",marginLeft:"190px"}}/>
      <h2 style={{textAlign:"center"}}>UNIVERSITY INSTITUTE OF TECHNOLOGY,RGPV</h2>
      <h4 style={{textAlign:"center"}}>Narsingharh By Pass Road Near Gandhi Nagar, Bhopal (M.P)</h4>
    </div>

    </div>

    </>
  );
}
