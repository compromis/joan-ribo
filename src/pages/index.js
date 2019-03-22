import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Poster from "../components/poster"

const IndexPage = () => (
  <Layout>
    <SEO title="Joan Ribó 2019" />
    <div class="container-fluid">
      <Poster id="1">“A València em sent lliure.<br />És una ciutat on sóc feliç.”</Poster>
      <Poster id="2">“El cap de setmana me’l passe pedalejant entre concerts i museus.”</Poster>
      <Poster id="3">“Ens encanta passejar de matí pel Parc Central.”</Poster>
      <Poster id="4">“Este es el centro social que habíamos pedido.”</Poster>
      <Poster id="5">“En los comercios del barrio saben lo que necesito.”</Poster>
    </div>
  </Layout>
)

export default IndexPage
