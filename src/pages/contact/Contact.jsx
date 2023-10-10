import React from "react";
import Map from "../../components/contact/Map";
import ContactForm from "../../components/contact/ContactForm";

const Contact = () => {
  return (
    <div className="text-gray-600 body-font relative">
      <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
        {/* Map Frame with contact info */}
        <Map />

        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
