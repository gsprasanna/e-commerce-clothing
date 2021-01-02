import React from "react";
import SignIn from "../../components/signin/sign-in-component";
import SignUp from "../../components/sign-up/sign-up.component";
import "./sign-in-sign-up.styles.scss";

const SignInandSignUpPage = () => {
  return (
    <div className="sign-in-sign-up">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignInandSignUpPage;
