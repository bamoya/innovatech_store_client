import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "../../redux/userSlice";
import { toast } from "react-toastify";
import { useMakeRequest } from "../../hooks/useFetch";

const Profile = () => {
  const user = useSelector((state) => state.userReducer.user);
  const [data, setData] = useState({
    ...user,
  });
  const requestObj = useMakeRequest();

  const dispatch = useDispatch();

  const handleChage = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    // console.log(data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    requestObj
      .put(process.env.REACT_APP_API_URL + "/user/me", data)
      .then((response) => {
        toast.success("your data succefully updated");
        dispatch(setUser({ ...user, ...data }));
      })
      .catch((error) => {
        toast.warn(error.response?.data?.error?.message);
      });
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          {/* <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
        /> */}
          <h2 className=" text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Edit Your Profile Info
          </h2>
        </div>

        <div className="mt-10 container mx-auto ">
          <form
            onSubmit={(e) => handleSubmit(e)}
            className="sm:grid sm:grid-cols-2 sm:gap-5 flex flex-col justify-center items-center "
            method="POST"
          >
            <div className="max-w-xs sm:mx-auto sm:w-full sm:max-w-sm">
              <label
                htmlFor="fullName"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Full name
              </label>
              <div className="mt-2">
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  autoComplete="fullName"
                  value={data.fullName}
                  onChange={(e) => handleChage(e)}
                  required
                  className="block input input-bordered w-full  "
                />
              </div>
            </div>

            <div className="max-w-xs sm:mx-auto sm:w-full sm:max-w-sm">
              <label
                htmlFor="username"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Username
              </label>
              <div className="mt-2">
                <input
                  id="username"
                  name="username"
                  type="text"
                  autoComplete="username"
                  value={data.username}
                  onChange={(e) => handleChage(e)}
                  required
                  className="block input input-bordered w-full  "
                />
              </div>
            </div>

            <div className="max-w-xs sm:mx-auto sm:w-full sm:max-w-sm">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={data.email}
                  onChange={(e) => handleChage(e)}
                  required
                  className="block input input-bordered w-full  "
                />
              </div>
            </div>

            {/* <div className="max-w-xs sm:mx-auto sm:w-full sm:max-w-sm">
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  value={data.password}
                  onChange={(e) => handleChage(e)}
                  required
                  className="block w-full input input-bordered "
                />
              </div>
            </div> */}

            <div className="max-w-xs mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
              <button
                type="submit"
                className="btn w-full btn-neutral rounded-md  font-semibold text-white shadow-sm"
              >
                Submit change
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Profile;
