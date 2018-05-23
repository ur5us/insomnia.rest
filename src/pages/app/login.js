import React from 'react';
import * as session from '../../lib/session';
import App from '../../lib/app-wrapper';
import Link from '../../components/link';

class Login extends React.Component {
  state = {
    loading: false,
    email: '',
    password: '',
    error: '',
  };

  _handleUpdateInput(e) {
    this.setState({[e.target.name]: e.target.value, error: ''});
  };

  async _handleSubmit(e) {
    e.preventDefault();

    this.setState({loading: true});

    try {
      await session.login(this.state.email, this.state.password);

      const nextUrl = localStorage.getItem('login.next') || '/app/account/';
      localStorage.removeItem('login.next');

      window.location = nextUrl;
    } catch (err) {
      this.setState({error: err.message, loading: false});
    }
  }

  render() {
    const {loading, error} = this.state;

    return (
      <form onSubmit={this._handleSubmit.bind(this)} method="POST">
        <div className="form-control">
          <label>Email Address
            <input type="email"
                   name="email"
                   placeholder="name@domain.com"
                   onChange={this._handleUpdateInput.bind(this)}
                   autoFocus
                   required/>
          </label>
        </div>
        <div className="form-control">
          <label>Password
            <input type="password"
                   name="password"
                   onChange={this._handleUpdateInput.bind(this)}
                   placeholder="•••••••••••••"
                   required/>
          </label>
        </div>
        {error ? <small className="form-control error">** {error}</small> : null}
        <div className="form-row padding-top-sm">
          <div className="form-control">
            Or, <Link to="/app/signup">Sign Up</Link>
          </div>
          <div className="form-control right">
            {loading ?
              <button type="button" disabled className="button">Logging In...</button> :
              <button type="submit" className="button">Log In</button>
            }
          </div>
        </div>
        <hr className="hr--skinny"/>
        <p className="center text-sm">
          <Link to="/documentation/forgot-password/" target="_blank">Forgot your password?</Link>
        </p>
      </form>
    );
  }
}

Login.propTypes = {};

export default () => (
  <App noAuth title="Login" subTitle="Access your account 😀">
    {props => <Login {...props}/>}
  </App>
);

