import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>The info is {props.info}</p>
  </div>
);

const withAdminWarning = (WrappedComponent) => {
 return (props) => (
  <div>
    {props.isAdmin && <p>This is private info. Please dont share!</p>}
    <WrappedComponent {...props} />
  </div>
 );
};

// requireAuthentication
const requireAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAuthenticated? <WrappedComponent {...props} /> : <p>you need to log in to display info.</p>}
    </div>
  );
};


const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

ReactDOM.render(<AuthInfo isAuthenticated = {false} info = "Some Details" />, document.getElementById('app'));