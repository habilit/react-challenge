import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Summary} from '../../components/styles/summary';
import { summaryDonations } from '../../helper/helpers';

class SummaryTab extends Component {
  componentDidMount() {
    const self = this;

    fetch('http://localhost:3001/payments')
      .then(function(resp) { return resp.json() })
      .then(function(data) {
        self.props.dispatch({
          type: 'UPDATE_TOTAL_DONATE',
          amount: summaryDonations(data.map((item) => (item.amount || 0))),
        });
      })
  }

  render() {
    const { charity : { donate } } = this.props;
    return (<Summary>All donations:  {donate ===0 ? donate : '+ ' + donate } THB</Summary>);
  };
  
};

const mapStateToProps = (state) => {
  return {
    charity : state
  }
}

export default connect(mapStateToProps)(SummaryTab);