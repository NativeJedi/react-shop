import React from 'react';
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';
import { EntrancePageSection } from './entrance.styles';

const Entrance = () => (
  <EntrancePageSection>
    <SignIn />

    <SignUp />
  </EntrancePageSection>
);

export default Entrance;
