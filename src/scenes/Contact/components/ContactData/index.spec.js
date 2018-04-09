import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import ContactData from './';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ContactData />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('Matchs snapshot', () => {
  const tree = renderer.create(<ContactData />).toJSON();
  expect(tree).toMatchSnapshot();
});
