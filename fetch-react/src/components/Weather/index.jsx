import React, { useEffect } from 'react'
import { useState } from "react";
import axios from "axios"
import Card from '../Cards';

function Weather() {

    const [data, setData] = useState([]);
const [isLoading, setIsLoading] = useState(true);
        const baseUrl = "http://localhost:3000/products"

        const datalar = async () => {
            try {
                const response = await axios(baseUrl)

                setData(response.data);
                setIsLoading(false)
            } catch (error) {
                console.log(error);
            }
        }
        
    useEffect(() => {

datalar()
        
    }, [])

    return (
        <>
        {isLoading ? (
            <p><i class="fa-solid fa-spinner fa-spin"></i></p>
        ) : (
            (data && data.map((item) => 
              
           <Card image={item.image} title={item.title} price={item.price} taste={item.taste} />

            ))
           )}
        </>
    );
}

export default Weather