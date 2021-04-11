import EditableInput from "components/UI/EditableInput/EditableInput";
import Button from "components/UI/Button/Button";

const SignUpForm = () => {
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
      <Button type="primary" action={() => {}}>
        Register
      </Button>
    </>
  );
};

export default SignUpForm;
