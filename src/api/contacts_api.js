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
