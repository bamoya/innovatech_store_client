import React from 'react'
import ShopContainer from '../../components/shop/ShopContainer'
import { useFetch } from '../../hooks/useFetch'

const Shop = () => {  
  const {data: products, loading} = useFetch('/products?populate=*')

  return (
    <div className='mx-auto px-5 my-20'>
        <ShopContainer products={products} />
    </div>
  )
}
export default Shop