import React, { useState, useEffect } from 'react';
import Header from '../Header'
import Footer from '../footer'
import '../component.css'
import Select from 'react-select';
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
// import Slider from 'react-slider';
import Slider from '@mui/material/Slider';

import backgroundImage from '../../assets/realEstateMain.jpg'

function Filters({ onApiResponse }) {

  const [isCardVisible, setCardVisibility] = useState(false);
  const [activeButton, setActiveButton] = useState('Buy'); // Initialize the active button
  const [selectedOption, setSelectedOption] = useState(null);
  const [fetchedStates, setFetchedStates] = useState([]);
  const [selectedState, setSelectedState] = useState(null);
  const [selectedPropertyType, setselectedPropertyType] = useState(null);
  const [cityOptions, setCityOptions] = useState([]);
  const [selectedCity, setSelectedCity] = useState(null);
  const [categoryOptions, setCategoryOptions] = useState([]);
  const [subcategoryOptions, setSubcategoryOptions] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);
  // setting price range dropdown
  const minRange = 0;
  const maxRange = 10000000;
  const [priceRange, setPriceRange] = useState([0, 1000000000]);
  // setting marla range dropdown
  const minMarlaRange = 0;
  const maxMarlaRange = 10000;
  const [marlaRange, setMarlaRange] = useState([0, 1000000000]);
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
  const defaultStyles = {
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
  }
  const changeStyles = {
    control: (provided, state) => ({
      ...provided,
      width: "90%",
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
  }
  const options = [
    { label: "Management", value: 1 },
    { label: "Technology", value: 2 },
    { label: "Finanace", value: 3 }
  ]

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  const handleSelectChange = (selectedState) => {
    // console.log(selectedState)
    setSelectedOption(selectedState);
  };
  //making province dropdown
  useEffect(() => {
    const fetchAllStates = async () => {
      try {
        const res = await axios.get("http://localhost:8800/province")
        setFetchedStates(res.data)
      }
      catch (err) {
        console.log(err)
      }
    }
    fetchAllStates()
  }, [])
  const handleStateChange = (value) => {
    setSelectedState(value);
  };




  //province and cities dropdown on province change
  useEffect(() => {
    if (selectedState !== null) {
      const fetchCityData = async () => {
        try {
          const response = await axios.get(`http://localhost:8800/cities/${selectedState.value}`);
          const cityOptions = response.data.map((city) => ({
            value: city.id,
            label: city.city_name,
          }));
          setCityOptions(cityOptions);
        } catch (error) {
          console.error('Error fetching city data:', error);
        }
      };
      fetchCityData();
    } else {
      // console.log('seelctedstare' + selectedState)
      setCityOptions([]);
    }
  }, [selectedState]);


  const handleCityChange = (selectedCity) => {
    // console.log(selectedCity.value)
    setSelectedCity(selectedCity.value);
  };
  //dropdown for property type

  // const data = [
  //   {
  //     label: 'Group 1',
  //     options: [
  //       { value: 'option1', label: 'Option 1' },
  //       { value: 'option2', label: 'Option 2' },
  //       { value: 'option3', label: 'Option 3' },
  //     ],
  //   },
  //   {
  //     label: 'Group 2',
  //     options: [
  //       { value: 'option4', label: 'Option 4' },
  //       { value: 'option5', label: 'Option 5' },
  //       { value: 'option6', label: 'Option 6' },
  //     ],
  //   },
  // ];
  const handlePropertyChange = (selectedPropertyType) => {
    setselectedPropertyType(selectedPropertyType);
  };

  useEffect(() => {
    // Fetch category options
    axios.get('http://localhost:8800/getCategories').then((response) => {
      setCategoryOptions(response.data);
    });
  }, []);

  const handleCategoryChange = (selectedCategory) => {
    setSelectedCategory(selectedCategory ? selectedCategory.value : null);

    // Fetch subcategory options based on the selected category
    if (selectedCategory) {
      axios.get(`http://localhost:8800/getSubcategories/${selectedCategory.value}`).then((response) => {
        const subcategories = response.data;
        console.log('Subcategories:', subcategories);
        if (response.data) {
          setSubcategoryOptions(response.data);
        }
        else {
          console.error('Invalid subcategories data:', subcategories);
          setSubcategoryOptions([]);
        }
      })
        .catch((error) => {
          console.error('Error fetching subcategories:', error);
          setSubcategoryOptions([]);
        });
    } else {
      setSubcategoryOptions([]);
    }

  };

  const handleSubcategoryChange = (selectedSubcategory) => {
    setSelectedSubcategory(selectedSubcategory ? selectedSubcategory.value : null);
  };

  const handlePriceRange = (event, newValue) => {
    setPriceRange(newValue);
  };
  const handleMarlaRange = (event, newValue) => {
    setMarlaRange(newValue);
  };

  const [transactions, setTransactions] = useState([]);

  const handleFilterTransactions = () => {
    fetchAllTransaction()
  }
  const fetchAllTransaction = async () => {
    try {

      const res = await axios.get(`http://localhost:8800/transactions/${selectedSubcategory.value || selectedSubcategory}/${selectedCity.value || selectedCity}`);
      console.log(res);
      setTransactions(res.data);
      onApiResponse(res.data);

    } catch (err) {
      console.error(err);
    }
  };



  return (
    <div>
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

            <div className='col-md-10' style={{ backgroundColor: " rgba(86, 90, 92, 0.5)" }}>
              <div className='row' style={{ padding: '2%' }}>
                <div className='col-md-2' style={{ display: 'flex', alignItems: 'flex-start', marginRight: '1%' }}>
                  <Select
                    value={selectedState}
                    onChange={handleStateChange}
                    options={[
                      { value: '', label: 'Select a state' }, // Placeholder option
                      ...fetchedStates.map((state) => ({ value: state.id, label: state.province_name }))
                    ]}
                    placeholder="Province"
                    styles={defaultStyles}
                    // data={fetchedStates.map((state) => ({ value: state.id, label: state.province_name }))}

                    components={{
                      DropdownIndicator: ({ selectProps: { menuIsOpen } }) => (
                        <FontAwesomeIcon icon={menuIsOpen ? faChevronUp : faChevronDown} />
                      ),
                    }}
                  />

                </div>
                <div className='col-md-2' style={{ marginRight: '1%' }}>
                  <Select
                    value={cityOptions.find(option => option.value === selectedCity)}
                    onChange={handleCityChange}
                    options={cityOptions}
                    placeholder="City"
                    styles={defaultStyles}
                    components={{
                      DropdownIndicator: ({ selectProps: { menuIsOpen } }) => (
                        <FontAwesomeIcon icon={menuIsOpen ? faChevronUp : faChevronDown} />
                      ),
                    }}
                  />

                </div>
                <div className='col-md-5'>
                  <input style={{
                    width: '100%', height: '90%', border: '1px solid white', outline: 'none',
                  }} onFocus={(e) => e.target.style.border = '1px solid blue'}
                    onBlur={(e) => e.target.style.border = '1px solid white'}
                    onClick={handleInputClick}
                  />
                </div>
                <div className='col-md-2' style={{ textAlign: '-webkit-left', marginLeft: 'auto' }}>
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
                    onClick={handleFilterTransactions}
                  >
                    <strong> FIND </strong>
                  </button>
                </div>
              </div>
              {isCardVisible && (
                <div className={`row transition-element ${isCardVisible ? 'visible' : 'hidden'}`} style={{ paddingRight: '2%', paddingLeft: '2%', marginTop: '1%' }}>

                  <div className="col-md-3">
                    <Select
                      options={categoryOptions}
                      value={categoryOptions.find((option) => option.value === selectedCategory)}
                      onChange={handleCategoryChange}
                      placeholder="Property Type"
                      styles={changeStyles}
                      isSearchable={true} // Add this line if you want to enable searching
                    />
                  </div>

                  <div className="col-md-3">
                    <Select
                      options={subcategoryOptions}
                      value={subcategoryOptions.find((option) => option.value === selectedSubcategory)}
                      onChange={handleSubcategoryChange}
                      placeholder="Property Category"
                      styles={changeStyles}
                      isSearchable={true} // Add this line if you want to enable searching
                    />
                  </div>


                  <div className='col-md-3' style={{ background: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <span style={{ color: 'grey' }}>Price Range</span>
                    <Slider
                      value={priceRange}
                      onChange={handlePriceRange}
                      valueLabelDisplay="auto"
                      min={minRange} // Set the minimum value
                      max={maxRange} // Set the maximum value
                    />


                  </div>
                  <div className='col-md-3' style={{ background: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <span style={{ color: 'grey' }}>Area Marla</span>
                    <Slider
                      value={marlaRange}
                      onChange={handleMarlaRange}
                      valueLabelDisplay="auto"
                      min={minMarlaRange} // Set the minimum value
                      max={maxMarlaRange} // Set the maximum value
                    />


                  </div>

                </div>
              )}

              {/* {selectedCategory == "Plots" &&
                (
                  <div className={`row transition-element ${isCardVisible ? 'visible' : 'hidden'}`} style={{ paddingRight: '2%', paddingLeft: '2%', marginTop: '1%' }}>
                    <div className='col-md-3'>
                      <Select
                        value={selectedCity}
                        onChange={handleCityChange}
                        options={cityOptions}
                        placeholder="City"
                        styles={defaultStyles}
                        components={{
                          DropdownIndicator: ({ selectProps: { menuIsOpen } }) => (
                            <FontAwesomeIcon icon={menuIsOpen ? faChevronUp : faChevronDown} />
                          ),
                        }}
                      />

                    </div>
                    <div className='col-md-3'>
                      <Select
                        value={selectedPropertyType}
                        onChange={handlePropertyChange}
                        options={data.map((group) => ({
                          label: group.label,
                          options: group.options.map((option) => ({
                            value: option.value,
                            label: option.label,
                          })),
                        }))}

                        isMulti={false} // Set to true for multi-select
                        styles={defaultStyles}
                        placeholder="Property Type"
                        components={{
                          DropdownIndicator: ({ selectProps: { menuIsOpen } }) => (
                            <FontAwesomeIcon icon={menuIsOpen ? faChevronUp : faChevronDown} />
                          ),
                        }}
                      />


                    </div>


                  </div>
                )} */}

              <div className='row' style={{ paddingRight: '2%', paddingLeft: '2%' }}>
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
          <div className='row'>


          </div>
        </div>
      </div>
    </div>
  )
}

export default Filters