import React from 'react'

import { useState } from 'react'
import axios from 'axios'


function CreateUsers() {

    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [number, setNumber] = useState("")
    const [password, setPassword] = useState("")
    const [error , setError] = useState("")

    const formPost = () => {
        // eslint-disable-next-line no-sequences
        if(email === "" || email === null,  name === "" || name === null , number === "" || number === null , password === "" || password === null){
            setError("Field Required")
        }else{
            setError("")
            axios.post("http://159.65.21.42:9000/register", {
                name: name,
                phone: number,
                email: email,
                password: password,
            })
            .then(function (response) {
                console.log(response);
                alert("Created successfully")
              })
              .catch(function (error) {
                console.log(error);
                alert("user not Created")
              });
        }
    }


  return (
    <div>
        <div className="">
           
            <div className="dark " style={{height:"100vh"}}>
                <div className="container m-0 p-0">
                    <div className="row">
                        <div className="col-md-3">
                        
                        </div>
                        <div className="col-md-9 pt-5">
                          <center>
                          <div className="col-md-8 pt-5">
                           <div className="create m-5">
                          <div className=" ">
                              <div className="body p-5 ">
                                  <p className='mt-3'><b>Create  Account</b></p>
                                  {/* Email address */}
                                  <div class="form-floating mb-3">
                                      <input style={{background:"transparent",color:"#48abfe"}} type="text" class="form-control" id="floatingInput" placeholder="Full Name" onChange={(e) => setName(e.target.value)} />
                                      <label for="floatingInput">Full name</label>
                                  </div>
                                  <span>{error}</span>
                                  <div class="form-floating mb-3">
                                      <input style={{background:"transparent",color:"#48abfe"}} type="email" class="form-control" id="floatingInput" placeholder="Email"  onChange={(e) => setEmail(e.target.value)}/>
                                      <label for="floatingInput">Email address</label>
                                  </div>
                                  <span>{error}</span>
                                  <div class="form-floating mb-3">
                                      <input style={{background:"transparent",color:"#48abfe"}} type="number" class="form-control" id="floatingInput" placeholder="Phone Number"  onChange={(e) => setNumber(e.target.value)}/>
                                      <label for="floatingInput">Phone number</label>
                                  </div>
                                  <span>{error}</span>
                                  <div class="form-floating">
                                      <input style={{background:"transparent",color:"#48abfe"}} type="password" class="form-control" id="floatingPassword" placeholder="Password"  onChange={(e) => setPassword(e.target.value)}/>
                                      <label for="floatingPassword">Password</label>
                                  </div>
                                  <span>{error}</span>
                                  <button onClick={formPost} className='btn1 mt-4'>Create account</button>
                                  
                              </div>
                              
                          </div>
                  </div>
                            </div>
                          </center>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CreateUsers