import React from "react"
import { FormattedMessage } from "react-intl"
import Fade from "react-reveal/Fade"

const TakeAction = () => (
  <section className={['row', 'take-action'].join(' ')}>
    <div className="col-lg-6">
      <Fade bottom>
        <div className="take-action-bubble"> 
            <h2><FormattedMessage id="donate_action_header" /></h2>
            <p><FormattedMessage id="donate_action_text" /></p>
            <div className="take-action-button-wrapper">
              <a href="https://compromis.net/espai/donacions/campanya2019/va/Valencia" className="take-action-button"><FormattedMessage id="donate_action_cta" /></a>
            </div>
        </div>
      </Fade>
    </div>
    <div className="col-lg-6">
      <Fade bottom>
        <div className="take-action-bubble"> 
            <h2><FormattedMessage id="inspector_action_header" /></h2>
            <p><FormattedMessage id="inspector_action_text" /></p>
            <div className="take-action-button-wrapper">
              <a href="https://garantiademocratica.compromis.net/" className="take-action-button"><FormattedMessage id="inspector_action_cta" /></a>
            </div>
        </div>
      </Fade>
    </div>
  </section>
)

export default TakeAction
