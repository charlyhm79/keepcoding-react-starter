import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledNav = styled.nav``;

// También podemos dar estilo a componentes, no solo a tags
const StyledLink = styled(Link)`
  color: #fff;
  margin-left: 20px;
  text-decoration: none;
  text-transform: uppercase;
  &:first-child {
    margin-left: 0;
  }
`;

const Links = () => (
  <StyledNav>
    <StyledLink to="/">Home</StyledLink>
    <StyledLink to="/counter">Contador</StyledLink>
    <StyledLink to="/contact">Contacto</StyledLink>
  </StyledNav>
);

export default Links;
