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

const OldPopup = ({ className, message, emoji }) => {
  return (
    <div className="old-popup" style={{ ...Styles }}>
      <div className="gradient-bar">
        <OldButton link="/">
          <p>X</p>
        </OldButton>
      </div>
      <div className="popup-content">
        <span className="emoji">{emoji}</span>
        <Title className={className}>
          <p>{message}</p>
        </Title>
      </div>
    </div>
  )
}

export default OldPopup
