import React, { useState } from 'react'
import { useFetch } from '../../hooks/useFetch'


const Filter = ({
                selectedCategories, 
                setSelectedCategories,
                selectedBrands,
                setSelectedBrands,
                maxPrice,setMaxPrice, 
                setMinPrice, 
                minPrice,
            }) => {


    const {data: categories} = useFetch("/categories");
    const {data: brands} = useFetch("/brands");

    const handleChangeCategory = (e) => {
        const value = e.target.value;
        const isChecked = e.target.checked;

        setSelectedCategories(
        isChecked
            ? [...selectedCategories, value]
            : selectedCategories.filter((item) => item !== value)
        );
    };

    const handleChangeBrand = (e) => {
        const value = e.target.value;
        const isChecked = e.target.checked;

        setSelectedBrands(
        isChecked
            ? [...selectedBrands, value]
            : selectedBrands.filter((item) => item !== value)
        );
    };

    function handleMinPriceChanges(e) {
        setMinPrice(e.target.value);
    }
    function handleMaxPriceChanges(e) {
        setMaxPrice(e.target.value);
    }
    
    return (
    <div className='bg-white px-4 pb-6 shadow rounded overflow-hidden '>
        
        <div className=' lg:divide-y divide-gray-200 grid grid-cols-2 gap-x-10 lg:gap-x-0 lg:grid-cols-1 lg:gap-y-5'>
        
            {/* categories filter */}
            <div className='pt-4'>
                
                <h3 className='text-xl text-gray-800 mb-3 uppercase font-medium'>Categories</h3>
                {/* category item */}
                {categories?.map((category) => (
                    <div className='flex items-center '>
                        <input 
                        id={`cat-${category.id}`} 
                        type="checkbox" 
                        className='rounded focus:ring-0 hover:cursor-pointer'
                        value={category.id}
                        onChange={ (e)=> handleChangeCategory(e)}
                        />
                        <label for={`cat-${category.id}`} className='text-gray-600 capitalize ml-3 cursor-pointer'>{category.attributes.title}</label>
                        
                    </div>
                ))}
                
                
            </div>
            <div className='pt-4'>
                
                <h3 className='text-xl text-gray-800 mb-3 uppercase font-medium'>Brands</h3>
                {/* Brand item */}
                {brands?.map((brand) => (
                    <div className='flex items-center '>
                        <input 
                        id={`brand-${brand.id}`} 
                        type="checkbox" 
                        className='rounded focus:ring-0'
                        value={brand.id}
                        onChange={ (e)=> handleChangeBrand(e)}
                        />
                        <label for={`brand-${brand.id}`} className='text-gray-600 ml-3 capitalize cursor-pointer'>{brand.attributes.title}</label>
                        
                    </div>
                ))}
                
                
            </div>

            <div className='pt-4'>
                <h3 className='text-xl text-gray-800 mb-3 uppercase font-medium'>Price</h3>
                {/*  price */}
                
                <div className='flex gap-5' >
                    <input onChange={handleMinPriceChanges} type="number" min={0} placeholder="min" value={minPrice} className="input input-bordered w-full max-w-xs" />
                    
                    <input onChange={handleMaxPriceChanges} type="number" placeholder="max" value={maxPrice} className="input input-bordered w-full max-w-xs" />
                </div>
            </div>

        </div>
        
        
    </div>
)
}

export default Filter