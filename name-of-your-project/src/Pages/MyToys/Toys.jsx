import React from 'react';

const Toys = ({toy}) => {
    const { ToyName, sellerName, email, price, rating, quantity, descriptio, select, photo  } = toy
    return (
        <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={photo} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{sellerName}</div>
            </div>
          </div>
        </td>
        <td>
          {ToyName}
        </td>
        <td>{select}</td>
        <td>
          ${price}
        </td>
        <td>
          {quantity}
        </td>
        <th>
          <button className="btn btn-ghost btn-xs">View details</button>
        </th>
      </tr>
    );
};

export default Toys;