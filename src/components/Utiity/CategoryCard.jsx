import React from 'react'
import { Link } from 'react-router-dom'

const CategoryCard = ( {id, imgSrc, title, subtitle, href} ) => {
    return (
    
    <div className='px-4  '>
        <div className="card h-96 w-[300px] bg-base-100 shadow-lg  overflow-hidden group">
            <figure onClick={() => console.log(`/shop/product/${id}`)} 
            className='h-[70%]   group-hover:cursor-pointer group-hover:scale-110 group-hover:opacity-70 duration-300 ease-out '>
                <img src={imgSrc} className='h-full w-full aspect-square object-center' />
            </figure>
            <div  className="flex flex-col items-center justify-center h-[30%] ">
                <Link to={href} >
                    <h2 className="font-semibold text-xl text-center">{title}</h2>
                </Link>
                
                <p className='text-center text-sm overflow-hidden'>{subtitle}</p>
            </div> 
            
        </div>
    </div>
    
)
}

export default CategoryCard