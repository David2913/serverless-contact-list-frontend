import React from 'react';
import { Container, Row, Col, Spinner } from 'react-bootstrap';

function Callback() {
  return (
    <Container fluid>
      <Row>
        <Col align="center">
          <Spinner animation="grow" variant="primary" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        </Col>
      </Row>
    </Container>
  )
}

export default Callback;
