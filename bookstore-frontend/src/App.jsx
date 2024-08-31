import React from "react";
import Home from "./components/Home";
import Course from "./components/Course";
import { Routes, Route, BrowserRouter as Router, Navigate } from "react-router-dom";
import { Toaster } from 'react-hot-toast';
import Signup from "./components/Signup";
import Contact from "./components/Contact";
import { useAuth } from "./context/AuthProvider";

const App = () => {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <Router>
          
        
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/course" element={authUser? <Course />: <Navigate to="/signup"/>}></Route>
            <Route exact path="/signup" element={<Signup />}></Route>
           
            <Route exact path="/contact" element={<Contact />}></Route>
            
          </Routes>
          <Toaster/>
        </Router>
      </div>
    </>
  );
};

export default App;
