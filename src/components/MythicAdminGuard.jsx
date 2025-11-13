import React from 'react';
import { Navigate } from 'react-router-dom';

const MythicAdminGuard = ({ isAdmin, children }) => {
  if (!isAdmin) {
    alert('🚫 Ma tihid admin. Looma oggola gelitaanka route-kan.');
    return <Navigate to="/" replace />;
  }

  return children;
};

export default MythicAdminGuard;