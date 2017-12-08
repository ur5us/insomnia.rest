import React, {Component, PropTypes} from 'react';
import moment from 'moment';
import * as session from '../session';
import {trackEvent} from '../analytics';

class Invoices extends Component {
  state = {
    invoices: null
  };

  componentDidMount = async () => {
    const invoices = await session.invoices();
    this.setState({invoices});
  };

  _handleDownloadInvoice = async invoiceId => {
    const {downloadLink} = await session.getInvoice(invoiceId);
    trackEvent('Account', 'Invoice Download');
    window.location = downloadLink;
  };

  render () {
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
                          onClick={() => this._handleDownloadInvoice(invoice.id)}>
                    Download
                  </button>
                ) : null}
              </td>
            </tr>
          );
        })}
        </tbody>
      </table>
    )
  }
}

Invoices.propTypes = {
  whoami: PropTypes.shape({
    email: PropTypes.string.isRequired,
  }).isRequired
};

export default Invoices;
