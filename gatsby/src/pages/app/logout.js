import React from 'react';

class Logout extends React.Component {
  render() {
    return (
      <article>
        <header className="container header--big">
          <h1>Good Bye</h1>
          <p className="text-lg">You are now logged out</p>
        </header>
        <section>
          <img src="https://media.giphy.com/media/jUwpNzg9IcyrK/giphy.gif"
               style={{maxWidth: '20rem'}}
               alt="Homer Simpson receding into a bush"/>
        </section>
      </article>
    );
  }
}

export default Logout;
