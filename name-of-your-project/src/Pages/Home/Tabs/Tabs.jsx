
/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
// import { FaArrowRight } from "react-icons/fa";

const Tabs = ({ car }) => {
    console.log(car)

  const {
    categoryName,
    img,
    description,
    cars
  } = car || {};
  return (
    
    
  <div>
      {
      cars?.map(singleCar => 

        <div className="card w-96 bg-base-100 shadow-xl">

        <figure className="px-10 pt-10">
          <img src={singleCar.picture} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{singleCar.brand}</h2>
          <p>{singleCar.price}</p>
          <p>{singleCar.rating}</p>
          <div className="card-actions">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
        
        )
    }
    
  </div>
  );
};

export default Tabs;
