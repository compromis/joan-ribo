import React from "react"
import { FormattedMessage } from "react-intl"
import Fade from "react-reveal/Fade"
import { FaWhatsapp } from "react-icons/fa";

const Whatsapp = () => (
  <section className={['row', 'whatsapp'].join(' ')}>
    <div className="col-lg-6 whatsapp-text">
      <Fade bottom>
        <div className={'whatsapp-bubble'}> 
            <h2><FormattedMessage id="whatsapp_header" /></h2>
            <h3 className="mb-4"><FormattedMessage id="whatsapp_text" /></h3>
            <p><FormattedMessage id="whatsapp_instructions" /></p>
            <a href="https://api.whatsapp.com/send?phone=34607812839&text=Vull%20rebre%20informaci%C3%B3%20de%20Comprom%C3%ADs+Val%C3%A8ncia%20al%20meu%20WhatsApp&source=&data=" className={'whatsapp-button'}><FaWhatsapp className="icon" /> <FormattedMessage id="whatsapp_cta" /></a>
        </div>
      </Fade>
    </div>
    <Fade>
      <div className="col-lg-6 whatsapp-image"></div>
    </Fade>
  </section>
)

export default Whatsapp
