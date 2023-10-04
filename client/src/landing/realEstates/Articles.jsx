import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faSink, faMap, faPhone, faMobile } from '@fortawesome/free-solid-svg-icons';
import { Button, Modal } from 'react-bootstrap';
import { Link } from '@mui/material';
import { formatDistanceToNow } from 'date-fns';
import 'bootstrap/dist/css/bootstrap.min.css';
import Pagination from 'react-bootstrap/Pagination';
function TimeAgo({ date }) {
    const timeAgo = formatDistanceToNow(new Date(date), { addSuffix: true });
    return timeAgo;
}
function Articles({ apiResponse }) {
    
    const [transaction, settransaction] = useState([]);
    const [selectedTransaction, setSelectedTransaction] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [modalValue, setModalValue] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5; // Number of items to display per page

    // Assuming apiResponse is an array of items
    if (apiResponse === null) {
        return ;
    }
    const totalPages = Math.ceil(apiResponse.length / itemsPerPage);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = apiResponse.slice(indexOfFirstItem, indexOfLastItem);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };
    const handleStateChange = (value) => {
        setSelectedTransaction(value);
    };

    const handleShow = (value) => {
        setModalValue(value)
        setShowModal(true);
    }
    const handleClose = () => setShowModal(false);

    return (
        <div className='row' style={{ marginTop: '2%' }}>
            <div className='col-md-1'></div>
            <div className='col-md-8'>
                <div className='card'>
                    <div className='card-header' style={{ background: 'white' }}>
                        <p> Filters </p>
                    </div>
                    <div className='card-body'>
                        {currentItems.length > 0 ? (
                            currentItems.map((item) => (
                                <div className="row">
                                    <div className="col-md-6">
                                        <a href={item.mainLink} style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}>

                                            <picture>
                                                <source type="image/webp" srcSet={JSON.parse(item.images)[0]} />
                                                <img src={JSON.parse(item.images)[0]} role="presentation" alt="Property" style={{ width: '100%', height: 'auto' }} />
                                            </picture>
                                        </a>
                                    </div>
                                    <div className="col-md-6">
                                        <a href={item.mainLink} style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}>
                                            <h4 className='mb-2'> <strong >{item.price}  </strong></h4>
                                            <h5 className='mb-2'> <strong> {item.title} </strong>  </h5>
                                            <div className='row mt-2'>
                                                {item.bedroom !== "-" && item.bedroom !== null ? (
                                                    <span> <FontAwesomeIcon icon={faBed} />{item.bedroom}</span>
                                                ) : null}
                                                {item.bath !== "-" && item.bath !== null ? (
                                                    <span><FontAwesomeIcon icon={faSink} />{item.bath} </span>
                                                ) : null}
                                                {item.area !== "-" && item.area !== null ? (
                                                    <span> <FontAwesomeIcon icon={faMap} /> {item.area}</span>
                                                ) : null}
                                            </div>

                                            <span className='mt-2' style={{ marginTop: '5%' }}>{item.description}
                                                {/* .slice(0, 100)... <a href=''>more</a> */}
                                            </span>
                                            <div style={{ marginTop: '8%' }}>
                                                <span className='mt-4'>
                                                    Added:
                                                    <TimeAgo date={item.added} />
                                                </span>
                                            </div>
                                        </a>
                                        <div className='row' style={{ marginTop: '10%' }}>
                                            <div className='col-md-5'>

                                                <a className=' btn btn-light' style={{ marginRight: '5%', border: '1px solid #28a745' }} href={item.whatsapp}> <FontAwesomeIcon icon={faSink} /> Whatsapp </a>
                                            </div>
                                            <div className='col-md-5'>

                                                <button className='btn btn-success' onClick={() => handleShow(item.phoneNumber)}> <FontAwesomeIcon icon={faSink} /> Call </button>

                                            </div>


                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p>No data available</p>
                        )}

                        {totalPages > 1 && (
                            <Pagination>
                                {[...Array(totalPages)].map((_, index) => (
                                    <Pagination.Item
                                        key={index + 1}
                                        active={index + 1 === currentPage}
                                        onClick={() => handlePageChange(index + 1)}
                                    >
                                        {index + 1}
                                    </Pagination.Item>
                                ))}
                            </Pagination>
                        )}
                    </div>

                </div>
            </div>
            <div className='col-md-1'></div>
            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Contact Us</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='row mb-2'>
                        <div className='col-md-2'>
                            <FontAwesomeIcon icon={faPhone} />
                        </div>
                        <div className='col-md-8'>
                            <div className='mb-2'>

                                <span>Mobile</span>
                            </div>
                            <div className=' mb-2'>

                                <a>{modalValue}</a>
                            </div>
                        </div>

                    </div>
                    <div className='row'>
                        <div className='col-md-2'>
                            <FontAwesomeIcon icon={faMobile} />

                        </div>
                        <div className='col-md-8'>
                            <div className=' mb-2'>

                                <span>Phone</span>
                            </div>
                            <div className=' mb-2'>

                                <a>{modalValue}</a>
                            </div>
                        </div>

                    </div>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    {/* Additional buttons or actions can be added here */}
                </Modal.Footer>
            </Modal>
        </div>

    )
}

export default Articles