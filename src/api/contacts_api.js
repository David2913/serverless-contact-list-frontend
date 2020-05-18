import { apiEndpoint } from '../config';
import axios from 'axios';

export async function getContacts(idToken) {
  console.log('Fetching contacts');
  const response = await axios.get(`${apiEndpoint}/contacts`, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${idToken}`
    },
  });
  return response.data.items;
}


export async function deleteContact(idToken, contactId) {
  console.log('Deleting contact: ', contactId);
  await axios.delete(`${apiEndpoint}/contacts/${contactId}`, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${idToken}`
    },
  });
}

export async function createContact(idToken, { name, phone }) {
  const response = await axios.post(`${apiEndpoint}/contacts`, JSON.stringify({
    name,
    phone,
  }), {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${idToken}`
    }
  });
  return response.data.item;
}

export async function updateContact(idToken, { contactId, phone }) {
  const response = await axios.put(`${apiEndpoint}/contacts/${contactId}`, JSON.stringify({
    phone
  }), {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${idToken}`
    }
  });
  return response.data.item;
}

export async function generateUploadUrl(idToken, contactId) {
  const response = await axios.post(`${apiEndpoint}/contacts/${contactId}/photo`, JSON.stringify({}), {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${idToken}`
    }
  });
  return response.data.uploadUrl;
}

export async function uploadFile(uploadUrl, file) {
  await axios.put(uploadUrl, file)
}
