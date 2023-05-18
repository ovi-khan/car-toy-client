import React from 'react';
import bannerImg1 from '../../../../public/Car-toy-image/bannerimg1.jpg'
import bannerImg2 from '../../../../public/Car-toy-image/bannerimg2.jpg'
import bannerImg3 from '../../../../public/Car-toy-image/bannerimg3.jpg'
import bannerImg4 from '../../../../public/Car-toy-image/bannerimg4.jpg'
import bannerImg5 from '../../../../public/Car-toy-image/bannerimg5.jpg'

const Banner = () => {
    return (
        <div className="carousel w-full h-[600px] rounded-xl mt-20">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src={bannerImg1}
            className="w-full"
          />
          <div className="absolute flex items-center h-full left-0   botton-0 justify-between left-5 right-5 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0) 100%)]">
           <div className="text-white space-y-7 pl-24 w-1/2">
              <h2 className="text-5xl font-bold">Affordable Price For Car Servicing</h2>
              <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
              <button className="btn btn-active btn-primary mr-5">Discover More</button>
              <button className="btn btn-outline btn-secondary">Latest Project</button>
  
  
           </div>
           <div className="mt-96">
           <a href="#slide4" className="btn btn-circle mr-5">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
           </div>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src={bannerImg2}
            className="w-full"
          />
        <div className="absolute flex items-center h-full left-0   botton-0 justify-between left-5 right-5 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0) 100%)]">
           <div className="text-white space-y-7 pl-24 w-1/2">
              <h2 className="text-5xl font-bold">Affordable Price For Car Servicing</h2>
              <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
              <button className="btn btn-active btn-primary mr-5">Discover More</button>
              <button className="btn btn-outline btn-secondary">Latest Project</button>
  
  
           </div>
           <div className="mt-96">
           <a href="#slide2" className="btn btn-circle mr-5">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
           </div>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src={bannerImg3}
            className="w-full"
          />
         <div className="absolute flex items-center h-full left-0   botton-0 justify-between left-5 right-5 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0) 100%)]">
           <div className="text-white space-y-7 pl-24 w-1/2">
              <h2 className="text-5xl font-bold">Affordable Price For Car Servicing</h2>
              <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
              <button className="btn btn-active btn-primary mr-5">Discover More</button>
              <button className="btn btn-outline btn-secondary">Latest Project</button>
  
  
           </div>
           <div className="mt-96">
           <a href="#slide3" className="btn btn-circle mr-5">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
           </div>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src={bannerImg4}
            className="w-full"
          />
          <div className="absolute flex items-center h-full left-0   botton-0 justify-between left-5 right-5 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0) 100%)]">
           <div className="text-white space-y-7 pl-24 w-1/2">
              <h2 className="text-5xl font-bold">Affordable Price For Car Servicing</h2>
              <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
              <button className="btn btn-active btn-primary mr-5">Discover More</button>
              <button className="btn btn-outline btn-secondary">Latest Project</button>
  
  
           </div>
           <div className="mt-96">
           <a href="#slide4" className="btn btn-circle mr-5">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
           </div>
          </div>
        </div>
      </div>
    );
};

export default Banner;