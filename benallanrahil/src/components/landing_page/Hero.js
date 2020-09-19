import React from "react"
import styled from "styled-components"

const Title = styled.h1`
  font-family: sans-serif;
  font-weight: lighter;
  color: black;
`

const Highlight = styled.span`
  color: #00adb5;
`

const Hero = () => {
  return (
    <div className="Hero">
      <div className="bio">
        <div className="bio-title">
          <Title>
            {" "}
            Howdy! 🤙 It's <Highlight>Benjamin</Highlight> here. Welcome to my
            internet island 🌴!
          </Title>
        </div>
      </div>
    </div>
  )
}

export default Hero
