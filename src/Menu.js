import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";

function Menu(props) {
  function logout() {
    props.auth.logout();
  }
  return (
    <Row>
      <Col>
        <Link to="/contact">Home</Link>
      </Col>
      <Col align="right">
        <Button onClick={logout}>Logout</Button>
      </Col>
    </Row>
  );
}

export default Menu;
