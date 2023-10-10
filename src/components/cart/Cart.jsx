import { Fragment, useState, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { FaXmark } from "react-icons/fa6";
import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import { resetCart } from "../../redux/cartSlice"; //
import { loadStripe } from "@stripe/stripe-js";
import { useMakeRequest } from "../../hooks/useFetch";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Cart = ({ openCart, setOpenCart }) => {
  const navigate = useNavigate();
  const requestObj = useMakeRequest();
  const products = useSelector((state) => state.cartReducer.products);
  const user = useSelector((state) => state.userReducer.user);
  const [totalAmt, setTotalAmt] = useState("");
  const stripePromise = loadStripe(
    "pk_test_51NotadCiLevGTaGLt1fUuwMYwAeqZlzLastdMpkFYNEF3ZRBNsYlLvlXH34MDjppOl0eMzTLxPybW6ndHkemEfpg00oVpRuA6O"
  );

  useEffect(() => {
    let total = 0;
    products.map((item) => {
      total += item.price * item.quantity;
      return total;
    });
    setTotalAmt(total.toFixed(2));
  }, [products]);

  const handlePayment = async () => {
    if (user) {
      if (products.length > 0) {
        try {
          const stripe = await stripePromise;
          const res = await requestObj.post("/orders", {
            products: products.map((product) => ({
              id: product.id,
              title: product.title,
              quantity: product.quantity,
            })),
            total: totalAmt,
          });
          await stripe.redirectToCheckout({
            sessionId: res.data.stripeSession.id,
          });
        } catch (err) {
          console.log(err);
        }
      } else {
        toast.warn("Add some products to cart first");
        setOpenCart(false);
      }
    } else {
      toast.warn("Please login first");
      setOpenCart(false);
      navigate("/login");
    }
  };

  return (
    <Transition.Root show={openCart} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpenCart}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                    <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-xl  font-semiblod  text-gray-900">
                          Shopping cart
                        </Dialog.Title>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                            onClick={() => setOpenCart(false)}
                          >
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Close panel</span>
                            <FaXmark className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>

                      <div className="mt-8">
                        <div className="flow-root">
                          <ul
                            role="list"
                            className="-my-6 divide-y divide-gray-200"
                          >
                            {products.map((product) => (
                              <CartItem
                                key={product.id}
                                id={product.id}
                                title={product.title}
                                subtitle={product.subtitle}
                                price={product.price}
                                imageSrc={product.imgSrc}
                                quantity={product.quantity}
                                link={product.link}
                              />
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <p>Subtotal</p>
                        <p>${totalAmt}</p>
                      </div>

                      <div className="mt-6 flex justify-center items-center">
                        <button
                          onClick={() => handlePayment()}
                          className="rounded-md btn btn-neutral text-base font-medium text-white"
                        >
                          Checkout
                        </button>
                      </div>
                      <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                        <p>
                          or
                          <button
                            type="button"
                            className="font-medium mx-2 text-neutral hover:text-neutral-focus"
                            onClick={() => setOpenCart(false)}
                          >
                            Continue Shopping
                            <span aria-hidden="true"> &rarr;</span>
                          </button>
                        </p>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default Cart;
