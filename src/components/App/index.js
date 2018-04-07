import React from 'react';
import styled from 'styled-components';

import Header from '../Header';

const StyledApp = styled.div`
  text-align: center;
`;

const StyledIntro = styled.p`
  font-size: large;
`;

const App = () => (
  <StyledApp>
    <Header title="KeepCoding React Starter" />
    <StyledIntro>
      To get started, edit <code>src/App.js</code> and save to reload.
    </StyledIntro>
  </StyledApp>
);

export default App;
