import React from 'react';
import contributors from '../assets/contributors.json';
import Waypoint from 'react-waypoint';

class Contributors extends React.Component {
  state = {
    contributors: []
  };

  load() {
    this.setState({contributors});
  }

  render() {
    const {contributors} = this.state;
    return (
      <section className="dark github-contributors">
        <div>
          Thanks to all <a href="https://github.com/getinsomnia/insomnia/graphs/contributors">contributors</a>
          {' '}
          🎉👏
        </div>
        <div className="github-contributors__users">
          <Waypoint
            onEnter={this.load.bind(this)}
          />
          {contributors.map(c => (
            <a key={c.login}
               href={`https://github.com/${c.login}`}
               title={`${c.contributions} contributions from ${c.login}`}
               target="_blank"
               className="github-contributors__avatar"
               style={{backgroundImage: `url('${c.avatar_url}&s=30')`}}>
              &nbsp;
            </a>
          ))}
        </div>
      </section>
    );
  }
}

export default Contributors;
