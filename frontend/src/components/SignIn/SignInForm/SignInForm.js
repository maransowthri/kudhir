import React from "react";

import Input from "../../UI/Input/Input";
import Button from "../../UI/Button/Button";

const SignInForm = (props) => {
  const emailAttrs = {
    type: "mail",
  };

  const passwordAttrs = {
    type: "password",
  };

  return (
    <div>
      <Input id="email" label="Email" attrs={emailAttrs} />
      <Input id="password" label="Password" attrs={passwordAttrs} />
      <Button type="primary">Register</Button>
    </div>
  );
};

export default SignInForm;
