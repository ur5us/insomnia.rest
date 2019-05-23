import React from 'react';

class CreateRunLink extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      label: '',
      uri: '',
      src: 'https://insomnia.rest/images/run.svg'
    };
  }

  changeLabel(e) {
    this.setState({ label: e.currentTarget.value });
  }

  changeURI(e) {
    this.setState({ uri: e.currentTarget.value });
  }

  renderButton() {
    const label = encodeURIComponent(this.state.label);
    const uri = encodeURIComponent(this.state.uri);
    const href = `https://insomnia.rest/run/?label=${label}&uri=${uri}`;
    return (
      <a href={href} target="_blank">
        <img src={this.state.src} alt="Run in Insomnia" className="no-margin margin-center"/>
      </a>
    );
  }

  renderCode() {
    const label = encodeURIComponent(this.state.label);
    const uri = encodeURIComponent(this.state.uri);
    const href = `https://insomnia.rest/run/?label=${label}&uri=${uri}`;

    return `<a href="${href}" target="_blank"><img src="${this.state.src}" alt="Run in Insomnia"></a>`;
  }

  renderCodeMD() {
    const label = encodeURIComponent(this.state.label);
    const uri = encodeURIComponent(this.state.uri);
    const href = `https://insomnia.rest/run/?label=${label}&uri=${uri}`;

    return `[![Run in Insomnia}](${this.state.src})](${href})`;
  }

  render() {
    return (
      <React.Fragment>
        <header className="container header--big">
          <div className="row">
            <div className="col-12">
              <h1>Create <i>Run</i> Button</h1>
              <p className="text-lg">
                Create an embeddable button for your website, Git repo, or API docs
              </p>
            </div>
          </div>
        </header>
        <div className="form-control">
          <form action="#" className="form--style-invalid form--skinny">
            <div className="form-control">
              <label>API Name <small>(will display during import flow)</small>
                <input type="text" placeholder="Awesome API" required autoFocus
                       onChange={this.changeLabel.bind(this)}/>
              </label>
            </div>
            <div className="form-control">
              <label>Import URL
                <input type="text" placeholder="https://some-api.com/insomnia.json" required
                       onChange={this.changeURI.bind(this)}/>
              </label>
            </div>
            <div className="form-control">
              <label>Button Preview</label>
              <div className="well">
                {this.renderButton()}
              </div>
            </div>
            <div className="form-control">
              <label>HTML Snippet <small>(embed this on your website)</small></label>
              <pre className="small no-margin">
              <code className="force-wrap no-margin">
                {this.renderCode()}
              </code>
            </pre>
            </div>
            <div className="form-control">
              <label>Markdown Snippet</label>
              <pre className="small no-margin">
              <code className="force-wrap no-margin">
                {this.renderCodeMD()}
              </code>
            </pre>
            </div>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default CreateRunLink;
