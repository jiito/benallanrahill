import React from "react"
import { Link } from "gatsby"
import Logo from "../images/plain@0.5x.png"

const NavBar = () => (
  <nav>
    <Link to="/" className=".link-none" style={{ textDecoration: "none" }}>
      <img src={Logo} style={{ width: 200 }} alt="The logo" />
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
