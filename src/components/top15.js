import React from "react"

const Top15 = ({ lang }) => (
  <section className='top15 row'>
    <a href={ lang === 'cas' ? 'https://compromis.net/top15-ribo-cas/' : 'https://compromis.net/top15-ribo/' } className='top15-banner'>
      <h2>El ⬆️ TOP 15 de <span><img src="http://compromis.net/wp-content/uploads/2018/10/ribo-cara.png" alt="Emoji de Ribó" class="ribo-emoji" height="80"></img> Joan Ribó</span></h2>
    </a>
  </section>
)

export default Top15
