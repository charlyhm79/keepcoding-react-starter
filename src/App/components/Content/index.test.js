import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { StaticRouter } from 'react-router-dom';
import Content from './';

const Component = (
  <StaticRouter context={{}}>
    <Content match={{ to: 'foo' }} />
  </StaticRouter>
);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(Component, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('Matchs snapshot', () => {
  const tree = renderer.create(Component).toJSON();
  expect(tree).toMatchSnapshot();
});
