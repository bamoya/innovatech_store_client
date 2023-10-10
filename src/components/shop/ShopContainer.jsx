import React, { useState } from 'react'
import Filter from './Filter'
import {categories, products, sortBy} from '../../constants/data'
import { useFetch } from '../../hooks/useFetch'
import ProductsGrid from './ProductsGrid'
import qs from 'qs'




const ShopContainer = () => {

  const filterQuery = (categories , brands, range,sort, productName) => {
    
  return qs.stringify(
    {
      populate: "*"
    ,
      filters: {
        category: {
          id: {
            $in: categories
          }
        },
        brand: {
          id: {
            $in: brands
          }
        },
        price: {
          $between: range
        },
        title: {
          $containsi: productName
        },
      },
      sort : [sort],
    },
    
    )
  }

  

  
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(10000);
  const [sort, setSort] = useState("title:asc");
  const [productName, setProductName] = useState(null);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  
  const { data: products } = useFetch(
    `/products?`+ filterQuery(selectedCategories, selectedBrands, [minPrice, maxPrice], sort, productName )
  );
  
  return (
    <div className='grid lg:grid-cols-4 gap-6 pt-4 pb-16 items-start'>
        {/* filter */}
        <Filter 
        className='col-span-1'
        selectedCategories={selectedCategories}
        setSelectedCategories={setSelectedCategories}
        selectedBrands={selectedBrands}
        setSelectedBrands={setSelectedBrands}
        setMinPrice={setMinPrice}
        minPrice={minPrice}
        setMaxPrice={setMaxPrice}
        maxPrice={maxPrice}
        
        />

        <ProductsGrid 
        products={products}
        setSort={setSort}
        setProductName={setProductName}
        />

    </div>
  )
}

export default ShopContainer