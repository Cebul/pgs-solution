import React, {Component} from 'react'
import logo from '../images/logo.png'
import {Collapse, Nav, Navbar, NavbarToggler, NavItem, NavLink} from 'reactstrap'
import {Link} from 'react-router'

const styles = {
  nav: {
    paddingLeft: "6%"
  },
  navItem: {
    color: "#FA7C00",
    borderBottom: "2px solid #FA7C00"
  }
}

class Header extends Component {
  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = {
      isOpen: false
    }
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  render() {
    return (
      <div>
        <img src={logo} alt="logo" style={{paddingLeft: "7%"}} />
        <Navbar  light expand="sm">
        <NavbarToggler onClick={this.toggle} />
         <Collapse isOpen={this.state.isOpen} navbar>
           <Nav navbar>
             <NavItem>
               <NavLink style={styles.navItem} tag={Link} to="/about">ABOUT</NavLink>
             </NavItem>
             <NavItem>
               <NavLink style={styles.navItem} tag={Link} to="/skicams">SKICAMS</NavLink>
             </NavItem>
             <NavItem>
               <NavLink style={styles.navItem} tag={Link} to="/contact">CONTACT</NavLink>
             </NavItem>
           </Nav>
         </Collapse>
        </Navbar>
      </div>
    )
  }
}

export default Header
