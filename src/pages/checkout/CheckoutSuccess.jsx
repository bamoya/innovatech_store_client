import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useMakeRequest } from "../../hooks/useFetch";
import { resetCart } from "../../redux/cartSlice";
import { useLocation } from "react-router-dom";

const CheckoutSuccess = () => {
  const requestObj = useMakeRequest();

  const dispatch = useDispatch();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const sessionId = queryParams.get("session_id");

  console.log(sessionId);

  useEffect(() => {
    // clear cart
    dispatch(resetCart());

    // change payment status in db
    requestObj
      .put(process.env.REACT_APP_API_URL + "/order/confirm", {
        checkout_session: sessionId,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [sessionId]);
  return (
    <div className="container mx-auto flex flex-col items-center justify-center h-screen">
      <div className="bg-white p-6  md:mx-auto">
        <svg viewBox="0 0 24 24" class="text-green-600 w-16 h-16 mx-auto my-6">
          <path
            fill="currentColor"
            d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"
          ></path>
        </svg>
        <div className="text-center">
          <h3 className="md:text-2xl text-base text-gray-900 font-semibold text-center">
            Payment Done!
          </h3>
          <p className="text-gray-600 my-2">
            Thank you for completing your secure online payment.
          </p>
          <p> Have a great day! </p>
        </div>
      </div>
    </div>
  );
};

export default CheckoutSuccess;
