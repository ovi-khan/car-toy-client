import React, { useEffect, useState } from "react";
import CountUp from 'react-countup';

const Status = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div>
      <h1 className="text-center text-5xl font-bold mb-10">
        Our Current Client
      </h1>
      <div className="lg:flex  gap-5 shadow mb-20 p-5">
        <div className="stat place-items-center bg-blue-400 rounded-lg mt-2 ">
          <div className="stat-title text-black">Downloads</div>
          <div className="stat-value text-yellow-50">{count}K</div>
          <div className="stat-desc text-black">From January 1st to February 1st</div>
        </div>

        <div className="stat place-items-center bg-orange-400 rounded-lg mt-2">
          <div className="stat-title text-black">Users</div>
          <div className="stat-value text-secondary"><CountUp end={5000} />+</div>
          <div className="stat-desc text-secondary text-black">↗︎ 40 (2%)</div>
        </div>

        <div className="stat place-items-center bg-cyan-300 rounded-lg mt-2">
          <div className="stat-title text-black">New Registers</div>
          <div className="stat-value"><CountUp end={1200} />+</div>
          <div className="stat-desc text-black">↘︎ 90 (14%)</div>
        </div>
      </div>
    </div>
  );
};

export default Status;
