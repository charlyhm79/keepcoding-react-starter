import React, { Component } from 'react';

import CounterView from './view';

class CounterContainer extends Component {
  state = {
    counter: 0,
  };
  getTitle = () => {
    if (this.state.counter === 0) {
      return 'El contador está vacío';
    }
    return `El contador marca ${this.state.counter}`;
  };
  updateCounter = () => {
    this.setState(prevState => ({
      counter: prevState.counter + 1,
    }));
  };
  handleReset = () => {
    this.setState({
      counter: 0,
    });
  };
  render() {
    return (
      <CounterView
        title={this.getTitle()}
        resetEnabled={this.state.counter > 0}
        handleClick={this.updateCounter}
        handleReset={this.handleReset}
      />
    );
  }
}

export default CounterContainer;
