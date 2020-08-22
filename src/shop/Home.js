import React, { Component } from "react";
import { Link } from "react-router-dom";
import {Header} from "./Header";
import { Card, Button} from 'react-bootstrap';
export class Home extends Component {
    render() {
        return <div>
                    <Header />
                    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Idioms</Card.Title>
    <Card.Text>
    每天五分钟，你就是学霸！
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
        </div>
    }
}
