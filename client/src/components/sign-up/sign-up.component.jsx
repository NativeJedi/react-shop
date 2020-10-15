import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { signUpStart } from '../../redux/user/user.actions';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';
import { SignUpContainer, SignUpTitle } from './sign-up.styles';

const SignUp = ({ signUp }) => {
  const [credentials, setCredentials] = useState({
    displayName: '',
    password: '',
    confirmPassword: '',
    email: '',
  });

  const {
    displayName,
    password,
    confirmPassword,
    email,
  } = credentials;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert('Password don\'t match');
      return;
    }

    if (password.length < 6) {
      alert('Password should be more that 6 symbols');
    }

    signUp({
      email,
      password,
      displayName,
    });
  };

  const handleChange = ({ target }) => {
    const { name, value } = target;

    setCredentials({
      ...credentials,
      [name]: value,
    });
  };

  return (
    <SignUpContainer>
      <SignUpTitle>I don&apos;t have an account</SignUpTitle>
      <span>Sign up with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name="displayName"
          value={displayName}
          handleChange={handleChange}
          label="Display name"
          id="display_name"
          required
        />

        <FormInput
          type="email"
          name="email"
          value={email}
          handleChange={handleChange}
          label="Email"
          id="sign_up_email"
          required
        />

        <FormInput
          type="password"
          name="password"
          value={password}
          handleChange={handleChange}
          label="Password"
          id="sign_up_password"
          required
        />

        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          handleChange={handleChange}
          label="Confirm password"
          id="sign_up_confirm_password"
          required
        />

        <CustomButton type="submit">Sign up</CustomButton>
      </form>
    </SignUpContainer>
  );
};

SignUp.propTypes = {
  signUp: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  signUp: (data) => dispatch(signUpStart(data)),
});

export default connect(null, mapDispatchToProps)(SignUp);
