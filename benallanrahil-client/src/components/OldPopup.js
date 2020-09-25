import React from "react"
import styled from "styled-components"
import OldButton from "./OldButton"

const gradientBar = styled.div`
  display: block;
  background-image: linear-gradient(to right, #0138ae, #238fda);
  height: 10px;
  justify-content: right;
`
const Title = styled.h1`
  font-family: monospace;
  font-weight: lighter;
  color: black;
  margin-inline: 18px;
  font-size: 1.5em;
`
const Styles = {
  backgroundColor: "#c5c5c5",
  padding: "2px",
  maxWidth: "500px",
}

const OldPopup = ({ className, message }) => {
  return (
    <div className={className} style={{ ...Styles }}>
      <div className="gradient-bar">
        <OldButton link="/">X</OldButton>
      </div>
      <Title className={className}>{message}</Title>
    </div>
  )
}

export default OldPopup
