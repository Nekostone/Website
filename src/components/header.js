import PropTypes from "prop-types"
import React, { useState } from "react"
import { Button, Nav, Navbar } from "react-bootstrap"

const Header = props => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  return (
    <Navbar bg="light" expand="lg" fixed="top">
      <Navbar.Brand href="#home">Sentry</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#team">The Team</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <Button variant="dark" href="/demo">
        Live Demo
      </Button>
    </Navbar>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
