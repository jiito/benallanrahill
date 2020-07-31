import React from "react"
import { Link } from "gatsby"

const NavBar = () => (
  <nav>
    <Link to="/" className=".link-none" style={{ textDecoration: "none" }}>
      benji
    </Link>
    <ul>
      <li className="NavItem">
        <a href="#">projects</a>
      </li>
      <li className="NavItem">
        <Link to="/about/">about</Link>
      </li>
      <li className="NavItem">
        <a href="#">contact</a>
      </li>
    </ul>
  </nav>
)

export default NavBar
