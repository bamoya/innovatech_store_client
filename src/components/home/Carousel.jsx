
import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import {sliderData } from '../../constants/data' 

const slides = sliderData;

const Slider = () => {
  return (
    <div className="relative container my-20 mt-10 mx-auto rounded-lg overflow-hidden">
      <Carousel
        showStatus={false}
        showThumbs={true}
        showArrows={true}
        infiniteLoop
        autoPlay
        interval={5000} // Change the interval as needed (in milliseconds)
      >
        {slides.map((slide) => (
          <div key={slide.id} className="relative">
            <div
              className="h-96 bg-center bg-cover "
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-40"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6  text-white">
                <h2 className="text-4xl font-bold mb-4">{slide.title}</h2>
                <p className="text-lg">{slide.description}</p>
              </div>
            </div>
            <a href={slide.link} className="absolute inset-0 z-10"></a>
          </div>
        ))}
      </Carousel>
      
    </div>
  );
};

export default Slider;