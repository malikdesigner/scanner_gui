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
import PropertyFilter from './PropertyFilter';

function Main() {
  // const [activeHome, setActiveHome] = useState('homePopular');
  // const [activePlot, setActivePlot] = useState('plotPopular');
  // const [activeCommertial, setActiveCommertial] = useState('commertialPopular');
  const [apiResponse, setApiResponse] = useState(null);

  // const handleAnchorClick = (anchor) => {
  //   setActiveHome(anchor);
  // };

  // const handlePlotClick = (anchor) => {
  //   setActivePlot(anchor);
  // };

  // const handleCommertialClick = (anchor) => {
  //   setActiveCommertial(anchor);
  // };

  const handleApiResponse = (response) => {
    setApiResponse(response);
  };
  return (
    <div>
      <Header />
      <Filters onApiResponse={handleApiResponse}/>
      <Articles apiResponse={apiResponse}/>
      {/* <PropertyFilter /> */}

      <Footer />
    </div>
  )
}

export default Main