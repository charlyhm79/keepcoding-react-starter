import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Logo from './components/Logo';

const StyledBrand = styled.div`
  display: flex;
  align-items: center;
`;

const StyledHeading = styled.h1`
  font-size: 1.5em;
`;

const Brand = ({ title }) => (
  <StyledBrand>
    <Logo />
    <StyledHeading>{title}</StyledHeading>
  </StyledBrand>
);

Brand.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Brand;
