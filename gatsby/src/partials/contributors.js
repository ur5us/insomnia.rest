import React from 'react';
import contributors from '../assets/contributors.json';

class Contributors extends React.Component {
  render() {
    return (
      <section className="dark github-contributors">
        <div>
          Thanks to all <a href="https://github.com/getinsomnia/insomnia/graphs/contributors">contributors</a>
          {' '}
          🎉👏
        </div>
        <div className="github-contributors__users">
          {contributors.map(c => (
            <a href="https://github.com/BeeeQueue"
               title="7 contributions from @BeeeQueue"
               target="_blank"
               className="github-contributors__avatar"
               style={{backgroundImage: `url('${c.avatar_url}v=4&s=40')`}}>
              &nbsp;
            </a>
          ))}
        </div>
      </section>
    );
  }
}

export default Contributors;
