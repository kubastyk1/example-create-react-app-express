import React, { Component } from 'react';

class Card extends Component {
  render() {
    return (
      <div className="card">
        <a href={"/lessons/" + this.props.item.name}>
          <div className="container" id="grad1">
            <h3 className="card_name"><b> {this.props.item.name} </b></h3>
            <p className="card_describtion">Architect & Engineer</p>
          </div>
        </a>
      </div>
    )
  }
}

class CardContainer extends Component {
  state = {
     items: [],
     cards: []
   }

   generateCardsValues() {
     var rows = [];

     this.props.items.map((value, index) => (
       rows.push( <Card item={value} /> )
     ));

     this.setState({cards: rows});
   }

  render() {
    if (this.props.items && this.state.cards.length === 0) {
      this.generateCardsValues();
    }
    return (
      <div className="cards_container">
        {
          this.state.cards
        }
      </div>
    )
  }
}

export default CardContainer
