import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserList from './components/UserList';
import Loader from './components/Loader';
import { Box } from '@mui/material';
import './App.css'

const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://602e7c2c4410730017c50b9d.mockapi.io/users')
      .then(response => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError('Failed to fetch users. Please try again later.');
        setLoading(false);
      });
  }, []);


  if (loading) return <Loader />;
  if (error) return <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">{error}</Box>;

  return (
    <div style={{ width: '100vw', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ backgroundColor: '#0c1821', margin: '0 20px', padding: '12px 0px', borderRadius: '10px 10px 0 0', boxShadow: '0 2px 6px #000', width: '80%', zIndex: '1' }}>
        <p style={{ fontSize: '28px', fontWeight: '700', margin: '0 20px', color: 'white' }}>User</p>
      </div>
      <div className='content' style={{ backgroundColor: '#000', width: '80%', height: '85vh', overflowY: 'auto', borderRadius: '0 0 0 10px' }}>
        <UserList users={users} />
      </div>
    </div>
  );
};

export default App;
