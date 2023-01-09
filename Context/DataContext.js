import React from 'react'

import { useState, createContext, useEffect } from 'react';

export const DataContext = createContext ();

export default function DataProvider(props) {
    const [products, setProducts] = useState([]);

    const getProducts = () => {
        fetch('http://159.65.21.42:9000/products')
        .then((res) => res.json())
        .then((data) => {
            console.log(data.products);
            setProducts(data.products)
        });
        
    }
    useEffect(() => {
        getProducts();
      }, []);

  return <DataContext.Provider value={{ products }}>{props.children}</DataContext.Provider>;
}
