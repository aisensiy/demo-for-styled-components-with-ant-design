import React, { Component } from 'react';
import { Button } from 'antd';
import styled from 'styled-components';
import './App.css';

const StyledButton = styled(Button)`
  color: palevioletred;
  &:hover {
    border-color: palevioletred;
    color: palevioletred;
  }
`;

class App extends Component {
  render() {
    return (
      <div className="App">
        <StyledButton>Button</StyledButton>
      </div>
    );
  }
}

export default App;
