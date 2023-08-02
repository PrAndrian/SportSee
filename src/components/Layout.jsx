/* eslint-disable linebreak-style */
import React from 'react';
import { Outlet } from 'react-router';
import Navbar from './Navbar';

/**
 * Composant du layout (mise en page).
 *
 * @component
 * @returns {JSX.Element} Le composant React.
 */

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default Layout;
