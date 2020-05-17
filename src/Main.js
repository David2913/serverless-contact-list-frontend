import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

function Main(props) {
  function login() {
    props.auth.login();
  }

  return (
    <Container fluid style={{ padding: '2em 5em' }}>
      <Row>
        <Col align="right">
          <Button onClick={login}>Login</Button>
        </Col>
      </Row>
      <Row>
        <Col align="center">
          <h1>Welcome to your serverless contacts app</h1>
        </Col>
      </Row>
    </Container>
  );
}

export default Main;
