import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Alert } from 'react-bootstrap';
import fetch from 'isomorphic-fetch';
import CardItem from './components/card-item';
import { CardContainer} from './components/styles/card-style';
import { Summary} from './components/styles/summary';
import { Container, Header} from './components/styles/template';
import { summaryDonations } from './helper/helpers';


export default connect((state) => state)(
  class App extends Component {
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

      fetch('http://localhost:3001/payments')
        .then(function(resp) { return resp.json() })
        .then(function(data) {
          self.props.dispatch({
            type: 'UPDATE_TOTAL_DONATE',
            amount: summaryDonations(data.map((item) => (item?.amount || 0))),
          });
        })
    }

    renderAlert = (msg, warningMsg) => {
      if (msg !== '') {
        return (<Alert variant='success'> {msg} </Alert>)
      } 

      if(warningMsg !== '') {
        return (<Alert variant='danger'> {warningMsg} </Alert>)
      }

      return null;
    }


    render() {
      const {donate, message, warningMessage} = this.props;
      const cards = this.state.charities.map(function(item, i) {
        return (
          <CardItem key={i} index={i} item={item}></CardItem>
        );
      });

      return (
        <div>
          {this.renderAlert(message, warningMessage)}
          <Header>Omise Tamboon React</Header>
          <Summary>All donations:  {donate ===0 ? donate : '+ ' + donate } THB </Summary>
          <Container>
            <CardContainer>{cards}</CardContainer>
          </Container>
        </div>
      );
    }
  }
);
