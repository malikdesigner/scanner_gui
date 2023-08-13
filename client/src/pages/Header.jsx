import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components.css'


const Header = () => {
  return (
    <nav className="bg-dark p-3">
      <div className="row">
        <div className="col-md-4">
            <Link to='/' >
<img src="https://staging.sso.monitoringservice.co/sso/assets/icons/Webp.net-resizeimage.png" alt=""  style={{ width: '15%', }}  />
            </Link>
        </div>
        <div className="col-md-8">
          {/* Apply Bootstrap utility classes to create a horizontal list */}
          <ul className="list-unstyled d-flex justify-content-end mb-0">
            <li className="nav-item mx-5 ">
              <Link style={{ textDecoration: 'none', color: 'white' }} to="/"> <h4> Home</h4></Link>
            </li>
            <li className="nav-item mx-5">
              <Link style={{ textDecoration: 'none', color: 'white' }} to="/countries"><h4>Countries</h4> </Link>
            </li>
            <li className="nav-item mx-5">
              <Link style={{ textDecoration: 'none', color: 'white' }} to="/user"> <h4>User</h4> </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;

