import React from "react";

import Carousel from "../../components/home/Carousel";
import Categories from "../../components/home/Categories";
import CategoryProducts from "../../components/home/CategoryProducts";
import BestSellers from "../../components/home/BestSellers";
import { promotion } from "../../constants/data";
import Promotion from "../../components/home/Promotion";
import Caro from "../../components/home/Caro";
import { useFetch } from "../../hooks/useFetch";
import qs from "qs";

const Home = () => {
  const categoryQuery = (category) =>
    qs.stringify(
      {
        populate: ["images"],
        filters: {
          category: {
            title: {
              $eq: category,
            },
          },
        },
      },
      {
        encodeValuesOnly: true, // prettify URL
      }
    );

  const QUERY = qs.stringify({
    populate: [
      "blocks.slide.image",
      "blocks.products.list.images",
      "blocks.button",
      "blocks.categories.image",
    ],
  });

  const { data } = useFetch(`home-page?${QUERY}`);
  const blocks = data?.attributes?.blocks;

  return (
    <div>
      {/* <Carousel  /> */}
      {/* <Caro /> */}
      {renderComponents(blocks)}
      {/* <Categories />  */}
      {/* <CategoryProducts title={"Softwares"} products={softwares} link={'/shop/products/category/2'} />
        <CategoryProducts title={"Laptops"} products={laptops} link={'/shop/products/category/1'} />
        <CategoryProducts title={"PC Components"} products={pcComponents} link={'/shop/products/category/3'} /> */}
      {/* <Promotion title={promotion.title} description={promotion.description} image={promotion.image} link={promotion.link} />
        <BestSellers newProducts={newProducts} /> */}
    </div>
  );
};

const renderComponents = (blocks) => {
  return blocks?.map((block) => {
    switch (block.__component) {
      case "page.slider":
        return <Caro key={block.title + block.id} data={block} />;

      case "page.product-slider":
        return <CategoryProducts key={block.title} data={block} />;
      case "page.categories":
        return <Categories key={block.title} data={block} />;
      default:
        return null;
    }
  });
};

export default Home;
