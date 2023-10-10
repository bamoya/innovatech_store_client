import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { HiMiniShoppingCart } from "react-icons/hi2";
import { AiFillEye } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";
import { toast } from "react-toastify";

const Card = ({ id, title, price, subtitle, imgSrc }) => {
  const navigateToProduct = useNavigate();

  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id,
        title,
        price,
        subtitle,
        imgSrc,
        quantity: 1,
        link: `shop/product/${id}`,
      })
    );

    toast.success("Product added to cart");
  };

  return (
    <div className="px-4 ">
      <div className="card h-[300px] w-[250px] bg-base-100 shadow-lg  overflow-hidden group">
        <figure
          onClick={() => navigateToProduct(`/shop/product/${id}`)}
          className="h-1/2 aspect-square object-contain  hover:cursor-pointer hover:scale-110 hover:opacity-70 duration-300 ease-out "
        >
          <img src={imgSrc} className="h-full" />
        </figure>
        <div className="py-3 px-5  h-1/2 ">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">{title?.substring(0, 25)}</h2>
            <div className="flex flex-col justify-start">
              <p className="text-gray-600">{price}$</p>
            </div>
          </div>

          <p className=" text-sm overflow-hidden">
            {subtitle?.substring(0, 35) + " ..."}
          </p>

          <div className="rating rating-xs ">
            <input
              type="radio"
              name="rating-6"
              className="mask mask-star-2 bg-orange-400"
              checked
              readOnly
            />
            <input
              type="radio"
              name="rating-6"
              className="mask mask-star-2 bg-orange-400"
              checked
              readOnly
            />
            <input
              type="radio"
              name="rating-6"
              className="mask mask-star-2 bg-orange-400"
              checked
              readOnly
            />
            <input
              type="radio"
              name="rating-6"
              className="mask mask-star-2 bg-orange-400"
              checked
              readOnly
            />
            <input
              type="radio"
              name="rating-6"
              className="mask mask-star-2 bg-orange-400"
              readOnly
            />
          </div>

          {/* ADD TO CARD BUTTON */}
          <button
            onClick={() => handleAddToCart()}
            className="absolute bottom-4 right-4  btn-neutral text-white font-semibold p-2 rounded-lg "
          >
            <HiMiniShoppingCart size={"15px"} />
          </button>
        </div>
        {/* view Product icon */}
        {/* Add to wishes list Button */}
        <button className="absolute top-0 right-0 text-white p-2 rounded-lg opacity-0 btn-neutral group-hover:right-[45%] group-hover:top-[25%] group-hover:opacity-100  transition-all duration-300">
          <Link to={`/shop/product/${id}`}>
            <AiFillEye />
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Card;
