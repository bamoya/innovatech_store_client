import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../../../hooks/useFetch";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/cartSlice";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import qs from "qs";
import TextVariants from "./TextVariants";
import ColorVariants from "./ColorVariants";

/**
 * method to dynamically render variants based on their type
 * @param {List} variants
 * @param {function} setPrice
 * @returns <Components />
 */
const renderVariants = (variants, setPrice) => {
  return variants?.map((variant) => {
    switch (variant.type) {
      case "text":
        return (
          <TextVariants
            title={variant.title}
            values={variant.values}
            setPrice={setPrice}
          />
        );

      case "color":
        return (
          <ColorVariants
            title={variant.title}
            values={variant.values}
            setPrice={setPrice}
          />
        );

      default:
        return null;
    }
  });
};

const ProductDetails = () => {
  const params = useParams();

  const productQuery = () =>
    qs.stringify({
      populate: [
        "category",
        "brand",
        "subCategories",
        "images",
        "variants.values",
      ],
    });

  const { data } = useFetch(`/products/${params.id}?${productQuery()}`);

  const {
    data: product,
    loading,
    error,
  } = useFetch(`/products/${params.id}?populate=*`);

  const productDetails = product?.attributes;

  const images = productDetails?.images.data;
  const description = productDetails?.description;

  const [activeImg, setActiveImage] = useState(0);

  const [amount, setAmount] = useState(1);

  const [price, setPrice] = useState(productDetails?.price);

  const increaseAmount = () => {
    setAmount(amount + 1);
  };
  const decreaseAmount = () => {
    if (amount > 1) {
      setAmount(amount - 1);
    }
  };
  //ad to cart :
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: product.id,
        title: productDetails.title,
        price: price || productDetails?.price,
        subtitle: productDetails.subtitle,
        imgSrc: process.env.REACT_APP_UPLOAD_URL + images[0].attributes.url,
        quantity: amount,
        link: `shop/product/${product.id}`,
      })
    );
  };

  return (
    <>
      {loading ? (
        "Loading"
      ) : (
        <div className="container mx-auto my-20 px-5">
          <div className="flex flex-col justify-between lg:flex-row gap-16 lg:items-center">
            {/* images */}
            <div className="flex flex-col gap-6 lg:w-2/4">
              <div className="p-5 rounded-md border-gray-300 shadow-lg">
                <img
                  src={
                    process.env.REACT_APP_UPLOAD_URL +
                    productDetails?.images.data[activeImg].attributes.url
                  }
                  className="w-full aspect-square object-contain rounded-xl"
                />
              </div>

              <div className="flex flex-row flex-wrap gap-2 justify-between ">
                {images?.map((image) => (
                  <div className="p-2 border border-gray-200 rounded-md shadow-md">
                    <img
                      src={
                        process.env.REACT_APP_UPLOAD_URL + image.attributes.url
                      }
                      className="w-24 h-24 aspect-square object-contain rounded-md cursor-pointer"
                      onClick={() => setActiveImage(images.indexOf(image))}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Details */}
            <div className="flex flex-col gap-4 lg:w-2/4">
              <div className="flex justify-between">
                <h1 className="text-3xl font-bold">{productDetails?.title}</h1>
                <h6 className="text-2xl font-semibold">
                  $ {price || productDetails?.price}
                </h6>
              </div>

              <p className="text-base-500 font-semibold">
                {productDetails?.subtitle}
              </p>

              {/* <p className="text-gray-700">{productDetails?.description}</p> */}

              {/* render Variants if any one */}
              {renderVariants(data?.attributes?.variants, setPrice)}

              <div className="flex flex-row items-center gap-5 lg:gap-12">
                <div className="flex flex-row items-center">
                  <button
                    className="btn btn-outline w-10 h-6  rounded-lg text-3xl"
                    onClick={decreaseAmount}
                  >
                    -
                  </button>
                  <span className="py-4 px-6 rounded-lg font-semibold">
                    {amount}
                  </span>

                  <button
                    className="btn btn-outline w-10 h-6  rounded-lg  text-3xl"
                    onClick={increaseAmount}
                  >
                    +
                  </button>
                </div>
                <button
                  className="btn-neutral text-white rounded-md font-semibold py-3 sm:px-16 px-6"
                  onClick={handleAddToCart}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>

          <div className="my-20">
            <ReactMarkdown
              className="reactMarkDown"
              transformImageUri={(url) =>
                process.env.REACT_APP_UPLOAD_URL + url
              }
            >
              {description}
            </ReactMarkdown>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetails;
