import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

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

const Logo = () => (
  <Link to="/">
    <StyledLogo src={logoFile} alt="" />
  </Link>
);

export default Logo;
