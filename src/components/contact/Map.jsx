import React from "react";
import { useFetch } from "../../hooks/useFetch";
import qs from "qs";

const locationUrl =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6646.833509713401!2d-7.617183304804314!3d33.594489661382134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7d282df5a7ad5%3A0xc5e94bd1f59a26e7!2sINNOVATECH%20ENGINEERING!5e0!3m2!1sen!2sma!4v1691413009086!5m2!1sen!2sma";

const Map = () => {
  const query = () =>
    qs.stringify({
      populate: ["email", "phone", "address"],
    });

  const { data } = useFetch(`/contact-page?${query()}`);

  return (
    <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
      <iframe
        width="100%"
        height="100%"
        className="absolute inset-0 grayscale-1 contrast-125 opacity-40"
        frameborder="0"
        title="map"
        marginheight="0"
        marginwidth="0"
        scrolling="no"
        src={locationUrl}
      ></iframe>
      <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md text-center mx-auto">
        <div className="lg:w-1/2 px-6">
          <h2 className="title-font font-bold text-gray-900 tracking-widest text-xs">
            ADDRESS
          </h2>
          <p className="mt-1">{data?.attributes?.address}</p>
        </div>
        <div className="w-full lg:w-1/2 px-6 mt-4 lg:mt-0">
          <h2 className="title-font font-bold text-gray-900 tracking-widest text-xs">
            EMAIL
          </h2>
          <p className="mt-1">{data?.attributes?.email}</p>
          <h2 className="title-font font-bold text-gray-900 tracking-widest text-xs mt-4">
            PHONE
          </h2>
          <p className="leading-relaxed">{data?.attributes?.phone}</p>
        </div>
      </div>
    </div>
  );
};

export default Map;
