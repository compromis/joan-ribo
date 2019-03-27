import React from "react"

import Layout from "../layouts/cas"
import SEO from "../components/seo"
import Poster from "../components/poster"
import Whatsapp from "../components/whatsapp"
import Donate from "../components/donate"
import Footer from "../components/footer"

const IndexPage = () => (
  <Layout>
    <SEO lang="ca" title="Joan Ribó 2019" />
    <Donate lang="ca" />
    <div className="container-fluid">
      <Poster id="1">“En València me siento libre. Es una ciudad donde soy feliz.”</Poster>
      <Poster id="2">“El fin de semana me lo paso pedaleando entre conciertos y museos.”</Poster>
      <Poster id="3">“Nos encanta pasear por la mañana por el Parc Central.”</Poster>
      <Poster id="4">“Este es el centro social que habíamos pedido.”</Poster>
      <Poster id="5">“En los comercios del barrio saben lo que necesito.”</Poster>
      <Whatsapp />
    </div>
    <Footer />
  </Layout> 
)

export default IndexPage
