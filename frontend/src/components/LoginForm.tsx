import { useState } from "react";
import { Formik, FormikValues } from "formik";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import LoginSchema from "../schemas/LoginSchema";
import Logo from "./layout/Logo";
import LoginInputContainer, {
  MiddleFlex,
  RememberMeInput,
  RememberMeLabel,
} from "../assets/styles/components/LoginInput.styled";
import PrimaryButton from "../assets/styles/base/Button.styled";
import Lock from "../assets/svgs/Lock.svg";
import Hide from "../assets/svgs/Hide.svg";
import Message from "../assets/svgs/Message.svg";
import FormikController from "./layout/FormControl";

const LoginForm = () => {
  const [rememberMe, setRememberMe] = useState<boolean>(false);

  const { login } = useAuth();

  const { mutate: loginUser } = login;
  interface LoginValues {
    email: string;
    password: string;
  }

  const initialValues: LoginValues = {
    email: "",
    password: "",
  };

  const formSubmit = (credentials: LoginValues) => {
    const values = {
      email: credentials.email,
      password: credentials.password,
      rememberMe,
    };
    loginUser(values);
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={formSubmit}
      validationSchema={LoginSchema}
    >
      {({ handleSubmit }: FormikValues) => (
        <LoginInputContainer onSubmit={handleSubmit}>
          <Logo noNavigate />
          <FormikController
            control="input"
            image={Message}
            type="email"
            placeholder="Email"
            name="email"
          />
          <FormikController
            control="input"
            image={Lock}
            type="password"
            otherImage={Hide}
            placeholder="Password"
            name="password"
          />
          <MiddleFlex>
            <RememberMeLabel htmlFor="checkbox">
              <RememberMeInput
                type="checkbox"
                id="checkbox"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
              />{" "}
              Remember me
            </RememberMeLabel>
            <Link to="forgotPassword">Forgot password?</Link>
          </MiddleFlex>
          <PrimaryButton width="500px" height="70px" fontSize="l" type="submit">
            Log in
          </PrimaryButton>
        </LoginInputContainer>
      )}
    </Formik>
  );
};
export default LoginForm;
