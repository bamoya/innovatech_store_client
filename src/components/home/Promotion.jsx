import React from 'react'
import {  Link } from 'react-router-dom'

const Promotion = ({title, description, link,  image}) => {
  return (
    <Link to={link}>
      <div className="w-full h-80 mb-20 rounded-lg bg-base-300 py-5 px-3 relative font-titleFont">
        <img
          className=" h-full object-cover hidden bg-transparent md:inline-block"
          src={image}
        />
        <div className="w-full md:w-2/3 xl:w-1/2 h-80 absolute px-4 md:px-0 top-0 right-0 flex flex-col items-start gap-6 justify-center">
          <h1 className="text-3xl font-semibold text-primeColor">
            {title}
          </h1>
          <p className="text-base font-normal text-primeColor max-w-[600px] mr-4">
            {description}
          </p>
          <button  className='btn-neutral rounded text-white px-3 py-2' >
            Shop Now</button>
        </div>
      </div>
    </Link>
  )
}

export default Promotion