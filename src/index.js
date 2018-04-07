import React from 'react';
import ReactDOM from 'react-dom';
import { injectGlobal } from 'styled-components';
import { normalize, fontFace } from 'polished';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

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
  
  body {
    font-family: system;
  }
`;

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
