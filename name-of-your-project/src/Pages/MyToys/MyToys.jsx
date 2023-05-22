import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Toys from './Toys';

const MyToys = () => {
  const allToys = useLoaderData()
  const [toys, setToys] = useState(allToys)
    
    console.log(allToys)
    return (
        <div className="w-full">
  <table className="w-full table">
    {/* head */}
    <thead>
      <tr>
        <th>
        </th>
        <th>Seller Name</th>
        <th>Toy Name</th>
        <th>Sub Category</th>
        <th>Price</th>
        <th>Abilavil Quantity</th>
        <th>View Details</th>
        <th>Update</th>
        <th>Delete</th>
      </tr>
    </thead>
   
    
  <tbody className=''>
  {
    allToys.map(toy => 
            <Toys
                toy={toy}
                toys={toys}
                setToys={setToys}
                key={toy._id}
            ></Toys>
        )
  }
  </tbody>
  </table>
  
</div>
    );
};

export default MyToys;