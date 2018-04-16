import React from 'react';
import PropTypes from 'prop-types';
import * as session from '../../lib/session';
import {trackEvent} from '../../lib/analytics';
import App from '../../lib/app-wrapper';

class ChangeEmail extends React.Component {
  state = {
    loading: false,
    password: '',
    newEmail: '',
    loginError: '',
    error: '',
  };

  _handleUpdateInput(e) {
    this.setState({[e.target.name]: e.target.value, error: ''});
  }

  async _handleSubmit(e) {
    e.preventDefault();

    this.setState({loading: true});
    const {whoami} = this.props;

    try {
      await session.login(whoami.email, this.state.password);
    } catch (err) {
      this.setState({loginError: err.message, error: '', loading: false});
      trackEvent('Account', 'Change Email Error Logging In');
      return;
    }

    try {
      await session.changePasswordAndEmail(
        this.state.password,
        this.state.password,
        this.state.newEmail
      );
      window.location = '/app/account/';
      trackEvent('Account', 'Change Email Success');
    } catch (err) {
      console.error('Failed to update email', err.stack);
      this.setState({error: err.message, loading: false});
      trackEvent('Account', 'Change Email Error');
    }
  };

  render() {
    const {whoami} = this.props;
    const {error, loginError, loading} = this.state;
    return (
      <form onSubmit={this._handleSubmit.bind(this)}>
        <p>Your current email is <code>{whoami.email}</code></p>
        <div className="form-control">
          <label>New Email
            <input type="email"
                   name="newEmail"
                   required
                   onChange={this._handleUpdateInput.bind(this)}
                   placeholder="new@domain.com"/>
          </label>
        </div>
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
            <button type="button" disabled className="button">Updating...</button> :
            <button type="submit" className="button">Update Email</button>
          }
        </div>
      </form>
    );
  }
}

ChangeEmail.propTypes = {
  whoami: PropTypes.shape({
    email: PropTypes.string.isRequired,
  }).isRequired
};

export default () => (
  <App title="Update Email Address" subTitle="Your communication link with Insomnia">
    {props => <ChangeEmail {...props}/>}
  </App>
);

