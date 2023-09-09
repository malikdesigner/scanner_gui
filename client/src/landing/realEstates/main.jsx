import React, { useState, useEffect } from 'react';
import Header from '../Header'
import Footer from '../footer'
import '../component.css'
import Select from 'react-select';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faMapLocation, faHome } from '@fortawesome/free-solid-svg-icons';
import Filters from './filters';
import backgroundImage from '../../assets/realEstateMain.jpg'
function Main() {
  const [activeAnchor, setActiveAnchor] = useState('anchor1');

  const handleAnchorClick = (anchor) => {
    setActiveAnchor(anchor);
  };
  return (
    <div>
      <Header />
      <Filters />
      <div className='row m-3'>
        <h4> <strong>Browse Properties  </strong></h4>
        <div className='col-md-4'>
          <div className='card'>
            <div className='card-header'>
              <div>

                <h6> <FontAwesomeIcon icon={faHome} /> Homes </h6>

              </div>
              <ul className='d-flex'>
                <li className="list-group-item underline" style={{ margin: '2%' }}>
                  <a
                    className={`nav-link ${activeAnchor === 'anchor1' ? 'text-success' : ''}`}
                    onClick={() => handleAnchorClick('anchor1')}
                  >
                    Anchor 1
                  </a>
                </li>
                <li className="list-group-item underline" style={{ margin: '2%' }}>
                  <a
                    className={`nav-link ${activeAnchor === 'anchor2' ? 'text-success' : ''}`}
                    onClick={() => handleAnchorClick('anchor2')}
                  >
                    Anchor 2
                  </a>
                </li>
                <li className="list-group-item  underline" style={{ margin: '2%' }}>
                  <a
                    className={`nav-link ${activeAnchor === 'anchor3' ? 'text-success' : ''}`}
                    onClick={() => handleAnchorClick('anchor3')}
                  >
                    Anchor 3
                  </a>
                </li>
              </ul>

            </div>
            <div className='card-body'>
              <div className='row'>

                <div className="col-md-12">
                  {activeAnchor === 'anchor1' && <div className="alert alert-success" >
                    <span> 250 sq yard </span>
                    <span> 250 sq yard </span>

                    <span> 250 sq yard </span>

                    </div>}
                  {activeAnchor === 'anchor2' && <div className="alert alert-info">Content for Tab 2</div>}
                  {activeAnchor === 'anchor3' && <div className="alert alert-warning">Content for Tab 3</div>}
                </div>

              </div>
            </div>
          </div>
        </div>
        <div className='col-md-4'>
          <div className='card'>
            <div className='card-header'>
              <h6> <FontAwesomeIcon icon={faMapLocation} /> Plots </h6>


            </div>
            <div className='card-body'>

            </div>
          </div>
        </div>
        <div className='col-md-4'>
          <div className='card'>
            <div className='card-header'>
              <h6> <FontAwesomeIcon icon={faMapLocation} /> Commertials </h6>


            </div>
            <div className='card-body'>

            </div>
          </div>
        </div>


      </div>

      <Footer />
    </div>
  )
}

export default Main