import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import ReactDOM from 'react-dom';

import Products from './components/Products';
import CreateAuction from './components/CreateAuction';
import UserProfile from './components/UserProfile';
import Register from './components/Register';
import Login from './components/Login';
import { injectStyle } from "react-toastify/dist/inject-style";

import Wallet from './components/Wallet';
// import { BidPage } from './components/BidPage';
import {BidProduct} from './components/BidProduct'
import Forgotpassword from './components/Forgotpassword';
import VerifyForgotToken from './components/VerifyForgotToken';
import Contact from './components/Contactus/Contactus';
import { PrivateRouter } from './components/PrivateRoute';
import PageNotFound from './components/PageNotFound';
import UpdateAuction from './components/UpdateAuction';
import { ToastContainer, toast } from "react-toastify";
import { VerifyUser } from './components/VerifyUser';
if (typeof window !== "undefined") {
  injectStyle();
}
import AdminDashboard from './components/AdminDashboard/AdminDashboard';
import { DropUser } from './components/AdminDashboard/DropUser';
import DropProduct from './components/AdminDashboard/DropProduct';
import { FeedBack } from './components/Feedback';
import Aboutus  from './components/Aboutus/Aboutus';



function App() {

  function notify(msg) {
    toast(msg);
  }
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/feedback' element={<FeedBack/>} />
        <Route path='/Aboutus' element={<Aboutus/>} />
        {/* <Route path='/aboutus' element={<Aboutus/>} /> */}
        <Route path='/register' element={<Register notify={notify}/>} />
        <Route path='/login' element={<Login notify={notify}/>} />
        <Route path='/contactus' element={<Contact/>}/>

        {/*Admin Dashboard Updates*/}
        <Route path='/admin' element={<AdminDashboard/>} />
        <Route path='/dropProduct' element={<DropProduct/>} />
        <Route path='/dropUser' element={<DropUser/>} />

        <Route element={<PrivateRouter/>}>
            <Route path='/home' element={<Products countdownTimestampMs={1659983662000}/>} />
            {/* <Route path='/product/:id' exact element={<BidPage />} /> */}
            <Route path='/product/:id' exact element={<BidProduct />} />
            <Route path='/createauction' element={<CreateAuction/>} />
            <Route path='/product/update/:id' element={<UpdateAuction/>} />
            {/* <Route path='/profile' element={<Profile/>} /> */}
            <Route path='/profile' element={<UserProfile/>}/>
            <Route path='/wallet' element={<Wallet/>} />
        </Route>
        <Route path='/forgotpassword' element={<Forgotpassword notify={notify}/>} />
        <Route path='/user/reset-password/:token/:uid' element={<VerifyForgotToken notify={notify}/>} />
        <Route path="*" element={<PageNotFound/>}/>
        <Route path="/user/verify-account/:token/:uid" element={<VerifyUser notify={notify}/>} />
      </Routes>
      <ToastContainer autoClose={5000} />
    </Router>
  );
}

export default App;
