import React from "react"
import PropTypes from "prop-types"

const Poster = ({ id, children }) => (
  <section className={['row', 'poster', 'poster-' + id].join(' ')}>
    <div className="col-lg-6 poster-image"></div>
    <div className="col-lg-6 poster-text">
      { children }
    </div>
  </section>
)

Poster.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string.isRequired
}

export default Poster
