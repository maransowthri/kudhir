import React from "react";

import Button from "components/UI/Button/Button";
import EditableInput from "components/UI/EditableInput/EditableInput";

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
