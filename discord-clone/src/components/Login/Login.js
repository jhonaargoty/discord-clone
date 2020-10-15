import { Button } from "@material-ui/core";
import { auth, provider } from "../../firebase";
import React from "react";
import "./Login.css";

function Login() {
  const signIn = () => {
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <div className="login__logo">
        <img
          src="https://lh3.googleusercontent.com/proxy/kKFyAPBCrNQWhQtaqV626_5UP8115ConO7EnCFEgQpiFmyJGMC6peSOHrazUURhHFJvA85R7lHZ_yGKGvO121KRQ8e7ZECLWxfoF3K5UoLzc3R4ZyKXUXA"
          alt=""
        />
      </div>

      <Button onClick={signIn}>Sign In</Button>
    </div>
  );
}

export default Login;
