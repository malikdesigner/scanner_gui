import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import axios from "axios"

function Update_user() {
    const navigate = useNavigate()
    const location = useLocation()
    const [name, setName] = useState();

    const [employees, setEmployees] = useState({

        name: "",
        email: "",
        password: "",
        role: "",
        status: ""

    })
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
    // const [employees, setTempEmployees] = useState({

    //     name: "",
    //     email: "",
    //     password: "",
    //     role: "",
    //     status: ""
    // });
    const [isLoading, setLoading] = useState(false);
    const employeeId = location.pathname.split("/")[2]
    useEffect(() => {
        const fetchAllUsers = async () => {
            try {
                const res = await axios.get(`http://localhost:8800/users/${employeeId}`)
                //setTempEmployees(res.data[0])
                setEmployees(res.data[0]);
            }
            catch (err) {
                console.log(err)
            }
        }
        fetchAllUsers()
    }, [])

    const role_options = [
        { label: "Publisher", value: 1 },
        { label: "Admin", value: 2 },
        { label: "Super Admin", value: 3 },
        { label: "Developer", value: 4 }

    ]
    const status_options = [
        { label: "Active", value: 'active' },
        { label: "Inactive", value: 'inactive' },
    ]


    console.log(`EMPLOYEEE ID ${employeeId}`)
    const handleChange = (e) => {
        const { name, value } = e.target;
        setEmployees((prev) => ({ ...prev, [name]: value }));
        console.log(employees)
    };
    const handleClick = async e => {
        e.preventDefault()
        setLoading(true); // Start loading

        try {
            await axios.put(`http://localhost:8800/users/${employeeId}`, employees)

        }
        catch (err) {
            console.log(err)
        }
        setTimeout(() => {

            setLoading(false);
            navigate("/") // End loading
        }, 3500)

    }


    return (
        <div>
            {isLoading ? <div className='col-md-12' style={{ textAlign: '-webkit-center' }}>
                <div id='loader' className="spinner-border text-primary" role="status" style={{ textAlign: '-webkit-center' }}>
                    <span className="sr-only"></span>
                </div>
            </div> : ''}
            <div className='card' style={{ margin: '3%' }}>
                <div className='card-header'>
                    <h1 className='ml-3'>Edit Employee</h1>

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

                                            <input className='form-control mt-2 mb-2' type="text" value={employees.name} onChange={handleChange} name="name" />
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

                                            <input className='form-control mt-2 mb-2' type="text" value={employees.email} onChange={handleChange} name="email" />
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

                                            <input className='form-control mt-2 mb-2' type="password" value={employees.password} onChange={handleChange} name="password" />
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

                                            <select className='form-control mt-2 mb-2' name='role' value={employees.role} onChange={handleChange}>
                                                {role_options.map(option => (
                                                    <option value={option.value} > {option.label} </option>
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

                                            <select className='form-control mt-2 mb-2' name='status' value={employees.status} onChange={handleChange}>
                                                {status_options.map(option => (
                                                    <option value={option.value} > {option.label} </option>
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

export default Update_user