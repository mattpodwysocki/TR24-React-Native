import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {timer: 0 }
  }

  componentDidMount() {
    window.setInterval(() => {
      this.setState({timer: this.state.timer + 1});
    }, 1000);
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          Hello {this.props.name} {this.props.version}
          <br />Timer: {this.state.timer}
        </p>
      </div>
    );
  }
}

export default App;
