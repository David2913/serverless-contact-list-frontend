# Serverless contact list frontend
Capstone project of the Udacity Cloud Developer course

## How to run this project?
This project is built using React, to run the project please follow these steps:
- Install the dependencies using: `npm install`
- Make a copy of the `.env.example` file and rename it `.env`
- Fill the `.env` file with the following configuration:
  - REACT_APP_API_ENDPOINT: The url of your backend app
  - REACT_APP_DOMAIN: Auth0 app domain
  - REACT_APP_CLIENT_ID: Auth0 app client id
  - REACT_APP_URL: The url where your app is running, if your are running the app locally use `http://localhost:3000`
- Run the app using: `npm run start`

## Dependencies
- [Backend project](https://github.com/David2913/serverless-contact-list-app)
- [Auth0 account](https://auth0.com/)
