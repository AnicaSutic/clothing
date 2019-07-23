import React, { useState } from "react";
import "./index.scss";
import FormInput from "../FormInput";
import CustomButton from "../CustomButton";
import {connect} from 'react-redux';
import { signUpStart } from "../../redux/user/userActions";


 function SignUp({signUpStart,error}) {
  // constructor() {
  //   super();
  //   this.state = {
  //     displayName: "",
  //     email: "",
  //     password: "",
  //     confirmPassword: ""
  //   };
  // }

  const [userCredetials,setUserCredentials] = useState({ 
      displayName: "",
      email: "",
      password: "",
      confirmPassword: ""})

      const { displayName, email, password, confirmPassword } = userCredetials;


  const handleSubmit = async event => {
    event.preventDefault();

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

  const handleChange = event => {
    const { name, value } = event.target;
    setUserCredentials({
      ...userCredetials,
      [name]: value
    });
  };

 
    return (
      <div className="sign-up">
        <h2 className="title">I do not have a account</h2>
        <span>Sign up with your email and password</span>
        <form className="sign-up-form" onSubmit={handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            handleChange={handleChange}
            label="Display Name"
            required
          />
          <FormInput
            type="email"
            name="email"
            value={email}
            handleChange={handleChange}
            label="Email"
            required
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            handleChange={handleChange}
            label="Password"
            required
          />
          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            handleChange={handleChange}
            label="Confirm Password"
            required
          />
          <CustomButton type="submit">SIGN UP</CustomButton>
        </form>
        <p style={{color:'red'}}>{error}</p>
      </div>
    );
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
