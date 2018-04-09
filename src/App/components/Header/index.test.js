import React from 'react';
import ReactDOM from 'react-dom';
import { StaticRouter } from 'react-router-dom';

import Header from './';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <StaticRouter context={{}}>
      <Header title="Test" />
    </StaticRouter>,
    div,
  );
  ReactDOM.unmountComponentAtNode(div);
});
