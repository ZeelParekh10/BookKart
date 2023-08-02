import React from "react";
import "./Home.css";
import { Button } from "@material-ui/core";
import Registration from "../registration/Registration";
import Login from "../login/Login";


const Home = () => {
  var hasAccount = true;
  return (
    <div className="home">
      <div className="container">
        <h4 className="heading">
          <span className="black-word">Home &gt; </span>
          <span className="space"> </span>
          <span className="red-words">{hasAccount? " Create Account" : " Login"}</span>
        </h4>
        <div className="head"><h1>Login or Create Account</h1></div>
        {hasAccount ? <Registration/> : <Login/>}
      </div>
    </div>
  );
};

export default Home;
