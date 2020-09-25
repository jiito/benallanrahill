import { Link } from "gatsby"
import React from "react"

const OldButton = ({ link }) => {
  return (
    <div className="old-button">
      <Link to={link} />
    </div>
  )
}

export default OldButton
