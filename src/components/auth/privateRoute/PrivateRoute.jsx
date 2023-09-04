import React from 'react';
import { Navigate } from 'react-router-dom';
import useAuth from '../../../hooks/authHook/useAuth';

function PrivateRoute({ element }) {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? (
    element
  ) : (
    <Navigate to="/" replace />
  );
}

export default PrivateRoute;
