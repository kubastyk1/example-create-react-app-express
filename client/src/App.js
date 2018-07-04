import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SortableComponent from './SortableComponent.js';

class App extends Component {
  state = {
    response: []
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.sample }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/sample');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="SampleContainer">
          {
            <SortableComponent items={this.state.response}/>
          }
        </div>
      </div>
    );
  }
}

export default App;
