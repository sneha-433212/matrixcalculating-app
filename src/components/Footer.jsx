import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => (
  <Box
    sx={{
      width: '100%',
      bgcolor: 'yellow',
      color: 'black',
      py: 2,
      textAlign: 'center',
      mt: 4,
      position: 'relative',
      bottom: 0,
    }}
  >
    <Typography variant="body2">
      3rd Assesment Matrix Calculator | All rights reserved
    </Typography>
  </Box>
);

export default Footer;
