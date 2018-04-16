import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import * as session from '../../lib/session';
import {trackEvent} from '../../lib/analytics';
import App from '../../lib/app-wrapper';

class Invoices extends React.Component {
  state = {
    invoices: null
  };

  async componentDidMount() {
    const invoices = await session.invoices();
    this.setState({invoices});
  };

  async _handleDownloadInvoice(invoiceId) {
    const {downloadLink} = await session.getInvoice(invoiceId);
    trackEvent('Account', 'Invoice Download');
    window.location = downloadLink;
  };

  render() {
    const {invoices} = this.state;

    if (!invoices) {
      return (
        <div>Fetching Invoices...</div>
      );
    }

    if (invoices.length === 0) {
      return (
        <div>No invoices yet</div>
      );
    }

    return (
      <table>
        <thead>
        <tr>
          <th>Period</th>
          <th>Total</th>
          <th>Status</th>
          <th>&nbsp;</th>
        </tr>
        </thead>
        <tbody>
        {invoices.map(invoice => {
          const start = moment(invoice.periodStart).format('MMM D');
          const end = moment(invoice.periodEnd).format('MMM D');
          return (
            <tr key={invoice.id}>
              <td>{start} to {end}</td>
              <td>${(invoice.total / 100).toFixed(2)}</td>
              <td>
                {invoice.paid
                  ? <span style={{color: '#0A0'}}>Paid</span>
                  : <span style={{color: '#AAA'}}>Pending</span>
                }
              </td>
              <td>
                {invoice.paid ? (
                  <button className="button button--super-compact"
                          onClick={this._handleDownloadInvoice.bind(this, invoice.id)}>
                    Download
                  </button>
                ) : null}
              </td>
            </tr>
          );
        })}
        </tbody>
      </table>
    );
  }
}

Invoices.propTypes = {
  whoami: PropTypes.shape({
    email: PropTypes.string.isRequired,
  }).isRequired
};

export default () => (
  <App title="Invoices" subTitle="View past invoices">
    {props => <Invoices {...props}/>}
  </App>
);

