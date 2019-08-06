import React from 'react';
import PropTypes from 'prop-types';
import * as session from '../session';
import Link from '../../components/link';

class ToggleAdminAccountLink extends React.Component {
  state = {
    loading: false
  };

  async _handleClick(e) {
    e.preventDefault();

    const {teamId, accountId, onRemove} = this.props;

    this.setState({loading: true});

    try {
      await session.toggleAdminStatus(teamId, accountId);
      await onRemove();
    } catch (err) {
      alert(`Failed to remove from team: ${err.message}`);
      this.setState({loading: false});
    }
  };

  render() {
    const {children, className} = this.props;
    const {loading} = this.state;
    return (
      <Link to="#" onClick={this._handleClick.bind(this)} className={className}>
        {loading ? 'removing...' : children}
      </Link>
    );
  }
}

ToggleAdminAccountLink.propTypes = {
  onRemove: PropTypes.func.isRequired,
  teamId: PropTypes.string.isRequired,
  accountId: PropTypes.string.isRequired,
};

export default ToggleAdminAccountLink;
