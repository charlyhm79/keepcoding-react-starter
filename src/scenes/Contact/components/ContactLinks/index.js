import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledNav = styled.nav`
  background: #0066cc;
  padding: 10px 20px;
`;

const StyledLink = styled(NavLink)`
  color: #fff;
  margin-right: 20px;
  text-decoration: none;
  &.active {
    text-decoration: line-through;
  }
  &:last-child {
    margin-right: 0;
  }
`;

const ContactLinks = ({ match }) => (
  <StyledNav>
    <StyledLink activeClassName="active" to={`${match.url}/map`}>
      Mapa
    </StyledLink>
    <StyledLink activeClassName="active" to={`${match.url}/form`}>
      Formulario de contacto
    </StyledLink>
  </StyledNav>
);

export default ContactLinks;
