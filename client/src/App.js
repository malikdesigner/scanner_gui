import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import config from './config';
import Home from './pages/Home';
import Countries from './pages/Countries';
import {Add_user} from './pages/Add_user';
import User from './pages/User';

import Header from './pages/Header';
import Update_user from './pages/Update_user';
import Login from './pages/Login';
import Landing from './landing/Landing';
import RealEstates from './landing/realEstates/main'

import axios from 'axios';
const App = () => {
 

  
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/landing" element={<Landing />} />
          <Route exact path="/login" element={<Login />} />
          <Route path="/countries" element={<Countries />} />
          <Route path="/countries" element={<RealEstates />} />



          <Route path="/user" element={<User />} />
          <Route path="/add_user" element={<Add_user />} />
          <Route path="/update_user/:id" element={<Update_user />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
