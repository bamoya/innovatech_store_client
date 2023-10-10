import React from "react";
import { footerData } from "../../constants/data";
import { useFetch } from "../../hooks/useFetch";
import qs from "qs";
import { Link } from "react-router-dom";

const pages = [
  { name: "Contact", href: "/contact" }, // corrected href value
  { name: "Legals", href: "/legals" },
];

function setImageSrc(src) {
  return process.env.REACT_APP_UPLOAD_URL + src;
}

const Footer = () => {
  const query = () =>
    qs.stringify({
      populate: ["title", "description", "logo"],
    });
  const contactQuery = () =>
    qs.stringify({
      populate: ["email", "phone", "address"],
    });
  const { data: storeData } = useFetch(`/store-info?${query()}`);
  const storeLogo = storeData?.attributes?.logo.data.attributes.url;
  const storeName = storeData?.attributes?.title;

  const { data: contactInfo } = useFetch(`/contact-page?${contactQuery()}`);
  console.log(contactInfo);
  return (
    <footer className="footer p-10 bg-base-200 w-full text-base-content ">
      <div>
        <Link to="/" className="flex flex-shrink-0 items-center">
          <img
            className="h-12 w-auto"
            src={setImageSrc(storeLogo)}
            alt={storeName}
          />
          <h1 className="text-xl font-semibold text-neutral uppercase ">
            {storeName}
          </h1>
        </Link>
      </div>

      <div>
        <span className="footer-title">Company</span>
        {pages.map((page) => (
          <Link to={page.href} className="link link-hover">
            {page.name}
          </Link>
        ))}
      </div>
      <div>
        <span className="footer-title">Contact</span>
        <Link type="email" className="link link-hover">
          {contactInfo?.attributes?.email}
        </Link>
        <Link type="number" className="link link-hover">
          {contactInfo?.attributes?.phone}
        </Link>
        <Link type="text" className="link link-hover">
          {contactInfo?.attributes?.address}
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
