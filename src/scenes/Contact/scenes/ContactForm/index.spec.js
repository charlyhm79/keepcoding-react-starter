import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import ContactForm from './';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ContactForm />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('Matchs snapshot', () => {
  const tree = renderer.create(<ContactForm />).toJSON();
  expect(tree).toMatchSnapshot();
});
