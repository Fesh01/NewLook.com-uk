import React from 'react'

import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'




function AllProduct() {
    const [category, setCategory] = useState("")
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [quantity, setQuantity] = useState("")
    const [description, setDescription] = useState("")
    const [image, setImage] = useState("")
    const [ editId , setEditId] = useState('')

    const [apiData , setApiData] = useState([])

    useEffect(() => {
        axios.get("http://159.65.21.42:9000/products")
        .then((getData) => {
            setApiData(getData.data)
            // console.log(getData.data)
        })
        .catch(function (error) {
            console.log(error);
            alert("No Internet connection")
        });
    })

    const deleteProducts = (id) =>{
        axios.delete(`http://159.65.21.42:9000/product/${id}`)
        .then((res) => {
            console.log(res)
            window.location.reload()
            alert("Products deleted successfully")
        })
    }

    const updateProduct = (id) =>{

        setApiData((prevdata) => {
            setEditId(id)
            return prevdata.map((newData) => {
                if(newData._id === id){
                    setName((prevName) => (prevName = newData.name))
                    setPrice((prevPrice) => (prevPrice = newData.price))
                    setQuantity((prevQuantity) => (prevQuantity = newData.quantity))
                    setDescription((prevDescription) => (prevDescription = newData.description))
                    setCategory((prevCategory) => (prevCategory = newData.category))
                    setImage((prevImage) => (prevImage = newData.image))
                    return newData
                } else {
                    return newData
                }
            })
        })
    }
    const edit = (e) =>{
        e.preventDefault();
        setApiData((prevdata) => {
            return prevdata.map((val) => {
                if (val._id === editId){
                    axios.put(`http://159.65.21.42:9000/product/${editId}`,{
                        ...val,
                        name: name,
                        price: price,
                        quantity: quantity,
                        description: description,
                        category: category,
                        image: image
                      })
                    .then((res) => {
                        console.log(res)
                        window.location.reload()
                        alert("Products Updated successfully")
                    })
                    .catch(function (error) {
                        console.log(error);
                        alert("check your internet connection")
                    });
                    return{
                      ...val,
                      name: name,
                      price: price,
                      quantity: quantity,
                      description: description,
                      category: category,
                      image: image
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
                                    <th scope="col">Image</th>
                                    <th scope="col" >Name</th>
                                    <th scope="col">Category</th>
                                    <th scope="col">Quantity</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Description</th>
                                    <th scope="col">Active</th>
                                    </tr>
                                </thead>
                                <tbody className='bbody'>
                                    {apiData.map((data) => {
                                        if(data.category === "Fesh"){
                                            return(
                                                <tr key={data._id} >
                                                    <th scope="row" ><img src={`http://159.65.21.42:9000${data.image}`} alt="" height="30px" /></th>
                                                    <td className="col-md-2">{data.name}</td>
                                                    <td>{data.category}</td>
                                                    <td>{data.quantity}</td>
                                                    <td>{data.price}</td>
                                                    <td>{data.description}</td>
                                                    <td>
                                                        <div className="act">
                                                        <button type="button" onClick={() => updateProduct(data._id)} class="one" data-bs-toggle="modal" data-bs-target="#exampleModal">Edit</button>
                                                            <button className='two' onClick={() => deleteProducts(data._id)}>Delete</button>
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
                                                                    <p className='mt-3'><b>Create  Products</b></p>
                                                                    <div class="form-floating mb-3">
                                                                        <input style={{background:"transparent",color:"#48abfe"}} type="file" class="form-control" id="floatingInput" placeholder="Name"  value={image} onChange={(e) =>setImage(e.target.value)}/>
                                                                    </div>
                                                                    {/* Email address */}
                                                                    <div class="form-floating mb-3">
                                                                        <input style={{background:"transparent",color:"#48abfe"}} type="text" class="form-control" id="floatingInput" placeholder="Name" value={name} onChange={(e) =>setName(e.target.value)}/>
                                                                        <label for="floatingInput">Products name</label>
                                                                    </div>
                                                                    <div class="form-floating mb-3">
                                                                        <input style={{background:"transparent",color:"#48abfe"}} type="text" class="form-control" id="floatingInput" placeholder="Description" value={description} onChange={(e) =>setDescription(e.target.value)}/>
                                                                        <label for="floatingInput">Description</label>
                                                                    </div>
                                                                    <div class="form-floating mb-3">
                                                                        <input style={{background:"transparent",color:"#48abfe"}} type="number" class="form-control" id="floatingInput" placeholder="Price" value={price} onChange={(e) =>setPrice(e.target.value)}/>
                                                                        <label for="floatingPassword">Price</label>
                                                                    </div>
                                                                    <div class="form-floating mb-3">
                                                                        <input style={{background:"transparent",color:"#48abfe"}} type="number" class="form-control" id="floatingInput" placeholder="Quantity"  value={quantity} onChange={(e) =>setQuantity(e.target.value)}/>
                                                                        <label for="floatingPassword">Quantity</label>
                                                                    </div>
                                                                    <div class="form-floating">
                                                                        <input style={{background:"transparent",color:"#48abfe"}} type="text" class="form-control" id="floatingInput" placeholder="Category" value={category} onChange={(e) =>setCategory(e.target.value)}/>
                                                                        <label for="floatingPassword">Category</label>
                                                                    </div>
                                                                    <button onClick={() =>edit()} className='btn1 mt-4'>Create Product</button>
                                                                    
                                                                </div>
                                                                
                                                            </div>
                                                    </div>
                                                                </div>
                                                            </center>
                                                        </div>
                                                        {/* <div class="modal-footer">
                                                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                            <button type="button" class="btn btn-primary">Save changes</button>
                                                        </div> */}
                                                        </div>
                                                    </div>
                                                    </div>
                                                </tr>
                                            )
                                        }
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

export default AllProduct