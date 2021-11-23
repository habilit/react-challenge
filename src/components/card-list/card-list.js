import React, { Component } from 'react';
import CardItem from '../../components/card-item/card-item';
import fetch from 'isomorphic-fetch';
import { CardContainer } from '../../components/styles/card-style';

class CardList extends Component {
  constructor(props) {
    super();
    this.state = {
      charities: [],
    };
  }

  componentDidMount() {
    const self = this;
    fetch('http://localhost:3001/charities')
      .then(function(resp) { 
        return resp.json(); })
      .then(function(data) {
        self.setState({ charities: data }) });
  }

  renderList = () => {
    const { charities } = this.state;
    if(charities.length === 0) {
      return (<div>No Charities Found</div>)
    }

    const cards = charities.map(function(item, i) {
      return (
        <CardItem key={i} index={i} item={item}></CardItem>
      );
    });

    return cards;
  }

  render() {
    return (
       <CardContainer>{this.renderList()}</CardContainer>
    );
  };
  
};

export default CardList;