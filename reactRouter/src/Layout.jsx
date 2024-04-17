import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import {Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
      <Header />
      <Outlet /> 
      {/* outlet is a feature of react-router-dom, which where implemented can have any component keeping the rest of the page same */}
      
      <Footer />
    </>
  )
}

export default Layout
