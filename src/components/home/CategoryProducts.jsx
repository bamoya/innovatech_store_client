import React from "react";
import Slider from "react-slick";
import Card from "../product/Card";
import SamplePrevArrow from "../Utiity/SamplePrevArrow";
import SampleNextArrow from "../Utiity/SampleNextArrow";
import SectionTitle from "../Utiity/SectionTitle";

const CategoryProducts = ({ data }) => {
  const title = data?.title;
  const products = data?.products?.list?.data;
  const buttonLink = data?.button.href;
  const buttonName = data?.button.title;

  return (
    <div className="w-full my-20 container mx-auto">
      <SectionTitle title={title} buttonName={buttonName} href={buttonLink} />

      <Slider {...settings}>
        {products &&
          products.map((product) => (
            <div key={product.id}>
              <div className="w-full flex justify-center py-5 ">
                <Card
                  key={product.id}
                  id={product.id}
                  title={product.attributes?.title}
                  price={product.attributes?.price}
                  subtitle={product.attributes?.subtitle}
                  imgSrc={
                    process.env.REACT_APP_UPLOAD_URL +
                    product?.attributes?.images?.data[0].attributes.url
                  }
                />
              </div>
            </div>
          ))}
      </Slider>
    </div>
  );
};

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
      },
    },

    {
      breakpoint: 696,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      },
    },
  ],
};

export default CategoryProducts;
