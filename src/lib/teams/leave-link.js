import React from 'react';
import PropTypes from 'prop-types';
import * as session from '../session';
import Link from '../../components/link';

class LeaveTeamLink extends React.Component {
  state = {
    loading: false,
  };

  async _handleClick(e) {
    e.preventDefault();

    const {teamName, teamId, onLeave} = this.props;

    if (!confirm(`Are you sure you want to leave ${teamName}?`)) {
      return;
    }

    this.setState({loading: true});

    try {
      await session.leaveTeam(teamId);
      await onLeave();
    } catch (err) {
      alert(`Failed to leave team: ${err.message}`);
      this.setState({loading: false});
    }
  };

  render() {
    const {children, className} = this.props;
    const {loading} = this.state;
    return (
      <Link to="#" onClick={this._handleClick.bind(this)} className={className}>
        {loading ? 'leaving...' : children}
      </Link>
    );
  }
}

LeaveTeamLink.propTypes = {
  onLeave: PropTypes.func.isRequired,
  teamId: PropTypes.string.isRequired,
  teamName: PropTypes.string.isRequired,
};

export default LeaveTeamLink;
