import React from 'react';
import styled, { injectGlobal } from 'styled-components';
import { normalize, fontFace } from 'polished';
import { BrowserRouter } from 'react-router-dom';

import Header from './components/Header';
import Content from './components/Content';

injectGlobal`
  ${normalize()};

  ${fontFace({
    fontFamily: 'system',
    fontStyle: 'normal',
    fontWeight: 300,
    localFonts: [
      '.SFNSText-Light',
      '.HelveticaNeueDeskInterface-Light',
      '.LucidaGrandeUI',
      'Ubuntu Light',
      'Segoe UI Light',
      'Roboto-Light',
      'DroidSans',
      'Tahoma',
    ],
  })};
`;

const StyledApp = styled.div`
  font-family: system;
  font-size: 16px;
`;

const App = () => (
  <BrowserRouter>
    <StyledApp>
      <Header title="KeepCoding React Starter" />
      <Content />
    </StyledApp>
  </BrowserRouter>
);

export default App;
