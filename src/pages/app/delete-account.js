import React from 'react';
import PropTypes from 'prop-types';
import * as session from '../../lib/session';
import App from '../../lib/app-wrapper';

class DeleteAccount extends React.Component {
  state = {
    loading: false,
    password: '',
    newEmail: '',
    loginError: '',
    error: '',
  };

  _handleUpdateInput (e) {
    this.setState({[e.target.name]: e.target.value, error: ''});
  }

  async _handleSubmit (e) {
    e.preventDefault();

    this.setState({loading: true});
    const {whoami} = this.props;

    try {
      await session.login(whoami.email, this.state.password);
    } catch (err) {
      this.setState({loginError: err.message, error: '', loading: false});
      return;
    }

    if (!confirm('Are you sure you want to delete your account and all its associated data? This operation cannot be undone')) {
      return;
    }

    try {
      await session.deleteAccount();
      window.location = '/app/account/';
    } catch (err) {
      console.error('Failed to delete account', err.stack);
      this.setState({error: err.message, loading: false});
    }
  };

  render () {
    const {whoami} = this.props;
    const {error, loginError, loading} = this.state;
    return (
      <form onSubmit={this._handleSubmit.bind(this)}>
        <p>Really delete account for <code>{whoami.email}</code>? Once deleted, your account cannot be recovered.</p>
        <div className="form-control">
          <label>Confirm Password {loginError ? <small className="error">({loginError})</small> : null}
            <input type="password"
                   name="password"
                   required
                   autoFocus
                   onChange={this._handleUpdateInput.bind(this)}
                   placeholder="••••••••••"/>
          </label>
        </div>
        {error ? <div className="form-control error">** {error}</div> : null}
        <div className="form-control padding-top-sm right">
          {loading ?
            <button type="button" disabled className="button danger">Deleting...</button> :
            <button type="submit" className="button danger">Delete Account</button>
          }
        </div>
      </form>
    );
  }
}

DeleteAccount.propTypes = {
  whoami: PropTypes.shape({
    email: PropTypes.string.isRequired,
  }).isRequired
};

export default () => (
  <App title="Permanently Delete Account" subTitle="You have the right to be forgotten">
    {props => <DeleteAccount {...props}/>}
  </App>
);

