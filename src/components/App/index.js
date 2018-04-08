import React from 'react';
import styled from 'styled-components';

import Header from '../Header';
import Counter from '../Counter';

const StyledApp = styled.div`
  text-align: center;
`;

const StyledContent = styled.div`
  max-width: 600px;
  margin: 20vh auto;
`;

const App = () => (
  <StyledApp>
    <Header title="KeepCoding React Starter" />
    <StyledContent>
      <Counter />
    </StyledContent>
  </StyledApp>
);

export default App;
