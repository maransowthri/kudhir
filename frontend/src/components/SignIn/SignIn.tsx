import { useState } from "react";
import classes from "./SignIn.module.css";
import SignInForm from "./SignInForm/SignInForm";
import SignUpForm from "./SignUpForm/SignUpForm";

type AUTH_TYPE = "SIGNIN" | "SIGNUP";

const SignIn = () => {
  const [authState, setAuthState] = useState<AUTH_TYPE>("SIGNIN");

  const authHandler = (type: AUTH_TYPE) => {
    setAuthState(type);
  };

  return (
    <div className={classes.SignIn}>
      <h3 className={classes.Title}>Kudhir Foundation</h3>
      <p className={classes.Info}>Donate your hard earned money wisely!</p>
      <div className={classes.AuthForm}>
        <div className={classes.AuthFormHeader}>
          <span
            onClick={() => authHandler("SIGNIN")}
            className={[
              classes.AuthHeadButton,
              authState === "SIGNIN" ? classes.HeaderButtonActive : null,
            ].join(" ")}
          >
            Sign in
          </span>
          <span
            onClick={() => authHandler("SIGNUP")}
            className={[
              classes.AuthHeadButton,
              authState === "SIGNUP" ? classes.HeaderButtonActive : null,
            ].join(" ")}
          >
            Sign up
          </span>
        </div>
        {authState === "SIGNIN" ? <SignInForm /> : <SignUpForm />}
      </div>
    </div>
  );
};

export default SignIn;
