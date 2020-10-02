import React, { Component } from 'react';
import './sign-up.styles.scss';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';

class SignUp extends Component {
  state = {
    displayName: '',
    password: '',
    confirmPassword: '',
    email: '',
  }

  handleSubmit = async (e) => {
    e.preventDefault();

    const {
      email,
      displayName,
      password,
      confirmPassword,
    } = this.state;

    if (password !== confirmPassword) {
      alert('Password don\'t match');
      return;
    }

    if (password.length < 6) {
      alert('Password should be more that 6 symbols');
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password);

      await createUserProfileDocument(user, { displayName });

      this.setState({
        displayName: '',
        password: '',
        confirmPassword: '',
        email: '',
      });
    } catch (err) {
      alert('Creating user error');
    }
  }

  handleChange = ({ target }) => {
    const { name, value } = target;

    this.setState({ [name]: value });
  }

  render() {
    const {
      email,
      displayName,
      password,
      confirmPassword,
    } = this.state;

    return (
      <div className="sign-up">
        <h2 className="sign-up__title">I don&apos;t have an account</h2>
        <span>Sign up with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="displayName"
            value={displayName}
            handleChange={this.handleChange}
            label="Display name"
            id="display_name"
            required
          />

          <FormInput
            type="email"
            name="email"
            value={email}
            handleChange={this.handleChange}
            label="Email"
            id="sign_up_email"
            required
          />

          <FormInput
            type="password"
            name="password"
            value={password}
            handleChange={this.handleChange}
            label="Password"
            id="sign_up_password"
            required
          />

          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            handleChange={this.handleChange}
            label="Confirm password"
            id="sign_up_confirm_password"
            required
          />

          <CustomButton type="submit">Sign up</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUp;
