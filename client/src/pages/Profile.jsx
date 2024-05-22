import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Profile = () => {
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    const token = localStorage.getItem('token');
    try {
      const response = await axios.get('http://localhost:3000/profile', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setProfile(response.data);
    } catch (error) {
      console.error('Error fetching profile', error);
      setError('Error fetching profile');
    }
  };

  if (error) {
    return <p className="text-center text-red-500">{error}</p>;
  }

  if (!profile) {
    return <p className="text-center text-gray-500">Loading profile...</p>;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-4 text-center">Profile</h2>
        <div className="mb-4">
          <h3 className="text-lg font-medium text-gray-700">Name</h3>
          <p className="mt-1 text-gray-900">{profile.name}</p>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-medium text-gray-700">Email</h3>
          <p className="mt-1 text-gray-900">{profile.email}</p>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-medium text-gray-700">Gender</h3>
          <p className="mt-1 text-gray-900">{profile.gender}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
