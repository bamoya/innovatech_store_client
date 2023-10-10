import React from "react";
import CategoryCard from "../Utiity/CategoryCard";

const Categories = ({ data }) => {
  const title = data?.title;
  const subTitle = data?.subtitle;
  const categories = data?.categories.data;
  const category = categories[0];

  return (
    <div className="container mx-auto my-20">
      <h2 className="text-3xl font-semibold text-gray-700 mb-1 text-center md:text-4xl">
        {title}
      </h2>
      <p className="text-xl  text-gray-700 text-center  mb-5">{subTitle}</p>
      <div className="flex flex-wrap gap-5 justify-center ">
        {categories?.map((category) => (
          <CategoryCard
            key={category?.id}
            id={category.id}
            title={category?.attributes.title}
            subtitle={category?.attributes.description}
            imgSrc={
              process.env.REACT_APP_UPLOAD_URL +
              category?.attributes?.image.data[0].attributes.url
            }
          />
        ))}
      </div>
    </div>
  );
};

export default Categories;
