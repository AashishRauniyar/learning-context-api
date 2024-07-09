import React from "react";
import { useState, useContext } from "react";
import UserContext from "../context/UserContext";
import {useNavigate} from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const {setUser} = useContext(UserContext)
const navigate = useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault()
    setUser({username, password})
    navigate('/profile')

  };

  return (
    <div>
      <h2>Login to our page</h2>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="user name"
      />
      {"  "}
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="********"
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Login;
