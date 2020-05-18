import React from 'react';


function withAuth(WrappedComponent, auth) {
  return function (props) {
    auth.checkAuthentication();

    const componentProps = {
      ...props,
      auth,
    };
    return <WrappedComponent {...componentProps} />;
  };
}

export default withAuth;
