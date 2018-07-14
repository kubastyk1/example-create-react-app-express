import React, {Component} from 'react';
import App from './App.js';
import $ from 'jquery';

class Lessons extends Component {
  state = {
     response: []
   }

  componentWillMount() {
    let url = this.props.match.url !== '/' ? this.props.match.url : 'sample';
    $.getJSON(url, ( data ) => {
      this.setState({ response: data });
    });
  }

  render() {
    const { response } = this.state

    return ( <App response={response} /> )
  }
}

export default Lessons
