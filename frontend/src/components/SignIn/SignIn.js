import React, { useState } from "react";

import classes from "./SignIn.module.css";
import SignInForm from "./SignInForm/SignInForm";
import SignUpForm from "./SignUpForm/SignUpForm";

const SignIn = (props) => {
  const [authState, setAuthState] = useState("signin");

  const authHandler = (type) => {
    setAuthState(type);
  };

  return (
    <div className={classes.SignIn}>
      <h3 className={classes.Title}>Kudhir Foundation</h3>
      <p className={classes.Info}>Donate your hard earned money wisely!</p>
      <div className={classes.AuthForm}>
        <div className={classes.AuthFormHeader}>
          <span
            onClick={() => authHandler("signin")}
            className={[
              classes.AuthHeadButton,
              authState === "signin" ? classes.HeaderButtonActive : null,
            ].join(" ")}
          >
            Sign in
          </span>
          <span
            onClick={() => authHandler("signup")}
            className={[
              classes.AuthHeadButton,
              authState === "signin" ? null : classes.HeaderButtonActive,
            ].join(" ")}
          >
            Sign up
          </span>
        </div>
        {authState === "signin" ? <SignInForm /> : <SignUpForm />}
      </div>
    </div>
  );
};

export default SignIn;
