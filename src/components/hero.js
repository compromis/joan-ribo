import React from "react"
import JoAmbRibo from "./joambribo"
import { FormattedMessage } from 'react-intl'

const Hero = ({ locale }) => (
  <section className='hero row'>
    <div className="col-sm-4 hero-image"></div>
    <div className="col-sm-8 hero-content"> 
      <div className="hero-content-wrapper">
        <div className="hero-title">
          <JoAmbRibo />
        </div>
        <div className="hero-buttons">
          <a className="button" href="#calendar"><FormattedMessage id="events_header"/></a>
          <a className="button" href={'/docs/propostes-2019-' + (locale === 'es' ? 'cas' : 'val') + '.pdf'}><FormattedMessage id="programa"/></a>
          <a className="button" href="https://garantiademocratica.compromis.net/?city=7359"><FormattedMessage id="join"/></a>
          <a className="button" href={'https://compromis.net/espai/donacions/campanya2019/' + (locale === 'es' ? 'ca' : 'va') + '/Valencia'}><FormattedMessage id="donate"/></a>
        </div>
      </div>
    </div> 
  </section>
)

export default Hero
