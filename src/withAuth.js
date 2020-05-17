import React from 'react';


function withAuth(WrappedComponent, auth) {
  return function (props) {
    console.log('withAuthComponent: ', auth);
    auth.checkAuthentication();

    const componentProps = {
      ...props,
      auth,
    };
    return <WrappedComponent {...componentProps} />;
  };
}

export default withAuth;
