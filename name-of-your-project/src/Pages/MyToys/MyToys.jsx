import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Toys from './Toys';

const MyToys = () => {
    const allToys = useLoaderData()
    
    console.log(allToys)
    return (
        <div className="overflow-x-auto w-full ">
  <table className="table w-full">
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
        <th></th>
      </tr>
    </thead>
   
    
  <tbody className=''>
  {
    allToys.map(toy => 
            <Toys
                toy={toy}
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