import React, { useState, useEffect } from 'react';
import Header from '../Header'
import Footer from '../footer'
import '../component.css'
import Select from 'react-select';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faBuildingLock, faMapLocation, faHome } from '@fortawesome/free-solid-svg-icons';

import backgroundImage from '../../assets/realEstateMain.jpg'
import Articles from './Articles';
import Filters from './filters';
function Main() {
  const [activeHome, setActiveHome] = useState('homePopular');
  const [activePlot, setActivePlot] = useState('plotPopular');
  const [activeCommertial, setActiveCommertial] = useState('commertialPopular');
  const [apiResponse, setApiResponse] = useState(null);

  const handleAnchorClick = (anchor) => {
    setActiveHome(anchor);
  };

  const handlePlotClick = (anchor) => {
    setActivePlot(anchor);
  };

  const handleCommertialClick = (anchor) => {
    setActiveCommertial(anchor);
  };

  const handleApiResponse = (response) => {
    setApiResponse(response);
  };
  return (
    <div>
      <Header />
      <Filters onApiResponse={handleApiResponse}/>
      <Articles apiResponse={apiResponse}/>
      <div className='row m-3'>
        <h5> <strong>Browse Properties  </strong></h5>
        <div className='col-md-4'>
          <div className='card'>
            <div className='card-header'>
              <div>

                <h5> <FontAwesomeIcon icon={faHome} /><strong style={{ marginLeft: '3%' }}> Homes </strong>  </h5>

              </div>
              <ul className='d-flex' style={{ placeContent: 'center', justifyContent: 'space-between' }}>
                <li className="list-group-item underline" style={{ margin: '2%', fontSize: 'larger' }}>
                  <a
                    className={`nav-link ${activeHome === 'homePopular' ? 'text-success' : ''}`}
                    onClick={() => handleAnchorClick('homePopular')}
                  >
                    <strong>Popular  </strong>
                  </a>
                </li>
                <li className="list-group-item underline" style={{ margin: '2%', fontSize: 'larger' }}>
                  <a
                    className={`nav-link ${activeHome === 'homeType' ? 'text-success' : ''}`}
                    onClick={() => handleAnchorClick('homeType')}
                  >
                    <strong> Type </strong>
                  </a>
                </li>
                <li className="list-group-item  underline" style={{ margin: '2%', fontSize: 'larger' }}>
                  <a
                    className={`nav-link ${activeHome === 'homeArea' ? 'text-success' : ''}`}
                    onClick={() => handleAnchorClick('homeArea')}
                  >
                    <strong>Area Size  </strong>
                  </a>
                </li>
              </ul>

            </div>
            <div className='card-body'>
              <div className='row'>

                <div className="col-md-12" style={{ padding: '2%', textAlign: 'center' }}>
                  {activeHome === 'homePopular' && <div style={{ padding: '1%' }} >
                    <div className='row'>
                      <div className='col-md-4' style={{ padding: '2%', marginTop: '2%', marginRight: '1%', borderRadius: '10px', border: 'solid 0.2px lightgrey', cursor: 'pointer' }}>
                        <a style={{ padding: '2%', display: 'inline-grid' }}> <strong> 5 Marla </strong> Houses </a>
                      </div>
                      <div className='col-md-3' style={{ padding: '2%', marginTop: '2%', marginRight: '1%', borderRadius: '10px', border: 'solid 0.2px lightgrey', cursor: 'pointer' }}>
                        <a style={{ padding: '2%', display: 'inline-grid' }}> <strong> 10 Marla </strong>Houses  </a>
                      </div>
                      <div className='col-md-4' style={{ padding: '2%', marginTop: '2%', marginRight: '1%', borderRadius: '10px', border: 'solid 0.2px lightgrey', cursor: 'pointer' }}>
                        <a style={{ padding: '2%', display: 'inline-grid' }}> <strong> Kanal </strong> Houses </a>
                      </div>
                    </div>
                    <div className='row'>
                      <div className='col-md-4' style={{ padding: '2%', marginTop: '2%', marginRight: '1%', borderRadius: '10px', border: 'solid 0.2px lightgrey', cursor: 'pointer' }}>
                        <a style={{ padding: '2%', display: 'inline-grid' }}> <strong> On Installment </strong> Flats </a>
                      </div>
                      <div className='col-md-3' style={{ padding: '2%', marginTop: '2%', marginRight: '1%', borderRadius: '10px', border: 'solid 0.2px lightgrey', cursor: 'pointer' }}>
                        <a style={{ padding: '2%', display: 'inline-grid' }}> <strong> Low Price </strong>Houses  </a>
                      </div>
                      <div className='col-md-4' style={{ marginTop: '2%', marginRight: '1%', borderRadius: '10px', border: 'solid 0.2px lightgrey', cursor: 'pointer' }}>
                        <a style={{ padding: '2%', display: 'inline-grid' }}> <strong> Under 20 Lacs </strong> Flats </a>
                      </div>
                    </div>
                  </div>
                  }
                  {activeHome === 'homeType' && <div style={{ padding: '1%' }} >
                    <div className='row'>
                      <div className='col-md-4' style={{ padding: '2%', marginTop: '2%', marginRight: '1%', border: 'solid 0.2px lightgrey', cursor: 'pointer' }}>
                        <a style={{ padding: '2%', display: 'inline-grid' }}> <strong> Houses </strong>  </a>
                      </div>
                      <div className='col-md-3' style={{ padding: '2%', marginTop: '2%', marginRight: '1%', border: 'solid 0.2px lightgrey', cursor: 'pointer' }}>
                        <a style={{ padding: '2%', display: 'inline-grid' }}> <strong> Flats </strong>  </a>
                      </div>
                      <div className='col-md-4' style={{ padding: '2%', marginTop: '2%', marginRight: '1%', border: 'solid 0.2px lightgrey', cursor: 'pointer' }}>
                        <a style={{ padding: '2%', display: 'inline-grid' }}> <strong> Upper Portion </strong> </a>
                      </div>
                    </div>
                    <div className='row'>
                      <div className='col-md-4' style={{ padding: '2%', marginTop: '2%', marginRight: '1%', border: 'solid 0.2px lightgrey', cursor: 'pointer' }}>
                        <a style={{ padding: '2%', display: 'inline-grid' }}> <strong> Lower Portion </strong> </a>
                      </div>
                      <div className='col-md-3' style={{ padding: '2%', marginTop: '2%', marginRight: '1%', border: 'solid 0.2px lightgrey', cursor: 'pointer' }}>
                        <a style={{ padding: '2%', display: 'inline-grid' }}> <strong> Farmhouse </strong>  </a>
                      </div>
                      <div className='col-md-4' style={{ marginTop: '2%', marginRight: '1%', border: 'solid 0.2px lightgrey', cursor: 'pointer' }}>
                        <a style={{ padding: '2%', display: 'inline-grid' }}> <strong> Pentahouse </strong> </a>
                      </div>
                    </div>
                  </div>
                  }
                  {activeHome === 'homeArea' && <div style={{ padding: '1%' }} >
                    <div className='row'>
                      <div className='col-md-4' style={{ padding: '2%', marginTop: '2%', marginRight: '1%', border: 'solid 0.2px lightgrey', cursor: 'pointer' }}>
                        <a style={{ padding: '2%', display: 'inline-grid' }}> <strong>5 Marla  </strong> Homes </a>
                      </div>
                      <div className='col-md-3' style={{ padding: '2%', marginTop: '2%', marginRight: '1%', border: 'solid 0.2px lightgrey', cursor: 'pointer' }}>
                        <a style={{ padding: '2%', display: 'inline-grid' }}> <strong> 10 Marla </strong>Homes  </a>
                      </div>
                      <div className='col-md-4' style={{ padding: '2%', marginTop: '2%', marginRight: '1%', border: 'solid 0.2px lightgrey', cursor: 'pointer' }}>
                        <a style={{ padding: '2%', display: 'inline-grid' }}> <strong> 1 Kanal </strong> Home </a>
                      </div>
                    </div>
                    <div className='row'>
                      <div className='col-md-4' style={{ padding: '2%', marginTop: '2%', marginRight: '1%', border: 'solid 0.2px lightgrey', cursor: 'pointer' }}>
                        <a style={{ padding: '2%', display: 'inline-grid' }}> <strong> 2 Kanal </strong> Home </a>
                      </div>
                      <div className='col-md-3' style={{ padding: '2%', marginTop: '2%', marginRight: '1%', border: 'solid 0.2px lightgrey', cursor: 'pointer' }}>
                        <a style={{ padding: '2%', display: 'inline-grid' }}> <strong>  </strong>  </a>
                      </div>
                      <div className='col-md-4' style={{ marginTop: '2%', marginRight: '1%', border: 'solid 0.2px lightgrey', cursor: 'pointer' }}>
                        <a style={{ padding: '2%', display: 'inline-grid' }}> <strong>  </strong>  </a>
                      </div>
                    </div>
                  </div>
                  }
                </div>

              </div>
            </div>
          </div>
        </div>
        <div className='col-md-4'>
          <div className='card' style={{ height: '100%' }}>
            <div className='card-header'>
              <div>

                <h5> <FontAwesomeIcon icon={faMapLocation} /> <strong style={{ marginLeft: '3%' }}>Plots  </strong> </h5>

              </div>
              <ul className='d-flex' style={{ placeContent: 'center', justifyContent: 'space-between' }}>
                <li className="list-group-item underline" style={{ margin: '2%', fontSize: 'larger' }}>
                  <a
                    className={`nav-link ${activePlot === 'plotPopular' ? 'text-success' : ''}`}
                    onClick={() => handlePlotClick('plotPopular')}
                  >
                    <strong> Popular </strong>
                  </a>
                </li>
                <li className="list-group-item underline" style={{ margin: '2%', fontSize: 'larger' }}>
                  <a
                    className={`nav-link ${activePlot === 'plotType' ? 'text-success' : ''}`}
                    onClick={() => handlePlotClick('plotType')}
                  >
                    <strong> Type </strong>
                  </a>
                </li>
                <li className="list-group-item underline" style={{ margin: '2%', fontSize: 'larger' }}>
                  <a
                    className={`nav-link ${activePlot === 'plotArea' ? 'text-success' : ''}`}
                    onClick={() => handlePlotClick('plotArea')}
                  >
                    <strong> Area Size </strong>
                  </a>
                </li>
              </ul>

            </div>
            <div className='card-body'>
              <div className='row'>

                <div className="col-md-12" style={{ padding: '2%', textAlign: 'center' }}>
                  {activePlot === 'plotPopular' && <div style={{ padding: '1%' }} >
                    <div className='row'>
                      <div className='col-md-4' style={{ padding: '2%', marginTop: '2%', marginRight: '1%', borderRadius: '10px', border: 'solid 0.2px lightgrey', cursor: 'pointer' }}>
                        <a style={{ padding: '2%', display: 'inline-grid' }}> <strong> 80 sq yards </strong> Residentials </a>
                      </div>
                      <div className='col-md-3' style={{ padding: '2%', marginTop: '2%', marginRight: '1%', borderRadius: '10px', border: 'solid 0.2px lightgrey', cursor: 'pointer' }}>
                        <a style={{ padding: '2%', display: 'inline-grid' }}> <strong> 120 sq yards </strong> Residentials  </a>
                      </div>
                      <div className='col-md-4' style={{ padding: '2%', marginTop: '2%', marginRight: '1%', borderRadius: '10px', border: 'solid 0.2px lightgrey', cursor: 'pointer' }}>
                        <a style={{ padding: '2%', display: 'inline-grid' }}> <strong> 250 sq yards </strong> Residentials </a>
                      </div>
                    </div>
                    <div className='row'>
                      <div className='col-md-4' style={{ padding: '2%', marginTop: '2%', marginRight: '1%', borderRadius: '10px', border: 'solid 0.2px lightgrey', cursor: 'pointer' }}>
                        <a style={{ padding: '2%', display: 'inline-grid' }}> <strong> 500 sq yards </strong> Residentials </a>
                      </div>
                      <div className='col-md-3' style={{ padding: '2%', marginTop: '2%', marginRight: '1%', borderRadius: '10px', border: 'solid 0.2px lightgrey', cursor: 'pointer' }}>
                        <a style={{ padding: '2%', display: 'inline-grid' }}> <strong> On Installment </strong> Residentials  </a>
                      </div>
                      <div className='col-md-4' style={{ marginTop: '2%', marginRight: '1%', borderRadius: '10px', border: 'solid 0.2px lightgrey', cursor: 'pointer' }}>
                        <a style={{ padding: '2%', display: 'inline-grid' }}> <strong> With Possesion </strong> Residentials </a>
                      </div>
                    </div>
                  </div>
                  }
                  {activePlot === 'plotType' && <div style={{ padding: '1%' }} >
                    <div className='row'>
                      <div className='col-md-4' style={{ padding: '2%', marginTop: '2%', marginRight: '1%', borderRadius: '10px', border: 'solid 0.2px lightgrey', cursor: 'pointer' }}>
                        <a style={{ padding: '2%', display: 'inline-grid' }}> <strong> Residentials </strong>  </a>
                      </div>
                      <div className='col-md-3' style={{ padding: '2%', marginTop: '2%', marginRight: '1%', borderRadius: '10px', border: 'solid 0.2px lightgrey', cursor: 'pointer' }}>
                        <a style={{ padding: '2%', display: 'inline-grid' }}> <strong> Commercial </strong>  </a>
                      </div>
                      <div className='col-md-4' style={{ padding: '2%', marginTop: '2%', marginRight: '1%', borderRadius: '10px', border: 'solid 0.2px lightgrey', cursor: 'pointer' }}>
                        <a style={{ padding: '2%', display: 'inline-grid' }}> <strong> Plot File </strong> </a>
                      </div>
                    </div>
                    <div className='row'>
                      <div className='col-md-4' style={{ padding: '2%', marginTop: '2%', marginRight: '1%', borderRadius: '10px', border: 'solid 0.2px lightgrey', cursor: 'pointer' }}>
                        <a style={{ padding: '2%', display: 'inline-grid' }}> <strong> Plot Form </strong> </a>
                      </div>
                      <div className='col-md-3' style={{ padding: '2%', marginTop: '2%', marginRight: '1%', borderRadius: '10px', border: 'solid 0.2px lightgrey', cursor: 'pointer' }}>
                        <a style={{ padding: '2%', display: 'inline-grid' }}> <strong> Agricultural Plot </strong>  </a>
                      </div>
                      <div className='col-md-4' style={{ marginTop: '2%', marginRight: '1%', borderRadius: '10px', border: 'solid 0.2px lightgrey', cursor: 'pointer' }}>
                        <a style={{ padding: '2%', display: 'inline-grid' }}> <strong> Inudstrial Land </strong> </a>
                      </div>
                    </div>
                  </div>
                  }
                  {activePlot === 'plotArea' && <div style={{ padding: '1%' }} >
                    <div className='row'>
                      <div className='col-md-4' style={{ padding: '2%', marginTop: '2%', marginRight: '1%', borderRadius: '10px', border: 'solid 0.2px lightgrey', cursor: 'pointer' }}>
                        <a style={{ padding: '2%', display: 'inline-grid' }}> <strong>120-125 sql yd  </strong> Plots </a>
                      </div>
                      <div className='col-md-3' style={{ padding: '2%', marginTop: '2%', marginRight: '1%', borderRadius: '10px', border: 'solid 0.2px lightgrey', cursor: 'pointer' }}>
                        <a style={{ padding: '2%', display: 'inline-grid' }}> <strong> 500 sq yd </strong>Plots  </a>
                      </div>
                      <div className='col-md-4' style={{ padding: '2%', marginTop: '2%', marginRight: '1%', borderRadius: '10px', border: 'solid 0.2px lightgrey', cursor: 'pointer' }}>
                        <a style={{ padding: '2%', display: 'inline-grid' }}> <strong> 80 sq yd </strong> Plots </a>
                      </div>
                    </div>
                    <div className='row'>
                      <div className='col-md-4' style={{ padding: '2%', marginTop: '2%', marginRight: '1%', borderRadius: '10px', border: 'solid 0.2px lightgrey', cursor: 'pointer' }}>
                        <a style={{ padding: '2%', display: 'inline-grid' }}> <strong> 240-250 sq yd </strong> Plots </a>
                      </div>
                      <div className='col-md-3' style={{ padding: '2%', marginTop: '2%', marginRight: '1%', borderRadius: '10px', border: 'solid 0.2px lightgrey', cursor: 'pointer' }}>
                        <a style={{ padding: '2%', display: 'inline-grid' }}> <strong> 300 sq yd </strong> Plots </a>
                      </div>
                      <div className='col-md-4' style={{ marginTop: '2%', marginRight: '1%', borderRadius: '10px', border: 'solid 0.2px lightgrey', cursor: 'pointer' }}>
                        <a style={{ padding: '2%', display: 'inline-grid' }}> <strong> 50-60 sq yd </strong> Plots </a>
                      </div>
                    </div>
                  </div>
                  }
                </div>

              </div>
            </div>
          </div>
        </div>
        <div className='col-md-4'>
          <div className='card' style={{ height: '100%' }}>
            <div className='card-header'>
              <div>

                <h5> <FontAwesomeIcon icon={faBuildingLock} /> <strong style={{ marginLeft: '3%' }}> Commertials </strong> </h5>

              </div>
              <ul className='d-flex' style={{ placeContent: 'center', justifyContent: 'space-between' }}>
                <li className="list-group-item underline" style={{ margin: '2%', fontSize: 'larger' }}>
                  <a
                    className={`nav-link ${activeCommertial === 'commertialPopular' ? 'text-success' : ''}`}
                    onClick={() => handleCommertialClick('commertialPopular')}
                  >
                    <strong> Popular </strong>
                  </a>
                </li>
                <li className="list-group-item underline" style={{ margin: '2%', fontSize: 'larger' }}>
                  <a
                    className={`nav-link ${activeCommertial === 'commertialType' ? 'text-success' : ''}`}
                    onClick={() => handleCommertialClick('commertialType')}
                  >
                    <strong> Type </strong>
                  </a>
                </li>
                <li className="list-group-item underline" style={{ margin: '2%', fontSize: 'larger' }}>
                  <a
                    className={`nav-link ${activeCommertial === 'commertialArea' ? 'text-success' : ''}`}
                    onClick={() => handleCommertialClick('commertialArea')}
                  >
                    <strong> Area Size </strong>
                  </a>
                </li>
              </ul>

            </div>
            <div className='card-body'>
              <div className='row'>

                <div className="col-md-12" style={{ padding: '2%', textAlign: 'center' }}>
                  {activeCommertial === 'commertialPopular' && <div style={{ padding: '1%' }} >
                    <div className='row'>
                      <div className='col-md-4' style={{ padding: '2%', marginTop: '2%', marginRight: '1%', borderRadius: '10px', border: 'solid 0.2px lightgrey', cursor: 'pointer' }}>
                        <a style={{ padding: '2%', display: 'inline-grid' }}> <strong> 80 sq yards </strong> Residentials </a>
                      </div>
                      <div className='col-md-3' style={{ padding: '2%', marginTop: '2%', marginRight: '1%', borderRadius: '10px', border: 'solid 0.2px lightgrey', cursor: 'pointer' }}>
                        <a style={{ padding: '2%', display: 'inline-grid' }}> <strong> 120 sq yards </strong> Residentials  </a>
                      </div>
                      <div className='col-md-4' style={{ padding: '2%', marginTop: '2%', marginRight: '1%', borderRadius: '10px', border: 'solid 0.2px lightgrey', cursor: 'pointer' }}>
                        <a style={{ padding: '2%', display: 'inline-grid' }}> <strong> 250 sq yards </strong> Residentials </a>
                      </div>
                    </div>
                    <div className='row'>
                      <div className='col-md-4' style={{ padding: '2%', marginTop: '2%', marginRight: '1%', borderRadius: '10px', border: 'solid 0.2px lightgrey', cursor: 'pointer' }}>
                        <a style={{ padding: '2%', display: 'inline-grid' }}> <strong> 500 sq yards </strong> Residentials </a>
                      </div>
                      <div className='col-md-3' style={{ padding: '2%', marginTop: '2%', marginRight: '1%', borderRadius: '10px', border: 'solid 0.2px lightgrey', cursor: 'pointer' }}>
                        <a style={{ padding: '2%', display: 'inline-grid' }}> <strong> On Installment </strong> Residentials  </a>
                      </div>
                      <div className='col-md-4' style={{ marginTop: '2%', marginRight: '1%', borderRadius: '10px', border: 'solid 0.2px lightgrey', cursor: 'pointer' }}>
                        <a style={{ padding: '2%', display: 'inline-grid' }}> <strong> With Possesion </strong> Residentials </a>
                      </div>
                    </div>
                  </div>
                  }
                  {activeCommertial === 'commertialType' && <div style={{ padding: '1%' }} >
                    <div className='row'>
                      <div className='col-md-4' style={{ padding: '2%', marginTop: '2%', borderRadius: '10px', marginRight: '1%', border: 'solid 0.2px lightgrey', cursor: 'pointer' }}>
                        <a style={{ padding: '2%', display: 'inline-grid' }}> <strong> Residentials </strong>  </a>
                      </div>
                      <div className='col-md-3' style={{ padding: '2%', marginTop: '2%', borderRadius: '10px', marginRight: '1%', border: 'solid 0.2px lightgrey', cursor: 'pointer' }}>
                        <a style={{ padding: '2%', display: 'inline-grid' }}> <strong> Commercial </strong>  </a>
                      </div>
                      <div className='col-md-4' style={{ padding: '2%', marginTop: '2%', borderRadius: '10px', marginRight: '1%', border: 'solid 0.2px lightgrey', cursor: 'pointer' }}>
                        <a style={{ padding: '2%', display: 'inline-grid' }}> <strong> Plot File </strong> </a>
                      </div>
                    </div>
                    <div className='row'>
                      <div className='col-md-4' style={{ padding: '2%', marginTop: '2%', borderRadius: '10px', marginRight: '1%', border: 'solid 0.2px lightgrey', cursor: 'pointer' }}>
                        <a style={{ padding: '2%', display: 'inline-grid' }}> <strong> Plot Form </strong> </a>
                      </div>
                      <div className='col-md-3' style={{ padding: '2%', marginTop: '2%', borderRadius: '10px', marginRight: '1%', border: 'solid 0.2px lightgrey', cursor: 'pointer' }}>
                        <a style={{ padding: '2%', display: 'inline-grid' }}> <strong> Agricultural Plot </strong>  </a>
                      </div>
                      <div className='col-md-4' style={{ marginTop: '2%', marginRight: '1%', borderRadius: '10px', border: 'solid 0.2px lightgrey', cursor: 'pointer' }}>
                        <a style={{ padding: '2%', display: 'inline-grid' }}> <strong> Inudstrial Land </strong> </a>
                      </div>
                    </div>
                  </div>
                  }
                  {activeCommertial === 'commertialArea' && <div style={{ padding: '1%' }} >
                    <div className='row'>
                      <div className='col-md-4' style={{ padding: '2%', marginTop: '2%', borderRadius: '10px', marginRight: '1%', border: 'solid 0.2px lightgrey', cursor: 'pointer' }}>
                        <a style={{ padding: '2%', display: 'inline-grid' }}> <strong>120-125 sql yd  </strong> Plots </a>
                      </div>
                      <div className='col-md-3' style={{ padding: '2%', marginTop: '2%', marginRight: '1%', borderRadius: '10px', border: 'solid 0.2px lightgrey', cursor: 'pointer' }}>
                        <a style={{ padding: '2%', display: 'inline-grid' }}> <strong> 500 sq yd </strong>Plots  </a>
                      </div>
                      <div className='col-md-4' style={{ padding: '2%', marginTop: '2%', marginRight: '1%', borderRadius: '10px', border: 'solid 0.2px lightgrey', cursor: 'pointer' }}>
                        <a style={{ padding: '2%', display: 'inline-grid' }}> <strong> 80 sq yd </strong> Plots </a>
                      </div>
                    </div>
                    <div className='row'>
                      <div className='col-md-4' style={{ padding: '2%', marginTop: '2%', marginRight: '1%', borderRadius: '10px', border: 'solid 0.2px lightgrey', cursor: 'pointer' }}>
                        <a style={{ padding: '2%', display: 'inline-grid' }}> <strong> 240-250 sq yd </strong> Plots </a>
                      </div>
                      <div className='col-md-3' style={{ padding: '2%', marginTop: '2%', marginRight: '1%', borderRadius: '10px', border: 'solid 0.2px lightgrey', cursor: 'pointer' }}>
                        <a style={{ padding: '2%', display: 'inline-grid' }}> <strong> 300 sq yd </strong> Plots </a>
                      </div>
                      <div className='col-md-4' style={{ marginTop: '2%', marginRight: '1%', borderRadius: '10px', border: 'solid 0.2px lightgrey', cursor: 'pointer' }}>
                        <a style={{ padding: '2%', display: 'inline-grid' }}> <strong> 50-60 sq yd </strong> Plots </a>
                      </div>
                    </div>
                  </div>
                  }
                </div>

              </div>
            </div>
          </div>
        </div>


      </div>

      <Footer />
    </div>
  )
}

export default Main