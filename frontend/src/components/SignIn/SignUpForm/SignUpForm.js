import React from "react";

import EditableInput from "../../UI/EditableInput/EditableInput";
import Button from "../../UI/Button/Button";

const SignUpForm = (props) => {
  const nameAttrs = {
    type: "text",
    required: true,
  };

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
      <EditableInput id="name" label="Name" attrs={nameAttrs} />
      <EditableInput id="email" label="Email" attrs={emailAttrs} />
      <EditableInput id="password" label="Password" attrs={passwordAttrs} />
      <Button type="primary">Register</Button>
    </>
  );
};

export default SignUpForm;
