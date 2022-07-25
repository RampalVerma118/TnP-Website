import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Footer from "./components/Footer";
import TopCompanies from "./components/TopCompanies";
import Process from "./components/Process";
import Selection from "./components/Selection";
import Testimonial from "./components/Testimonial";
import Contact from "./components/Contact";
import Login from "./components/Login";
import React, { useEffect } from "react";
import Signup from "./components/Signup";
import { auth } from "./config";
import { useState } from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) setUser(user);
      else setUser(null);
    });
  });
  return (
    <>
      <Router>
        <Navbar title="TnP" user={user} />
        <div>
          <Routes>
            <Route exact path="/" element={<Home user={user} />} />
            <Route path="/about" element={<About />} />
            <Route path="/topcompanies" element={<TopCompanies />} />
            <Route path="/processofplacement" element={<Process />} />
            <Route path="/placementrecords" element={<Selection />} />
            <Route path="/testimonial" element={<Testimonial />} />
            <Route path="/contactus" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </div>{" "}
        <Footer/>
      </Router>
    </>
  );
}

export default App;
