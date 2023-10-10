import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);
  const requestObj = useMakeRequest();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await requestObj.get(url);

        setData(res.data.data);
      } catch (err) {
        setError(err);
        console.log(err);
      }
      setLoading(false);
    };
    fetchData();
  }, [url]);
  // console.log(data);
  return { data, loading, error };
};

const useMakeRequest = () => {
  const token = useSelector((state) => state.userReducer.token);

  console.log(token);

  const makeRequest = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
  });

  if (token) {
    makeRequest.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    makeRequest.defaults.headers.common["Authorization"] = "";
  }

  return makeRequest;
};

export { useFetch, useMakeRequest };
