import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import * as session from '../../lib/session';
import App from '../../lib/app-wrapper';

class Invoices extends React.Component {
  state = {
    invoices: null,
  };

  async componentDidMount () {
    const invoices = await session.invoices();
    this.setState({invoices});
  }

  static async _handleDownloadInvoice (invoiceId) {
    const {downloadLink} = await session.getInvoice(invoiceId);
    window.location = downloadLink;
  }

  renderInvoices () {
    const {invoices} = this.state;

    if (!invoices) {
      return <div>Fetching Invoices...</div>;
    }

    if (invoices.length === 0) {
      return <div>No invoices yet</div>;
    }

    return (
      <table>
        <thead>
        <tr>
          <th>Date</th>
          <th>Total</th>
          <th>Status</th>
          <th>&nbsp;</th>
        </tr>
        </thead>
        <tbody>
        {invoices.map(invoice => {
          const date = moment(invoice.date).format('MMMM D');
          return (
            <tr key={invoice.id}>
              <td>
                {date}
              </td>
              <td>${(invoice.total / 100).toFixed(2)}</td>
              <td>
                {invoice.paid ? (
                  <span style={{color: '#0A0'}}>Paid</span>
                ) : (
                  <span style={{color: '#AAA'}}>Pending</span>
                )}
              </td>
              <td className="center">
                {invoice.paid ? (
                  <button
                    className="button button--super-compact"
                    onClick={Invoices._handleDownloadInvoice.bind(
                      this,
                      invoice.id
                    )}>
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

  render () {
    return (
      <div>
        {this.renderInvoices()}
        <hr/>
        <p className="text-sm super-subtle italic">
          ** Editing additional invoice information is now done when creating or changing a
          subscription
        </p>
      </div>
    );
  }
}

Invoices.propTypes = {
  whoami: PropTypes.shape({
    email: PropTypes.string.isRequired,
    invoiceExtra: PropTypes.string.isRequired
  }).isRequired,
};

export default () => (
  <App title="Invoices" subTitle="View past invoices">
    {props => <Invoices {...props} />}
  </App>
);
