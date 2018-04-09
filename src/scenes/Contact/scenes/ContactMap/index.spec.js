import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import ContactMap from './';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ContactMap />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('Matchs snapshot', () => {
  const tree = renderer.create(<ContactMap />).toJSON();
  expect(tree).toMatchSnapshot();
});
