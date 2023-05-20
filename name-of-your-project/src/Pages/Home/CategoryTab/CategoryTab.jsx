import { useEffect, useState } from "react";
// import { Link, useLoaderData } from "react-router-dom";
import Tabs from "../Tabs/Tabs";
// import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

function CategoryTab() {
  const [carCategories, setCarCategories] = useState([]);
  const [activeTab, setActiveTab] = useState("Sports Cars");

  useEffect(() => {
    fetch(`http://localhost:5000/cars/${activeTab}`)
      .then((res) => res.json())
      .then((data) => {
        setCarCategories(data);
      });
  }, [activeTab]);

  // const result = carCategories?.filter(car => car.status == activeTab);
  // setCarCategories(result)

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };


  return (
    <div className="">
      <h1 className="title text-center mt-5 p-5">Available Car's</h1>
      <div className="m-0 m-auto border border-success justify-center items-center">
        <div className="text-center w-100 m-auto">
          <div className="tabs flex justify-content-center align-items-center">
            <div
              onClick={() => handleTabClick("Sports Cars")}
              className={`tab  tab2 remote ${
                activeTab == "Sports Cars" ? " bg-danger text-white" : ""
              }`}
            >
              Sports Cars
            </div>
            <div
              onClick={() => handleTabClick("Battery Charge")}
              className={`tab  tab2 Offline ${
                activeTab == "Battery Charge" ? " bg-danger text-white" : ""
              }`}
            >
              Battery Charge
            </div>
            <div
              onClick={() => handleTabClick("Off-Road Vehicles")}
              className={`tab  tab2 Offline ${
                activeTab == "Off-Road Vehicles" ? " bg-danger text-white" : ""
              }`}
            >
             Off-Road Vehicles
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 mt-5 row">
        {carCategories?.map( car => 
          <Tabs 
          car={car}
          key={car._id}
          ></Tabs>
        )}
      </div>
    </div>
  );
}

export default CategoryTab;


// import React, { useState, useEffect } from 'react';

// const CategoryTab = ({ tabs }) => {
//   const [activeTab, setActiveTab] = useState(0);
//   const [tabData, setTabData] = useState([]);

//   // useEffect(() => {
//   //   // Function to fetch data from the server for the active tab
//   //   const fetchData = async () => {
//   //     // tabs[activeTab].
//   //     const response = await fetch('http://localhost:5000/cars');
//   //     const data = await response.json();
//   //     setTabData(data);
//   //   };

//   // }, [activeTab, tabs]);

//   // const handleTabClick = (index) => {
//   //   setActiveTab(index);
//   // };

//   return (
//     <div>
//       {/* <div className="flex">
//         {tabs.map((tab, index) => (
//           <button
//             key={index}
//             className={`px-4 py-2 ${
//               activeTab === index ? 'bg-gray-500 text-white' : 'bg-gray-200'
//             }`}
//             onClick={() => handleTabClick(index)}
//           >
//             {tab.title}
//           </button>
//         ))}
//       </div>
//       <div className="p-4 bg-gray-100 mt-4">
//         {tabData.length > 0 ? (
//           <ul>
//             {tabData.map((item) => (
//               <li key={item.id}>{item.name}</li>
//             ))}
//           </ul>
//         ) : (
//           <p>Loading...</p>
//         )}
//       </div> */}
//     </div>
//   );
// };

// export default CategoryTab;
