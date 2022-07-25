import React from "react";
import {Link} from "react-router-dom";


export default function Navbar(props,{user}) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-secondary sticky-top">
    <div className="container-fluid">
      
      <Link className="navbar-brand" to="/"><h3>{props.title}</h3> </Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" to="/about">About</Link>
          </li>
          
          <li className="nav-item dropdown">
            <Link className="nav-link dropdown-toggle" to="/about placement" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              About Placement
            </Link>
            <ul className="dropdown-menu bg-dark" aria-labelledby="navbarDropdown">
              <li><Link className="dropdown-item text-primary " to="/processofplacement">Process of Placement</Link></li>
              <li><Link className="dropdown-item text-primary " to="/topcompanies">Top Companies</Link></li>
              
              <li><Link className="dropdown-item text-primary " to="/placementrecords">Placement Records</Link></li>
              <li><Link className="dropdown-item text-primary " to="/testimonial"> Alumni Testimonial</Link></li>
            </ul>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contactus">Contact Us</Link>
          </li>
          {/* <nav className="nav-item">
            {
              user?
              <li className="nav-item">
                 <button className="btn btn-outline-success btn-light" type="button">Logout</button>
               </li>
          :
          <li>
          <li className="nav-item">
            <Link className="nav-link" to="/login">Login</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/signup">Signup</Link>
          </li>
          </li>
            }
          </nav> */}

          <li className="nav-item">
            <Link className="nav-link" to="/login">Login</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/signup">Signup</Link>
          </li> 
           {/* <li className="nav-item">
          <button className="btn btn-outline-success btn-light" type="button">Logout</button>
          </li> */}
        </ul>
        <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success btn-info" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>  
  );
}
