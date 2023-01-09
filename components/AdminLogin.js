import React from 'react'

import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';


function AdminLogin() {
    const [email,setEmail]=useState("")
    const [password,setPassword]= useState("")
    const [error , setError] = useState("")
    const navigate = useNavigate();

    useEffect(() => {
        if(localStorage.getItem("user-info")){
            navigate('/admin');
        }
    })

   async function login(){
        if(email === "" || email === null, password === "" || password === null){
            setError("Field Required")
        }else{
            setError("")
            let item = {email:email,password:password};
            let result = await axios.post('http://159.65.21.42:9000/login',{item})
            .then(function (response) {
                console.log(response);
                alert("Login successfully")
              })
              .catch(function (error) {
                console.log(error);
                alert("Wrong email or password")
              });
            localStorage.setItem("user-info",JSON.stringify(result))
            navigate('/admin')
        }
    }

  return (
    <div>
    <div className="login">
        <div className="col-md-12">
            <div className="container">
                <center>
                    <div className="col-md-4">
                        <div className="body p-5">
                            <Link to="/">Home</Link>
                            <p className='mt-3'><b>Enter your email & password to sign in </b></p>
                            <div class="form-floating mb-3">
                                <input type="email" class="form-control" id="floatingInput" onChange={(e)=> setEmail(e.target.value)} placeholder="name@example.com"  />
                                    <label for="floatingInput">Email address</label>
                            </div>
                            <span>{error}</span>
                            <div class="form-floating">
                                <input type="password" class="form-control" id="floatingPassword" onChange={(e)=> setPassword(e.target.value)} placeholder="Password" />
                                    <label for="floatingPassword">Password</label>
                            </div>
                            <span>{error}</span>
                        <Link to='/admin'><button className='btn1 mt-5' onClick={login}>Sign In</button></Link>
                        </div>
                    </div>
                </center>
            </div>
        </div>
    </div>
</div>
  )
}

export default AdminLogin