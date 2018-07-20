import React, {Component} from 'react';
import App from './App.js';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import CardContainer from './components/CardContainer.js';
import './Card.css';

import $ from 'jquery';

class LessonsList extends Component {
  state = {
     response: []
   }

  componentWillMount() {
    $.getJSON(this.props.match.url, ( data ) => {
      this.setState({ response: data });
    });
  }

  render() {
    const { response } = this.state

    return (
      <div className="App">
        <Header />
        <div className="main-window">
          <CardContainer items={this.state.response.data} />
        </div>
        <Footer />
      </div>
    )
  }
}

export default LessonsList
