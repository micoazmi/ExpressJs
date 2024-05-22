import React from 'react';
import { useAuth } from '../context/AuthContext';
const Profile = () => {
  const { user } = useAuth();

  return (
    <div>
      <h2>Profile</h2>
      {user && (
        <div>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <p>Gender: {user.gender}</p>
        </div>
      )}
    </div>
  );
};

export default Profile;
