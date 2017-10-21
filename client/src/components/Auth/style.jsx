import styled from 'styled-components';

export const Form = styled.form`
  max-width: 350px;
  margin: 0 auto;
  text-align: left;
  padding: 30px 20px;
`;

export const AuthBoxContainer = styled.div`
  border: 1px solid #e3e3e3;
  box-shadow: 0 5px 40px 0 rgba(0, 0, 0, 0.07);
  flex-grow: 2;
`;

export const SignupContentContainer = styled.div`
  text-align: right;
  flex-basis: 200px;
  flex-grow: 1;
  padding: 20px;

  @media (max-width: 768px) {
    text-align: left;
    width: 94%;
    flex-basis: 0px;
    max-width: 600px;
    margin: 0 auto;
  }
`;

export const SignupContentText = styled.div`
  margin-bottom: 10px;
  @media (max-width: 768px) {
    font-size: 0.9em;
    margin: 0 auto;
    padding-right: 5px;
  }
`;

export const SignupContentParagraph = styled.div`
  color: #666;
`;

export const SignupContentImg = styled.img`
  
  @media (max-width: 768px) {
    display: none;
  }
`;

export const SignupContentImgSmall = styled.img`
  float: right;
  @media (min-width: 768px) {
    display: none;
    margin-bottom: 20px;
  }
`;

export const AlreadyHaveAnAccountContainer = styled.div`
  margin: 0 auto;
  width: 80%;
  border-top: 1px solid #ddd;
`;

export const AlreadyHaveAnAccountText = styled.div`
  padding: 10px 0 10px 0;
  font-size: 0.8em;
`;

export const LoginHeaderStyle = styled.div`
  background-color: #04d092;
`;

export const LoginHeaderText = styled.h3`
  color: #fff;
  padding: 15px;
`;

