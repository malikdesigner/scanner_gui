import React from 'react';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Countries from './pages/Countries';
import {Add_user} from './pages/Add_user';
import User from './pages/User';

import Header from './pages/Header';
import Update_user from './pages/Update_user';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
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
