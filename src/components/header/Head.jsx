import { Fragment, useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { HiOutlineSearch } from "react-icons/hi";
import { AiOutlineUser } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { unsetUser, unsetToken } from "../../redux/userSlice";
import { useFetch } from "../../hooks/useFetch";
import qs from "qs";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function setImageSrc(src) {
  return process.env.REACT_APP_UPLOAD_URL + src;
}

export function Head({ setOpenCart, setOpenSearch }) {
  const cartProducts = useSelector((state) => state.cartReducer.products);
  const user = useSelector((state) => state.userReducer.user);
  const dispatch = useDispatch();

  const [navigation, setNavigation] = useState([
    { name: "Home", href: "/", current: true },
    { name: "Shop", href: "/shop", current: false },
    { name: "Contact", href: "/contact", current: false }, // corrected href value
    { name: "Legals", href: "/legals", current: false },
  ]);

  const handleItemClick = (index) => {
    const updatedNavigation = navigation.map((item, i) => ({
      ...item,
      current: i === index,
    }));
    setNavigation(updatedNavigation);
  };

  const query = () =>
    qs.stringify({
      populate: ["title", "description", "logo"],
    });

  const { data: storeData } = useFetch(`/store-info?${query()}`);
  const storeLogo = storeData?.attributes?.logo.data.attributes.url;
  const storeName = storeData?.attributes?.title;
  const handleLogout = () => {
    dispatch(unsetUser());
    dispatch(unsetToken());
  };

  return (
    <Disclosure as="nav" className="bg-base-300">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-neutral hover:bg-neutral hover:text-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
                <Link
                  onClick={() => handleItemClick(0)}
                  to="/"
                  className="flex flex-shrink-0 items-center"
                >
                  <img
                    className="h-12 w-auto"
                    src={setImageSrc(storeLogo)}
                    alt={storeName}
                  />
                  <h1 className="text-xl font-semibold text-neutral uppercase hidden md:block ">
                    {storeName}
                  </h1>
                </Link>
                <div className="hidden md:ml-6 md:block">
                  <div className="flex space-x-4">
                    {navigation.map((item, index) => (
                      <Link
                        key={item.name}
                        onClick={() => handleItemClick(index)}
                        to={item.href}
                        className={classNames(
                          item.current
                            ? "bg-neutral text-white"
                            : "text-gray-300 hover:bg-neutral hover:text-white",
                          "rounded-md px-3 py-2 text-base font-semibold text-neutral"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 md:static md:inset-auto md:ml-6 md:pr-0">
                <div
                  onClick={() => setOpenSearch(true)}
                  className="btn btn-ghost btn-circle"
                >
                  <HiOutlineSearch size={"22px"} />
                </div>

                <div
                  tabIndex={0}
                  onClick={() => setOpenCart(true)}
                  className="btn btn-ghost btn-circle"
                >
                  <div className="indicator">
                    {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg> */}
                    <HiOutlineShoppingCart size={"25px"} />
                    <span className="badge badge-sm indicator-item">
                      {cartProducts.length > 0 ? cartProducts.length : 0}{" "}
                    </span>
                  </div>
                </div>

                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="relative flex rounded-full text-sm btn btn-ghost btn-circle">
                      {!user ? (
                        <div className="flex justify-center">
                          <AiOutlineUser size={"25px"} />
                        </div>
                      ) : (
                        <img
                          alt="profile"
                          className="h-full w-full aspect-square object-cover rounded-full"
                          src="https://img.freepik.com/free-photo/close-up-portrait-young-bearded-man-face_171337-2887.jpg?w=360"
                        />
                      )}
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      {user ? (
                        <>
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                to={"/user/profile"}
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm text-gray-700"
                                )}
                              >
                                Your Profile
                              </Link>
                            )}
                          </Menu.Item>

                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                onClick={() => handleLogout()}
                                to={"/login"}
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm text-gray-700"
                                )}
                              >
                                Sign out
                              </Link>
                            )}
                          </Menu.Item>
                        </>
                      ) : (
                        <>
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                to={"/login"}
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm text-gray-700"
                                )}
                              >
                                Sign in
                              </Link>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                to={"/register"}
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm text-gray-700"
                                )}
                              >
                                Sign up
                              </Link>
                            )}
                          </Menu.Item>
                        </>
                      )}
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item, index) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => handleItemClick(index)}
                  className={classNames(
                    item.current
                      ? "bg-neutral text-white"
                      : "text-gray-300 hover:bg-neutral hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-semibold text-neutral"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
