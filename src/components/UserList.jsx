import React, { useState } from 'react';
import { Avatar, Typography, Dialog, DialogContent, DialogActions, Button } from '@mui/material';

const UserList = ({ allusers }) => {
    const [open, setOpen] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);

    const handleClickOpen = (user) => {
        setSelectedUser(user);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div style={{  margin: 'auto' }}>
            {allusers.map(user => (
                <div key={user.id} onClick={() => handleClickOpen(user)} style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', padding: '15px 0', borderBottom: '1px solid #ffffff49' }}>
                    <Avatar src={user.avatar} alt='user-avatar' sx={{ width: 56, height: 56, marginRight: '10px' }} />
                    <Typography sx={{ cursor: 'pointer', flexGrow: 1 }}>{`${user.profile.firstName} ${user.profile.lastName}`}</Typography>
                </div>
            ))}
            <Dialog open={open} onClose={handleClose}>
                {selectedUser && (
                    <>
                        <DialogContent>
                            <Avatar src={selectedUser.avatar} alt='user-avatar' sx={{ width: 100, height: 100, marginBottom: '10px' }} />
                            <h2>{`${selectedUser.profile.firstName} ${selectedUser.profile.lastName}`}</h2>
                            <p><span style={{textDecoration:'underline', color:'black', fontWeight:'600' }}>Job title:</span> {selectedUser.jobTitle}</p>
                            <p><span style={{textDecoration:'underline', color:'black', fontWeight:'600' }}>Bio:</span> {selectedUser.Bio}</p>
                            <p><span style={{textDecoration:'underline', color:'black', fontWeight:'600' }}>Username:</span> {selectedUser.profile.username}</p>
                            <p><span style={{textDecoration:'underline', color:'black', fontWeight:'600' }}>Email:</span> {selectedUser.profile.email}</p>
                        </DialogContent>
                        <DialogActions>
                            <Button variant='contained' style={{margin:'0px 10px 10px 0'}} onClick={handleClose}>Close</Button>
                        </DialogActions>
                    </>
                )}
            </Dialog>
        </div>
    );
};

export default UserList;
