import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Menu from './Menu';

function ContactsList(props) {
  return (
    <Container fluid style={{ padding: '2em 5em' }}>
      <Menu auth={props.auth}/>
      <Row>
        <Col align="left">
          <h1>Contacts</h1>
        </Col>
      </Row>
    </Container>
  );
}

export default ContactsList;
