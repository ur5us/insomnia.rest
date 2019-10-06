import React from 'react';

class Announcement extends React.Component {
  static defaultProps = {
    loggedIn: false,
  };

  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }

  componentDidMount() {
    const { storageKey } = this.props;

    if (localStorage.getItem(`announcement.${storageKey}`) !== 'hide') {
      this.setState({ visible: true });
    }
  }

  close(e) {
    e.preventDefault();

    const { storageKey } = this.props;

    localStorage.setItem(`announcement.${storageKey}`, 'hide');

    this.setState({ visible: false });
  }

  render() {
    const { visible } = this.state;

    if (!visible) {
      return null;
    }

    return (
      <div className="announcement">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <a href="#" className="close-icon" onClick={this.close.bind(this)}>
                &times;
              </a>
              {this.props.children}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Announcement;
