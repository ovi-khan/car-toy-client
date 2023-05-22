import React from 'react';
import { FaBeer } from 'react-icons/fa';
import { GiArrowDunk } from "react-icons/gi";
import bannerImg1 from '../../../../public/Car-toy-image/bannerimg1.jpg'
import bannerImg2 from '../../../../public/Car-toy-image/bannerimg2.jpg'
import bannerImg3 from '../../../../public/Car-toy-image/bannerimg3.jpg'
import bannerImg4 from '../../../../public/Car-toy-image/bannerimg4.jpg'
import bannerImg5 from '../../../../public/Car-toy-image/bannerimg5.jpg'

const Banner = () => {
    return (
        <div className="carousel lg:w-full lg:h-[600px] rounded-xl lg:mt-20">
        <div id="slide1" className="carousel-item relative lg:w-full w-[100%]">
          <img
            src={bannerImg3}
            className="w-full"
          />
          <div className="absolute lg:flex lg:items-center lg:h-full left-0   botton-0 justify-between left-5 right-5 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0) 100%)]">
           <div className="text-white mt-10 lg:space-y-7  lg:pl-24 lg:w-1/2">
              <h2 className="lg:text-5xl text-2xl text-red-700 font-bold">Sports Car Toy</h2>
              <p>The sports car toy is designed to resemble a sleek and fast sports car. It often features a low-profile design, aerodynamic body lines, and vibrant colors</p>
              <div className='ms-44 text-5xl text-red-600 animate-bounce'>
              <button><GiArrowDunk/></button>
              </div>
              <div>
              <button className="btn btn-active btn-primary lg:mr-5">Get Yours Today</button>
              <button className="btn btn-outline btn-secondary">Shop Now</button>
              </div>
  
  
           </div>
           <div className="lg:mt-96 mt-10">
           <a href="#slide4" className="btn btn-outline btn-secondary  mr-5">
              ❮
            </a>
            <a href="#slide2" className="btn btn-outline btn-secondary">
              ❯
            </a>
           </div>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative lg:w-full w-[100%]">
          <img
            src={bannerImg2}
            className="w-full"
          />
          <div className="absolute lg:flex lg:items-center lg:h-full left-0   botton-0 justify-between left-5 right-5 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0) 100%)]">
           <div className="text-white mt-10 lg:space-y-7  lg:pl-24 lg:w-1/2">
              <h2 className="lg:text-5xl text-2xl text-red-700 font-bold">Construction Vehicle Toy</h2>
              <p>The construction vehicle toy represents heavy-duty machines used in construction sites, such as bulldozers, excavators, or dump trucks</p>
              <div className='ms-44 text-5xl text-red-600 animate-bounce'>
              <button><GiArrowDunk/></button>
              </div>
              <div>
              <button className="btn btn-active btn-primary lg:mr-5">Get Yours Today</button>
              <button className="btn btn-outline btn-secondary">Shop Now</button>
              </div>
  
  
           </div>
           <div className="lg:mt-96 mt-10">
           <a href="#slide1" className="btn btn-outline btn-secondary  mr-5">
              ❮
            </a>
            <a href="#slide3" className="btn btn-outline btn-secondary">
              ❯
            </a>
           </div>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative lg:w-full w-[100%]">
          <img
            src={bannerImg1}
            className="w-full"
          />
          <div className="absolute lg:flex lg:items-center lg:h-full left-0   botton-0 justify-between left-5 right-5 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0) 100%)]">
           <div className="text-white mt-10 lg:space-y-7  lg:pl-24 lg:w-1/2">
              <h2 className="lg:text-5xl text-2xl text-red-700 font-bold">Construction Vehicle Toy</h2>
              <p>The construction vehicle toy represents heavy-duty machines used in construction sites, such as bulldozers, excavators, or dump trucks</p>
              <div className='ms-44 text-5xl text-red-600 animate-bounce'>
              <button><GiArrowDunk/></button>
              </div>
              <div>
              <button className="btn btn-active btn-primary lg:mr-5">Get Yours Today</button>
              <button className="btn btn-outline btn-secondary">Shop Now</button>
              </div>
  
  
           </div>
           <div className="lg:mt-96 mt-10">
           <a href="#slide2" className="btn btn-outline btn-secondary  mr-5">
              ❮
            </a>
            <a href="#slide4" className="btn btn-outline btn-secondary">
              ❯
            </a>
           </div>
          </div>
        </div>
        <div id="slide1" className="carousel-item relative lg:w-full w-[100%]">
          <img
            src={bannerImg4}
            className="w-full"
          />
          <div className="absolute lg:flex lg:items-center lg:h-full left-0   botton-0 justify-between left-5 right-5 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0) 100%)]">
           <div className="text-white mt-10 lg:space-y-7  lg:pl-24 lg:w-1/2">
              <h2 className="lg:text-5xl text-2xl text-red-700 font-bold">Classic Car Toyy</h2>
              <p>The classic car toy is modeled after vintage or iconic cars from past eras.</p>
              <div className='ms-44 text-5xl text-red-600 animate-bounce'>
              <button><GiArrowDunk/></button>
              </div>
              <div>
              <button className="btn btn-active btn-primary lg:mr-5">Get Yours Today</button>
              <button className="btn btn-outline btn-secondary">Shop Now</button>
              </div>
  
  
           </div>
           <div className="lg:mt-96 mt-10">
           <a href="#slide3" className="btn btn-outline btn-secondary  mr-5">
              ❮
            </a>
            <a href="#slide1" className="btn btn-outline btn-secondary">
              ❯
            </a>
           </div>
          </div>
        </div>
      </div>
    );
};

export default Banner;