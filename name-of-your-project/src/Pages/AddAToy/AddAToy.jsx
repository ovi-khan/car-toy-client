import React from "react";
import Swal from "sweetalert2";

const AddAToy = () => {
    const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const ToyName = form.name.value;
    const sellerName = form.seller.value;
    const email = form.email.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const quantity = form.quantity.value;
    const description = form.description.value;
    const select = form.select.value
    const photo = form.photo.value;
    const newToy = {
      ToyName,
      sellerName,
      email,
      price,
      rating,
      quantity,
      description,
      select,
      photo,
    };
    console.log(newToy);
    form.reset();

    // send data to the server
    fetch("http://localhost:5000/PostToys", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newToy),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "User added successfully",
            icon: "success",
            confirmButtonText: "Done",
          });
        }
      });
  };
  return (
    <div className="bg-[#F4F3F0] p-24">
      <h2 className="text-5xl text-center font-bold text-blue-500">
        Toy added
      </h2>
      <form
        onSubmit={handleSubmit}
        className="bg-indigo-600 p-10 w-[%] mx-auto mt-20  rounded-lg shadow-lg shadow-slate-200"
      >
        {/* Name and Seller */}
        <div className="md:flex gap-4">
          <div className="form-control  md:w-1/2">
            <label className="label">
              <span className="label-text">Toy Name</span>
            </label>
            <label className="input-group">
              <span className="bg-blue-500">Toy Name</span>
              <input
                type="text"
                name="name"
                placeholder="Enter Toy name"
                className="input input-bordered bg-slate-300 w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Seller Name</span>
            </label>
            <label className="input-group">
              <span className="bg-blue-500">Seller Name</span>
              <input
                type="text"
                name="seller"
                placeholder="Enter Toy Seller"
                className="input input-bordered bg-slate-300 w-full"
              />
            </label>
          </div>
        </div>
        {/* Seller email */}
        <div className="md:flex gap-4">
          <div className="form-control  md:w-1/2">
            <label className="label">
              <span className="label-text">Seller Email</span>
            </label>
            <label className="input-group">
              <span className="bg-blue-500">Seller Email</span>
              <input
                type="email"
                name="email"
                placeholder="Enter seller@info"
                className="input input-bordered bg-slate-300 w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <label className="input-group">
              <span className="bg-blue-500">Price</span>
              <input
                type="text"
                name="price"
                placeholder="Enter price"
                className="input input-bordered bg-slate-300 w-full"
              />
            </label>
          </div>
        </div>

        <div className="md:flex gap-4">
          <div className="form-control  md:w-1/2">
            <label className="label">
              <span className="label-text">Rating</span>
            </label>
            <label className="input-group">
              <span className="bg-blue-500">Rating</span>
              <input
                type="text"
                name="rating"
                placeholder="Enter Rating"
                className="input input-bordered bg-slate-300 w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Avilabil quantity</span>
            </label>
            <label className="input-group">
              <span className="bg-blue-500">Avilabil quantity</span>
              <input
                type="text"
                name="quantity"
                placeholder="Enter Avilabil quantity"
                className="input input-bordered bg-slate-300 w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <label className="input-group">
              <span className="bg-blue-500">Description</span>
              <input
                type="text"
                name="description"
                placeholder="Enter Description"
                className="input input-bordered bg-slate-300 w-full"
              />
            </label>
          </div>
        </div>
    {/* Dropdown  subcategory*/}

    <select name="select" className="mt-5 mb-20 bg-pink-500 rounded p-2">
        <option value="Sports Cars" className="bg-orange-300" >Sports Cars</option>
        <option value="Off-Road Vehicles" className="bg-orange-100" >Off-Road Vehicles</option>
        <option value="Off-Road Vehicles" className="bg-orange-400" >Off-Road Vehicles</option>
      </select>

    

        {/* Photo url */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo</span>
          </label>
          <label className="input-group">
            <span className="bg-blue-500">Photo</span>
            <input
              type="text"
              name="photo"
              placeholder="Enter Photo URL"
              className="input input-bordered bg-slate-300 w-full"
            />
          </label>
        </div>

        {/* submit button */}
        <div className="form-control mt-5">
          <input
            className="bg-indigo-500 hover:bg-indigo-100 py-2 rounded-lg font-bold"
            type="submit"
            value="ADD COFFEE"
          />
        </div>
      </form>
    </div>
  );
};

export default AddAToy;
