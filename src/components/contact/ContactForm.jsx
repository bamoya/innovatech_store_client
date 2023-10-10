import React from 'react'

const ContactForm = () => {
  return (
    <form className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
        <h2 className="text-gray-900 text-xl mb-5 font-medium title-font">Contact US</h2>
        
        <div className="relative mb-4">
            <label for="name" className="leading-7 text-sm text-gray-600">Name</label>
            <input type="text" id="name" name="name" className="w-full input input-bordered" required />
        </div>
        <div className="relative mb-4">
            <label for="email" className="leading-7 text-sm text-gray-600">Email</label>
            <input type="email" id="email" name="email" className="w-full input input-bordered" required />
        </div>
        <div className="relative mb-4">
            <label for="message" className="leading-7 text-sm text-gray-600">Message</label>
            <textarea id="message" name="message" className="w-full bg-white  border textarea textarea-bordered " required ></textarea>
        </div>
        <button type='submit' className="text-white btn btn-neutral rounded-md text-lg">Send</button>
        
    </form>
  )
}

export default ContactForm