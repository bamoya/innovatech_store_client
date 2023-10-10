import React from 'react'
import Card from '../product/Card'

const ProductsGrid = ({products, setSort, setProductName}) => {
    const handleSortChanges = (e) =>{
        setSort(e.target.value)
    }
    const handleSearchChanges = (e) =>{
        setProductName(e.target.value)
    }
    return (
        <div className=' md:col-span-2 lg:col-span-3'>
            {/* sorting */}
            <div className='flex gap-5'>
                <div className="flex flex-col gap-2">
                    <label className='font-semibold' htmlFor="selct">Sort By :</label>
                    <select 
                        className="select select-bordered w-44 "
                        onChange={(e)=>handleSortChanges(e)}>
                        
                        <option value="title:asc">Default</option>
                        <option value="price:asc">Lowest price first</option>
                        <option value="price:desc">Highest price first</option>
                    </select>
                </div>
                
                <div className='flex flex-col gap-2'>
                    <label className='font-semibold' htmlFor="search">Search :</label>
                    <input onChange={(e)=>handleSearchChanges(e)} type="text" className='input input-bordered w-full max-w-xs' placeholder='Search by name...' />
                </div>
            </div>
            {/* products */}

            <div 
            className="flex justify-start flex-wrap ">
                {products?.map( (product) => ( 
                    <div className='px-0 py-4'>
                        <Card 
                        key={product?.id}
                        id={product?.id}
                        title={product?.attributes.title}
                        subtitle={product?.attributes.subtitle}
                        price={product?.attributes.price}
                        description={product?.attributes.description}
                        imgSrc={process.env.REACT_APP_UPLOAD_URL + product?.attributes.images.data[0].attributes.url}
                        /> 
                    </div>
                ))}

            </div>
        </div>
    )   
}

export default ProductsGrid