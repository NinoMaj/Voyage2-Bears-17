import React, { Component } from 'react';

import AuthBox from '../Auth/auth_box';
import LoginHeader from '../Auth/login_header';
import SignIn from '../Auth/signin';
import { SigninStyle } from './style';

class SignInPage extends Component {
  render() {
    return (
      <SigninStyle>
        <AuthBox>
          <LoginHeader />
          <SignIn />
        </AuthBox>
      </SigninStyle>
    );
  }
}

export default SignInPage;
