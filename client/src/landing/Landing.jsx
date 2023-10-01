import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom'
import Header from './Header'
import 'bootstrap/dist/css/bootstrap.min.css';


import './component.css'
import jobspk from '../assets/jobz.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faPhoneAlt, faArrowRight, faEnvelope, faMapMarker, faSquarePlus, faSquareMinus } from '@fortawesome/free-solid-svg-icons';
import { faTelegram } from '@fortawesome/free-brands-svg-icons';
import axios from 'axios';
import Footer from './footer'

function Landing() {
  const [values, setValues] = useState({
    email: "",
    password: ""
  });
  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add the login logic here, such as sending the credentials to a server.

    axios.post(`http://localhost:8800/login`, values).then(res => {
      console.log(res);
      if (res.data.login) {
        console.log("IN FIF ")
        try {

          navigate(`/`)
        } catch (e) { console.log(e) }
      }
      else {
        alert("No Record!!!")
      }
    })
  };
  const [isSecCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isSecCollapsed);
  };
  const [isFirstCollapsed, setIsFirstCollapsed] = useState(true);

  const toggleFirstCollapse = () => {
    setIsFirstCollapsed(!isFirstCollapsed);
  };
  return (
    <div>
      <Header />
      {/* <div>
        <div className="card"   style={{ background: '#020024',backgroundSize: 'cover',backgroundPosition: 'center' }}>
          <div className='card-body'>

          </div>
        </div>
      </div> */}
      <div className='p-relative wide-container overflow-hidden z-1'>
        <section className='wide-wrapper p-relative z-1 bg-space'>
          <div className='p-relative content-block' style={{ color: '#01011e' }}>
            <div className='card ' style={{ background: '#01011e' }}>
              <div className='card-body'>
                <div className='row' style={{ marginBottom: '10%' }}>
                  <div className='col-lg-4 '>
                    <h4 className='mainHeading text-white' >
                      <strong>    WELCOME <br />TO  OUR <br />PAGE </strong>
                    </h4>
                    <p className='ml-3 text-white' >Scan the code and infrastructure that support your website for security vulnerabilities. </p>
                    <button className='btn btn-primary ' style={{ marginRight: '5%', padding: '3%', paddingRight: '7%', paddingLeft: '7%' }}> Start Free </button>
                    <button className="btn btn-demo btn-hover" style={{ marginLeft: '5%', padding: '3%', paddingRight: '7%', paddingLeft: '7%' }}>Dailies <FontAwesomeIcon icon={faArrowRight} /></button>

                  </div>
                  <div className='col-lg-2'>  </div>
                  <div className='col-lg-4'>
                    <h4 className='mainHeading text-white' >
                      YOU CAN FIND  <br /> A LOT  <br /> IN HERE
                    </h4>
                    <p className='ml-3 text-white'  >Scan the code and infrastructure that support your website for security vulnerabilities. </p>
                  </div>
                  <div className='col-lg-2'>  </div>

                </div>

              </div>
            </div>
            <div className='card'>

              <div className='card-body'>
                <div className='row'>
                  <div className='col-lg-2'></div>
                  <div className='col-lg-8'>
                    <div className='row'>
                      <h4 className='secondHeading'><strong>Website security matters   </strong> </h4>
                      <p className='text-secondary' style={{ fontSize: 'x-large', textAlign: 'center' }} > Vulnerability management is a critical requirement for anyone running web applications or interactive and static websites. These public-facing assets are common attack vectors for malicious actors seeking unauthorized access to systems and data, so it’s important to make sure they’re secured properly with website security checks. You can scan website code and dependencies with Snyk in three steps: </p>
                    </div>
                    <div className='row' style={{ textAlign: '-webkit-center' }}>
                      <h4 className='secondHeading'><strong> Job Websites  </strong></h4>
                      <div >
                        <img style={{ width: '15%', margin: '4%' }} src="https://www.edigitalagency.com.au/wp-content/uploads/Linkedin-logo-png.png" alt="LinkedIn" />
                        <img style={{ width: '15%', margin: '4%' }} src="https://logos-world.net/wp-content/uploads/2021/02/Indeed-Logo.png" alt="Indeed" />
                        <img style={{ width: '15%', margin: '4%' }} src="https://s.rozee.pk/r/i/en/fb-logo.gif" alt="Rozzee.pk" />
                      </div>
                      <div >
                        <img style={{ width: '15%', margin: '4%' }} src="https://blog.mustakbil.com/wp-content/uploads/2016/07/Mustakbil-Logo.jpg" alt="Mutakbill.pk" />
                        <img style={{ width: '15%', margin: '4%' }} src={jobspk} alt="Jobz.pk" />
                        <img style={{ width: '15%', margin: '4%' }} src="https://ntsmcqs.com/wp-content/uploads/2022/10/Njp.gov_.pk-Jobs-2022-Online-Apply-Roll-No-Slip.png" alt="National Job Portal" />
                      </div>

                    </div>
                  </div>

                  <div className='col-lg-2'></div>

                </div>
              </div>

            </div>
            <div className='card' style={{ background: '#01011e' }}>

              <div className='card-body'>
                <div className='row'>
                  <div className='col-lg-2'></div>
                  <div className='col-lg-8'>
                    <div className='row'>
                      <h4 className='thirdHeading'><strong>Need a Place to Live  </strong> </h4>
                      <p className='text-secondary' style={{ fontSize: 'x-large', textAlign: 'center' }} > Vulnerability management is a critical requirement for anyone running web applications or interactive and static websites. These public-facing assets are common attack vectors for malicious actors seeking unauthorized access to systems and data, so it’s important to make sure they’re secured properly with website security checks. You can scan website code and dependencies with Snyk in three steps: </p>
                    </div>
                    <div className='row' style={{ textAlign: '-webkit-center' }}>
                      <h4 className='thirdHeading'><strong> Real Estates  Websites  </strong></h4>
                      <div >
                        <img style={{ width: '15%', margin: '4%' }} src="https://asset.brandfetch.io/idSUEy4OLc/idGtCYF_Nu.png" alt="Graana" />
                        <img style={{ width: '15%', margin: '4%' }} src="https://play-lh.googleusercontent.com/8LfdOiQHWMsE1WXP_18yj61asw00uAHucGH2mOpDSesc_C5xEU9KJ_n1R0tLuhPZRW88=w600-h300-pc0xffffff-pd" alt="Zameen.pk" />
                        <img style={{ width: '15%', margin: '4%' }} src="https://lever-client-logos.s3-us-west-2.amazonaws.com/16753deb-c572-4def-b720-6dfffeba5419-1595302795445.png" alt="laumdi" />
                      </div>
                      <div >
                        <img style={{ width: '15%', margin: '4%' }} src="https://s2.glbimg.com/2DynHfVJte5SA_FYWWE9InMOqfQ=/e.glbimg.com/og/ed/f/original/2018/11/21/1_Ve2w4Tj.jpg" alt="Olx" />
                        <img style={{ width: '15%', margin: '4%' }} src="data:image/png;base64,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" alt="Illan" />
                        <img style={{ width: '15%', margin: '4%' }} src="https://media.licdn.com/dms/image/C5103AQF0lkJ5Ne2DoQ/profile-displayphoto-shrink_800_800/0/1517364011405?e=2147483647&v=beta&t=9vPJahu6vGeOOo6OFHHAoSMD5KgzcQf5E-DFJSPzKfU" alt="National Job Portal" />
                      </div>

                    </div>
                  </div>

                  <div className='col-lg-2'></div>

                </div>
              </div>

            </div>
            <div className='card'>

              <div className='card bg-light' >
                <h2 style={{ textAlign: 'center', marginTop: '4%' }}> <strong>FAQs </strong>  </h2>
                <div className='card-body' style={{ marginLeft: ' 15%', marginRight: '15%', padding: '8%' }}>

                  <div
                    className="hover-background"
                    data-toggle="collapse"
                    data-target="#collapseFirstContent"
                    aria-expanded={!isFirstCollapsed}
                    aria-controls="collapseFirstContent"
                    onClick={toggleFirstCollapse}>
                    <p style={{ fontSize: 'larger', color: '#01011e', cursor: 'pointer', padding: '2%' }}> <FontAwesomeIcon icon={isFirstCollapsed ? faSquarePlus : faSquareMinus} shake />    <span style={{ marginLeft: '2%' }}>Why is vulnerability scanning important?</span>  </p>
                  </div>
                  <div
                    id="collapseFirstContent"
                    className={`collapse ${isFirstCollapsed ? '' : 'show'}`}
                  >
                    <div className="card-body">
                      <p>
                        This is the content of the collapsible card. You can replace this
                        with your actual content.
                      </p>
                    </div>
                  </div>
                  <div data-toggle="collapse"
                    className="hover-background"
                    data-target="#collapseContent"
                    aria-expanded={!isSecCollapsed}
                    aria-controls="collapseContent"
                    onClick={toggleCollapse}>
                    <p style={{ fontSize: 'larger', color: '#01011e', cursor: 'pointer', padding: '2%' }}> <FontAwesomeIcon icon={isSecCollapsed ? faSquarePlus : faSquareMinus} shake />   <span style={{ marginLeft: '2%' }}>How does website vulnerability scanning work?</span>  </p>
                  </div>
                  <div
                    id="collapseContent"
                    className={`collapse ${isSecCollapsed ? '' : 'show'}`}
                  >
                    <div className="card-body">
                      <p>
                        This is the content of the collapsible card. You can replace this
                        with your actual content.
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
            <div className='row' >

              <div className='col-lg-6 text-white' style={{ background: '#01011e', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
                <div>

                  <div style={{ marginLeft: '20%', marginTop: '5%' }} >
                    <p> <FontAwesomeIcon icon={faMapMarker} />  <span style={{ marginLeft: '1%' }}> Address </span> </p>
                  </div>
                  <div style={{ marginLeft: '20%', marginTop: '5%' }} >
                    <p>  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce aliquet justo eget aliquam hendrerit </p>
                  </div>
                  <div style={{ marginLeft: '20%', marginTop: '5%' }} >
                    <p> <FontAwesomeIcon icon={faPhone} /> <span style={{ marginLeft: '1%' }} >Phone</span> </p>
                  </div>
                  <div style={{ marginLeft: '20%', marginTop: '5%' }} >
                    <p> +000000000</p>
                  </div>
                  <div style={{ marginLeft: '20%', marginTop: '5%' }} >
                    <p><FontAwesomeIcon icon={faEnvelope} /> <span style={{ marginLeft: '1%' }} > Email </span> </p>
                  </div>
                  <div style={{ marginLeft: '20%', marginTop: '5%' }} >
                    <p>company@gmail.com  </p>
                  </div>
                </div>

              </div>
              <div className='col-lg-6' style={{ marginTop: '2%', marginBottom: '2%' }} >
                <div className='card'>
                  <div className='card-header'>
                    <h4 className='secondHeading' style={{ textAlign: 'center', color: '#01011e' }}> Send us a Message </h4>

                  </div>
                  <div className='card-body'>
                    <form onSubmit={handleSubmit}>
                      <div className="form-group">
                        <label htmlFor="first_name" className='mb-2 mt-2' style={{ color: '#01011e' }}><h5> First Time </h5> </label>
                        <input
                          type="text"
                          id="first_name"
                          name="first_name"
                          onChange={handleChange}
                          className="form-control mt-2"
                          required
                        />
                        <label htmlFor="last_name" className='mb-2 mt-2' style={{ color: '#01011e' }}><h5> Last Time </h5> </label>
                        <input
                          type="text"
                          id="last_name"
                          name="last_name"
                          onChange={handleChange}
                          className="form-control mt-2"
                          required
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="email" className='mb-2 mt-2 ' style={{ color: '#01011e' }}><h5> Email Address </h5> </label>
                        <input
                          type="text"
                          id="email"
                          name="email"
                          onChange={handleChange}
                          className="form-control mt-2"
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="phone" className='mb-2 mt-2 ' style={{ color: '#01011e' }}> <h5>Phone </h5></label>
                        <input
                          type="number"
                          id="phone"
                          name="phone"
                          className="form-control mt-2 mb-2"
                          required
                        />
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'center' }}>

                        <button type="submit" className="btn btn-primary " style={{ paddingRight: '6%', paddingLeft: '6%', paddingTop: '2%', paddingBottom: '2%', margin: '2%' }}>
                          <FontAwesomeIcon icon={faTelegram} style={{ marginRight: '1%' }} />  Send
                        </button>
                      </div>

                    </form>

                  </div>
                </div>

              </div>





              <Footer />
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Landing