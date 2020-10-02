import React, { Component } from 'react';
import './sign-in.styles.scss';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';

class SignIn extends Component {
  state = {
    email: '',
    password: '',
  }

  handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({
        email: '',
        password: '',
      });
    } catch (error) {
      alert('Sign in failed with error', error);
    }
  }

  handleChange = (e) => {
    e.preventDefault();

    const { value, name } = e.target;

    this.setState({
      [name]: value,
    });
  }

  render() {
    const { email, password } = this.state;

    return (
      <div className="sign-in">
        <h2 className="sign-in__title">I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            value={email}
            required
            id="email"
            label="Email"
            handleChange={this.handleChange}
          />

          <FormInput
            name="password"
            type="password"
            value={password}
            required
            id="password"
            label="Password"
            handleChange={this.handleChange}
          />

          <div className="sign-in__buttons">
            <CustomButton type="submit">Sign in</CustomButton>
            <CustomButton
              onClick={signInWithGoogle}
              isGoogleSignIn
            >
              Sign in with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;