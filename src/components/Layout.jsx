import React from 'react'
import { Outlet } from 'react-router'
import Navbar from './Navbar'
// import Sidebar from './Profil/Sidebar'

const Layout = () => {
    return (
        <>
            <Navbar/>
            <Outlet/>
        </>
    )
}

export default Layout