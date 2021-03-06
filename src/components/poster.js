import React from "react"
import PropTypes from "prop-types"

import Fade from "react-reveal/Fade"

const Poster = ({ id, children }) => (
  <section className={['row', 'poster', 'poster-' + id].join(' ')}>
    <div className="col-lg-6 poster-text">
      <Fade bottom>
        <div className="poster-bubble">{ children }</div>
      </Fade>
    </div>
    <Fade>
      <div className="col-lg-6 poster-image"></div>
    </Fade>
  </section>
)

Poster.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string.isRequired
}

export default Poster
