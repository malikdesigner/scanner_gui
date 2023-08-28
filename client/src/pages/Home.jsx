import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom'
import config from '../config'
import Header from './Header';

 const apiUrl = `${config.baseUrl}/api`;
const Home = () => {
    const [name, setName] = useState();
    const navigate = useNavigate()

    useEffect(() => {
        axios.get('http://localhost:8800').then(res => {
            console.log(res)

            if (res.data.valid) {
                setName(res.data.username);
            }
            else {
                navigate("/login")
            }
        })
            .catch(err => console.log(err))
    }, [])

    return (

        <div >
            <Header />
            <h2 > Welcome {name} </h2>






        </div>

    );
};

export default Home;
