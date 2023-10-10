import React from 'react'
import {FaChevronRight} from 'react-icons/fa'


const SectionTitle = ({title, href, buttonName }) => {
  return (
    <div className='flex justify-between mb-10 gap-5 items-center'>
        <h2 className="text-3xl font-semibold text-gray-700  md:text-4xl ">{title}</h2>

        {href && 
          <div className='flex items-center  text-gray-700 gap-2'>
              <a  href={href} className='group text-base font-semibold'>{buttonName}<span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-gray-600"></span></a>
              <FaChevronRight className='text-sm'/>
          </div>
        }
        
    </div>
  )
}

export default SectionTitle