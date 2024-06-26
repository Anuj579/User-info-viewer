import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserList from './components/UserList';
import Loader from './components/Loader';
import { Box } from '@mui/material';
import './App.css'

const App = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
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

  const handleUserSelect = (user) => {
    setSelectedUser(user);
  };

  if (loading) return <Loader />;
  if (error) return <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">{error}</Box>;

  return (
    <div style={{ width: '100vw', height:'100vh', display: 'flex', justifyContent: 'center', alignItems:'center'}}>
        <div className='content' style={{ backgroundColor: '#231123', padding:'0px 20px', width:'75%', height:'85vh', overflowY:'auto', borderRadius:'10px' }}>
          <div style={{backgroundColor:'#231123', padding:'12px 0', position:'sticky', top:'0', zIndex:'10', borderBottom:'1px solid white'}}>
            <p style={{fontSize:'28px', fontWeight:'700', margin:'0'}}>User</p>
          </div>
          <UserList allusers={users} onUserSelect={handleUserSelect} />
        </div>
    </div>
  );
};

export default App;
