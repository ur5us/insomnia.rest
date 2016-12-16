import React, {Component, PropTypes} from 'react';
import * as session from '../session';

class Team extends Component {
  state = {
    accounts: [
      {firstName: 'Henry', lastName: 'Ford', accountId: 'acct_123', email: 'henry@gmail.com'},
      {firstName: 'Scott', lastName: 'Justice', accountId: 'acct_456', email: 'scott@gmail.com'},
      {firstName: 'Jessica', lastName: 'Thomas', accountId: 'acct_789', email: 'jessica@gmail.com'},
    ]
  };

  _handleSubmitAddTeamMember = e => {
    e.preventDefault();
    const email = e.target.querySelector('input').value;
    // TODO: Actually submit to server
    alert(`Invited ${email}`);
  };

  _handleDeleteTeamMember = account => {
    if (!confirm(`Really remove ${account.firstName} from your team?`)) {
      return;
    }

    const accounts = this.state.accounts.filter(a => a.accountId !== account.accountId);

    // TODO: Actually delete from server

    this.setState({accounts});
  };

  renderRow (account) {
    return (
      <tr key={account.accountId}>
        <td>{account.firstName} {account.lastName}</td>
        <td>{account.email}</td>
        <td className="center">
          {account.accountId === this.props.whoami.accountId ? (
            null
          ) : (
            <button onClick={e => this._handleDeleteTeamMember(account)}>
              <i className="fa fa-trash-o"/>
            </button>
          )}
        </td>
      </tr>
    )
  }

  render () {
    const {accounts} = this.state;
    const {whoami} = this.props;
    return (
      <div>
        <table>
          <thead>
          <tr>
            <th>Team Member</th>
            <th>Email</th>
            <th>&nbsp;</th>
          </tr>
          </thead>
          <tbody>
          {this.renderRow(whoami)}
          {accounts.map(account => this.renderRow(account))}
          </tbody>
        </table>
        <hr className="hr--skinny"/>
        <form onSubmit={this._handleSubmitAddTeamMember}>
          <div className="form-row">
            <div className="form-control">
              <label>Add Team Member <span className="small subtle">(2 remaining)</span>
                <input type="text" placeholder="Brian Chen" autoFocus="autofocus"/>
              </label>
            </div>
            <div className="form-control form-control--no-label width--auto">
              <button type="submit" className="button">
                Add
              </button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

Team.propTypes = {
  whoami: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired
};

export default Team;
