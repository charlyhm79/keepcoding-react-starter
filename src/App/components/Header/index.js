import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Brand from './components/Brand';
import Links from './components/Links';

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #222;
  padding: 20px;
  color: white;
`;

const Header = ({ title }) => (
  <StyledHeader>
    <Brand title={title} />
    <Links />
  </StyledHeader>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
