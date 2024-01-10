// Import react things
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';

// Import pages
import Home from './Pages/Home';
import Categories from './Pages/Categories';
import Forum from './Pages/Forum';
import Memberships from './Pages/Memberships';
import AboutUs from './Pages/AboutUs';
import ContactUs from './Pages/ContactUs';

// Import components
import Navbar from './Components/Navbar';



function App() {
  return (
    <>
      <Navbar />
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/forum" element={<Forum />} /> 
        <Route path="/memberships" element={<Memberships />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} />
      </Routes>
    </>
  );
}

export default App;
