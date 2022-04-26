import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/Home';

<<<<<<< HEAD
=======
import Services from './components/Services';
>>>>>>> abb1f5a780b5416480349ab9a70c8926ec676aae
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
<<<<<<< HEAD
import { PrivateRouter } from './components/PrivateRoute';
import PageNotFound from './components/PageNotFound';
import UpdateAuction from './components/UpdateAuction';
=======
>>>>>>> abb1f5a780b5416480349ab9a70c8926ec676aae


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        {/* <Route path='/aboutus' element={<Aboutus/>} /> */}
<<<<<<< HEAD
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
=======
        <Route path='/services' element={<Services/>} />
        <Route path='/products' element={<Products countdownTimestampMs={1659983662000}/>} />
        <Route path='/product/:id' exact element={<BidPage />} />
        <Route path='/createauction' element={<CreateAuction/>} />
        {/* <Route path='/profile' element={<Profile/>} /> */}
        <Route path='/profile' element={<UserProfile/>}/>
        <Route path='/register' element={<Register/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/contactus' element={<Contact/>}/>
        <Route path='/wallet' element={<Wallet/>} />
        <Route path='/forgotpassword' element={<Forgotpassword/>} />
        <Route path='/verify/:token' element={<VerifyForgotToken/>} />
>>>>>>> abb1f5a780b5416480349ab9a70c8926ec676aae
      </Routes>
    </Router>
  );
}

export default App;
