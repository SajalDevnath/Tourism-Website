import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./Navbar";

function Updateprofile(props) {
  const [eusername, setusername] = useState("");
  const [eemail, setemail] = useState("");
  const [ephonenumber, setphonenumber] = useState("");
  const [epassword, setpassword] = useState("");
  const [msg, setMessage] = useState("");

  const onChangeusername = (e) => setusername(e.target.value);
  const onChangeemail = (e) => setemail(e.target.value);
  const onChangephonenumber = (e) => setphonenumber(e.target.value);
  const onChangepassword = (e) => setpassword(e.target.value);

  const handleSubmit = (evt) => {
    evt.preventDefault();

    console.log(`Form submitted:`);
    console.log(`NAME: ${eusername}`);
    console.log(`EMAIL: ${eemail}`);

    const userinfo = {
      username: eusername,
      email: eemail,
      phonenumber: ephonenumber,
      password: epassword,

    };

    axios
      .put("http://localhost:5000/user/update", userinfo)
      .then((res) => {
        console.log(res.data);
        setMessage("PROFILE UPDATED");
      })
      .catch((err) => console.log(err));

    setusername("");
    setemail("");
    setphonenumber("");
    setpassword("");
  };

  //Similar to componentDidMount and componentDidUpdate
  useEffect(() => {
    let emailid = localStorage.getItem("useremail");
    if (emailid == null) emailid = props.email;
    axios
      .get("http://localhost:5000/user/search/" + emailid)
      .then((response) => {
        console.log(response.data);
        const { username, email, phonenumber, password } =
          response.data[0];
        setusername(username);
        setemail(email);
        setphonenumber(phonenumber);
        setpassword(password);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <Navbar/>
      <br />
      <h3>PROFILE UPDATE</h3>
      <b style={{ color: "red" }}> {msg}</b>
      <form onSubmit={handleSubmit}>
        <label>USERNAME: </label> <br />
        <input
          type="text"
          value={eusername}
          onChange={onChangeusername}
          placeholder="Enter Name"
          required
        />
        <br />
        <br />
        <label>EMAIL: </label> <br />
        <input
          type="email"
          value={eemail}
          onChange={onChangeemail}
          placeholder="Enter Email"
          required
        />
        <br />
        <br />
        <label>PHONENUMBER: </label> <br />
        <input
          type="number"
          value={ephonenumber}
          onChange={onChangephonenumber}
          placeholder="Enter Mobile No"
          required
        />
        <br />
        <br />
        <label>PASSWORD: </label> <br />
        <input
          type="password"
          value={epassword}
          onChange={onChangepassword}
          placeholder="Enter Password"
          required
        />
        <br />
        <br />
        <input
          type="submit"
          value="UPDATE PROFILE"
          className="btn btn-success"
        />
      </form>
    </div>
  );
}

export default Updateprofile;
