import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Alert } from 'react-bootstrap';

class AlertBar extends Component {
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
    const { charity : { message, warningMessage } } = this.props;
    return (this.renderAlert(message, warningMessage));
  };
  
};

const mapStateToProps = (state) => {
  return {
    charity : state
  }
}

export default connect(mapStateToProps)(AlertBar);