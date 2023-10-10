import React from "react";
import qs from "qs";
import { useFetch } from "../../hooks/useFetch";
import ReactMarkdown from "react-markdown";

const Legals = () => {
  const query = () =>
    qs.stringify({
      populate: ["text"],
    });

  const { data } = useFetch(`/legal?${query()}`);
  return (
    <div className="container mx-auto my-20 px-5">
      <ReactMarkdown
        className="reactMarkDown"
        transformImageUri={(url) => process.env.REACT_APP_UPLOAD_URL + url}
      >
        {data?.attributes?.text}
      </ReactMarkdown>
    </div>
  );
};

export default Legals;
