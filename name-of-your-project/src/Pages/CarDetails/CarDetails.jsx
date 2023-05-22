import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CarDetails = () => {
    const carData = useLoaderData()
    console.log('car details', carData)
    return (
        <div>
            <h1>Car details</h1>
        </div>
    );
};

export default CarDetails;