import React from 'react'
import Footer from './components/Footer-temp/Footer-temp'
import { Outlet } from 'react-router-dom'
import Header from './components/Header/Header'


function Layout() {
    return (
        <>
        <Header />
 {/* the outlet functionality is offered by react as we can see the header and footer in our site remains fixed and only the middle content changes 
 so we use outlet as we can assign anything in the outlet such as home, contact us etc while the header and footer remain in their positions*/}
        <Outlet />

        <Footer />
        
        </>
    )
}

export default Layout
