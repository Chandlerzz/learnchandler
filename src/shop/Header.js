import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ToggleLink } from "../ToggleLink";
import { Navbar, Nav, NavDropdown, Button, Form, FormControl } from 'react-bootstrap';
export class Header extends Component {
    render() {
        return <div>
        <Navbar bg="light" expand="lg">
         <Navbar.Brand href="#home">Chandler-Idioms</Navbar.Brand>
  <Navbar.Brand ></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
     <Link to="/learn/enidioms">English Idiom</Link>
      <Link to="/learn/idioms">Chinese Idiom</Link>
      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" ref="myInput" className="mr-sm-2" />
      <Button variant="outline-success" onClick ={ this.handleI }>Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
        </div>
    }
}
