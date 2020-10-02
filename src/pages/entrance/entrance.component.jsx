import React from 'react';
import './entrance.styles.scss';
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

const Entrance = () => (
  <div className="entrance">
    <SignIn />

    <SignUp />
  </div>
);

export default Entrance;
