import React from "react"
import { FormattedMessage } from "react-intl"
import { FaTimes } from "react-icons/fa";

class Donate extends React.Component  {
  constructor(props) {
    super(props);
    this.state = {
      shown: true
    }
  }

  toggleShown() {
    this.setState({
      shown: !this.state.shown
    });
  }

  render() {
    const { lang } = this.props;
    return (
      <div className={['donate', this.state.shown ? '' : 'd-none'].join(' ')}>
        <div className="donate-wrapper container-fluid">
          <p className="donate-text"><FormattedMessage id="donate_text" /></p>
          <a href={`https://compromis.net/espai/donacions/campanya2019/${lang}/Valencia`} className="btn btn-primary donate-button nav-link" target="_blank" rel="noopener noreferrer"><FormattedMessage id="donate"/></a>
          <button className="btn" onClick={this.toggleShown.bind(this)}><FaTimes /></button>
        </div>
      </div>
    ) 
  }
}


export default Donate