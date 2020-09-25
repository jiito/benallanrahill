import React from "react"
import styled from "styled-components"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Title = styled.h1`
  font-family: sans-serif;
  font-weight: lighter;
  color: black;
`
const HeroImageDiv = styled.div`
  background: black;
  overflow: hidden;
`

const Highlight = styled.span`
  color: #00adb5;
`
const HeroImage = () => (
  <StaticQuery
    query={graphql`
      query {
        heroImage: file(relativePath: { eq: "dario-bronnimann-unsplash.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 2000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <HeroImageDiv>
        <Img
          fluid={data.heroImage.childImageSharp.fluid}
          alt="This is a picture of my face."
          imgStyle={{ objectFit: "cover", opacity: 0.4 }}
        />
      </HeroImageDiv>
    )}
  />
)

const Hero = ({ data }) => {
  return (
    <div className="Hero">
      <div className="bio">
        <div className="bio-title">
          <Title>
            Howdy! 🤙 It's <Highlight>Benjamin</Highlight> here. Welcome to my
            internet island 🌴!
          </Title>
          <HeroImage />
        </div>
      </div>
    </div>
  )
}

export default Hero
