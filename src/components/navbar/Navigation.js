import React from 'react'
import {  Nav,  Navbar } from "react-bootstrap";
import {BiShoppingBag} from "react-icons/bi"
import {IoLogoDesignernews} from "react-icons/io5"
import "./navbar.css"
const Navigation = () => {
  return (
    <div>
<Navbar className='navbar' expand="md">
  <Navbar.Brand className='nav-brand' href="#">< IoLogoDesignernews className='logo-nav'/> Online <span className='s'>S</span>tore</Navbar.Brand>
  <Navbar.Toggle aria-controls="navbarScroll" />
  <Navbar.Collapse id="navbarScroll">
    <Nav
      className="mr-auto my-2 my-lg-0"
      style={{ maxHeight: '100px' }}
      navbarScroll
    >
      <Nav.Link className='text-nav' href="#action1">Home</Nav.Link>
      <Nav.Link className='text-nav' href="#action2">Link</Nav.Link>
      <Nav.Link className='text-nav' href="#action2">Link</Nav.Link>
      <button className='signup'>Sign up</button>
      <div className='frame-shopping'><BiShoppingBag className='shopping-icon'/></div>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    </div>
  )
}

export default Navigation