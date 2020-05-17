export const apiEndpoint = process.env.REACT_APP_API_ENDPOINT;

export const authConfig = {
  domain: process.env.REACT_APP_DOMAIN, // Auth0 domain
  clientId: process.env.REACT_APP_CLIENT_ID,          // Auth0 client id
  callbackUrl: `${process.env.REACT_APP_URL}/callback`,
}
