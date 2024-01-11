// Import react things
import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import UserContext from './contexts/UserContext.js';
import http from './http';

// Import pages
import Home from './Pages/Home';
import Categories from './Pages/Categories';
import Forum from './Pages/Forum';
import Memberships from './Pages/Memberships';
import AboutUs from './Pages/AboutUs';
import ContactUs from './Pages/ContactUs';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import AddPost from './Pages/AddPost';
import EditPost from './Pages/EditPost';
import Description from './Pages/Description';
import MerchantLogin from './Pages/MerchantLogin';
import FeedbackForm from './Pages/FeedbackForm';

// Import components
import Navbar from './Components/Navbar';


function App() {
    
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      http.get('/User/auth').then((res) => {
        setUser(res.data.user);
      });
    }
  }, []);

  const isAdmin = user && user.role === 'admin';
  const isCustomer = user && user.role === 'customer';

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Navbar />
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/description" element={<Description />} />
        <Route path="/forum" element={<Forum />} /> 
        <Route path="/memberships" element={<Memberships />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} />
        {!user && (
          <Route path="/login" element={<Login />} />
        )}
        <Route path="/signup" element={<Signup />} />
        <Route path="/addpost" element={<AddPost />} />
        <Route path="/editpost" element={<EditPost />} />
        <Route path="/merchantlogin" element={<MerchantLogin />} />
        <Route path="/contactus/feedbackform" element={<FeedbackForm />} />


      </Routes>
    </UserContext.Provider>
  );
}

export default App;
