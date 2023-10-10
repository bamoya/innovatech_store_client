import React from "react";
import { useDispatch } from "react-redux";
import {
  deleteItem,
  drecreaseQuantity,
  increaseQuantity,
} from "../../redux/cartSlice";
import { Link } from "react-router-dom";

const CartItem = ({
  imageSrc,
  id,
  imageAlt,
  title,
  subtitle,
  price,
  link,
  quantity,
}) => {
  const dispatch = useDispatch();

  return (
    <li className="flex py-6">
      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full aspect-square object-contain"
        />
      </div>

      <div className="ml-4 flex flex-1 flex-col">
        <div>
          <div className="flex justify-between text-base font-medium text-gray-700">
            <h3>
              <Link to={link}>{title}</Link>
            </h3>
            <p className="ml-4 ">{price} $</p>
          </div>
          <p className="mt-1 text-sm text-gray-500">{subtitle}</p>
        </div>
        <div className="flex flex-1 items-end justify-between text-sm">
          <p className="flex flex-row-reverse justify-between gap-2">
            <button
              onClick={() => dispatch(increaseQuantity({ id }))}
              className="btn-neutral rounded-md w-6 px-2 py-1 text-white"
            >
              +
            </button>

            <p className="font-semibold text-gray-700">{quantity}</p>

            <button
              onClick={() => dispatch(drecreaseQuantity({ id }))}
              className="btn-neutral rounded-md  w-6 px-2 py-1 text-white"
            >
              -
            </button>
          </p>

          <div className="flex">
            <button
              onClick={() => dispatch(deleteItem(id))}
              type="button"
              className="font-medium text-white btn-neutral px-3 py-2 rounded-md"
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
