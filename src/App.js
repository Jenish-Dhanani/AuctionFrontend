import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import ReactDOM from 'react-dom'

import Products from './components/Products';
import CreateAuction from './components/CreateAuction';
import UserProfile from './components/UserProfile';
import Register from './components/Register';
import Login from './components/Login';

import Wallet from './components/Wallet';
import { BidPage } from './components/BidPage';
import Forgotpassword from './components/Forgotpassword';
import VerifyForgotToken from './components/VerifyForgotToken';
import Contact from './components/Contactus/Contactus';
import { PrivateRouter } from './components/PrivateRoute';
import PageNotFound from './components/PageNotFound';
import UpdateAuction from './components/UpdateAuction';
import { FeedBack } from './components/Feedback';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/feedback' element={<FeedBack/>} />
        {/* <Route path='/aboutus' element={<Aboutus/>} /> */}
        <Route path='/register' element={<Register/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/contactus' element={<Contact/>}/>
        <Route element={<PrivateRouter/>}>
            <Route path='/home' element={<Products countdownTimestampMs={1659983662000}/>} />
            <Route path='/product/:id' exact element={<BidPage />} />
            <Route path='/createauction' element={<CreateAuction/>} />
            <Route path='/product/update/:id' element={<UpdateAuction/>} />
            {/* <Route path='/profile' element={<Profile/>} /> */}
            <Route path='/profile' element={<UserProfile/>}/>
            <Route path='/wallet' element={<Wallet/>} />
            <Route path='/forgotpassword' element={<Forgotpassword/>} />
            <Route path='/verify/:token' element={<VerifyForgotToken/>} />
        </Route>
        <Route path="*" element={<PageNotFound/>}/>
      </Routes>
    </Router>
  );
}

export default App;
