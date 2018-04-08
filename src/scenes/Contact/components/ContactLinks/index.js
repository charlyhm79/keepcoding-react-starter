import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledNav = styled.nav`
  background: #0066cc;
  padding: 10px 20px;
`;

const StyledLink = styled(Link)`
  color: #fff;
  margin-right: 20px;
  text-decoration: none;
  &:last-child {
    margin-right: 0;
  }
`;

const ContactLinks = ({ match }) => (
  <StyledNav>
    <StyledLink to={`${match.url}/map`}>Mapa</StyledLink>
    <StyledLink to={`${match.url}/form`}>Formulario de contacto</StyledLink>
  </StyledNav>
);

export default ContactLinks;
