import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Countries from './pages/Countries';
import {Add_user} from './pages/Add_user';
import User from './pages/User';

import Header from './pages/Header';
import Update_user from './pages/Update_user';
import Login from './pages/Login';
import axios from 'axios';
const App = () => {
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:8800').then(res => {
      console.log(res)
      if (res.data.valid) {
        setIsValid(res.data.valid);
    }
    else {
       // navigate('/login')
    }      
    })
      .catch(err => console.log(err))
  }, [])
  return (
    <Router>
      <div>
      {isValid && <Header />} {/* Render Header if isValid is true */}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route path="/countries" element={<Countries />} />



          <Route path="/user" element={<User />} />
          <Route path="/add_user" element={<Add_user />} />
          <Route path="/update_user/:id" element={<Update_user />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
