import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Logo from '../Logo';

const StyledHeader = styled.header`
  background-color: #222;
  height: 150px;
  padding: 20px;
  color: white;
`;

const StyledHeading = styled.h1`
  font-size: 1.5em;
`;

const Header = ({ title }) => (
  <StyledHeader>
    <Logo />
    <StyledHeading>{title}</StyledHeading>
  </StyledHeader>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
