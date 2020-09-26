import React from "react"
import styled from "styled-components"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import OldPopup from "../OldPopup"

const HeroDivWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
`

const Highlight = styled.span`
  color: #3f8994;
`
const HeroImage = () => (
  <StaticQuery
    query={graphql`
      query {
        heroImage: file(relativePath: { eq: "lowPolyFace.png" }) {
          childImageSharp {
            fluid(maxWidth: 2000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      // <HeroImageDiv>
      <Img
        fluid={data.heroImage.childImageSharp.fluid}
        alt="This is a picture of my face."
        style={{ width: "500px" }}
      />
      // </HeroImageDiv>
    )}
  />
)

const Hero = ({ className, data }) => {
  return (
    <div className="Hero">
      <div className="bio">
        <HeroDivWrapper>
          <OldPopup
            className={className}
            message={
              "Howdy! It's Benjamin here. Welcome to my internet island!"
            }
            emoji={"🤙 "}
          />
          <HeroImage />
        </HeroDivWrapper>
      </div>
    </div>
  )
}

export default Hero
