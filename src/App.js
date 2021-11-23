import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from './components/card-list/card-list';
import AlertBar from './components/alert-bar/alert-bar';
import SummaryTab from './components/summary-tab/summary-tab';
import { CardContainer } from './components/styles/card-style';
import { Container, Header} from './components/styles/template';

export default connect((state) => state)(
  class App extends Component {

    render() {
      return (
        <div>
          <AlertBar />
          <Header>Omise Tamboon React</Header>
          <SummaryTab />
          <Container>
            <CardContainer><CardList /></CardContainer>
          </Container>
        </div>
      );
    }
  }
);
