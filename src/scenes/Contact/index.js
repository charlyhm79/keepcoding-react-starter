import React from 'react';
import styled from 'styled-components';
import { Route, Redirect } from 'react-router-dom';

import { ContactData, ContactLinks } from './components';
import { ContactForm, ContactMap } from './scenes';

const StyledWrapper = styled.div`
  display: grid;
  grid-auto-flow: row;
  grid-auto-rows: minmax(20px, auto);
  grid-template-rows: minmax(45px, auto) 1fr;
  grid-template-columns: 1fr 1fr;
`;
const StyledHeader = styled.div`
  grid-column-end: span 3;
`;
const StyledCol = styled.div``;

const Contact = ({ match }) => (
  <StyledWrapper>
    <StyledHeader>
      <ContactLinks match={match} />
    </StyledHeader>
    <StyledCol>
      <ContactData />
    </StyledCol>
    <StyledCol>
      <Route exact path={`${match.url}`} component={() => <Redirect to={`${match.url}/map`} />} />
      <Route path={`${match.url}/map`} component={ContactMap} />
      <Route path={`${match.url}/form`} component={ContactForm} />
    </StyledCol>
  </StyledWrapper>
);

export default Contact;
