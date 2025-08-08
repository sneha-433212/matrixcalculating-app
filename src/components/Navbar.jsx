import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

const Navbar = () => (
  <AppBar
    position="sticky"
    sx={{ backgroundColor: 'yellow', color: 'black' }}
  >
    <Toolbar>
      <Typography
        variant="h6"
        component="div"
        sx={{ flexGrow: 1, textAlign: 'center', color: 'black' }}
      >
        Matrix Calculator App
      </Typography>
    </Toolbar>
  </AppBar>
);

export default Navbar;
