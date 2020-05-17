import React from 'react';


function withAuth(WrappedComponent, auth) {
  return function (props) {
    console.log('withAuthComponent: ', auth);
    auth.checkAuthentication();
    return <WrappedComponent {...props} />;
  };
}

export default withAuth;
