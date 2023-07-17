import React from 'react'
import { Outlet } from 'react-router'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

const Layout = () => {
    return (
        <>
            <Navbar/>
            <Sidebar/>
            <Outlet/>
        </>
    )
}

export default Layout