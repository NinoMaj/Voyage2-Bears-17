import React from 'react';

import {
  AuthBoxContainer,
} from './style';


const AuthBox = ({ children }) => {
  return (
    <AuthBoxContainer>
      {children}
    </AuthBoxContainer>
  );
};

export default AuthBox;
