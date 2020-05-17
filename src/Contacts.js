import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Menu from './Menu';
import ContactsList from './ContactsList';

function Contacts(props) {
  return (
    <Container fluid style={{ padding: '2em 5em' }}>
      <Menu auth={props.auth}/>
      <Row>
        <Col align="left">
          <h1>Contacts</h1>
        </Col>
      </Row>
      <Row>
        <ContactsList auth={props.auth}/>
      </Row>
    </Container>
  );
}

export default Contacts;
