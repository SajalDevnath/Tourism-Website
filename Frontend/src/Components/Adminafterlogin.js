import React from "react";
import { Redirect } from "react-router-dom";
// import NavigationBar from "./Navbar";
import NavbarHead from "./Navbar";

function Adminafterlogin() {
  let authuser = localStorage.getItem("Key_Veriable");
  console.log(authuser);
  if (authuser == null) {
    return <Redirect to="/admin" />;
  } else {
    return (
      <div>
        <NavbarHead />
        <br />
        <h3>WELCOME ADMIN</h3>
        <h3>THIS IS ADMIN DASH BOARD</h3>
      </div>
    );
  }
}

export default Adminafterlogin;
