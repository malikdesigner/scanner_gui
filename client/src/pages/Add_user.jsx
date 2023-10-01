import React, { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from "axios"
import Header from './Header';

export const Add_user = () => {
    const [employees, setEmployees] = useState({

        name: "",
        email: "",
        password: "",
        role: "",
        status: ""

    })
    const [name, setName] = useState();
    const navigate = useNavigate()

    useEffect(() => {
        axios.get('http://localhost:8800').then(res => {
            console.log(res)
            if (res.data.valid) {
                setName(res.data.username);
            }
            else {
                navigate('/login')
            }
        })
            .catch(err => console.log(err))
    }, [])
    const [isLoading, setLoading] = useState(false);

    const role_options = [
        { label: "Publisher", value: 1 },
        { label: "Admin", value: 2 },
        { label: "Super Admin", value: 3 },
        { label: "Developer", value: 4 }

    ]
    const status_options = [
        { label: "Active", value: 1 },
        { label: "Inactive", value: 0 },
    ]
    const handleChange = (e) => {
        const { name, value } = e.target;
        setEmployees((prev) => ({ ...prev, [name]: value }));
    };

    const handleClick = async e => {
        e.preventDefault()
        setLoading(true); // Start loading

        try {
            console.log(employees)
            await axios.post("http://localhost:8800/users", employees)
        }
        catch (err) {
            console.log(err)
        }
        setTimeout(() => {
            
            setLoading(false); // End loading
             navigate("/")
        }, 3500)

    }
    return (
        <div>
            <Header />
            {isLoading ? <div className='col-md-12' style={{ textAlign: '-webkit-center' }}>
                <div id='loader' className="spinner-border text-primary" role="status" style={{ textAlign: '-webkit-center' }}>
                    <span className="sr-only"></span>
                </div>
            </div> : ''}
            <div className='card' style={{ margin: '3%' }}>
                <div className='card-header'>
                    <h1 className='ml-3'>Add New Employee</h1>

                </div>

                <div className='card-body'>



                    <div className='row'>
                        <div className='col-md-12'>
                            <table className='table'>
                                <tr className='w-80'>
                                    <td className="container" style={{ width: "40%" }}>
                                        <div className="col">
                                            <strong>Name</strong>
                                        </div>

                                    </td>
                                    <td className='container'>

                                        <div className="form-group description_input_box">

                                            <input className='form-control mt-2 mb-2' type="text" placeholder='name' onChange={handleChange} name="name" />
                                        </div>
                                    </td>
                                </tr>
                                <tr className='w-80'>
                                    <td className="container" style={{ width: "40%" }}>
                                        <div className="col">
                                            <strong>Email</strong>
                                        </div>

                                    </td>
                                    <td>

                                        <div className="form-group description_input_box">

                                            <input className='form-control mt-2 mb-2' type="text" placeholder='email' onChange={handleChange} name="email" />
                                        </div>
                                    </td>
                                </tr>
                                <tr className='w-80'>
                                    <td className="container" style={{ width: "40%" }}>
                                        <div className="col">
                                            <strong>Password</strong>
                                        </div>

                                    </td>
                                    <td>

                                        <div className="form-group description_input_box">

                                            <input className='form-control mt-2 mb-2' type="password" placeholder='password' onChange={handleChange} name="password" />
                                        </div>
                                    </td>
                                </tr>
                                <tr className='w-80'>
                                    <td className="container" style={{ width: "40%" }}>
                                        <div className="col">
                                            <strong>Role</strong>
                                        </div>

                                    </td>
                                    <td>

                                        <div className="form-group description_input_box">

                                            <select className='form-control mt-2 mb-2' name='role' onChange={handleChange}>
                                                {role_options.map(option => (
                                                    <option value={option.value}> {option.label} </option>
                                                ))}
                                            </select>                                        </div>
                                    </td>
                                </tr>
                                <tr className='w-80'>
                                    <td className="container" style={{ width: "40%" }}>
                                        <div className="col">
                                            <strong>Status</strong>
                                        </div>

                                    </td>
                                    <td>

                                        <div className="form-group description_input_box">

                                            <select className='form-control mt-2 mb-2' name='status' onChange={handleChange}>
                                                {status_options.map(option => (
                                                    <option value={option.value}> {option.label} </option>
                                                ))}
                                            </select>                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td >
                                        {isLoading ? "" :
                                            (<button className='btn btn-info pl-5 pr-5 pt-2 pb-2' style={{ float: 'right' }} onClick={handleClick} >  Submit</button>)
                                        }

                                    </td>
                                </tr>


                            </table>

                        </div>

                    </div>
                </div>
            </div >
        </div>
    )
}
