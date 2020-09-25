import { Link } from "gatsby"
import React from "react"

const OldButton = ({ link, children }) => {
  return (
    <div className="old-button">
      <Link to={link} style={{ textDecoration: "none" }}>
        {children}
      </Link>
    </div>
  )
}

export default OldButton
