import React from 'react'
import logo from '../images/logo.png'
import {Nav, NavItem, NavLink} from 'reactstrap'
import {Link} from 'react-router'

const styles = {
  container: {

  },
  nav: {

  },
  navItem: {
    background: "none",
    color: "#555555"
  }
}
const handleActive = (selectedKey) => {
  return selectedKey
}

const Header = () => {
  return (
    <div>
      <img src={logo} alt="logo" />
      <Nav tabs>
        <NavItem>
          <NavLink tag={Link} to="/about">ABOUT</NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to="/skicams">SKICAMS</NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to="/contact">CONTACT</NavLink>
        </NavItem>
      </Nav>
    </div>
  )
}

export default Header
