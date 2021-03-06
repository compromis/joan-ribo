import React from "react"

import Layout from "../layouts/val"
import SEO from "../components/seo"
import Whatsapp from "../components/whatsapp"
import Donate from "../components/donate"
import Action from "../components/take-action"
import News from "../components/news"
import Footer from "../components/footer"
import Hero from "../components/hero"
import Video from "../components/video"
import Calendar from "../components/calendar"
import Top15 from "../components/top15";

const IndexPage = () => (
  <Layout>
    <SEO lang="ca" title="Joan Ribó 2019" />
    <Donate lang="va" />
    <div className="container-fluid">
      <Hero lang="val" />
      <Video />
      <Whatsapp/>
      <Action />
      <Top15 lang="val" />
      <Calendar />
      <News />
    </div>
    <Footer />
  </Layout>
)

export default IndexPage
