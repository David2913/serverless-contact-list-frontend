import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Spinner } from 'react-bootstrap';
import { updateContact } from './api/contacts_api';

import Menu from './Menu';

function EditContactForm({ auth, history, match }) {
  const contactId = match.params.contactId;

  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event) {
    event.stopPropagation();
    event.preventDefault();

    setIsSubmitting(true);

    const { contactPhone } = event.target.elements;
    const phone = contactPhone.value;

    try {
      await updateContact(auth.getIdToken(), { phone, contactId });

      history.push('/contacts');
    } catch (error) {
      console.log(error);
      setIsSubmitting(false);
      alert('Unable to edit contact');
    }
  }

  function renderLoader() {
    return (
      <Col align="center">
        <Spinner animation="grow" variant="primary" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      </Col>
    );
  }

  function renderForm() {
    return (
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="contactPhone">
          <Form.Label>Phone</Form.Label>
          <Form.Control type="number" placeholder="Phone" required />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  }

  return (
    <Container fluid style={{ padding: '2em 5em' }}>
      <Menu auth={auth} />
      <Row style={{ paddingTop: '2em', marginBottom: '2em' }}>
        <Col>
          <h1>Edit contact phone</h1>
        </Col>
      </Row>
      <Row>
        {
          isSubmitting ? renderLoader() : renderForm()
        }
      </Row>
    </Container>
  );
}

export default EditContactForm;
