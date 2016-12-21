import React, {Component, PropTypes} from 'react';
import * as session from '../../session';

class AddTeamAccountForm extends Component {
  constructor (props) {
    super(props);

    this.state = {
      loading: false,
      newMemberEmail: '',
      error: '',
    };
  }

  _handleUpdateInput = e => {
    this.setState({[e.target.name]: e.target.value, error: ''});
  };

  _handleSubmit = async e => {
    e.preventDefault();

    const {teamId, onAdd} = this.props;
    const {newMemberEmail} = this.state;

    this.setState({loading: true});

    try {
      await session.inviteToTeam(teamId, newMemberEmail);
      await onAdd();
      this.setState({loading: false});
    } catch (err) {
      this.setState({error: err.message, loading: false});
    }
  };

  render () {
    const {membersRemaining} = this.props;
    const {loading, error} = this.state;
    return (
      <form onSubmit={this._handleSubmit}>
        <div className="form-row">
          <div className="form-control">
            <label>Add by Email
              {" "}
              <small>({membersRemaining} remaining)</small>
              {" "}
              {error ? <small className="error">({error})</small> : null}
              <input type="email"
                     placeholder="bobbyboucher@domain.com"
                     name="newMemberEmail"
                     onChange={this._handleUpdateInput}
                     required/>
            </label>
          </div>
          <div className="form-control form-control--no-label width--auto">
            {loading ?
              <button type="button" disabled className="button">Creating...</button> :
              <button type="submit" className="button">Add</button>
            }
          </div>
        </div>
      </form>
    );
  }
}

AddTeamAccountForm.propTypes = {
  onAdd: PropTypes.func.isRequired,
  teamId: PropTypes.string.isRequired,
  membersRemaining: PropTypes.number.isRequired,
};

export default AddTeamAccountForm;
