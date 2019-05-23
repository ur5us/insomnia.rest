import React from 'react';
import classnames from 'classnames';

class ImportButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      importURI: '',
      suffix: '',
      platform: '__UNSET__'
    };
  }

  componentDidMount() {
    const urlParams = new URLSearchParams(window.location.search);
    const importURI = urlParams.get('uri') || '';

    const suffix = urlParams.get('label') || '';

    const platform = navigator.platform.toLowerCase();

    this.setState({ platform, importURI, suffix });
  }

  render() {
    const { importURI, platform, suffix } = this.state;
    const { className } = this.props;

    let href = importURI;
    let buttonText = 'Import';
    let target = '_blank';

    if (platform.indexOf('mac') !== -1) {
      target = null;
      buttonText = 'Run';
      href = `insomnia://app/import?uri=${importURI}`;
    } else if (platform.indexOf('win') !== -1) {
      target = null;
      buttonText = 'Run';
      href = `insomnia://app/import?uri=${importURI}`;
    }

    return (
      <a target={target} href={href} className={classnames('button', className)}>
        {buttonText} {suffix || 'API Workspace'}
      </a>
    );
  }
}

export default ImportButton;
