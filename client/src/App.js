import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SortableComponent from './SortableComponent.js';

class App extends Component {
  constructor () {
    super();
    this.state = {
      response: [],
      original: '',
      translated: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

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

  handleSubmit(event) {
    event.preventDefault();
    let response = this.state.response;
    let newValue = {
      original: this.state.original,
      translated: this.state.translated
    }
    response.push(newValue);
    this.setState({ response: response })
  };

  handleChange (event) {

    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <form onSubmit={this.handleSubmit}>
          <label>
            Original:
            <input type="text" onChange={this.handleChange} name="original" required/>
          </label>
          <label>
            Translated:
            <input type="text" onChange={this.handleChange} name="translated" required/>
          </label>
          <input type="submit" value="Submit" />
        </form>
        <div className="SampleContainer">
          <SortableComponent items={this.state.response}/>
        </div>
      </div>
    );
  }
}

export default App;
