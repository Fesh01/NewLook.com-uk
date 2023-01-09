/* eslint-disable array-callback-return */
import React from 'react';

import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BsHeart } from "react-icons/bs";

function Products() {
    // const [category, setCategory] = useState("")
    // const [name, setName] = useState("")
    // const [price, setPrice] = useState("")
    // const [quantity, setQuantity] = useState("")
    // const [description, setDescription] = useState("")
    // const [image, setImage] = useState("") 

    const [prod , setProd] = useState([])

    useEffect(() => {
        axios.get("http://159.65.21.42:9000/products")
        .then((getData) => {
            setProd(getData.data)
            // console.log(getData.data)
        })
        .catch(function (error) {
            console.log(error);
            alert("No Internet connection")
        });
    })
    return(
        <div>
            <Container className='grid-2 gap-4'>
               
                {prod.map((data) => {
                    if (data.category === 'Fesh') {
                        return(
                            <section>
                                <div key={data.id}>
                                    <Link to='/Product'>
                                        <img src={`http://159.65.21.42:9000${data.image}`} alt={data.image} className='w-100'/>
                                    </Link>
                                    <h5>
                                    <span>
                      {" "}
                      <BsHeart />
                    </span>
                  </h5>
                  <p>{data.name}</p>
                  <p>{data.category}</p>
                  <p>{data.quantity}</p>
                  <h5>£{data.price}</h5>
                  <p>{data.description}</p>
                  

                                </div>
                            </section>
                        )
                    }
                })}
            </Container>
        </div>
    )
}

export default Products;