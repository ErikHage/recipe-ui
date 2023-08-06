import React, { Component } from 'react';
import { RotatingLines } from 'react-loader-spinner';

class LoadingScreen extends Component {
  render() {
    const messageStyle = { color: 'white' };
    const { message = 'Loading...' } = this.props;

    return (
        <div>
          <h4 style={messageStyle}>{message}</h4>
          <RotatingLines
              strokeColor="grey"
              strokeWidth="5"
              animationDuration="0.75"
              width="200"
              visible={true}
          />
        </div>
    );
  }
}

export default LoadingScreen;
