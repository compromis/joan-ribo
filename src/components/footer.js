import React from "react"
import Logo from "./logo"
import { FormattedMessage } from "react-intl"


const Footer = ({ siteTitle, locale }) => (
  <div className="container-fluid footer">
    <div className="row">
      <div className="col-lg-12"><h4><FormattedMessage id="follow" /><a className="footer-logo" href="https://compromis.net"><Logo /></a></h4></div>
    </div>
    <div className="row">
      <div className="col-lg-6">
        <iframe src="https://platform.twitter.com/widgets/follow_button.html?screen_name=joanribo&amp;show_screen_name=true&amp;show_count=true&amp;size=l&amp;lang=es" className="twitter" frameBorder={0} title="twitter"></iframe>
        <iframe src="https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Ffacebook.com%2Fjoanribo&amp;width=450&amp;layout=standard&amp;action=like&amp;size=large&amp;show_faces=true&amp;share=true&amp;height=80&amp;appId=252515324782640&amp;locale=ca_ES" className="facebook" frameBorder={0} title="facebook"></iframe>
      </div>
      <div className="col-lg-6">
        <p><a href="/">Joan Ribó 2019</a> és una campanya de Compromís</p>
        <p><a href="mailto:info@compromis.net">info@compromis.net</a> | 96 382 66 06 | Plaça del Pilar, 1 - 46001 València</p>
      </div>
    </div>  
  </div>
)

export default Footer