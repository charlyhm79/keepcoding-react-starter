import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Button, { getHalf } from './';

describe('Button test suite', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Button />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('getHalf', () => {
    expect(getHalf(4)).toBe(2);
    expect(getHalf(1)).toBe(0.5);
    expect(getHalf(-1)).toBe(-0.5);
    expect(getHalf(10)).toBe(5);
    expect(getHalf(1000)).toBe(500);
  });

  it('Matchs snapshot', () => {
    const tree = renderer.create(<Button />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
