import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Hero from "../components/landing_page/Hero"
import LogoPortfolio from "../components/landing_page/LogoPortfolio"

const Portfolio = styled.div`
  display: flex;
  font-family: sans-serif;
  font-weight: lighter;
  padding: 2em;
  background-color: aliceblue;
`

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
