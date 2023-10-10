import axios from "axios";
import React, { useState } from "react";
// import { setToken } from "../../api/auth";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser, setToken } from "../../redux/userSlice";
import { toast } from "react-toastify";

const Login = () => {
  const [data, setData] = useState({
    identifier: "",
    password: "",
  });

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(process.env.REACT_APP_API_URL + "/auth/local", data)
      .then((response) => {
        dispatch(setToken(response.data.jwt));
        dispatch(setUser(response.data.user));
        navigate("/");
        toast.success("you logged successfully");
      })
      .catch((error) => {
        toast.warn(
          error.response?.data?.error?.message || "oops an error occured"
        );
      });
  };

  const handleChage = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    // console.log(data);
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
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            className="space-y-6"
            onSubmit={(e) => handleSubmit(e)}
            method="POST"
          >
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="identifier"
                  type="email"
                  autoComplete="email"
                  onChange={(e) => handleChage(e)}
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
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-neutral hover:text-neutral-focus"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  onChange={(e) => handleChage(e)}
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
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{" "}
            <Link
              to={"/register"}
              className="font-semibold leading-6 text-neutral hover:text-neutral-focus"
            >
              Sing up
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
