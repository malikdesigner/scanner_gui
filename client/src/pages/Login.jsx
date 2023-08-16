import axios from 'axios';
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom'

const Login = () => {
    const [values, setValues] = useState({
        email: "",
        password: ""
    });
    const navigate = useNavigate()

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues((prev) => ({ ...prev, [name]: value }));
    };
    axios.defaults.withCredentials=true;
    // const handlePasswordChange = (e) => {
    //     setPassword(e.target.value);
    // };

    const handleSubmit = (e) => {
        e.preventDefault();
        // You can add the login logic here, such as sending the credentials to a server.
      
         axios.post(`http://localhost:8800/login`, values).then(res=>{
             console.log(res);
            if(res.data.login){
                
                navigate("/")
            }
            else {
                alert("No Record!!!")
            }
         })
    };

    return (
        
            <div style={{width:'60%',marginRight:'20%',marginLeft:'20%',marginTop:'10%',padding:'5%',background:'#333'}}>
               <div style={{textAlignLast:'center'}}> <h1 className='text-white'> Scanner </h1> </div>
                      
                            <h2 className='text-white'> Account Login </h2>
                            <form onSubmit={handleSubmit}>

                                <div className="form-group">
                                    <label htmlFor="email" className='mb-2 mt-2 text-white'><h5> Email Address </h5> </label>
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
                                    <label htmlFor="password" className='mb-2 mt-2 text-white'> <h5>Password</h5></label>
                                    <input
                                        type="password"
                                        id="password"
                                        name="password"
                                        onChange={handleChange}
                                        className="form-control mt-2 mb-2"
                                        required
                                    />
                                </div>
                                                        
     <button type="submit" className="btn btn-info pl-5 pr-5 pt-2 pb-2" style={{float:'right',margin:'2%'}}>
                                                               Sign in
                                </button>

                            </form>
                    


                

            </div>
       
    );
};

export default Login;
