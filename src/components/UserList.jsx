import React, { useState } from 'react';
import { Avatar, Dialog, DialogContent, DialogActions, Button } from '@mui/material';

const UserList = ({ users }) => {
    const [open, setOpen] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);

    const handleClickOpen = (user) => {
        setSelectedUser(user);
        setOpen(true);
        console.clear()
    };

    const handleClose = () => {
        setOpen(false);
        console.clear()
    };
    
    return (
        <div style={{ margin: 'auto' }}>
            {users.map(user => (
                <div key={user.id} style={{ display: 'flex', alignItems: 'center', padding: '18px 20px', borderBottom: '1px solid #ffffff2d', }}>
                    <Avatar src={user.avatar} alt='user-avatar' sx={{ width: 56, height: 56, marginRight: '10px' }} />
                    <div style={{ display: 'flex', flexDirection: 'column', }}>
                        <p style={{ fontWeight: "600", margin: '2px 0' }}>{`${user.profile.firstName} ${user.profile.lastName}`}</p>
                        <a style={{ display: 'flex', alignItems: 'end', gap: '4px' }} onClick={() => handleClickOpen(user)}> <span>See details</span> <svg xmlns="http://www.w3.org/2000/svg" fill="none" width={'20px'} viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                        </svg>
                        </a>
                    </div>
                </div>
            ))}
            <Dialog open={open} onClose={handleClose}>
                {selectedUser && (
                    <>
                        <DialogContent>
                            <Avatar src={selectedUser.avatar} alt='user-avatar' sx={{ width: 90, height: 90, marginBottom: '10px' }} />
                            <h2>{`${selectedUser.profile.firstName} ${selectedUser.profile.lastName}`}</h2>
                            <p><span style={{ textDecoration: 'underline', color: 'black', fontWeight: '600' }}>Job title:</span> {selectedUser.jobTitle}</p>
                            <p><span style={{ textDecoration: 'underline', color: 'black', fontWeight: '600' }}>Bio:</span> {selectedUser.Bio}</p>
                            <p><span style={{ textDecoration: 'underline', color: 'black', fontWeight: '600' }}>Username:</span> {selectedUser.profile.username}</p>
                            <p><span style={{ textDecoration: 'underline', color: 'black', fontWeight: '600' }}>Email:</span> {selectedUser.profile.email}</p>
                        </DialogContent>
                        <DialogActions>
                            <Button variant='contained' style={{ margin: '0px 10px 10px 0' }} onClick={handleClose}>Close</Button>
                        </DialogActions>
                    </>
                )}
            </Dialog>
        </div>
    );
};

export default UserList;
