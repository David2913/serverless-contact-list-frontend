import React, { useState, useEffect } from 'react';
import { Table, Image } from 'react-bootstrap';

import { getContacts } from './api/contacts_api';


const photoPlaceholder = 'https://lh3.googleusercontent.com/proxy/nYcytn6ialYBUH3qri4otgB4Ff6nzgetpO2uQeZNcI3gnAyt8d7BPg-LJDoMQ3L37cEcPX4DKMwE2ofksujA5Us0SEyczoBs0YaveZhI_TJqJXkP355-qYeHDPnwM5bWrqk2T-CHLjzW6eiOtKLL';

function ContactsList({ auth }) {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    getContacts(auth.getIdToken()).then(setContacts).catch((error) => {
      console.log(error);
      alert('Unable to obtain contacts')
    });
  }, [auth]);

  function generateContactTableRow(contact) {
    return (
      <tr key={contact.contactId}>
        <td>
          <Image src={contact.photoUrl || photoPlaceholder} roundedCircle style={{ height: '3em', width: '3em'}} />
          <span style={{ marginLeft: '1em' }}>{contact.name}</span>
        </td>
        <td>{contact.phone}</td>
      </tr>
    );
  }

  return (
    <Table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Phone</th>
        </tr>
      </thead>
      <tbody>
        {contacts.map((contact) => generateContactTableRow(contact))}
      </tbody>
    </Table>
  );
}

export default ContactsList;
