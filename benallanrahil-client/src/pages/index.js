import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Hero from "../components/landing_page/hero"

const Portfolio = styled.div`
  font-family: sans-serif;
  font-weight: lighter;
  color: black;
  display: flex;
  padding: 2em;
  background-color: aliceblue;
  height: 1000px;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Portfolio>
      <h1>Here is where I will put my portfolio</h1>
    </Portfolio>
  </Layout>
)

export default IndexPage
