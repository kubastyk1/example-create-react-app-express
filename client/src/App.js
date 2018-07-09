import React, { Component } from 'react';
import { ButtonToolbar, Button, Form, FormGroup }  from  'react-bootstrap'
import logo from './logo.svg';
import './App.css';
import SortableComponent from './SortableComponent.js';
import $ from 'jquery'

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
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.callApi('/api/sample')
      .then(res => this.setState({ response: res.sample }))
      .catch(err => console.log(err));
  }

  callApi = async (path) => {
    const response = await fetch(path);
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

  handleClick (event) {
    $.ajax({
      url: "/api/generateScript",
      type: 'POST',
      dataType: 'json',
      data: this.state,
      complete: function(data) {
        var link = document.createElement('a');
        link.href = "http://localhost:5000/download/" + data.responseJSON.fileName;
        link.download = 'true';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }.bind(this)
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="col-md-6">
          <Form onSubmit={this.handleSubmit}>
            <FormGroup>
              Original:
              <input type="text" onChange={this.handleChange} name="original" required/>
            </FormGroup>
            <FormGroup>
              Translated:
              <input type="text" onChange={this.handleChange} name="translated" required/>
            </FormGroup>
            <Button type="submit">Submit</Button>
          </Form>
        </div>

        <div className="col-md-6">
          <SortableComponent items={this.state.response}/>
          <ButtonToolbar>
            <Button onClick={this.handleClick}>GET MP3</Button>
          </ButtonToolbar>
        </div>
      </div>
    );
  }
}

export default App;
