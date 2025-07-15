import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRouteAdmin = ({ children }) => {
  const token = localStorage.getItem('adminToken');

  if (!token) {
    alert('Unauthorized access.!!!');
    return <Navigate to="/" />;
  }

  return children;
};

export default ProtectedRouteAdmin;
