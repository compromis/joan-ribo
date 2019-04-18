import React from "react"

import Layout from "../layouts/val"
import SEO from "../components/seo"
import Poster from "../components/poster"
import Whatsapp from "../components/whatsapp"
import Donate from "../components/donate"
import News from "../components/news"
import Footer from "../components/footer"

const IndexPage = () => (
  <Layout>
    <SEO lang="ca" title="Joan Ribó 2019" />
    <Donate lang="va" />
    <div className="container-fluid">
      <Poster id="1">“A València em sent lliure. És una ciutat on sóc feliç.”</Poster>
      <Poster id="2">“El cap de setmana me’l passe pedalejant entre concerts i museus.”</Poster>
      <Poster id="3">“Ens encanta passejar de matí pel Parc Central.”</Poster>
      <Poster id="4">“Este és el centre social que havíem demanat.”</Poster>
      <Poster id="5">“En els comerços del barri saben el que necesite.”</Poster>
      <Whatsapp/>
      <News />
    </div>
    <Footer />
  </Layout>
)

export default IndexPage
