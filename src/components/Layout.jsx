/* eslint-disable linebreak-style */
import React from 'react';
import { Outlet } from 'react-router';
import Navbar from './Navbar';

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default Layout;
