import React from 'react';
import { Link } from 'react-router-dom';

import {
  AlreadyHaveAnAccountContainer,
  AlreadyHaveAnAccountText,
} from './style';


const AlreadyHaveAnAccount = () => {
  return (
    <AlreadyHaveAnAccountContainer>
      <AlreadyHaveAnAccountText>
        Already have an account? <Link to="/signin">Log in here!</Link>
      </AlreadyHaveAnAccountText>
    </AlreadyHaveAnAccountContainer>
  );
};

export default AlreadyHaveAnAccount;
