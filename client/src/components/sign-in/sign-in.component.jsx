import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';
import { SignInButtons, SignInContainer, SignInTitle } from './sign-in.styles';

const SignIn = () => {
  const dispatch = useDispatch();

  const googleSignIn = useCallback(
    () => dispatch(googleSignInStart()),
    [dispatch],
  );

  const emailSignIn = useCallback(
    (email, password) => dispatch(emailSignInStart({
      email,
      password,
    })),
    [dispatch],
  );

  const [userCredentials, setCredentials] = useState({
    email: '',
    password: '',
  });

  const { email, password } = userCredentials;

  const handleChange = (e) => {
    e.preventDefault();

    const { value, name } = e.target;

    setCredentials({
      ...userCredentials,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await emailSignIn(email, password);

      setCredentials({
        email: '',
        password: '',
      });
    } catch (error) {
      alert('Sign in failed with error', error);
    }
  };

  return (
    <SignInContainer>
      <SignInTitle>I already have an account</SignInTitle>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          value={email}
          required
          id="email"
          label="Email"
          handleChange={handleChange}
        />

        <FormInput
          name="password"
          type="password"
          value={password}
          required
          id="password"
          label="Password"
          handleChange={handleChange}
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
};

export default SignIn;
