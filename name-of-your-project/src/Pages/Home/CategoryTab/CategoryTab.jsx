import { useEffect, useState } from "react";
// import { Link, useLoaderData } from "react-router-dom";
import Tabs from "../Tabs/Tabs";
// import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

function CategoryTab() {
  const [carCategories, setCarCategories] = useState([]);
  const [activeTab, setActiveTab] = useState("Sports Cars");

  useEffect(() => {
    fetch(`https://toy-marketplace-server-ovi-khan.vercel.app/cars/${activeTab}`)
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
      <h1 className="text-center text-4xl text-red-500 font-bold mt-10 mb-10">Available Car's</h1>
      <div className="">
        <div className="">
          <div className="text-center">
            <div
              onClick={() => handleTabClick("Sports Cars")}
              className={`tab  tab2 remote ${
                activeTab == "Sports Cars" ? "bg-red-500 rounded font-bold text-white" : ""
              }`}
            >
              Sports Cars
            </div>
            <div
              onClick={() => handleTabClick("Truck")}
              className={`tab  tab2 Offline ${
                activeTab == "Truck" ? "bg-red-500 rounded font-bold text-white" : ""
              }`}
            >
              Truck
            </div>
            <div
              onClick={() => handleTabClick("Off-Road Vehicles")}
              className={`tab  tab2 Offline ${
                activeTab == "Off-Road Vehicles" ? "bg-red-500 rounded font-bold text-white" : ""
              }`}
            >
             Off-Road Vehicles
            </div>
          </div>
        </div>
      </div>
      <div className="mx-48 mt-10">
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



