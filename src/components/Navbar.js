import React from 'react';
import { NavLink } from 'react-router-dom';
import { Stack } from '@mui/material';

import Logo from '../assets/images/Logo.jpg';

const Navbar = () => (
  <Stack direction="row" justifyContent="space-around" sx={{ gap: { sm: '123px', xs: '40px' }, mt: { sm: '32px', xs: '20px' }, justifyContent: 'none' }} px="20px">
    <NavLink to="/">
      <img src={Logo} alt="logo" style={{ width: '80px', height: '80px', margin: '0px 20px' }} />
    </NavLink>
    <Stack
      direction="row"
      gap="40px"
      fontFamily="Alegreya"
      fontSize="24px"
      alignItems="flex-end"
    >
      <NavLink to="/" style={{ textDecoration: 'none', color: 'white', borderBottom: '3px solid #FF2625' }}>Home</NavLink>
      <a href='#exercises' style={{ textDecoration: 'none', color: 'white' }}>Exercises</a>
    </Stack>
  </Stack>
);

export default Navbar;
