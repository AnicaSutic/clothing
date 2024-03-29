import React, { useState } from "react";
import "./index.scss";
import FormInput from "../FormInput";
import "./index.scss";
import CustomButton from "../CustomButton";
import { googleSignInStart, emailSignInStart } from "../../redux/user/userActions";
import { connect } from "react-redux";

function SignIn({emailSignInStart,googleSignInStart}) {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     email: "",
  //     password: ""
  //   };
  // }

  const [userCredentials,setCredentials] = useState({email:'',password:''})
  const { email, password } = userCredentials;

  const handleSubmit = async event => {
    event.preventDefault();
    emailSignInStart(email,password);


    // try {
    //   await auth.signInWithEmailAndPassword(email, password);
    //   this.setState({
    //     email: "",
    //     password: ""
    //   });
    // } catch (error) {
    //   console.log(error.message);
    // }
  };

  const handleChange = event => {
    const { value, name } = event.target;
    setCredentials({
      ...userCredentials, [name]:value
    });
  };

    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={handleSubmit}>
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
          <div className="buttons">
            <CustomButton type="submit">Sign In</CustomButton>
            <CustomButton
              type="button"
              onClick={googleSignInStart}
              isGoogleSignIn
            >
              Sign In with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }


const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email,password) => dispatch(emailSignInStart({email,password}))
});

export default connect(
  null,
  mapDispatchToProps
)(SignIn);
