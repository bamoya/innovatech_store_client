import Cookies from "js-cookie";
import { makeRequest } from "../hooks/makeRequest";

export const setToken = (data) => {
  if (typeof window === "undefined") {
    return;
  }

  console.log(data);
  Cookies.set("id", data.user.id);
  Cookies.set("username", data.user.username);
  Cookies.set("jwt", data.jwt);
  makeRequest.defaults.headers.common["Authorization"] = `Bearer ${data.jwt}`;
};

export const unsetToken = () => {
  if (typeof window === "undefined") {
    return;
  }

  Cookies.remove("id");
  Cookies.remove("username");
  Cookies.remove("jwt");
  makeRequest.defaults.headers.common["Authorization"] = "";
};
