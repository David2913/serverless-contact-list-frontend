import React, { useState, useEffect } from 'react';
import { Table, Image } from 'react-bootstrap';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { Link } from "react-router-dom";

import { getContacts, deleteContact } from './api/contacts_api';


const photoPlaceholder = 'https://lh3.googleusercontent.com/proxy/nYcytn6ialYBUH3qri4otgB4Ff6nzgetpO2uQeZNcI3gnAyt8d7BPg-LJDoMQ3L37cEcPX4DKMwE2ofksujA5Us0SEyczoBs0YaveZhI_TJqJXkP355-qYeHDPnwM5bWrqk2T-CHLjzW6eiOtKLL';


function ContactsList({ auth }) {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    getContacts(auth.getIdToken()).then(setContacts).catch((error) => {
      console.log(error);
      alert('Unable to obtain contacts')
    });
  }, [auth]);

  function refreshData() {
    getContacts(auth.getIdToken()).then(setContacts).catch((error) => {
      console.log(error);
      alert('Unable to obtain contacts')
    });
  }

  function deleteItem(contactId) {
    deleteContact(auth.getIdToken(), contactId).then(refreshData).catch((error) => {
      console.log(error);
      alert('Unable to delete contact');
    });
  }
  


  function generateContactTableRow(contact) {
    return (
      <tr key={contact.contactId}>
        <td>
          <Image src={contact.photoUrl || photoPlaceholder} roundedCircle style={{ height: '3em', width: '3em'}} />
        </td>
        <td>
          <span>{contact.name}</span>
        </td>
        <td>
          <span>{contact.phone}</span>
        </td>
        <td>
          <Link to={`/contact/${contact.contactId}/edit`}>
            <FaEdit
              color="blue"
              style={{ height: '1.5em', width: '1.5em', cursor: 'pointer', marginRight: '1.5em' }}
            />
          </Link>
          <FaTrash
            color="red"
            style={{ height: '1.5em', width: '1.5em', cursor: 'pointer' }}
            onClick={() => deleteItem(contact.contactId)}
          />
        </td>
      </tr>
    );
  }

  return (
    <Table hover>
      <thead>
        <tr>
          <th>Photo</th>
          <th>Name</th>
          <th>Phone</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {contacts.map((contact) => generateContactTableRow(contact))}
      </tbody>
    </Table>
  );
}

export default ContactsList;
