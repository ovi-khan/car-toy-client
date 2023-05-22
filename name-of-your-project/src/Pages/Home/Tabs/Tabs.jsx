import React from "react";
import { Link } from "react-router-dom";

const Tabs = ({ car }) => {
    console.log(car)

  const {
    categoryName,
    img,
    description,
    cars,
    _id
  } = car || {};
  return (
    
    
  <div className="grid lg:grid-cols-2">
      {
      cars?.map(singleCar => 

        <div className="card lg:w-96 bg-base-100 bg-red-400 mb-20 shadow-xl">

        <figure className="px-10 pt-10">
          <img src={singleCar.picture} alt="Shoes" className="rounded-xl animate-pulse" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Car Name: {singleCar.brand}</h2>
          <p>Price: {singleCar.price}</p>
          <p>Rating: {singleCar.rating}</p>
          <div className="card-actions">
            <Link to={`/carDetails/${singleCar._id}`}><button className="btn btn-primary">View Details</button></Link>
          </div>
        </div>
      </div>
        
        )
    }
    
  </div>
  );
};

export default Tabs;
