import React from 'react';
import styled, { keyframes } from 'styled-components';

import logoFile from './logo.svg';

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const StyledLogo = styled.img`
  animation: ${rotate360} infinite 20s linear;
  height: 80px;
`;

const Logo = () => <StyledLogo src={logoFile} alt="" />;

export default Logo;
