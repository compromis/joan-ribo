import React from "react"
import Layout from "../layouts/cas"
import SEO from "../components/seo"
import Whatsapp from "../components/whatsapp"
import Donate from "../components/donate"
import News from "../components/news"
import Action from "../components/take-action"
import Footer from "../components/footer"
import Hero from "../components/hero"
import Video from "../components/video"
import Calendar from "../components/calendar"

const IndexPage = () => (
  <Layout>
    <SEO lang="es" title="Joan Ribó 2019" />
    <Donate lang="cas" />
    <div className="container-fluid">
      <Hero lang="cas" />
      <Video />
      <Whatsapp />
      <Action />
      <Calendar />
      <News />
    </div>
    <Footer />
  </Layout> 
)

export default IndexPage
