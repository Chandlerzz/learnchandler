import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Button, Form, FormControl, Card } from 'react-bootstrap';
export class EnIdioms extends Component {
  constructor(props) {
      super(props);
      this.state={updateValue : this.props.updatedValue | 3}
      this.handleUpdate = this.handleUpdate.bind(this)
  }
  handleI = () => {
    if (this.refs.myInput !== null) {
        var input = this.refs.myInput;
            var inputValue = input.value;
    }
      this.props.idiomsSearch(inputValue);
  }

  handleUpdate = () =>{
    this.props.idiomsSearch("")
    if (!this.props.updatedValue ){
      var updatedValue = this.state.updateValue+1

    }
    else{
      var  updatedValue = this.props.updatedValue+1
    }
    this.props.setUpdateValue(updatedValue)
  }
  itemlist = () =>{
    if (this.props.enidioms == null || this.props.enidioms.length === 0) {
      return <h5 className="p-2">No Products</h5>
    }
    return this.props.enidioms.map(p =>
      <Card>
        <Card.Header>{p.name}</Card.Header>
        <Card.Body>
          <Card.Text>
            <strong>Meaning: </strong>{p.meaning}
          </Card.Text>
          <Card.Text>
            <strong>Example: </strong>{p.example}
          </Card.Text>
        </Card.Body>
      </Card>
    )
  }

    render() {
        return <div>
        <Navbar bg="light" expand="lg">
        <Button variant="outline-success" onClick ={ this.handleUpdate }>update</Button>
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
          {this.itemlist()}
        </div>
    }
}
