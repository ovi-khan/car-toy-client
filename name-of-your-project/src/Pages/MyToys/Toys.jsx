import Swal from 'sweetalert2'
import { FaBeer } from 'react-icons/fa';

const Toys = ({ toy, toys, setToys }) => {
  
    const { _id, ToyName, sellerName, email, price, rating, quantity, description, select, photo  } = toy

    const handleDelete = (_id) => {
      console.log(_id);
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          fetch(`https://toy-marketplace-server-ovi-khan.vercel.app/toys/${_id}`, {
            method: 'DELETE'
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              if (data.deletedCount > 0) {
                Swal.fire("Deleted!",
                 "Toy has been deleted.",
                  "success");
                  const remaining = toys.filter(sCar => sCar._id !== _id)
                  setToys(remaining)
              }
            });
        }
      });
    };

    return (
        <tr>
        <th>
          {/* <label>
            <input type="checkbox" className="checkbox" />
          </label> */}
        </th>
        <td>
          <div className="lg:flex lg:items-center lg:space-x-3">
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
        <td>
          {description}
        </td>
        <th>
          <button className="btn btn-ghost btn-xs">Update</button>
        </th>
        <th>
          <button onClick={handleDelete} className="btn bg-white text-red-600 btn-xs"><FaBeer /></button>
        </th>
      </tr>
    );
};

export default Toys;