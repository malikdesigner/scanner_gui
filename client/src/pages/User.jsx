import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import Header from './Header';

import axios from "axios"

const User = () => {

  const [employees, setUsers] = useState([])

  useEffect(() => {
    const fetchAllUsers = async () => {
      try {
        const res = await axios.get("http://localhost:8800/users")
        console.log(res)
        setUsers(res.data)
      }
      catch (err) {
        console.log(err)
      }
    }
    fetchAllUsers()
  }, [])

  const handleDelete = async (id) => {
    try {
      await axios.delete("http://localhost:8800/users/" + id)
      window.location.reload()
    } catch (err) {
      console.log(err)
    }
  }


  return (
    <div>
      <Header />
    <div className='card m-3'>
      <h2>Users</h2>

      <Link className='btn btn-primary' to="/add_user"> Add New User </Link>

      <table className='table table-bordered table-striped'>
        <thead>
          <tr>
            <th> Id </th>
            <th> Name </th>
            <th> Email </th>
            <th> Role </th>
            <th> Status </th>
            <th colSpan={3}> Action </th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.name}</td>

              <td>{employee.email}</td>

              <td>{employee.role}</td>
              <td>{employee.status}</td>
              <td> <Link className='btn btn-primary' to={`/update_user/${employee.id}`}> Edit </Link>  </td>
              <td> <Link className='btn btn-primary' to={`/view/${employee.id}`}> View </Link> </td>
              <td> <button className='btn btn-primary' onClick={() => handleDelete(employee.id)}>Delete</button></td>



            </tr>

          ))}

        </tbody>
      </table>
    </div>
    </div>
  );
}

export default User;
