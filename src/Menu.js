import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';

function Menu(props) {
  function logout() {
    props.auth.logout();
  }
  return (
    <Row>
      <Col align="right">
        <Button onClick={logout}>Logout</Button>
      </Col>
    </Row>
  );
}

export default Menu;
