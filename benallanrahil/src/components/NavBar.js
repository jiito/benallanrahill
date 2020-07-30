import React from "react"
import { Link } from "gatsby"

const NavBar = () => (
  <nav>
    <Link to="/" className=".link-none" style={{ textDecoration: "none" }}>
      benji
    </Link>
    <ul>
      <li>
        <a href="#" className="link1">
          projects
        </a>
      </li>
      <li>
        <Link to="/about/">about</Link>
      </li>
      <li>
        <a href="#" className="link3">
          contact
        </a>
      </li>
    </ul>
  </nav>
)

export default NavBar
