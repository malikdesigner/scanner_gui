import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
function Articles({ apiResponse }) {
    const [transaction, settransaction] = useState([]);
    const [selectedTransaction, setSelectedTransaction] = useState([]);

    // useEffect(() => {
    //     const fetchAllStates = async () => {
    //         try {
    //             const res = await axios.get("http://localhost:8800/transactions")
    //             console.log(res)
    //             settransaction(res.data)
    //         }
    //         catch (err) {
    //             console.log(err)
    //         }
    //     }
    //     fetchAllStates()
    // }, [])
    const handleStateChange = (value) => {
        setSelectedTransaction(value);
    };


    return (
        <div className='row' style={{ marginTop: '2%' }}>
            <div className='col-md-1'></div>
            <div className='col-md-8'>
                <div className='card'>
                    <div className='card-header' style={{ background: 'white' }}>
                        <p> Filters  {JSON.stringify(apiResponse)}</p>
                    </div>

                    <div className='card-body'>
                        {transaction.map((item) => (

                            <div className="card" key={item.id}>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <picture>
                                                <source type="image/webp" srcSet={JSON.parse(item.images)[0]} />
                                                <img src={JSON.parse(item.images)[0]} role="presentation" alt="Property" style={{ width: '100%', height: 'auto' }} />
                                            </picture>
                                        </div>
                                        <div className="col-md-6">
                                        <h6> <strong >{item.price}  </strong></h6>
                                            <h6> {item.title} </h6>
                                            <p style={{marginTop:'5%'}}>{item.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
            <div className='col-md-1'></div>

        </div>

    )
}

export default Articles