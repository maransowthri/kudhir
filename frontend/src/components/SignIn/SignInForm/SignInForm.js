import React from "react";

import Button from "../../UI/Button/Button";
import EditableInput from "../../UI/EditableInput/EditableInput";

const SignInForm = (props) => {
  const emailAttrs = {
    type: "mail",
    required: true,
  };

  const passwordAttrs = {
    type: "password",
    required: true,
  };

  return (
    <>
      <EditableInput id="email" label="Email" attrs={emailAttrs} />
      <EditableInput id="password" label="Password" attrs={passwordAttrs} />
      <Button type="primary">Sign in</Button>
    </>
  );
};

export default SignInForm;
