import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header';
import Navbar from './components/navbar';
import Home from './components/home';
import Footer from './components/footer';
import Productdetails from './components/productdetails';
import Login from './components/login';
import Action from './components/action';
import Passchange from './components/passchange';
import Useridchange from './components/useridchange';
import Numberchange from './components/numberchange';
import Emailchange from './components/emailchange';
import Addcontent from './components/addcontent';
import Delete from './components/delete';
import Update from './components/update';
import Updated from './components/updated';
import Searched from './components/searched';
import About from './components/about';
import Contact from './components/contact';
import Orderdetails from './components/orderdetails';
import Checkorder from './components/checkorder';
import Changestats from './components/changestats';
import Privatecomponents from './components/privatecomponents';
import Bill from './components/bill';
import History from './components/history';
import Career from './components/career';

function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/search/:key' element={<Searched />}></Route>
        <Route path='/Medicenes/:key' element={<Productdetails />}></Route>
        <Route path='/owner-login' element={<Login />}></Route>
        <Route element={<Privatecomponents/>}>
          <Route path='/owner-login/action' element={<Action />}></Route>
          <Route path='/owner-login/action/change-passwords' element={<Passchange />}></Route>
          <Route path='/owner-login/action/change-userid' element={<Useridchange />}></Route>
          <Route path='/owner-login/action/change-number' element={<Numberchange />}></Route>
          <Route path='/owner-login/action/change-email' element={<Emailchange />}></Route>
          <Route path='/owner-login/action/check-orders' element={<Checkorder />}></Route>
          <Route path='/owner-login/action/change-status' element={<Changestats />}></Route>
          <Route path='/owner-login/action/update-content' element={<Update />}></Route>
          <Route path='/owner-login/action/update-content/:key' element={<Updated />}></Route>
          <Route path='/owner-login/action/add-content' element={<Addcontent />}></Route>
          <Route path='/owner-login/action/delete-content' element={<Delete />}></Route>
        </Route>
         <Route path='/order-details' element={<Orderdetails />}></Route>
         <Route path='/order-details/:key' element={<Bill/>}></Route>
         <Route path='/about' element={<About />}></Route>
         <Route path='/contact-us' element={<Contact />}></Route>
         <Route path='/policy' element={<h1>Policy</h1>}></Route>
         <Route path='/services' element={<h1>service</h1>}></Route>
         <Route path='/career' element={<Career/>}></Route>
         <Route path='/history' element={<History/>}></Route>
         <Route path='/board-members' element={<h1>boards</h1>}></Route>
         <Route path='/declaration' element={<h1>Declaration</h1>}></Route>
         <Route path='/testimonials' element={<h1>testimonials</h1>}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;