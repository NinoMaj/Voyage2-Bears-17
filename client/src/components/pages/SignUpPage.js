import React, { Component } from 'react';

import AuthBox from '../Auth/auth_box';
import SignUp from '../Auth/signup';
import SignupContent from '../Auth/signupContent';
import AlreadyHaveAnAccount from '../Auth/AlreadyHaveAnAccount';

import { SignupFlex } from './style';

class SignUpPage extends Component {
  render() {
    return (
      <SignupFlex>
        <SignupContent />
        <AuthBox>
          <SignUp />
          <AlreadyHaveAnAccount />
        </AuthBox>
      </SignupFlex>
    );
  }
}

export default SignUpPage;
