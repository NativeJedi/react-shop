import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';
import { SignInButtons, SignInContainer, SignInTitle } from './sign-in.styles';

class SignIn extends Component {
  state = {
    email: '',
    password: '',
  }

  handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = this.state;
    const { emailSignIn } = this.props;

    try {
      await emailSignIn(email, password);
      this.setState({
        email: '',
        password: '',
      });
    } catch (error) {
      console.log(error);
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
    const { googleSignIn } = this.props;

    return (
      <SignInContainer>
        <SignInTitle>I already have an account</SignInTitle>
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

          <SignInButtons>
            <CustomButton type="submit">Sign in</CustomButton>
            <CustomButton
              onClick={googleSignIn}
              isGoogleSignIn
            >
              Sign in with Google
            </CustomButton>
          </SignInButtons>
        </form>
      </SignInContainer>
    );
  }
}

SignIn.propTypes = {
  googleSignIn: PropTypes.func.isRequired,
  emailSignIn: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  googleSignIn: () => dispatch(googleSignInStart()),
  emailSignIn: (email, password) => dispatch(emailSignInStart({
    email,
    password,
  })),
});

export default connect(null, mapDispatchToProps)(SignIn);
