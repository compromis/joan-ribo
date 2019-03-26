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
    return (<div className={['donate', this.state.shown ? '' : 'd-none'].join(' ')}>
  <div className="donate-wrapper container-fluid">
    <p className="donate-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
    <a href="https://compromis.net/espai/donacions/campanya2019" className="btn btn-primary donate-button nav-link" target="_blank" rel="noopener noreferrer"><FormattedMessage id="donate"/></a>
    <button class="btn" onClick={this.toggleShown.bind(this)}><FaTimes /></button>
  </div>
</div>) }
  
}


export default Donate