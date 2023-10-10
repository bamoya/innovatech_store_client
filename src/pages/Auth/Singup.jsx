import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Signup = () => {
  const [data, setData] = useState({
    fullName: "",
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    // console.log(data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(process.env.REACT_APP_API_URL + "/auth/local/register", data)
      .then((response) => {
        toast.success("you are successfully registered");
        navigate("/login");
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
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Create new account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            onSubmit={(e) => handleSubmit(e)}
            className="space-y-6"
            action="#"
            method="POST"
          >
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Full name
              </label>
              <div className="mt-2">
                <input
                  onChange={(e) => handleChange(e)}
                  id="fullName"
                  name="fullName"
                  type="text"
                  autoComplete="text"
                  required
                  className="block input input-bordered w-full  "
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Username
              </label>
              <div className="mt-2">
                <input
                  onChange={(e) => handleChange(e)}
                  id="username"
                  name="username"
                  type="text"
                  autoComplete="text"
                  required
                  className="block input input-bordered w-full  "
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  onChange={(e) => handleChange(e)}
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block input input-bordered w-full  "
                />
              </div>
            </div>

            <div>
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
                  onChange={(e) => handleChange(e)}
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full input input-bordered "
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="btn w-full btn-neutral rounded-md  font-semibold text-white shadow-sm"
              >
                Sign up
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Already a member?{" "}
            <Link
              to={"/login"}
              className="font-semibold leading-6 text-neutral hover:text-neutral-focus"
            >
              Sing in
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Signup;
