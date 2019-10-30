import React, { Component } from 'react';
import ColorDisplay from './colors/ColorDisplay';

export default class RandomColor extends Component {
  state = {
    backgroundColor: 'black' 
  };

  selectColor = () => {
    this.setState();
  }

  render() {
    const { backgroundColor } = this.state;
    const colors = ['red', 'green', 'black', 'yellow'];

    return (
      <>
        <ColorDisplay backgroundColor={backgroundColor} />
      </>
    );
  }
}
