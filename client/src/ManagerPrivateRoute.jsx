import React from 'react';
import { Navigate } from 'react-router-dom';
import {jwtDecode} from 'jwt-decode';

const ManagerPrivateRoute = ({ children }) => {
  const token = localStorage.getItem('managerToken');

  if (!token) {
    alert('Unauthorized access as a manager, please log in.!!!');
    return <Navigate to="/" />;
  }

  try {
    const decoded = jwtDecode(token);

    // Check if the manager is authorized
    if (decoded?.role === 'manager' && decoded?.isAuthorized === true) {
      return children;
    } else {
      alert('Unauthorized access, please get authorization from the admin.!!!');
      return <Navigate to="/" />;
    }
  } catch (error) {
    console.error('Invalid token:', error);
    return <Navigate to="/" />;
  }
};

export default ManagerPrivateRoute;
