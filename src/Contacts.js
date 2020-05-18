import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";

import Menu from './Menu';
import ContactsList from './ContactsList';


function Contacts(props) {
  return (
    <Container fluid style={{ padding: '2em 5em' }}>
      <Menu auth={props.auth}/>
      <Row style={{ marginTop: '2em' }}>
        <Col align="left">
          <h1>Contacts</h1>
        </Col>
        <Col align="right">
          <Link to="/add_contact">
            <Button variant="success">Add contact</Button>
          </Link>
        </Col>
      </Row>
      <Row>
        <ContactsList auth={props.auth}/>
      </Row>
    </Container>
  );
}

export default Contacts;
