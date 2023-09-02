import React, { useState, useEffect } from 'react';
import Header from '../Header'
import Footer from '../footer'
import '../component.css'
import Select from 'react-select';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

import backgroundImage from '../../assets/realEstateMain.jpg'
function Main() {
  const [isCardVisible, setCardVisibility] = useState(false);

  const handleInputClick = () => {
    // When the input is clicked, set isCardVisible to true to display the card
    setCardVisibility(true);
  };
  const handleOptionClick = () => {
    // When the input is clicked, set isCardVisible to true to display the card
    setCardVisibility(!isCardVisible);
  };

  const divStyle = {
    background: `url(${backgroundImage})`,
    backgroundSize: 'cover', // Adjust the background size as needed
    backgroundPosition: 'center', // Adjust the background position as needed
    width: '100%',
    height: '500px', // Set the height of the div
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    // opacity:'0.5'
  };

  const [activeButton, setActiveButton] = useState('Buy'); // Initialize the active button

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };
  const options = [
    { label: "Management", value: 1 },
    { label: "Technology", value: 2 },
    { label: "Finanace", value: 3 }
  ]
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelectChange = (selectedOption) => {
    setSelectedOption(selectedOption);
  };
  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      width: 200,
      padding: "3%",
      paddingRight: 5,
      border: state.isFocused ? '1px solid white' : provided.border,



    }),
    menu: (provided, state) => ({
      ...provided,
      width: 200,
      //direction: 'rtl', // Align the menu to the right
      padding: 10,


    }),
    indicatorSeparator: (provided, state) => ({
      ...provided,
      backgroundColor: 'white', // Set background color to white
    }),
  };
  return (
    <div>
      <Header />
      <div className='row ' style={divStyle}>
        <div className='padding:2%'>
          <h5 style={{ textAlign: 'center', marginTop: '4%' }}> Search Properties for sale </h5>
          <div style={{
            alignItems: 'center', // Center-align vertically
            textAlign: '-webkit-center',
            marginTop: '1%'
          }}>
            <button
              className={`btn ${activeButton === 'Buy' ? 'active' : ''}`}
              style={{
                backgroundColor: activeButton === 'Buy' ? 'rgba(86, 90, 92, 0.5)' : '#fff',
                color: activeButton === 'Buy' ? '#fff' : '#444',
                paddingRight: '6%',
                paddingLeft: '6%',
                paddingTop: '1%',
                paddingBottom: '1%',
                marginLeft: '4%',
              }}
              onClick={() => handleButtonClick('Buy')}
            >
              <strong> Buy </strong>
            </button>
            <button
              className={`btn ${activeButton === 'Rent' ? 'active' : ''}`}
              style={{
                backgroundColor: activeButton === 'Rent' ? 'rgba(86, 90, 92, 0.5)' : '#fff',
                color: activeButton === 'Rent' ? '#fff' : '#444',
                paddingRight: '6%',
                paddingLeft: '6%',
                paddingTop: '1%',
                paddingBottom: '1%',
                marginLeft: '4%',
              }}
              onClick={() => handleButtonClick('Rent')}
            >
              <strong> Rent </strong>
            </button>
            <button
              className={`btn ${activeButton === 'Projects' ? 'active' : ''}`}
              style={{
                backgroundColor: activeButton === 'Projects' ? 'rgba(86, 90, 92, 0.5)' : '#fff',
                color: activeButton === 'Projects' ? '#fff' : '#444',
                paddingRight: '6%',
                paddingLeft: '6%',
                paddingTop: '1%',
                paddingBottom: '1%',
                marginLeft: '4%',
              }}
              onClick={() => handleButtonClick('Projects')}
            >
              <strong> Projects </strong>
            </button>
          </div>
          <div className='row' style={{ display: 'flex', justifyContent: 'center', marginTop: '2%' }}>

            <div className='col-md-8'>
              <div className='row' style={{ backgroundColor: " rgba(86, 90, 92, 0.5)", padding: '2%' }}>
                <div className='col-md-3' style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-end' }}>
                  <Select
                    value={selectedOption}
                    onChange={handleSelectChange}
                    options={options}
                    placeholder="Countries"
                    styles={customStyles}
                    components={{
                      DropdownIndicator: ({ selectProps: { menuIsOpen } }) => (
                        <FontAwesomeIcon icon={menuIsOpen ? faChevronUp : faChevronDown} />
                      ),
                    }}
                  />
                  {selectedOption && (
                    <div>
                      <p>Selected Value: {selectedOption.label}</p>
                    </div>
                  )}
                </div>
                <div className='col-md-7'>
                  <input style={{
                    width: '100%', height: '90%', border: '1px solid white', outline: 'none', // Remove the default focus outline
                  }} onFocus={(e) => e.target.style.border = '1px solid blue'}
                    onBlur={(e) => e.target.style.border = '1px solid white'}
                    onClick={handleInputClick}
                  />
                </div>
                <div className='col-md-2' style={{ textAlign: '-webkit-left' }}>
                  <button
                    className='btn'
                    style={{
                      backgroundColor: '#2b892f',
                      color: '#fff',
                      paddingRight: '25%',
                      paddingLeft: '25%',
                      paddingTop: '8%',
                      paddingBottom: '8%',

                    }}

                  >
                    <strong> FIND </strong>
                  </button>
                </div>
              </div>
              {isCardVisible && (
                <div className={`row transition-element ${isCardVisible ? 'visible' : 'hidden'}`} style={{ backgroundColor: " rgba(86, 90, 92, 0.5)", paddingRight: '2%', paddingLeft: '2%' }}>
                  <div className='col-md-3'>
                    <Select
                      value={selectedOption}
                      onChange={handleSelectChange}
                      options={options}
                      placeholder="Countries"
                      styles={customStyles}
                      components={{
                        DropdownIndicator: ({ selectProps: { menuIsOpen } }) => (
                          <FontAwesomeIcon icon={menuIsOpen ? faChevronUp : faChevronDown} />
                        ),
                      }}
                    />
                    {selectedOption && (
                      <div>
                        <p>Selected Value: {selectedOption.label}</p>
                      </div>
                    )}
                  </div>
                  <div className='col-md-3'>
                    <Select
                      value={selectedOption}
                      onChange={handleSelectChange}
                      options={options}
                      placeholder="Countries"
                      styles={customStyles}
                      components={{
                        DropdownIndicator: ({ selectProps: { menuIsOpen } }) => (
                          <FontAwesomeIcon icon={menuIsOpen ? faChevronUp : faChevronDown} />
                        ),
                      }}
                    />
                    {selectedOption && (
                      <div>
                        <p>Selected Value: {selectedOption.label}</p>
                      </div>
                    )}
                  </div>
                  <div className='col-md-3'>
                    <Select
                      value={selectedOption}
                      onChange={handleSelectChange}
                      options={options}
                      placeholder="Countries"
                      styles={customStyles}
                      components={{
                        DropdownIndicator: ({ selectProps: { menuIsOpen } }) => (
                          <FontAwesomeIcon icon={menuIsOpen ? faChevronUp : faChevronDown} />
                        ),
                      }}
                    />
                    {selectedOption && (
                      <div>
                        <p>Selected Value: {selectedOption.label}</p>
                      </div>
                    )}
                  </div>
                  <div className='col-md-3'>
                    <Select
                      value={selectedOption}
                      onChange={handleSelectChange}
                      options={options}
                      placeholder="Countries"
                      styles={customStyles}
                      components={{
                        DropdownIndicator: ({ selectProps: { menuIsOpen } }) => (
                          <FontAwesomeIcon icon={menuIsOpen ? faChevronUp : faChevronDown} />
                        ),
                      }}
                    />
                    {selectedOption && (
                      <div>
                        <p>Selected Value: {selectedOption.label}</p>
                      </div>
                    )}
                  </div>
                </div>
              )}
              <div className='row' style={{ backgroundColor: " rgba(86, 90, 92, 0.5)", paddingRight: '2%', paddingLeft: '2%' }}>
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                  <p style={{ color: 'white', cursor: 'pointer', marginTop: '1%', marginRight: '1%' }} onClick={handleOptionClick}>
                    <FontAwesomeIcon icon={isCardVisible ? faChevronUp : faChevronDown} /> {isCardVisible ? 'Less Option' : 'More Option'}
                  </p>
                  <span style={{ color: 'white', marginRight: '1%' }}> | </span>
                  <p style={{ color: 'greenyellow', cursor: 'pointer', marginTop: '1%', marginRight: '1%' }}>
                    {isCardVisible ? 'Less Option' : 'More Option'}
                  </p>
                  <span style={{ color: 'white', marginRight: '1%' }}> | </span>
                  <p style={{ color: 'greenyellow', cursor: 'pointer', marginTop: '1%', marginRight: '1%' }}>
                    {isCardVisible ? 'Less Option' : 'More Option'}
                  </p>
                  <span style={{ color: 'white', marginRight: '1%' }}> | </span>
                  <p style={{ color: 'greenyellow', cursor: 'pointer', marginTop: '1%', marginRight: '1%' }}>
                    {isCardVisible ? 'Less Option' : 'More Option'}
                  </p>
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