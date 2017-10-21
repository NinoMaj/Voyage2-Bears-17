import styled from 'styled-components';

export const SignupFlex = styled.div`
  display: flex;
  position: relative;
  width: 760px;
  margin: 0 auto;

  @media (max-width: 768px) {
    flex-direction: column;
    width: initial;
  }
`;

export const SigninStyle = styled.div`
  position: relative;
  width: 495px;
  margin: 0 auto;

  @media (max-width: 768px) {
    width: initial;
  }
`;
