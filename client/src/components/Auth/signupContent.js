import React from 'react';

import {
  SignupContentContainer,
  SignupContentText,
  SignupContentParagraph,
  SignupContentImg,
  SignupContentImgSmall,
} from './style';
import PencilImg from '../../pencil.jpg';
import PencilImgSmall from '../../pencil-small.jpg';

const SignupContent = () => {
  return (
    <SignupContentContainer>
      <SignupContentImgSmall src={PencilImgSmall} alt="pencil" />
      <SignupContentText>
        <h3>Join the adventure on Jobbatical!</h3>
        <SignupContentParagraph>
          Jobbatical connects top tech and business talent with
          exciting job opportunities around the world. Sign up and
          start exploring jobs!
        </SignupContentParagraph>
      </SignupContentText>
      <SignupContentImg src={PencilImg} alt="pencil" />
    </SignupContentContainer>
  );
};

export default SignupContent;
