import React from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import SamplePrevArrow from "../Utiity/SamplePrevArrow";
import SampleNextArrow from "../Utiity/SampleNextArrow";

const Caro = ({ data }) => {
  const navigate = useNavigate();

  const slides = data?.slide;

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className="w-full mx-auto mb-20 bg-white">
      <Slider {...settings}>
        {slides?.map((slide) => (
          <div
            key={slide.id}
            onClick={() => navigate(slide.href)}
            className=" w-[500px] lg:w-[1600px] lg:h-[500px] h-[250px] overflow-hidden hover:cursor-pointer"
          >
            <img
              src={
                process.env.REACT_APP_UPLOAD_URL +
                slide.image.data.attributes.url
              }
              className="w-full h-full object-center "
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Caro;
