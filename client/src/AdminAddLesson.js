import React, { Component } from 'react';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import SortableComponent from './SortableComponent.js';
import { Form, FormGroup, FormControl, ButtonToolbar, Button }  from  'react-bootstrap'
import $ from 'jquery'

class AdminAddLesson extends Component {
  constructor () {
    super();
    this.state = {
      translationList: [],
      text: '',
      separator: ',',
      lessonName: '',
      language: 'PL-EN'
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmitOfGeneratedList = this.handleSubmitOfGeneratedList.bind(this);
  }

  CSVToArray( strData, strDelimiter ) {
      strDelimiter = (strDelimiter || ",");
      var objPattern = new RegExp(
          (
              "(\\" + strDelimiter + "|\\r?\\n|\\r|^)" +
              "(?:\"([^\"]*(?:\"\"[^\"]*)*)\"|" +
              "([^\"\\" + strDelimiter + "\\r\\n]*))"
          ),
          "gi"
          );
      var arrData = [[]];
      var arrMatches = null;
      while (arrMatches = objPattern.exec( strData )){
          var strMatchedDelimiter = arrMatches[ 1 ];
          if (
              strMatchedDelimiter.length &&
              strMatchedDelimiter !== strDelimiter
              ){
              arrData.push( [] );

          }

          var strMatchedValue;
          if (arrMatches[ 2 ]){
              strMatchedValue = arrMatches[ 2 ].replace(
                  new RegExp( "\"\"", "g" ),
                  "\""
                  );

          } else {
              strMatchedValue = arrMatches[ 3 ];
          }
          if (strMatchedValue !== '') {
            arrData[ arrData.length - 1 ].push( strMatchedValue.trim() );
          }
      }
      return( arrData );
  }

  generateJSONTranslationObject ( strArray ) {
    let json = [];
    let newValue = '';
    strArray.map((value, index) => (
      newValue = {
        original: value[0],
        translated: value[1]
      },
      json.push(newValue)
    ))

    return json;
  }

  handleSubmit(event) {
    event.preventDefault();
    let arrayFromCSV = this.CSVToArray(this.state.text, this.state.separator);
    let translations = this.generateJSONTranslationObject(arrayFromCSV);
    this.setState({ translationList: translations })
  };

  handleSubmitOfGeneratedList(event) {
    event.preventDefault();
    let json = {
      name: this.state.lessonName,
      language: this.state.language,
      translations: this.state.translationList
    }
    $.ajax({
      url: "/addLesson",
      type: 'POST',
      dataType: 'json',
      data: json,
      complete: function(data) {
        alert('OK');
      }.bind(this)
    });
  }

  handleChange (event) {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <div className="main-window">
          <div className="col-md-6">
            <div className="Showcase__style__stylizedList Showcase__style__list">
              <li className="Showcase__style__stylizedItem list-info">
                <div className="col-md-12">Create Lesson</div>
              </li>
              <Form onSubmit={this.handleSubmit} className="form-vertical">
                <FormGroup className="form-group">
                  <h4> Text to process: </h4>
                  <FormControl componentClass="textarea" placeholder="textarea" name="text" style={{height: '200px'}}  onChange={this.handleChange} required/>
                </FormGroup>
                <FormGroup className="form-group">
                  <h4> Separator : </h4>
                  <FormControl type="text" placeholder="text" name="separator" onChange={this.handleChange} required/>
                </FormGroup>
                <Button type="submit" className="submit">Generate list</Button>
              </Form>
            </div>
          </div>

          <div className="col-md-6">
            <SortableComponent items={this.state.translationList}/>
            <Form onSubmit={this.handleSubmitOfGeneratedList} className="form-vertical">
              <FormGroup className="form-group">
                <h4> Lesson name : </h4>
                <FormControl type="text" placeholder="text" name="lessonName" onChange={this.handleChange} required/>
              </FormGroup>
              <h4> Languages : </h4>
              <FormControl componentClass="select" placeholder="select" name="language" onChange={this.handleChange} required>
                <option value="PL-EN">PL-EN</option>
                <option value="EN-PL">EN-PL</option>
              </FormControl>
              <Button type="submit" className="submit">Save lesson</Button>
            </Form>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default AdminAddLesson
