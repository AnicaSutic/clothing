import React, { Component } from "react";
import "./index.scss";
import FormInput from "../FormInput";
import CustomButton from "../CustomButton";
import {connect} from 'react-redux';
import { signUpStart } from "../../redux/user/userActions";


 class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: ""
    };
  }

  handleSubmit = async event => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;
    const {signUpStart} = this.props
    if (password !== confirmPassword) {
      alert("Passwords don't match!");
      return;
    }

    if (password.length < 6) {
      alert("Password must contain 6 characters!");
      return;
    }


    signUpStart({email,password,displayName});

    // try {
    //   const { user } = await auth.createUserWithEmailAndPassword(
    //     email,
    //     password
    //   );
    //   createUserProfileDoc(user, { displayName });
    //   // to reset a form
    //   this.setState({
    //     displayName: "",
    //     email: "",
    //     password: "",
    //     confirmPassword: ""
    //   });
    // } catch (error) {
    //   console.log(error.message);
    // }
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    const {error} = this.props
    return (
      <div className="sign-up">
        <h2 className="title">I do not have a account</h2>
        <span>Sign up with your email and password</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            handleChange={this.handleChange}
            label="Display Name"
            required
          />
          <FormInput
            type="email"
            name="email"
            value={email}
            handleChange={this.handleChange}
            label="Email"
            required
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            handleChange={this.handleChange}
            label="Password"
            required
          />
          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            handleChange={this.handleChange}
            label="Confirm Password"
            required
          />
          <CustomButton type="submit">SIGN UP</CustomButton>
        </form>
        <p style={{color:'red'}}>{error}</p>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    signUpStart: (userCredentials)=> dispatch(signUpStart(userCredentials))
  }
}

function mapStateToProps(state) {
  return {
    error: state.user.error
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(SignUp)
