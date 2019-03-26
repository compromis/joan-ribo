import PropTypes from "prop-types"
import React from "react"
import { FormattedMessage } from "react-intl"
import { Link } from "gatsby"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import Logo from "./logo"
import { FaFacebook, FaTwitter, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Header = ({ siteTitle, locale }) => (
  <Navbar bg="light" expand="lg" fixed="top">
    <div className="container-fluid">
      <Navbar.Brand href="#home"><span className="d-none d-lg-inline">Joan</span> Ribó <span className="year">2019</span></Navbar.Brand>
      <Nav className="navbar-language ml-auto language-mobile">
          { locale === 'es' ? <Link to="/" className="nav-link language-option">VAL</Link> : '' }
          { locale === 'ca' ? <Link to="/cas" className="nav-link language-option">CAS</Link> : '' }
      </Nav>
      <Nav className="navbar-logo">
        <Nav.Link href="https://compromis.net" className="compromis-logo" target="_blank" rel="noopener"><Logo /></Nav.Link>
      </Nav>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="https://www.facebook.com/joanribo" className="social-icon facebook" target="_blank" rel="noopener"><FaFacebook /> <span className="d-lg-none">Facebook</span></Nav.Link>
          <Nav.Link href="https://twitter.com/joanribo" className="social-icon twitter" target="_blank" rel="noopener"><FaTwitter /> <span className="d-lg-none">Twitter</span></Nav.Link>
          <Nav.Link href="https://www.instagram.com/joanribovlc/" className="social-icon instagram" target="_blank" rel="noopener"><FaInstagram /> <span className="d-lg-none">Instagram</span></Nav.Link>
          <Nav.Link href="https://api.whatsapp.com/send?phone=34607812839&text=Vull%20rebre%20informaci%C3%B3%20de%20Comprom%C3%ADs+Val%C3%A8ncia%20al%20meu%20WhatsApp&source=&data=" className="social-icon whatsapp" target="_blank" rel="noopener"><FaWhatsapp /> <span className="d-lg-none">Whatsapp</span></Nav.Link>
          <Nav.Link href="https://compromis.net/espai/alta?tipus=2" className="donate-button" target="_blank" rel="noopener"><FormattedMessage id="join" /></Nav.Link>
          <Nav.Link href="https://compromis.net/espai/donacions/campanya2019" className="donate-button" target="_blank" rel="noopener"><FormattedMessage id="donate" /></Nav.Link>
          { locale === 'es' ? <Link to="/" className="nav-link language-option language-desktop">Valencià</Link> : '' }
          { locale === 'ca' ? <Link to="/cas" className="nav-link language-option language-desktop">Castellano</Link> : '' }
        </Nav>
      </Navbar.Collapse>
      
    </div>
    
  </Navbar>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
