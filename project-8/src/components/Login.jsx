import React, { useState, useContext } from "react";
import UserContext from "../context/UserContext";

const Login = () => {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const { setUser } = useContext(UserContext);

    const handleSubmit = (e) => {
      e.preventDefault()
      setUser({userName,password})
      setUserName("")
      setPassword("")
    };
    return (
        <div>
            <h2>Login</h2>
            <input
                type="text"
                placeholder="Username"
                onChange={(e) => setUserName(e.target.value)}
                value={userName}
            />
            <br />
            <input
                type="password"
                placeholder="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
            />
            <br />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
};

export default Login;
