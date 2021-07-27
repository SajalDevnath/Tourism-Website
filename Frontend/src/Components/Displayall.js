import React, { useState, useEffect } from "react";
import axios from "axios";
import NavbarHead from "./Navbar";

function Displayall() {
  const [userlist, setuserlist] = useState([]);

  //Similar to componentDidMount and componentDidUpdate
  useEffect(() => {
    axios
      .get("http://localhost:5000/user/")
      .then((response) => {
        console.log(response.data);
        setuserlist(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function viewuserlist() {
    return userlist.map((currentrow, index) => {
      return (
        <tr key={index}>
          <td>{currentrow.username}</td>
          <td>{currentrow.email}</td>
          <td>{currentrow.phonenumber}</td>
        </tr>
      );
    });
  }

  return (
    <div>
      <NavbarHead />
      <br />
      <h3>All User Details</h3>
      <table border="1" align="center">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone Number</th>
          </tr>
        </thead>

        <tbody>{viewuserlist()}</tbody>
      </table>
    </div>
  );
}

export default Displayall;
