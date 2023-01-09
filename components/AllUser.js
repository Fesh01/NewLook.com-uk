import React from 'react'

import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'


function AllUser() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [password, setPassword] = useState("")
    const [ editId , setEditId] = useState('')

    
    const updateProduct = (id) =>{

        setApiData((prevdata) => {
            setEditId(id)
            return prevdata.map((newData) => {
                if(newData._id === id){
                    setName((prevName) => (prevName = newData.name))
                    setEmail((prevEmail) => (prevEmail = newData.email))
                    setPhone((prevPhone) => (prevPhone = newData.phone))
                    setPassword((prevPassword) => (prevPassword = newData.password))
                    return newData
                } else {
                    return newData
                }
            })
        })
    }

    const [apiData , setApiData] = useState([])

    useEffect(() => {
        axios.get("http://159.65.21.42:9000/users")
        .then((getData) => {
            setApiData(getData.data)
        })
        .catch(function (error) {
            console.log(error);
            alert("Just dey Play")
        });
    })

    const deleteUser = (id) =>{
        axios.delete(`http://159.65.21.42:9000/user/${id}`)
        .then((res) => {
            console.log(res)
            window.location.reload()
            alert("Otilo e do go")
        })
    }

    const edit = () =>{
        // e.preventDefault()
        setApiData((prevdata) => {
            return prevdata.map((val) => {
                if (val._id === editId){
                    axios.put(`http://159.65.21.42:9000/user/${editId}`,{
                        ...val,
                        name: name,
                        phone: phone,
                        email: email,
                        password: password,
                      })
                    .then((res) => {
                        console.log(res)
                        window.location.reload()
                        alert("User Updated successfully")
                    })
                    .catch(function (error) {
                        console.log(error);
                        alert("Just dey Play na")
                    });
                    return{
                      ...val,
                      name: name,
                      phone: phone,
                      email: email,
                      password: password,
                    }
                }else{
                    return val
                }
            })
        })
    }




  return (
    <div>
        <div className="">
            
            <div className="dark " style={{height:"200vh"}}>
                <div className="container m-0 p-0">
                    <div className="row">
                        <div className="col-md-3">
                        
                        </div>
                        <div className="col-md-9 pt-5 pe-0 ps-0">
                          <div className="table1 mt-5">
                            <div className="">
                            <table class="table" style={{color:"#000"}}>
                                <thead>
                                    <tr>
                                    <th scope="col">Avatar</th>
                                    <th scope="col">Full-name</th>
                                    <th scope="col">Phone number</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Password</th>
                                    <th scope="col">Active</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {apiData.map((data) => {
                                        return(
                                            <tr key={data._id}>
                                                <th scope="row"><img src="https://pro2-bar-s3-cdn-cf1.myportfolio.com/c234fc766e76abede3137a27335b3d04/2571eb7b-09da-479c-9899-85e23b0ae16d_rw_1200.gif?h=405def0b04967caaa03b559bfd9c2761" alt="" height="30px" /></th>
                                                <td>{data.name}</td>
                                                <td>{data.email}</td>
                                                <td>{data.phone}</td>
                                                <td>{data.password}</td>
                                                <td>
                                                    <div className="act">
                                                    <button type="button" onClick={() => updateProduct(data._id)} class="one" data-bs-toggle="modal" data-bs-target="#exampleModal">Edit</button>
                                                        <button className='two' onClick={() => deleteUser(data._id)}>Delete</button>
                                                    </div>
                                                </td>
                                                
                                                
                                                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                    <div class="modal-dialog" >
                                                        <div class="modal-content" style={{background:"#34374e"}} >
                                                        <div class="modal-header">
                                                            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                        </div>
                                                        <div class="modal-body">
                                                        <center>
                                                            <div className="" style={{background:"#34374e"}}>
                                                            <div className="create ">
                                                            <div className=" ">
                                                                <div className="body p-5 ">
                                                                    <p className='mt-3'><b>Edit  Products</b></p>
                                                                    <div class="form-floating mb-3">
                                                                        <input style={{background:"transparent",color:"#48abfe"}} type="text" class="form-control" id="floatingInput" placeholder="Name" value={name} onChange={(e) =>setName(e.target.value)}/>
                                                                        <label for="floatingInput">Enter name</label>
                                                                    </div>
                                                                    <div class="form-floating mb-3">
                                                                        <input style={{background:"transparent",color:"#48abfe"}} type="email" class="form-control" id="floatingInput" placeholder="Description" value={email} onChange={(e) =>setEmail(e.target.value)}/>
                                                                        <label for="floatingInput">Email</label>
                                                                    </div>
                                                                    <div class="form-floating mb-3">
                                                                        <input style={{background:"transparent",color:"#48abfe"}} type="number" class="form-control" id="floatingInput" placeholder="Price" value={phone} onChange={(e) =>setPhone(e.target.value)}/>
                                                                        <label for="floatingPassword">Mobile Number</label>
                                                                    </div>
                                                                    <div class="form-floating mb-3">
                                                                        <input style={{background:"transparent",color:"#48abfe"}} type="password" class="form-control" id="floatingInput" placeholder="Quantity"  value={password} onChange={(e) =>setPassword(e.target.value)}/>
                                                                        <label for="floatingPassword">Password</label>
                                                                    </div>
                                                                    <button onClick={() =>edit()} className='btn1 mt-4'>Update User</button>
                                                                    
                                                                </div>
                                                                
                                                            </div>
                                                    </div>
                                                                </div>
                                                            </center>
                                                        </div>
                                                        
                                                        </div>
                                                    </div>
                                                    </div>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                            </div>
                          </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AllUser