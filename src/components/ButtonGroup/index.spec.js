import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import ButtonGroup from './';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ButtonGroup />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('Matchs snapshot', () => {
  const tree = renderer.create(<ButtonGroup />).toJSON();
  expect(tree).toMatchSnapshot();
});
