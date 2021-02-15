import React from "react";
import "./sign-up.styles.scss";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-botton/custom-button.component";
import { auth, createUserProfileDocument } from "../../firebase/firebse.utils";

class SignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      displayName: "",
      email: "",
      pssword: "",
      confirmPassword: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const { displayName, email, confirmPassword, password } = this.state;
    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocument(user, { displayName });

      this.setState = {
        displayName: "",
        email: "",
        pssword: "",
        confirmPassword: "",
      };
    } catch (error) {
      console.error(error);
    }
  };

  handleSubmit = (event) => {
    const { name, value } = event.target;
    this.setState = { [name]: value };
  };

  render() {
    const { displayName, email, confirmPassword, password } = this.state;
    return (
      <div className="sign-up">
        <h2 className="title">I do not have an Account</h2>
        <span>Sign up with your email and password</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value="displayName"
            onChange={this.handleChange}
            lable="Display Name"
            required
          />

          <FormInput
            type="email"
            name="email"
            value="email"
            onChange={this.handleChange}
            lable="Email"
            required
          />

          <FormInput
            type="password"
            name="password"
            value="password"
            onChange={this.handleChange}
            lable="Password"
            required
          />

          <FormInput
            type="password"
            name="confirmPassword"
            value="confirmPassword"
            onChange={this.handleChange}
            lable="Confirm Password"
            required
          />

          <CustomButton type="submit"> SIGN UP </CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUp;
