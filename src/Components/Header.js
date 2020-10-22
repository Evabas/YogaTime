import React, { Component } from 'react'
import logo1 from '../Images/logo.png'
import logo2 from '../Images/logo2.png'
import { Nav, Navbar, Image } from 'react-bootstrap';
import '../App.css'

class Header extends Component {
  render () {
    return (
      <div className="App">
        <div className="App-header">
      
        <Image src={logo1} roundedCircle />
  
          <h2>Yoga Time</h2>
        </div>
        <div className="BarreNav">
        <Navbar collapseOnSelect expand="md" bg="light" variant="light">
          <Navbar.Brand href="/"><Image src={logo2} roundedCircle /></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link className="mr-4"href="/">Accueil</Nav.Link>
            <Nav.Link className="mr-4" href="/Components/Lessons">Cours</Nav.Link>
            <Nav.Link className="mr-4" href="/Components/Planning">Planning</Nav.Link>
            <Nav.Link className="mr-4" href="/Components/Team">Equipe</Nav.Link>
            <Nav.Link className="mr-4" href="/Components/Price">Tarifs</Nav.Link>
            <Nav.Link className="mr-4" href="/Components/Footer">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Navbar>
        </div>  
        <div className="BarreStyle"> 
          </div>  
      </div>
    )
  }

}

export default Header;