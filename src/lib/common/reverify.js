import React from 'react';
import * as session from '../session';
import Link from '../../components/link';

const STATE_DEFAULT = 'default';
const STATE_LOADING = 'loading';
const STATE_DONE = 'done';

class VerifyButton extends React.Component {
  state = {
    state: STATE_DEFAULT,
    error: '',
  };

  static _noOp(e) {
    e.preventDefault();
  }

  async _handleClick(e) {
    e.preventDefault();
    this.setState({state: STATE_LOADING});

    try {
      await session.verify();
      this.setState({state: STATE_DONE});
    } catch (err) {
      this.setState({error: err.message});
    }
  }

  render() {
    const {state, error} = this.state;

    if (error) {
      return (
        <Link to="#" onClick={VerifyButton._noOp} {...this.props}>
          {error}
        </Link>
      );
    }

    if (state === STATE_LOADING) {
      return (
        <Link to="#" onClick={VerifyButton._noOp} disabled {...this.props}>
          Loading...
        </Link>
      );
    } else if (state === STATE_DONE) {
      return (
        <Link to="#" onClick={VerifyButton._noOp} {...this.props}>
          Verification Email Sent
        </Link>
      );
    } else {
      return (
        <Link to="#" onClick={this._handleClick.bind(this)} {...this.props}>
          Resend Verification Email
        </Link>
      );
    }
  }
}

VerifyButton.propTypes = {};

export default VerifyButton;
