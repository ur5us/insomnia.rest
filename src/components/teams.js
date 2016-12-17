import React, {Component, PropTypes} from 'react';
import * as session from '../session';

class Teams extends Component {
  state = {
    newMemberEmail: '',
    loading: false,
    error: '',
  };

  _handleLeaveTeam = async team => {
    if (!confirm(`Are you sure you want to leave ${team.name}?`)) {
      return;
    }

    await session.leaveTeam(team.id);
    this.props.handleReloadTeams();
  };

  _handleUpdateTeamName = e => {
    e.preventDefault();
  };

  _handleAddTeamMember = async e => {
    e.preventDefault();
    try {
      await session.addTeamMember(this._getOwnedTeam().id, this.state.newMemberEmail);
      this.props.handleReloadTeams();
    } catch (err) {
      this.setState({error: err.message});
    }
  };

  _handleRemoveMember = async account => {
    alert('todo ' + account.firstName);
  };

  _handleUpdateInput = e => {
    this.setState({[e.target.name]: e.target.value, error: ''});
  };

  _getOwnedTeam () {
    const {teams, whoami} = this.props;
    return teams.find(t => t.ownerAccountId === whoami.accountId);
  };

  renderEditTeam () {
    const {whoami, billingDetails} = this.props;
    const ownedTeam = this._getOwnedTeam();

    let membersRemaining = 0;
    if (billingDetails) {
      membersRemaining = billingDetails.subQuantity - ownedTeam.accounts.length;
    }

    let inner = null;
    if (!whoami.canManageTeams) {
      inner = (
        <p className="notice info">
          <strong>Upgrade to Teams</strong> to manage your own team
          <br/><br/>
          <a href="/app/subscribe/#teams" className="button button--compact">
            Upgrade to Teams
          </a>
        </p>
      )
    } else {
      const {error, loading} = this.state;
      inner = (
        <div>
          <form onSubmit={this._handleUpdateTeamName}>
            <div className="form-row">
              <div className="form-control">
                <label>Team Name
                  <input type="text"
                         name="teamName"
                         placeholder="Mud Dogs"
                         defaultValue={ownedTeam.name}
                         onChange={this._handleUpdateInput}
                         required/>
                </label>
              </div>
              <div className="form-control width--auto">
                <button className="button">Update</button>
              </div>
            </div>
          </form>
          <form onSubmit={this._handleAddTeamMember}>
            <div className="form-row">
              <div className="form-control">
                <label>Add by Email
                  {" "}
                  <small>({membersRemaining} remaining)</small>
                  {" "}
                  {error ? <small className="form-control error">({error})</small> : null}
                  <input type="text"
                         placeholder="bobbyboucher@domain.com"
                         name="newMemberEmail"
                         onChange={this._handleUpdateInput}
                         required/>
                </label>
              </div>
              <div className="form-control width--auto">
                {loading ?
                  <button type="button" disabled className="button">Creating...</button> :
                  <button type="submit" className="button">
                    Add
                  </button>
                }
              </div>
            </div>
          </form>
          <strong>Team Members</strong>
          <ul>
            {ownedTeam.accounts.map(account => (
              <li key={account.id}>
                {account.firstName} {account.lastName}
                {" "}
                <small>({account.email})</small>
                {" "}
                {account.id !== whoami.accountId ? (
                  <a href="#"
                     className="small pull-right"
                     onClick={e => this._handleRemoveMember(account)}>
                    remove
                  </a>
                ) : (
                  <strong className="small pull-right">(you)</strong>
                )}
              </li>
            ))}
          </ul>
        </div>
      )
    }

    return (
      <div>
        <h2>Your Team</h2>
        <p>Manage who is on <strong>{ownedTeam.name}</strong>.</p>
        {inner}
      </div>
    )
  }

  renderTeams () {
    const {teams} = this.props;
    return (
      <div>
        <h2>Teams You're On</h2>
        <p>
          These are the teams you've been invited to.
        </p>
        {teams.length ? (
          <ul>
            {teams.map(team => (
              <li key={team.id}>
                {team.name}
                {" "}
                <a href="#" className="small pull-right"
                   onClick={e => this._handleLeaveTeam(team)}>
                  leave
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <p className="info notice">
            You are not part of any teams yet.
          </p>
        )}
      </div>
    )
  }

  render () {
    const {loading} = this.state;

    if (loading) {
      return <div>Loading...</div>
    }
    return (
      <div style={{margin: 'auto', maxWidth: '28rem'}}>
        {this.renderEditTeam()}
        <hr/>
        {this.renderTeams()}
      </div>
    )
  }
}

Teams.propTypes = {
  handleReloadTeams: PropTypes.func.isRequired,
  whoami: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    canManageTeams: PropTypes.bool.isRequired,
  }).isRequired,
  billingDetails: PropTypes.shape({
    subQuantity: PropTypes.number.isRequired,
  }),
  teams: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    ownerAccountId: PropTypes.string.isRequired,
  })).isRequired,
};

export default Teams;
