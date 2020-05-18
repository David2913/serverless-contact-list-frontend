import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Spinner } from 'react-bootstrap';
import { createContact, generateUploadUrl, uploadFile } from './api/contacts_api';

import Menu from './Menu';

function AddContactForm({ auth, history }) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event) {
    event.stopPropagation();
    event.preventDefault();

    setIsSubmitting(true);

    const { contactName, contactPhone, contactPhoto } = event.target.elements;
    const name = contactName.value;
    const phone = contactPhone.value;
    const photos = contactPhoto.files;

    try {
      const { contactId } = await createContact(auth.getIdToken(), { name, phone });

      if (photos.length) {
        const uploadUrl = await generateUploadUrl(auth.getIdToken(), contactId);
        await uploadFile(uploadUrl, photos[0]);
      }

      history.push('/contacts');
    } catch (error) {
      console.log(error);
      setIsSubmitting(false);
      alert('Unable to create contact');
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
        <Form.Group controlId="contactName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter contact name" required />
        </Form.Group>
        <Form.Group controlId="contactPhone">
          <Form.Label>Phone</Form.Label>
          <Form.Control type="number" placeholder="Phone" required />
        </Form.Group>
        <Form.Group>
          <Form.Label>Contact photo</Form.Label>
          <Form.File 
            id="contactPhoto"
            label="Select your contact's photo"
            custom
          />
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
          <h1>Add new contact</h1>
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

export default AddContactForm;
