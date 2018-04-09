import React from 'react';
import ReactDOM from 'react-dom';
import { StaticRouter } from 'react-router-dom';
import Logo from './';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <StaticRouter context={{}}>
      <Logo />
    </StaticRouter>,
    div,
  );
  ReactDOM.unmountComponentAtNode(div);
});
