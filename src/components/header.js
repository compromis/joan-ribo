import PropTypes from "prop-types"
import React from "react"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import Logo from "./logo"
import { FaFacebook, FaTwitter, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Header = ({ siteTitle }) => (
  <Navbar bg="light" expand="lg" fixed="top">
    <div className="container-fluid">
      <Navbar.Brand href="#home">Joan Ribó <span>2019</span></Navbar.Brand>
      <Nav className="navbar-logo">
        <Nav.Link href="https://compromis.net" className="compromis-logo" target="_blank" rel="noopener"><Logo /></Nav.Link>
      </Nav>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="https://www.facebook.com/joanribo" className="social-icon facebook" target="_blank" rel="noopener"><FaFacebook /> <span className="d-lg-none">Facebook</span></Nav.Link>
          <Nav.Link href="https://twitter.com/joanribo" className="social-icon twitter" target="_blank" rel="noopener"><FaTwitter /> <span className="d-lg-none">Twitter</span></Nav.Link>
          <Nav.Link href="https://www.instagram.com/joanribovlc/" className="social-icon instagram" target="_blank" rel="noopener"><FaInstagram /> <span className="d-lg-none">Instagram</span></Nav.Link>
          <Nav.Link href="https://wa.me/15551234567/?text=ALTA" className="social-icon whatsapp" target="_blank" rel="noopener"><FaWhatsapp /> <span className="d-lg-none">Whatsapp</span></Nav.Link>
          <Nav.Link href="https://compromis.net/espai/donacions/campanya2019" className="donate-button" target="_blank" rel="noopener"><span>Fes una donació</span></Nav.Link>
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
