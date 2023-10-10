import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { FaXmark } from "react-icons/fa6";
import { useFetch } from "../../hooks/useFetch";
import { Link } from "react-router-dom";
import qs from "qs";

const SearchModal = ({ openSearch, setOpenSearch }) => {
  const cancelButtonRef = useRef(null);
  const [productName, setProductName] = useState("");

  const handleSearchChanges = (e) => {
    setProductName(e.target.value);
  };

  const searchQuery = (productName) => {
    return qs.stringify({
      populate: ["images"],
      filters: {
        title: {
          $containsi: productName,
        },
      },
    });
  };

  const navigateToProduct = () => {
    setOpenSearch(false);
    setProductName("");
  };

  const { data: products } = useFetch(`/products?` + searchQuery(productName));

  return (
    <Transition.Root show={openSearch} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={setOpenSearch}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform  overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg ">
                <div className=" px-4 py-3 sm:flex sm:flex-row gap-5 sm:px-6">
                  <input
                    onChange={(e) => handleSearchChanges(e)}
                    type="text"
                    placeholder="Search ....."
                    className="input input-bordered w-full "
                  />
                  <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center items-center rounded-lg bg-white px-2 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                    onClick={() => {
                      setOpenSearch(false);
                      setProductName("");
                    }}
                    ref={cancelButtonRef}
                  >
                    <FaXmark size={"25px"} />
                  </button>
                </div>

                <div className="bg-white px-7">
                  <div className="flex-col  divide-y-2  ">
                    {productName &&
                      products?.map((product) => (
                        <div className="flex justify-center my-2 py-2 items-center gap-2 ">
                          <div className="w-12">
                            <img
                              className="w-full aspect-square"
                              src={
                                process.env.REACT_APP_UPLOAD_URL +
                                product?.attributes?.images?.data[0].attributes
                                  ?.url
                              }
                              alt={product?.attributes?.name}
                            />
                          </div>
                          <Link
                            to={`shop/product/${product?.id}`}
                            onClick={() => navigateToProduct()}
                            className="w-full"
                          >
                            <div className="w-full flex justify-between hover:cursor-pointer">
                              <h1>{product?.attributes?.title}</h1>
                              <p>{product?.attributes?.price} $</p>
                            </div>
                          </Link>
                        </div>
                      ))}
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default SearchModal;
