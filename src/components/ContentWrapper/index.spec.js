import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import ContentWrapper from './';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ContentWrapper />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('Matchs snapshot', () => {
  const tree = renderer.create(<ContentWrapper />).toJSON();
  expect(tree).toMatchSnapshot();
});
