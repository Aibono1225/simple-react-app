import React from "react";
import { login } from "./authService";

const Login = () => {
  const handleLogin = () => {
    login();
  };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;