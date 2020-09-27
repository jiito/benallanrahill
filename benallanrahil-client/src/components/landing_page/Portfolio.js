import React from "react"
import styled from "styled-components"
import OldPopup from "../OldPopup"

const Portfolio = () => {
  return (
    <PortfolioDiv>
      <h1>What I am working on</h1>
      <div className="current-projects">
        <OldPopup message="sweeep.me" emoji="🧹" />
        <OldPopup message="c o s m o s" emoji="🌌" />
        <OldPopup message="Product Buds" emoji="🍃" />
      </div>
    </PortfolioDiv>
  )
}

const PortfolioDiv = styled.div`
  display: flex;
  font-family: sans-serif;
  font-weight: lighter;
  padding: 2em;
  margin-top: 20px;
`

export default Portfolio
