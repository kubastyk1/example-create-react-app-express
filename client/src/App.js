import React, { Component } from 'react';
import { ButtonToolbar, Button, Form, FormGroup }  from  'react-bootstrap'
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

  handleSubmit(event) {
    event.preventDefault();
    let response = this.props.response;
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
          <img src="./MainIcon.png" className="App-logo" alt="logo" />
        </header>

        <div className="main-window">
          <div className="col-md-6">
            <div className="Showcase__style__stylizedList Showcase__style__list">
              <li className="Showcase__style__stylizedItem list-info">
                <div className="col-md-12">Add translation to list</div>
              </li>
              <Form onSubmit={this.handleSubmit} className="form-vertical">
                <FormGroup className="form-group">
                  <h4> Original: </h4>
                  <input type="text" onChange={this.handleChange} name="original" required/>
                </FormGroup>
                <FormGroup className="form-group">
                  <h4> Translated: </h4>
                  <input type="text" onChange={this.handleChange} name="translated" required/>
                </FormGroup>
                <Button type="submit" className="submit">Add to list</Button>
              </Form>
            </div>
          </div>

          <div className="col-md-6">
            <SortableComponent items={this.props.response.data}/>
            <ButtonToolbar>
              <Button onClick={this.handleClick} className="submit mp3-button">GET MP3</Button>
            </ButtonToolbar>
          </div>
        </div>

        <footer className="App-footer">
          <p> Created by <a href="https://github.com/kubastyk1">https://github.com/kubastyk1</a></p>
        </footer>
      </div>
    );
  }
}

export default App;
