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
import RaisedRequest from './Pages/RaisedRequest';
import ViewPost from './Pages/ViewPost.jsx';
import Cart from './Pages/Cart.jsx';
import Profile from './Pages/Profile/Profile.jsx';

//Other routes
import ProfileRoutes from './Pages/Profile/ProfileRoutes.jsx';

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
        <Route path="/description/:id" element={<Description />} />
        <Route path="/forum" element={<Forum />} /> 
        <Route path="/memberships" element={<Memberships />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} />

        {!user && (
          <Route path="/login" element={<Login />} />
        )}
        
        <Route path="/profile/*" element={<ProfileRoutes />} />

        <Route path="/signup" element={<Signup />} />
        <Route path="/addpost" element={<AddPost />} />
        <Route path="/editpost" element={<EditPost />} />
        <Route path="/merchantlogin" element={<MerchantLogin />} />
        <Route path="/contactus/raisedrequest" element={<RaisedRequest />} />
        <Route path="/forum/viewpost/:id" element={<ViewPost />} />
        <Route path="/cart" element={<Cart />} />

      </Routes>
    </UserContext.Provider>
  );
}

export default App;
