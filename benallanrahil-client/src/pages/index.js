import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Hero from "../components/landing_page/Hero"
import LogoPortfolio from "../components/landing_page/LogoPortfolio"
import Portfolio from "../components/landing_page/Portfolio.js"


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Portfolio>
      <LogoPortfolio />
    </Portfolio>
  </Layout>
)

export default IndexPage
