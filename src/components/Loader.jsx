import React from 'react';
import { CircularProgress, Box } from '@mui/material';

const Loader = () => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh" minWidth="100vw">
      <CircularProgress />
    </Box>
  );
};

export default Loader;
