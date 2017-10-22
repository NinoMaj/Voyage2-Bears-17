import styled from "styled-components";
import { Link } from "react-router-dom";

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

export const ExploreButton = styled(Link)`
  display: inline-block;
  padding: 15px 30px;
  font-weight: 700;
  text-transform: uppercase;
  color: #fff;
  border-radius: 30px;
`;
